# crypto-dice-zk-verifier

A simple and transparent verification tool for Crypto Dice games using Zero-Knowledge-like commitment.  
This utility allows any user to verify the fairness of dice game results based on pre-committed hashes using the combination of a timestamp, salt, and the actual dice result.

---

## 🔍 Overview

To ensure fairness and prevent tampering in blockchain-based dice games, the platform commits to a hashed value before the game round begins.  
This hash is generated using:

hash = SHA-256(timestamp + "|" + salt + "|" + diceResult)

At the end of the round, the game platform reveals:
- The original `timestamp` (when the game started)
- A `salt` (randomly generated secret string)
- The `diceResult` (e.g. `"3,5,1"`)

Using this tool, players can verify whether the revealed data matches the initial hash. This ensures that the result was predetermined and not altered afterward.

---

## 📦 Features

- Lightweight and easy to use
- SHA-256 hash-based commitment scheme
- No blockchain dependency
- Works with any 3-dice-based random result
- Fully open-source and auditable

---

## 🚀 Installation

### Option 1: Use via Node.js (recommended)

1. Clone this repository:

```bash
git clone https://github.com/your-org/crypto-dice-zk-verifier.git
cd crypto-dice-zk-verifier
