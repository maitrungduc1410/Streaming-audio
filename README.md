This app aims to stream when user speaking into microphone. Data is send simultaneously to server until client do one of these actions: click stop recording, close browser, or being quite for a while. 

The server receives data continuously and appends it into a <b>wav</b> file, it doesn't wait until the actions above happen.

It streams pcm chunks from the browser's mic into a node server through websockets. Those chunks are piped into node-wav FileWriter.

This app use <b>Binary.js</b> for transfer data through websocket.
You can check its docs [here](https://github.com/binaryjs/binaryjs/blob/master/doc/api.md)

To start run:

    node app.js

Then go to `http://localhost:3700` and make a recording. It should create a wav file in your project's folder.
