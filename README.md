# [Movie Library built with React, TypeScript](https://movie-library-type-script.vercel.app/browse/popular/1)

<img alt="Movie Library website" src="https://user-images.githubusercontent.com/65386350/147342647-a1586e4e-b3ac-46eb-a839-456ba5098032.png">

## Overview

Hello 👋, Welcome to my project of Movie Library which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [TypeScript](https://www.typescriptlang.org/) template. This web app gets user's, movie details based on Popular, Top Rated, Upcoming and any Genre. User's can also search any movie details based on its name of any language. Most of the movie details include youtube trailer link. As pagination is available one can get more number of movie details.

Tech stack used in this project -

- JavaScript Library: **React & TypeScript**
- Navigation: **React Router**
- State management: **Redux**
- Styling: **React-Bootstrap**

This is the first time I've used TypeScript with React. Though it was little bit tough at first, I come to know how TypeScript is doing all the heavylifting for us before releasing the website into production.

## Prerequisites for this project
- One should have TMDB API key ready, if you dont know how to get one please refer [TMDB](https://www.themoviedb.org/documentation/api)
 
## Environment variables
Finally one should have file named .env with the TMDB API key and base url of endpoint setup as follows
```js
//.env
REACT_APP_API_KEY = [TMDB API key]
REACT_APP_BASE_URL = https://api.themoviedb.org/3
```

## How to install this project

1. Clone the project using the command `git clone https://github.com/vtejaeta/Movie-library-TypeScript.git`
2. Move into the file directory you wish to run using `cd {folder_name}`.
3. Use the following command `npm install` or `yarn` to install the dependencies.
4. Now you can run `npm run start` or `yarn start` to run the app in the development mode. It can be viewed in browser at `http:localhost:3000`
5. For bundling one can use `npm run build` or `yarn build` which optimises build for best performance

### Questions

For questions related to using the project, please reachout to me through

- [Twitter](https://twitter.com/vtejaeta9493)
