# Creas Crave Portal
*part of full stack project using components each as a separate component file - Cart, Creatives, CreativesInCart, Customers, Favorites, Subscribers, and Users ... db.js to orchestrate functionality of models/components ...and App.js to map routes aka endpoints - note: best practice to have default/base route such as /Login at end of routes listed with more specific routes such as /customers listed before it to avoid router misreading endpoints i.e. stopping at '/' when needs to complete full path*
<br>
<br>
**HOW WORKS**
- these models manage user-inputted/activated content - database aka db, Cart, CreateAccount, Creatives, CreativesInCart, Customers, Favorites, Login, Purchases, Subscribers, and Users (all capitalized per React App components)<br>
- these models design presentation of component-specific content - Disclaimer, Footer, Navbar, NavbarBackend, and Sidebar<br>
- Login.js implements useAuth0, useEffect, useState, useHistory(), and async/await with if/else statements to authenticate<br>
- index.js houses Auth0Provider tags to implement 3rd-party authentication/authorization aka authn/authz<br>
- App.js implements page pathways and endpoint routes, including globally scoped routes to avoid re-rendering upon load (i.e. navbar; disclaimer; footer) - *plus* uses HashRouter to replace BrowserRouter to force accurate endpoints in browser<br>
###### <a href="https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react">read about hashrouter versus browserrouter</a>

**NEXT STEP** <br>
1. fully wire portal to backend
2. provide option to login using Auth0 or Creas Crave login page
3. maintain full stack code

**NOTE:** the magic of components is their nature/function of reusability<br> 

###### <a href="https://www.latoniamertica.dev/creas-crave-capstone/" target="_blank">visit Creas Crave Capstone Powered by This Portal by La'Tonia Mertica</a>
<br>

##### FIRST NAME: La'Tonia Mertica
###### note_1: pronounced *luh tone yuh merr treece*
<br>

## MY BACK STORY
<br>
I went into code because I saw code as a gateway to better options, informed risk-taking, and outcomes. 
<br>
<br>
My fantasies on a better life are nothing special. A better life, life quality, and sense of self. A life during which I create opportunities for the substance of my existence. A life I enthusiastically own. A life that welcomes, entertains, and bows to parts of myself I've envisioned embracing for too long - focusing on non-me things out of a sense of duty, and obligation, and misaligned timing. Nothing special. Still, my own, and true difference.  
<br>
<br>
When I was notified I was accepted into Hack Upstate full stack javascript code/web dev bootcamp Careers in Code, I knew my life was changed. 
<br>
<br>
Far from perfect, and likely destined to never truly achieve the level and status I fantasize on, I code every day. I apply my best self. Dwell in the moment - to moment. Never forget how hard life has been at times. And that debatably I shouldn't be alive today. But I am. Building out the purpose of my life is a lot to do - and I still don't have authenticated clarity on it. 
<br>
<br>
Still, it involves vigorous exceptional communication - and, coding is now part of my fierce means to say some things.
<br>
<br>
<p align="center"><img src="images/latoniamertica-gawk.png" width="100%" /title="Selfie by La'Tonia Mertica" ></p>
<br>

# Getting Started with Create React App

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
