# CYPRESS API AUTOMATION TEST

> Automation project using cypress

---

## Installation

> After the clone this repository, follow the steps:

- Install all dependencies (package.json)
`npm install`

### Run tests

> run test headless mode

```
$ npx cypress run
```
#### Run test headless mode in a specific environment

#### DEV:
```
$ npx cypress run -e configFile=dev
```

#### QA:
> "QA is default environment"

```
$ npx cypress run
```

### Run test grep tags.

```
$ npx cypress run -e grepTags='yourTag' 
```
> Example: 
```
$ npx cypress run -e grepTags=registration,configFile=dev
```

### Run test interface mode and display cypress playground.

```
$ npx cypress open
```

or 

```
$ npx cypress open -e configFile=dev
```

---

## Development Pattern

> Page Objects