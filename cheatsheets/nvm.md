---
name: "nvm"
date: "2020-10-17"
---

# NVM

## About

`nvm` is a version manager for node.js, designed to be installed per-user, and invoked per-shell. nvm works on any POSIX-compliant shell (sh, dash, ksh, zsh, bash), in particular on these platforms: unix, macOS, and windows WSL.

### Repository

- [Github](https://github.com/nvm-sh/nvm)

## Cheatsheet

```
$ nvm ls-remote                 # lists all of the available versions of NodeJs & iojs
$ nvm ls                        # list locally installed version
$ nvm install node              # "node" is an alias for the latest version
$ nvm install 14.14.0           # install the version 14.14.0
$ nvm install --lts             # install the latest LTS release of NodeJs
$ nvm use 14.14.0               # switch to and use the installed 14.14.0 version
$ nvm which 14.14.0             # the path to the installed node version
$ nvm current                   # what is the current installed nvm version
$ nvm alias default 14.14.0     # set the default node to the installed 0.10.32 version
$ nvm --help                    # the help documents
```
