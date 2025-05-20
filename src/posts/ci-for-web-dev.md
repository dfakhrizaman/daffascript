# Building Confidence in Code: CI for Frontend Developers with TDD

Modern frontend development has evolved beyond just HTML, CSS, and JavaScript. With frameworks like React, Vue, and Svelte dominating the landscape, codebases have become more complex—and so has the need to ship reliable, maintainable code quickly. That's where Continuous Integration (CI) and Test-Driven Development (TDD) come into play.

## What is Continuous Integration?

Continuous Integration is the practice of merging code changes into a shared repository several times a day, with every push triggering an automated build and test process. For frontend developers, this means:

- Detecting broken code before it reaches production
- Automatically running tests (unit, integration, E2E)
- Enforcing code quality standards (linters, formatters)
- Building optimized production-ready assets

## Why TDD in the Frontend?

Test-Driven Development (TDD) flips the traditional testing flow: write the tests before the implementation. This forces you to think about what the component or function is supposed to do before you build it.

Benefits for frontend developers include:

- Better component design and separation of concerns
- Less fear when refactoring
- Fewer regressions in interactive UI features
- Confidence that new code won’t break existing features

## CI Pipeline for a Frontend App: A TDD-Driven Workflow

Let’s walk through a practical example using a React app, but the principles apply to any frontend stack.

### Step 1: Initialize Your Project

```bash
npx create-react-app tdd-ci-demo
cd tdd-ci-demo
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

Set up your test environment in package.json or jest.config.js.

### Step 2: Write a Test First (TDD in Action)

```jsx
// src/components/Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('increments the counter when button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText(/count: 0/i);
  fireEvent.click(button);
  expect(**screen**.getByText(/count: 1/i)).toBeInTheDocument();
});
```

Then implement just enough code to pass the test.

### Step 3: Automate Tests in CI

Create a `.github/workflows/ci.yml` if you're using GitHub Actions:

```yaml
name: Frontend CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm test -- --watchAll=false
```

This CI workflow will:

- Checkout your code
- Set up Node.js
- Install dependencies
- Run your tests

If any test fails, the build fails.

### Step 4: Add Linting & Formatting

Extend your CI workflow:

```yaml
- run: npm run lint
- run: npm run format:check
```

You can define those scripts in `package.json`:

```json
"scripts": {
  "lint": "eslint src/**/*.js",
  "format:check": "prettier --check src/"
}
```

### Step 5: Deploy Only on Green Builds

Integrate deployment (e.g., to Vercel, Netlify, or Firebase) after all tests pass. This ensures only well-tested code gets shipped.

## Best Practices

- Keep tests fast and focused: Don’t test everything—just what matters.
- Mock external dependencies: APIs, libraries, etc., should be mocked in unit tests.
- Run tests locally before pushing: Save your CI from unnecessary failures.
- Use code coverage tools: Ensure critical paths are tested.

## Wrapping Up

CI and TDD are not just for backend engineers. As frontend developers, embracing these practices leads to more reliable UIs, faster feedback loops, and ultimately happier users. With a solid CI pipeline and TDD mindset, you can code with confidence, knowing your changes are always tested, verified, and production-ready.
