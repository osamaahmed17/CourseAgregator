
A boilerplate for react frontend projects.

> Git Repo: https://github.com/deakin-launchpad/deakin-frontend-boilerplate.git

## Table of Contents

 - Getting started
 - Installation
 - Available scripts
 - Usage
 - Component
 - Support
 - Learn More

## Getting started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

## Installation

### Install Node

Before setting up, [Install](https://nodejs.org/en/download/) nodeJS or run below script on your terminal to check node version on your machine.

    node -v

### Clone repository

    git clone https://github.com/deakin-launchpad/deakin-frontend-boilerplate.git

and then change directory,

    cd ./deakin-frontend-boilerplate

## Available scripts

In the project directory, you can run:

### `npm install`

This will install all the packages listed in `package-lock.json`. Whenever you update your package files, make sure you run this command again. For more info about this command, run `npm install --help`.

### `npm start`

Runs the app in the development mode.  
Open  [http://localhost:3000](http://localhost:3000/)  to view it in the browser.

The page will reload when you make edits and save them.  
You will also be able to see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Usage

### Redux

[Redux](https://redux.js.org) is state management tool. We shall be using Redux to manage atleast the user login state across the application. 
**Note**- Due to redux's complexity, you don't need to understand redux in the initial stage.

### Axios

[Axios](https://github.com/axios/axios) is a promise based HTTP client for the browser and node.js.

### Types of login

There are 2 types of logins in boilerplate, both use redux and axios:

 1. **File -- App.js**: `accessTokenLogin()`
    Params: token stored in local storage reterived from app helper

    Returns: Response from server
        
2.  **File -- login.jsx**: `dispatchLogin()`
    Parmas: data{username, password}

    Returns: Response from server

## Files

Most of these files will not have to be touched/understood by you. Nevertheless, this quick guide will help out the curious souls.

### Configuration/miscellaneous files

#### .gitignore
Used to add files and folders which should not be tracked by the project's git repository. The file accepts regular expressions which might be tricky to understand.

#### .env(.development|production|staging|test)(.local)
Environment variable files can be used to set up variables for different environments like development, testing, production, etc. Files ending with a `.local` extension are supposed to be for individual use and are hence not committed in the git. Other files like `.env`, `.env.development`, etc help setup the application to be environment ready for different use-cases! 

**Note: NEVER store sensitive information like passwords, access-tokens, API keys, port numbers, etc in an environment file which doesn't end with `.local`.**

 #### jsconfig.json
 Used to help VSCode utilise intelliSense (auto-complete, suggestions, etc) for the project which gets suppressed due to setting `NODE_PATH=src` in `.env` file.

#### .editorconfig
EditorConfig is used to help developers define and maintain consistent coding styles between different editors and IDEs. 
 
 ### Helper files
 These are the files you will interact with quite frequently if you're working on the front-end. At the moment, we have 2 helper files:
 
 #### api.js
 All the API related calls go in this file, except the ones which are fired using redux actions, for instance, `accessTokenLogin()` and `dispatchLogin()`.

#### AppHelper.js
At this stage, this file only helps with storing data in browser's [local storage](https://www.w3schools.com/jsref/prop_win_localstorage.asp).
 
 ### index.js

This file is used as the entry point of the front-end application and is hence used to initialise the `App.js` as well as import, initialise and export necessary modules and variables.

### App.js

Our goal with the boilerplate is to standardise the design of the apps we create. Nevertheless, the design can change tremendously according to product/client requirements. The actual layout begins in the `App.js` file.

The standardised app structure is divided into 3 parts:
 - **Header**: This component shall have navigation, title and logout button.
 - **Main**: The main body of the application.
 - **Footer**: The footer shall contain details about website and links.

## SASS

The boilerplate contains [SASS](https://sass-lang.com/guide) package where colors and fonts pre-defined variables are defined to use.

## Learn More

You can learn more in the  [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the  [React documentation](https://reactjs.org/).

## End notes

Please [open an issue](https://github.com/deakin-launchpad/deakin-react-cloud/issues/new) or send a PR if you find something worth fixing. This document and the boilerplate shall be upgraded timely according to requirements. Please don't hesitate to contact Nirav/Akash to help make this document better.
