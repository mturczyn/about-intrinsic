# PWA and service worker

Enabling webpage as PWA (progressive web application) requires only specifying manifest file (`manifest.json`) correctly.

Bigger challenge was to add **service worker**.

Firstly, I tried to add it as usual, by creating some JS and registering it in index file, but it did not work (service worker file could not use imports, as it was totally outside build system).

After some digging, I found out that there is `cra-template-pwa` template (`cra-template-pwa-typescript` for TypeScript). It includes ready implementation and registration code for service workers. So I have created an application using this template and just copied the code here.

But, there is a pitfall - it does not work, when running it on localhost. As discussed in [this StackOverflow post](https://stackoverflow.com/questions/66997788/create-react-app-pwa-typescript-template-cant-detect-service-worker), service workers work in production mode only.

Digging further, there is [Making a Progressive Web App documentation](https://create-react-app.dev/docs/making-a-progressive-web-app/), where it's speicified (which shines more light on the issue):

> The service worker is only enabled in the production environment, e.g. the output of `npm run build`. It's recommended that you do not enable an offline-first service worker in a development environment, as it can lead to frustration when previously cached assets are used and do not include the latest changes you've made locally.

# Getting Started with Create React App (CRA)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
