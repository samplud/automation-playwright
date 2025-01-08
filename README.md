# 🎭 Playwright

[![npm version](https://img.shields.io/npm/v/playwright.svg?style=flat)](https://www.npmjs.com/package/playwright) <!-- GEN:chromium-version-badge -->[![Chromium version](https://img.shields.io/badge/chromium-99.0.4812.0-blue.svg?logo=google-chrome)](https://www.chromium.org/Home)<!-- GEN:stop --> <!-- GEN:firefox-version-badge -->[![Firefox version](https://img.shields.io/badge/firefox-96.0.1-blue.svg?logo=mozilla-firefox)](https://www.mozilla.org/en-US/firefox/new/)<!-- GEN:stop --> <!-- GEN:webkit-version-badge -->[![WebKit version](https://img.shields.io/badge/webkit-15.4-blue.svg?logo=safari)](https://webkit.org/)<!-- GEN:stop -->

## [Documentation](https://playwright.dev) | [API reference](https://playwright.dev/docs/api/class-playwright/)

Playwright is a framework for Web Testing and Automation. It allows testing [Chromium](https://www.chromium.org/Home), [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [WebKit](https://webkit.org/) with a single API. Playwright is built to enable cross-browser web automation that is **ever-green**, **capable**, **reliable** and **fast**.

|          | Linux | macOS | Windows |
|   :---   | :---: | :---: | :---:   |
| Chromium <!-- GEN:chromium-version -->99.0.4812.0<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| WebKit <!-- GEN:webkit-version -->15.4<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |
| Firefox <!-- GEN:firefox-version -->96.0.1<!-- GEN:stop --> | :white_check_mark: | :white_check_mark: | :white_check_mark: |

Headless execution is supported for all the browsers on all platforms. Check out [system requirements](https://playwright.dev/docs/intro/#system-requirements) for details.

### Prerequisites:

- Install Node.js and npm

### How to Getting Started:
```sh
$ npm install
```

## Run the test

You can specify the command that you want to run from package.json file.

###### Here are our default commands:

```sh
$ npm run demo-ui                                | to run all tests with launch browser
$ npm run demo -- -e TAGS='@tagNameScenario'     | to run test with specific tag / specific repo
$ npm run demo                                   | to run all tests headless
```

# Thank you
