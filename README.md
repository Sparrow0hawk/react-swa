# Basic Azure static site using azure function with react

## Setup

You'll need Node 16 (recommend installing via [nvm](https://github.com/nvm-sh/nvm)) and python 3.7 installed.

## Setup venv

```bash
# setup venv
$ cd api

$ python -m venv venv

$ pip install -r requirements.txt
```

## Setup node environment

```bash
$ npm install -g azure-functions-core-tools@3 --unsafe-perm true
$ npm install -g @azure/static-web-apps-cli
```

Running locally

```bash
$ npm install

$ npm run build

$ swa start build/ --api-location api/
```
