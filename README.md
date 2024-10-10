# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Redux Toolkit
-Install @reduxjs/toolkit and react-redux
-Build out store
-connect our store to app 
-slice (cartSlice)
-dispatch(action)
-Selector

# Types of testing(developer)
-Unit Testing
-Integration Testing
-End to End Testing - e2e testing

# Setting up testing in our app

-Install React Testing Library and jest (npm install --save-dev jest @testing-library/react @testing-library/jest-dom)

-Install Babel dependencies (npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest)

-Config Babel ( make babel.config.js in root directory and this code)
    ->{
        module.exports = {
        presets: ["@babel/preset-env", "@babel/preset-react"],
        };
    }

-Jest Configuration (npx jest --init and after create add this code)
    ->{
        transform: {
        "^.+\\.jsx?$": "babel-jest", 
        },
    }
-add ["test" : "jest"] in scripts in package.json
-Install jsdom (npm install --save-dev jest-environment-jsdom)
-Make [__test__] folder and the file extention should be [test/spex.js/ts]