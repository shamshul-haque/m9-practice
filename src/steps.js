/* 

1. visit: console.firebase.google.com
2. create project (google analytics)
3. register app (create configure)
4. install: npm install firebase
5. add config file to project
6. Do not publish  or make firebase configuration(firebase.init.js or firebase.config.js ) public by pushing to github
7. Visit: Docs -> Build -> Authentication -> Web -> Get Started
8. export app from the firebase.init.js or firebase.config.js 
9. import {getAuth} from "firebase/auth"
10. create const auth=getAuth(app)
11. import {GoogleAuthProvider} from "firebase/auth"
12. create const provider= new GoogleAuthProvider()
13. use signInWithPopUp and pass auth and provider
14. activate sign-in method (google, facebook etc)

*/
