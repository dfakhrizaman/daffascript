# Setting Up Pre-Commit Hooks in Android Studio for a Cleaner Codebase

Android Studio is a powerful IDE, but it doesn't enforce code style or checks before commits by default. This is where **Git pre-commit hooks** come in. With a pre-commit hook, you can automate tasks like code formatting, lint checks, or running unit tests — helping your team avoid messy commits.

In this guide, you’ll learn how to set up a pre-commit hook in an Android Studio project that runs **code formatting** and **Lint** checks before each commit.

---

## Step 1: Create a `.git/hooks/pre-commit` Script

Git hooks are shell scripts stored inside the `.git/hooks/` directory of your project.

1. Open your terminal and navigate to your Android project directory.
2. Create a `pre-commit` file:

```bash
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

3. Open it in your editor and add the following:

```bash
#!/bin/bash
echo "Running pre-commit checks..."

# Format code using Gradle
./gradlew spotlessApply

# Run Lint
./gradlew lintDebug

# Optional: Run unit tests
# ./gradlew testDebugUnitTest

# Check for errors
if [ $? -ne 0 ]; then
  echo "Pre-commit hook failed. Fix the issues and try again."
  exit 1
fi

echo "Pre-commit checks passed!"
exit 0
```

> Replace `spotlessApply` with `ktlintFormat` or your preferred formatter if you’re not using Spotless.

---

## Step 2: Set Up a Formatter (e.g. Spotless or ktlint)

If you’re not using a formatter yet, install [Spotless](https://github.com/diffplug/spotless) or [ktlint](https://github.com/pinterest/ktlint).

### Using Spotless with Kotlin

Add to your `build.gradle` (project-level):

```groovy
plugins {
    id 'com.diffplug.spotless' version '6.25.0'
}
```

And in your `build.gradle` (app/module level):

```groovy
spotless {
    kotlin {
        target '**/*.kt'
        ktlint("0.50.0").userData(['indent_size': '4', 'continuation_indent_size': '4'])
    }
}
```

Then run:

```bash
./gradlew spotlessApply
```

---

## Step 3: Prevent Committing Broken Code

Try committing without fixing your code. If formatting or lint fails, Git will reject the commit:

```bash
git commit -m "Your message"
# > Pre-commit hook failed. Fix the issues and try again.
```

Once fixed:

```bash
git add .
git commit -m "Clean code!"
# > Pre-commit checks passed!
```

---

## Benefits of Using Pre-Commit Hooks

- Enforces formatting and linting
- Prevents bad code from reaching the repository
- Saves time during code reviews
- Encourages clean and consistent code

---

Pre-commit hooks are a simple yet powerful way to keep your Android codebase healthy. Combine it with proper CI/CD and you’re on your way to bulletproof development.

Want to automate even more? Try pre-push hooks for running tests or integrating with your CI pipeline.g
