[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Running the project

Install node v14 with [nvm](https://github.com/nvm-sh/nvm);

Install ruby v2.7.5 and bundler v1.17.2 with [rvm](https://rvm.io/rvm/install);

To start the project, please open terminal, `cd` to the project root and execute:

    npm run gems:install && npm run deps:install && npm run generate:types

## TODO:
- [ ] Improve test coverage, refactor existed code
- [ ] Wishlist logic
- [ ] Setup Firebase services (analytics, crashlytics, deep linking, push notifications etc.)
- [ ] Login (with email + apple, google, facebook etc.)
- [ ] No Internet Connection component
- [ ] UI theme
- [ ] Replace spinner with loading skeletons
- [ ] Search on different screens; sorting; filters
- [ ] Localization
- [ ] Setup e2e tests (Detox)
- [ ] CI / CD (github actions)
- [ ] Empty screen placeholders
- [ ] Forgot password screen
- [ ] Shipping / billing address screen
- [ ] Checkout screen
- [ ] Setup Fastlane
- [ ] Share product item logic


 ![Preview](/preview/preview.mov?raw=true)

## File structure:
This project has a next file structure:
```
└───android                   #Native android code
└───ios                       #Native ios code
└───scripts                   #sh scripts
└───src                       #Source code
│    └───api                    #Services for working with api
│    └───components             #Reusable components
│    └───constants              #General constants
│    └───hooks                  #Custom hooks
│    └───navigators             #App navigation files
│    └───screens                #All screens of app. Each screen folder may include screen-specific components
│    └───store                  #Redux files
│    └───utils                  #Reuseable utils
└───App.tsx                   #Main app component
└───package.json
└───package-lock.json
└───tsconfig.json             #TypeScript configuration file
└───commitlint.config.js      #Commit linter configuration file (https://github.com/conventional-changelog/commitlint)
└───branch-name-lint.json     #Branch name linter (https://github.com/barzik/branch-name-lint)
```

## Component structure:
```
MyComponent.tsx
myComponent.types.ts
myComponent.styles.ts
myComponent.settings.ts
myComponent.testID.ts
myComponent.utils.ts
```

To create a new component or screen run next command in the terminal

    npm run generate:component
