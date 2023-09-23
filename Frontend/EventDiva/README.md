# EventDiva

## To run the app

1. Install Expo on phone
2. Cd into frontend repo and run ```npm i```
3. If you don't have expo installed globally run ```sudo npm install -g expo-cli```
4. To start the server run ```npx expo start```

## Heads up
Some of the frontend stuff was put together in a hacky way, if the expanded events do not fill the screen on your phone it's because the size of the expanded events are hadcoded and did not have time to fix it... Edit the ```expandedBox``` height in ```EventItem.js``` to make it fit:

```
expandedBox: {
        height: 810,  // Adjust accordingly
},
```
