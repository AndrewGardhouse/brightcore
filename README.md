# BriteCore

This is a project for BriteCore's mid-level front-end developer position application.
You can check out the finished product [here](https://britecore-test.surge.sh).

## Prerequisites

Have [nodejs](https://nodejs.org/en/) installed on your system. I personally use [nvm](https://github.com/creationix/nvm)
For this project, use Node 8.x (Active LTS)

## My Approach

I roughly put in 18-20 hours of work and into this project.

My approach to this project was actually pretty simple.

I setup the project using the Vue-CLI, this is the easiest way to get a Vue project up and running with all the plugins (Vuex, Babel) and presets (SCSS, ESLint) you want to use.

The first thing I did was have the data from the CSV converted to JSON so the data could be workable. I converted the CSV data to JSON using [csvtojson](https://www.npmjs.com/package/csvtojson) and formatted the amount values to cents. This is in `get-json.js`.

From there, I started working on the Vuex store. I added the JSON to the state, along with the mutations and getters to display, sort, and edit the table data. I started with the Store before the components because, for me, I find it a little easier to start working on the views when you have the data and the function to format it before hand, and with this project, I had that option.

For all the mutations, getters, and actions, I would start by writing out the tests for each one before actually writing the code for them in the best [TDD](https://en.wikipedia.org/wiki/Test-driven_development) way I could.

Once I had my Store ready and working, I started building the Table component to display and manipulate the data.

I wrote out in my notebook the components my Table was going to consist of.

For testing my components, I would build the component and make sure it would display what I needed it to. Then, I would write the tests for the methods, user interactions, and mounted hooks.

For styling, I kept it simple and focused on functionality and having the data clearly displayed on all screens. I used [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) for the overall Table structure and [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout) for laying out the contents of the grid columns.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Compiles and minifies for production and deploys on [Surge](https://surge.sh/)
If you're going to deploy your own version of this, be sure to change the 'surge_domain' in `package.json` to your own domain name
```
npm run deploy
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
