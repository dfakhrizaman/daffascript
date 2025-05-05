# Test-Driven Development on Game of Life: Detroit vs London Schools in Action

## Why are We Here?

You’ve probably heard of Test-Driven Development (TDD). Write tests first, code later, profit. But did you know there are two very different ways people do TDD? Enter the heavyweight match: Detroit School vs London School.

In this post, we’re putting both of them to the test using the legendary coding sandbox: Conway’s Game of Life. Buckle up.

## What even is [Game of Life](https://playgameoflife.com/)?

**Conway's Game of Life** is a zero-player simulation game. It’s not a game you play, but a system you set up and watch unfold. Cells live or die based on a few rules:

- Live cell with 2 or 3 neighbors → lives on.

- Dead cell with exactly 3 neighbors → becomes alive.

- Everything else → dead as punk.

This simplicity makes it perfect for showing off different TDD styles.

##  TDD Styles 101: Detroit vs London

The way we write tests mostly comes down to how we approach a problem. In the TDD world there are 2 main school of toughts, each with their own takes, advantages, and trade-offs.

### Detroit School (a.k.a. Classic TDD)

- Focus: What does the code do?
- Write a test, make it pass, refactor, repeat.
- Think small steps, building up functionality piece by piece.

### London School (a.k.a. Mockist TDD)

- Focus: How do objects talk to each other?
- You design the system around collaborating interfaces.
- Lots of mocks, lots of dependency injections, lots of upfront thinking.

## Setting Up the Playground

We’re coding in Java with JUnit, just to keep things clean and familiar. Here's the directory structure:

```
com.company.gameoflife
├── model
│   └── Cell.java
├── service
│   └── GameOfLife.java
└── test
    ├── GameOfLifeDetroitTest.java
    └── GameOfLifeLondonTest.java
```

## Building It Detroit-Style

Let’s get our hands dirty and evolve the code alongside the tests.

### Step 1: Write a Simple Test

```java
@Test
void givenLiveCellWithTwoNeighbors_whenNextGen_thenSurvives() {
    Set<Cell> currentGen = Set.of(
        new Cell(0, 0, true),
        new Cell(0, 1, true),
        new Cell(1, 0, true)
    );

    GameOfLife gol = new GameOfLife();
    Set<Cell> nextGen = gol.nextGeneration(currentGen);

    assertTrue(nextGen.stream().anyMatch(c -> c.getX() == 0 && c.getY() == 0 && c.isAlive()));
}
```

### Step 2: Create the Cell Class
```java
public class Cell {
    private final int x, y;
    private final boolean alive;

    public Cell(int x, int y, boolean alive) {
        this.x = x;
        this.y = y;
        this.alive = alive;
    }

    public boolean isAlive() { return alive; }
    public int getX() { return x; }
    public int getY() { return y; }
}
```

### Step 3: Dumb Implementation That Just Passes

```java
public Set<Cell> nextGeneration(Set<Cell> currentGen) {
    return currentGen; // YOLO, just to make the test pass (for now)
}
```

And from here, we evolve the logic based on new tests. Pure, clean, and driven by behavior.

### Detroit Pros:
- Easy to follow.
- Clean, readable tests.
- Great when behavior is king.
### Detroit Cons:
- Sometimes you end up with messy or rigid designs.
- Can be slow to scale.

## Mock It Like It’s Hot: London Style

Here’s where things get spicy. Instead of jumping into implementation, we build our world with mocks and interfaces first.

### Step 1: Start with an Interface

```java
public interface CellCalculator {
    boolean shouldLive(Cell cell, Set<Cell> neighbors);
}
```

### Step 2: Write Test Using Mocks

```java
@Test
void givenLiveCellWithThreeNeighbors_whenCalculatorSaysLive_thenCellLives() {
    CellCalculator calculator = mock(CellCalculator.class);
    Cell cell = new Cell(0, 0, true);

    when(calculator.shouldLive(eq(cell), anySet())).thenReturn(true);

    GameOfLife gol = new GameOfLife(calculator);
    Set<Cell> nextGen = gol.nextGeneration(Set.of(cell));

    assertTrue(nextGen.contains(cell));
    verify(calculator).shouldLive(eq(cell), anySet());
}
```

### Make it Work with Collaboration

```java
public class GameOfLife {
    private final CellCalculator calculator;

    public GameOfLife(CellCalculator calculator) {
        this.calculator = calculator;
    }

    public Set<Cell> nextGeneration(Set<Cell> currentGen) {
        Set<Cell> next = new HashSet<>();
        for (Cell cell : currentGen) {
            Set<Cell> neighbors = findNeighbors(cell, currentGen);
            if (calculator.shouldLive(cell, neighbors)) {
                next.add(cell);
            }
        }
        return next;
    }

    private Set<Cell> findNeighbors(Cell cell, Set<Cell> all) {
        // Just stubbed for now
        return Set.of();
    }
}
```

### London Pros:
- Encourages modular, flexible design.
- Great when your app is full of interacting services.

### London Cons:
- Can be overkill for small projects.
- Tests may know too much about implementation.

## Side by Side Comparison

| Category               | Detroit Style       | London Style         |
|------------------------|---------------------|----------------------|
| What you test          | State & outputs     | Collaborations       |
| Mocking                | Almost never        | All the time         |
| Design approach        | Emergent            | Interface-first      |
| Setup effort           | Low                 | Medium to high       |
| Code modularity        | Maybe               | Definitely           |

## When to Use What?

Use **Detroit** if:
- You’re building an algorithm or simple logic.
- You want to keep things tight and clean.

Use **London** if:
- You’ve got services talking to services.
- You need flexibility and swappable components.

A little tip? Mix and match. Use Detroit for your core logic and London for your glue code. Or don't! Keep in mind that TDD and its various styles are supposed to be tools to document your codes and how you code them. As with a lot of things in Software Engineering, we have to know why we do those things in the first place.

## Wrap-Up

TDD is more than just writing tests first, it’s about designing with intent. Detroit gives you confidence in behavior, while London gives you confidence in structure. Using both in the Game of Life gave us a taste of their strengths and limitations.

Now go forth and test. But make sure you know which hat you’re wearing.

## References for you nerds

Clean Code - Robert C. Martin

[Detroit vs London schools of unit testing](https://www.thesunshinelayer.com/p/detroit-vs-london-schools-of-unit)

[Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
