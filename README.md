# react-responsive-youtube-player

This project serves as an example of how to create a responsive youtube video player component that can be re-used as required. The player includes the following options:

- autoplay
- controls
- end
- fullscreen
- loop
- start
- width
- youtubeId

When you embed a youtube video it will not be responsive, which could be undesirable or even not feasible for your application. This is because iframes can’t keep its ratio by itself as the domain is a third party, you are not allowed to know the content of the iframe for security and privacy reasons.

To mitigate this issue, we can wrap the embedded iframe in a div and have the iframe scale appropriately maintaining a 16:9 ratio, according to the size of its parent.

The player component receives a width as one of its properties. By using a % as the value for width, will allow the player to adjust to the size of its parent. For a fixed player size, use px.

In this project, the responsive youtube player component is used to build a responsive video gallery using flexbox.

### Features include:

- responsive youtube player component
- video gallery component

### Requirements:

- node js v12 (current version: 12.18.0)

### Usage:

- clone repository or download source code
- open project directory in terminal
- run npm install
- run npm start
