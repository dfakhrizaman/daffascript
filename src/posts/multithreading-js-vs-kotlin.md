# Kotlin Multithreading vs JavaScript Web Workers: A Practical Comparison

Multithreading and concurrency are fundamental to writing responsive and performant applications. But how you approach these tasks differs greatly depending on the environment and language you’re working with. This post compares **Kotlin’s multithreading on the JVM** with **JavaScript’s Web Workers in the browser** to help you understand their trade-offs and how to use them effectively.

## Kotlin and Threads

Kotlin runs on the JVM and inherits the **Java threading model**, giving it access to low-level multithreading primitives such as:

- `Thread`
- `Runnable`
- `ExecutorService`
- `synchronized`, `volatile`, etc.

With Kotlin, you can write something like this:

```kotlin
fun main() {
    val thread = Thread {
        println("Running in thread: ${Thread.currentThread().name}")
    }
    thread.start()
    thread.join()
    println("Back in main thread.")
}
```

However, most modern Kotlin developers use **Kotlin Coroutines**, which are a higher-level abstraction for concurrency and structured concurrency:

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        println("Running in coroutine on ${Thread.currentThread().name}")
    }
    println("Back in main runBlocking.")
}
```

**Pros of Kotlin Multithreading (JVM)**:
- True multithreading with shared memory.
- Coroutines allow writing asynchronous code sequentially.
- Runs on many-core systems with thread pooling via `Dispatchers`.

**Cons**:
- Thread safety is your responsibility.
- Shared mutable state needs synchronization (e.g. `Mutex`, `AtomicInteger`).
- Blocking operations can degrade performance if not handled properly.

## JavaScript Web Workers

JavaScript, being single-threaded in the browser, uses **Web Workers** to achieve concurrency by **spawning background threads**.

```js
// worker.js
onmessage = function(e) {
  const result = heavyComputation(e.data);
  postMessage(result);
}
```

```js
// main.js
const worker = new Worker("worker.js");
worker.postMessage(inputData);
worker.onmessage = function(e) {
  console.log("Got result:", e.data);
};
```

Each worker runs in its **own isolated thread**, meaning:

- No shared memory
- Only communication through `postMessage()`, which uses structured cloning (deep copy)

**Pros of Web Workers**:
- No shared memory means no race conditions.
- Dead-simple model: background thread with message passing.
- Great for long computations that would otherwise block the UI thread.

**Cons**:
- Overhead of message passing.
- Can’t directly access the DOM.
- No shared context (unless you use SharedArrayBuffer, which has strict requirements).

## Side-by-Side Comparison

| Feature                | Kotlin (JVM)                  | JavaScript Web Workers            |
|------------------------|-------------------------------|------------------------------------|
| True multithreading    | ✅ Yes                         | 🚫 No (isolated thread model)     |
| Shared memory          | ✅ Yes                         | 🚫 No (copy via postMessage)      |
| Communication method   | Shared state, channels        | Message passing via `postMessage` |
| UI access              | ✅ Yes (if on main thread)     | 🚫 No access to DOM               |
| Error propagation      | Exception handling + Coroutine cancellation | Try-catch + `onerror` handler     |
| Use case example       | Server-side processing, Android apps | Browser-based background tasks    |

---

## 🤔 When to Use Which?

- **Kotlin**: Ideal for Android or backend applications where you need fine-grained control over concurrency, and performance matters.
- **JavaScript Web Workers**: Great for offloading CPU-intensive tasks (e.g., image processing, data crunching) in browser apps without freezing the UI.

## 🧪 Final Thoughts

While both Kotlin and JavaScript provide ways to do work off the main thread, they do so with very different philosophies. Kotlin gives you the tools for **structured concurrency and thread control**, while JavaScript provides a **sandboxed, message-passing approach** for safety and simplicity.

Understanding the capabilities and limitations of each helps you write more efficient, responsive, and safe concurrent applications—no matter which platform you're on.

<!-- ---

**Author:**  
*Daffa Fakhrizaman*  
*Software Engineer | Kotlin & JavaScript Enthusiast* -->
