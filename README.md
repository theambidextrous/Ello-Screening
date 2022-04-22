# About Ello-Screening - Juma, Idd Otuya

This is an interview demo app. It cannot be used in stage nor production environments. Just dev.

## Stacks n Dependancies

- React - javascript container for single pagers
- Apolo client - GraphQl client for javascript
- GraphQl - GraphQl wrapper for javascript
- StyledComponents - Fast-paced, component-based theming lib for react(and react native)
- React-Loading - react lotties

## Proejct Directories - contents of /src

- api - Contains GraphQl queires
  - Book.js - Get book query
  - Client.js - QraphQL client scafolding
- components - contains re-usables
  - Book.js - Book component
  - Sentence.js - Sentence component
  - Word.js - Word component
  - ClickedView.js - contains the component that shows when user word is clicked
  - LoadingIndicator.js - Loading lotties component
  - index.js - index-based export handler
- pages - nothing here for now
- util - hosts utilities i.e themes, formatters, helper functions
  - theme.js - contains app theme

## Running The App

- Copy the content of `.env.dist` to `.env`
- In the project directory, run:

### `npm install --legacy-peer-deps`

- The run:

### `npm start --reset-cache`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
