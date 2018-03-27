# React Native Chat App Layout

My first dive into react native world!

## Description

I've made a chatting app layout using react native web as it seemed easy to start with. And if it works on the web, it will work across all other mobile plateforms!

[Checkout the demo](https://geronde.github.io/React-Native-Chat-App-Demo)

### Prerequisites

You need to have Node.js installed. If you don't, install it from [here](https://nodejs.org/en/)

[React Native is only comptabile with npm v4](https://github.com/facebook/react-native/issues/14767). If you have npm v5, either downgrade or install yarn.

### Usage

Download and install the repo with ```npm i``` or ```yarn install```

### How to use 

```
   npm run dev or yarn dev

```
### Note

Because I've used react-native-web, there were some compatibility issues with react-navigator. As since the release of v1.0.0, react-native-web is no longer supported by react-navigation so I had to use older versions which had minor bugs such as modal being called twice, stack navigator tint color not working...
