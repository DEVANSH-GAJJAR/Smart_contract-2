# 📦 Smart Contract 2 — SimpleStorage

![Solidity](https://img.shields.io/badge/Solidity-0.8.20-363636?logo=solidity)
![Hardhat](https://img.shields.io/badge/Built%20with-Hardhat-yellow?logo=ethereum)
![License](https://img.shields.io/badge/License-MIT-green)
![CI](https://github.com/DEVANSH-GAJJAR/Smart_contract-2/actions/workflows/scheduled-test.yml/badge.svg)

A minimal, production-ready **Solidity smart contract** built on Hardhat with automated weekly CI/CD via GitHub Actions. The contract stores and retrieves a `uint256` value with owner-restricted write access.

---

## 📁 Project Structure

```
Smart_contract-2/
│
├── .github/
│   └── workflows/
│       └── scheduled-test.yml   # GitHub Actions CI (weekly + on push)
│
├── contracts/
│   └── SimpleStorage.sol        # Main Solidity contract
│
├── test/
│   └── SimpleStorage.test.js    # Hardhat + Chai test suite (5 tests)
│
├── hardhat.config.js            # Hardhat configuration
├── package.json                 # npm scripts and dependencies
└── README.md                    # You are here
```

---

## 🔐 Contract Overview — `SimpleStorage.sol`

| Item | Detail |
|---|---|
| Solidity Version | `^0.8.20` |
| License | MIT |
| Network | Any EVM-compatible chain |

### Functions

| Function | Visibility | Description |
|---|---|---|
| `constructor(uint256)` | — | Deploys contract and sets the initial stored value |
| `set(uint256 _value)` | `external` | Updates the stored value — **owner only** |
| `get()` | `external view` | Returns the current stored value |
| `owner()` | `public view` | Returns the owner's wallet address |

### Events

| Event | Emitted When |
|---|---|
| `ValueChanged(address, uint256)` | `set()` is called successfully |

### Access Control

Write access is restricted to the **contract deployer** via the `onlyOwner` modifier. Any other address calling `set()` will get a revert with `"Not the owner"`.

---

## ⚙️ GitHub Actions — Scheduled CI

The workflow file at `.github/workflows/scheduled-test.yml` runs automatically on three triggers:

| Trigger | Schedule |
|---|---|
| ⏰ Scheduled | Every **Monday at 06:00 UTC** |
| 🔀 Push | Every push to `main` branch |
| 🔁 Pull Request | Every PR targeting `main` |
| 🖱️ Manual | Via **Actions → Run workflow** in GitHub UI |

### What the workflow does

```
Install deps  →  Compile contracts  →  Run tests  →  Coverage report  →  Upload artifact
```

Coverage reports are uploaded as a downloadable artifact and kept for **14 days** in the Actions tab.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v8 or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/DEVANSH-GAJJAR/Smart_contract-2.git
cd Smart_contract-2

# Install dependencies
npm install
```

### Available Scripts

```bash
# Compile the Solidity contract
npm run compile

# Run all tests
npm test

# Generate code coverage report
npm run coverage

# Clean build artifacts
npm run clean
```

---

## 🧪 Test Suite

All tests are in `test/SimpleStorage.test.js` using **Hardhat + Chai**.

| # | Test | Expected Result |
|---|---|---|
| 1 | Deploy with initial value | `get()` returns `42` |
| 2 | Owner sets a new value | `get()` returns new value |
| 3 | `ValueChanged` event emitted | Event fires with correct args |
| 4 | Non-owner calls `set()` | Transaction reverts |
| 5 | `owner()` returns deployer | Correct address returned |

Run tests:

```bash
npm test
```

Expected output:

```
SimpleStorage
  ✔ Should deploy with the correct initial value
  ✔ Should store a new value when called by owner
  ✔ Should emit ValueChanged event on set
  ✔ Should revert when non-owner calls set
  ✔ Should expose the correct owner address

5 passing
```

---

## 🛠️ Tech Stack

| Tool | Purpose |
|---|---|
| [Solidity](https://soliditylang.org/) | Smart contract language |
| [Hardhat](https://hardhat.org/) | Ethereum development framework |
| [Chai](https://www.chaijs.com/) | Assertion library for tests |
| [Ethers.js](https://ethers.org/) | Ethereum interaction library |
| [GitHub Actions](https://github.com/features/actions) | CI/CD automation |


---

## 👤 Author

**Devansh Gajjar**
- GitHub: [@DEVANSH-GAJJAR](https://github.com/DEVANSH-GAJJAR)
