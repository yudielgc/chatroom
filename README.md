# chatroom #

A chatroom with node.js based on an example by Rami Sayar on MSDN Blogs

Based on an example from an article written by Rami Sayar on his [MSDN blog](http://blogs.msdn.com/b/cdndevs/archive/2014/09/04/node-js-tutorial-series-a-chatroom-for-all-part-1-introduction-to-node.aspx) put together in order to kickstart with node.js

The example is pretty basic to get you started with nodejs, express, and WebSockets, the goal was to have a simple chatroom so every connected user could send messages to the whole room. No username was displayed, no ability to send private messages. This basic example can be seen in the branch `basic-example` and online by browsing to [basic-example](http://ec2-54-85-218-76.compute-1.amazonaws.com:3000/)

Then, I added these features:

- Login page
- Username displayed
- Private messages

This example can be tested [here](http://ec2-54-85-218-76.compute-1.amazonaws.com:3000/)

## Prerequisites ##

1. `Nodejs` installed

## Getting Started ##

1. Clone the repo: `git clone https://github.com/yudielgc/chatroom.git`.
2. Navigate to the repo directory and download dependencies: `npm install`

## Debugging Locally ##

1. Two ways to run the app:
	1. Navigate to the repo directory and run: `node app.js`
	2. Navigate to the repo directory and run: `DEBUG=my-application ./bin/www`
2. Open a browser and navigate to: `http://localhost:3000`

### Work In Progress...