---
name: "yarn"
date: "2020-10-17"
---

# Yarn

## About

`yarn` is a fast, reliable and secure package manager.

- **Fast**: caches every package it has downloaded, so it never needs to download the same package again. It also does almost everything concurrently to maximize resource utilization. This means even faster installs.
- **Reliable**: Using a detailed but concise lockfile format and a deterministic algorithm for install operations, Yarn is able to guarantee that any installation that works on one system will work exactly the same on another system.
- **Secure**: uses checksums to verify the integrity of every installed package before its code is executed.

### Repository

- [Github](https://github.com/yarnpkg/yarn)

## Semantic Versioning

Versions are generally broken down into a `major.minor.patch` format:

- `major`: **breaking** or **incompatible** change to the API or package.
- `minor`: **new functionality** while staying **backwards-compatible**.
- `patch`: **bug fixes** while staying **backwards-compatible**.

### Advanced version ranges

#### Tilde Ranges

Using `~` with a minor version specified allows `patch` changes. Using `~` with only major version specified will allow `minor` changes.

| **Version range** | **Expanded version range** |
| ----------------- | -------------------------- |
| `~3.1.4`          | `>=3.1.4 <3.2.0`           |
| `~3.1`            | `3.1.x or >=3.1.0 <3.2.0`  |
| `~3`              | `3.x or >=3.0.0 <4.0.0`    |

#### Caret Ranges

Allow changes that do not modify the first non-zero digit in the version, either the `3` in `3.1.4` or the `4` in `0.4.2`.

| **Version range** | **Expanded version range** |
| ----------------- | -------------------------- |
| `^3.1.4`          | `>=3.1.4 <4.0.0`           |
| `^0.4.2`          | `>=0.4.2 <0.5.0`           |
| `^0.0.2`          | `>=0.0.2 <0.0.3`           |

## Cheatsheet

```bash
yarn init                         # starts a new project
yarn add [package]                # add dependency
yarn add [package] --dev          # add to `devDependencies`
yarn upgrade [package]@[version]  # upgrades a dependency
yarn remove [package]             # removing a dependency
yarn install                      # installing all dependencies
```
