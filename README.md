# FinCore QA

### Financial Application Quality Engineering with Playwright and TypeScript

FinCore QA is an independent software test automation project focused on validating financial application workflows through modern quality engineering practices.

The project aims to develop a maintainable automation framework using Playwright and TypeScript, with an emphasis on UI testing, API testing, financial workflow validation, test data management, and CI/CD integration.

**Application Under Test:** Mifos (planned integration)

---

## Project Objectives

- Build a maintainable Playwright automation framework.
- Automate critical financial application workflows.
- Validate UI behaviour and API responses.
- Test positive, negative, and boundary scenarios.
- Verify financial data integrity.
- Implement reusable test components and fixtures.
- Integrate automated tests into CI/CD pipelines.
- Generate meaningful test reports and debugging evidence.

## Technology Stack

| Technology | Purpose |
|---|---|
| TypeScript | Primary programming language |
| Playwright Test | Browser automation and test runner |
| Node.js | JavaScript runtime |
| npm | Dependency management |
| Git | Version control |
| GitHub | Source code hosting |
| GitHub Actions | CI/CD automation (planned) |

## Project Structure

```text
FinCore-QA/
├── .github/
│   └── workflows/
├── test/
│   └── example.spec.ts
├── test-results/
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── tsconfig.json
```

The framework will evolve as additional testing capabilities are implemented.

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/jayesh0406/FinCore-QA.git
```

Navigate into the project:

```bash
cd FinCore-QA
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers if they are not already installed:

```bash
npx playwright install
```

### Running Tests

Run all tests:

```bash
npm test
```

Run tests with a visible browser:

```bash
npm run test:headed
```

Open Playwright UI mode:

```bash
npm run test:ui
```

View the HTML report:

```bash
npm run report
```

## Planned Testing Scope

### UI Automation
- Authentication and access control
- Client management
- Savings account workflows
- Loan management
- Transaction workflows

### API Testing
- API response validation
- Status code verification
- Request and response validation
- Negative and boundary testing

### Financial Workflow Validation
- Transaction correctness
- Repayment validation
- Duplicate transaction prevention
- Financial data consistency

### Quality Engineering
- Test data management
- Reusable fixtures
- Page Object Model
- CI/CD integration
- Reporting and debugging

## Engineering Principles

- Maintainability over unnecessary complexity.
- Reusability without overengineering.
- Reliable assertions and meaningful test coverage.
- Clear separation of test logic and application interactions.
- Controlled test data and safe testing practices.
- Documented technical decisions and trade-offs.

## Current Project Status

**Phase 1 — Framework Foundation**

- [x] Initial Playwright project setup
- [x] TypeScript configuration
- [x] Example test execution
- [x] Git version control
- [x] GitHub repository setup
- [ ] Project-specific test architecture
- [ ] Mifos application integration

This repository is under active development.

## Repository

GitHub: https://github.com/jayesh0406/FinCore-QA

## Disclaimer

This is an independent educational and portfolio project. Mifos is intended to serve as the application under test. This project is not an official Mifos product or an endorsement by the Mifos Initiative.
