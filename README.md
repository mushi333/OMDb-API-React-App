# OMDb-API-React-App

This spike project handles the OMDb (Open Movie Database) public API. Using the search box at the top, users can query for the movies that has related names. The related movies are then displayed as a list for the user. 

The current information shown are:
- Title
- Date Released
- Director
- Type

## Installation
Both the backend and the frontend must have their respective libraries imported, before it can be used.

To install the Express.js backend:
```
npm install
```
Then create a ".env" file in the root directory that contains the line:
```
API_KEY="Your API key"
```

To install the Vite React.js frontend:
```
cd "OMDb API Page"
npm install
```

## To Run
To run the backend:
```
nodemon index.js
```

To run the frontend:
```
cd "OMDb API Page"
npm run dev
```

## Issues
Current issues:
- there is no pagination, so only the first 10 results are shown.
- Only the basic information is shown. (Future plan is to have an expandable dropdown that shows all information for each search result.)