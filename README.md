# Firebase Setup

---

## Initial installation

- visit: console.firebase.google.com
- create project (skip google analytics)
- Register app (create config)
- install firebase: npm install firebase
- add config file to your project
- DANGER: Don't publish or share firebase config to public by pushing it to the github

## Integration the authentication

- Visit: Go to official Docs > Build > Authentication > Web > Get started
- export app from firebase.config.js
- import getAuth from firebase/auth
- create const auth = getAuth(app)

## Provider setup (google)

- import google auth provider and create a new provider
- use signInWithPopUp and pass (auth,provider) as props
- activate the sign-in methods(like google,facebook,github etc)
- [vite]: change 127.0.0.1 to localhost

## Provider Setup (Github)

- active the auth provider by providing it the client id and client secret
- to get client id and secret : github profile>setting>Developer Settings > GithubApps > then provide the callback url from github activation site
-
