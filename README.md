# Simple Messenger App

This Simple Messaging App works as a basic chatroom for people.
It is a very simple **_React_** App, which works by grabbing data created on 2 different pages.

# Setup
Using this app requires you to have a computer to have Node installed. Meaning as as a baseline you will need to run this command in your CLI (Terminal for MacOS, Command Shell or PowerShell for Windows), if you haven't already:
```
 npm Install -g npm
```
 It is reccomended that you're on the most recent version of Node. So, if you are unsure if you have already have NPM and Node or which version you are on. You can run these commands to check:
 ```
 node -v
 npm -v
 ```
Once node is installed, you can fork this repository so that you have your own copy and clone it onto your computer using the CLI. If you are unsure of how to clone repositories from github then you can use this resource:
[How to Clone GitHub Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

With the project cloned navigate to the file location in your CLI 

<sub>At this point I reccomend grabbing the working directory <sup>pwd</sup> so you can navigate back to the file easily if it's needed.</sub>

In the file location now you need to start the DB.json Server so that the app has somewhere to fetch data from.
```
json-server --watch db.json
```
With the Json Server running, next you need to open another CLI <sub>This is where the working directory grabbed earlier can come in handy</sub> and navigate back to the file to start the app itself:
```
npm start
```

From here the app is working, however, as it is running off a localhost only you or people with access to your computer can use it. In order for multiple people to be able to access the webpage you can either replace or host the db.json **_or_** utilize on of these resources:
[ngrok](https://ngrok.com/)
[localtunnel](https://theboroer.github.io/localtunnel-www/)
[localhost](http://localhost.run/)

And that's it. You should now be able to have a simple chat with however many people have access to the app. Happy Chatting!