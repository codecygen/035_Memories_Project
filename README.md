Server Setup:
- Create 2 folders 'client' and 'server'
- Inside the 'client' folder type npm init
- Then install the packages 'npm i body-parser cors express gitignore mongoose nodemon'
- Go to 'package.json" and change add these lines:

```
{
  "name": "server",
  "version": "1.0.0",
  "main": "index.js",
  // "type": "module" is necessary for import feature in index.js 
  "type": "module",
  "scripts": {
    // Change this line from
    // "test": "echo \"Error: no test specified\" && exit 1
    // to
    // "start": "nodemon index.js"
    // So 'npm start' will allow you to start 'nodemon index.js'
    // command
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "gitignore": "^0.7.0",
    "mongoose": "^6.0.12",
    "nodemon": "^2.0.14"
  }
}
```
- Go to 'client' folder and type 'npx create-react-app ./'
- Then install packages. 'npm i axios moment react-file-base64 redux redux-thunk'
- Delete '.git' folder inside the 'client' folder.
- Delete 'src' folder as we don't need most of the files inside it and recreate the 'src' folder.
- Create the 'index.js' file under 'src' folder.
- All files such as 'index.js' and 'App.js' wil be kept under 'src' folder.
- Then go to the root directory of the project and add the entire project as it is to Github.

Server Side Packages:
- cors (Cross-Origin Resource Sharing (CORS))
- express
- gitignore
- mongoose
- nodemon
- dotenv

npm i cors express gitignore mongoose nodemon dotenv

Client Side Packages:
- axios
- moment
- react-file-base64
- redux
- redux-thunk
- react-redux
- @material-ui/core
- @material-ui/icons

npm i axios moment react-file-base64 redux redux-thunk react-redux @material-ui/core @material-ui/icons

How to Add Both Folders to Github?
Delete .git folder that is installed under 'client' folder

Client Side Logic:  
All of the files mentioned here have their own "styles.js" file in the same folder level.

/client/src/components/Posts/Post/Post.js'
Post.js handles individual posts. It is connected to

/client/src/components/Posts/Posts.js
This one is a container component which preserves all individial post messages

/client/src/components/Form/Form.js
This one handles the Form component.

/client/src/App.js
Form.js and Posts.js are sent to App.js

/client/src/index.js
App.js is connected to the server file.



Server Side Logic:  
/server/models/postMessage.js
has the postMessage mongoose model which is sent to

/server/controllers/post.js
This file handles the route callback functions and exports the callback functions to

/server/routes/post.js
This section handles the post and get mini routing and finally exports the router to

/server/index.js