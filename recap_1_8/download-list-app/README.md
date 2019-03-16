This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About
This project shows a list of countries with a Download link. It renders a DownloadList based on static data (<code>data.js</code>) and, for each element in list, renders a label and a link to download country info using countries rest API (https://restcountries.eu/)

## Current state

Unfortunately, our developers left the project incomplete. The <code>DownloadElement</code> Component only renders the label and the link, but no action is linked with it, so no country info is available

## Your mission

You should complete <code>DownloadElement</code> Component to make it capable of:
- download country info when the link is clicked
- update render with country info
See the demo 
![Demo](https://github.com/dtodo1paco/reactjs-training/blob/master/recap_1_8/download-list-app/demo/demo.gif  "Demo")

### Hints

- The URL to download country info can be built using the helper function buildURL located in the <code>DownloadElement</code> Component.
- you should evaluate the return value of this API call
- you must prevent default behavoir of the link element
- CSS is provided, so do not waste your time on it.
- use props and state to configure render

## Addenda
Could you extend the project to load all available countries in the rest API? In other words, replace data.js with a dynamic countries list by region (Europe, Africa, América,...).