# Hedvig Coding Challenge
First of all, I wanted to thank you all 🙏 for the time you spend reviewing the code. Here is some info I think might be important to share.

But before going further you might want to see the final verion in action.  A demo version is deployed 🎉 on Netlify and is accessible from [here](https://vibrant-brahmagupta-ab9475.netlify.app/ "here")

[![Netlify Status](https://api.netlify.com/api/v1/badges/10923e80-835d-4060-9f35-6386b653d953/deploy-status)](https://app.netlify.com/sites/vibrant-brahmagupta-ab9475/deploys)

### How to run
---
1. Clone the project from this repo

 `https://github.com/MeghdadHadidi/hedvig-challenge.git`

2. Use yarn to command to install the dependencies

 `yarn`

3. Get the dev environment running

 `yarn dev`

### Tools
---
- **Vite**
    Using this instead of `cra` boilerplace, or manually setting up the environment and build tool using `webpack`

- **React + TypeScript**
- **Immer**
 Used `immer` to make reducers easier to create and maintain 
 
- **CSS Modules + PostCss **

---
##Solution

### Layout & Style
I decided not to put too much time and energy on the layout and style, and just try a bit to make it similar to current hedvig website. 
- Added a short description on peril items which will be visible on mouse over only for desktop resolutions. 
- Instead of a regular modal, prefered to show the peril details in a side panel which slides into the page from the right side.  This wide panel will be covering the page in small and medium sized devices.

### Structure
---
├── src

│   ├── assets

│   ├── components

│   ├── **hooks**

│   ├── **store**

│   ├── views

│   └── ...

├── tsconfig.json

├── index.html

├── package.json

├── postcss.config.js

└── vite.config.ts

---
**Hooks**
There are two types of hooks in the project:
1. As a layer for component-specific business logic 
**- Problem**
  A component can get bigger and crowded while the project is growing. This means after a while we will have many components each keeping a lot of business logic within themeselves and it can make the maintenance of that component really hard. 
**- Solution**
 Trying to keep the business logic separate from the view layer, and have the components easier to maintain and read. This kind of hooks is kept within the component folder to have separation of concern and have easier access from the component itself

2. As a service provicer to other components/hooks
 There are scenarios in which we need to implement specific features that need state, and we want React to keep that into the reactivity and data flow. 
 The only hook I have created is called `useEscapeKey` to handle `keyup` event for the Escape key to close the side panel easier.  
 
**Store**
I decided to go with `React`s Context API and `useReducer`  since the project size is small. 
- The store structure, typing and reducers are kept isolated and can be used later for a Redux based setup with less changes. 

- `Immer` is used to ensure a painless immutable state when building up the reducer during the project. 

---

## Thanks 🙏💐
