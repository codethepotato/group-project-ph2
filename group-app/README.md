# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



#Phase-2 Group Project: Poke-Dex

##Learing Goals

All the Pokemon data can be found in the `db.json` file. We will be using 
a `json-server` to create a RESTful API for our database. 

-Run `npm install` to install our dependencies. 
-Then, run `npm run server` to start up `json-server` on ``.
-In another tab, run `npm start` to start our React app at ``.


##Project Goals



##Project Requirments

1. You must make a single page application (only one `index.html` file) using `create-react-app`.
2. Your app should use at lease 5 components in a way that keeps your code well organized. 
3. There should be at least 3 client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes. 
    - Use RESTful routing conventions where applicable.
    
            Route Name	  URL	            HTTP Verb	    Description
            Index	    /movies	            GET	            Display all movies
            New	        /movies/new	        GET	            Display new movie form
            Create	    /movies	            POST	        Add new movie to db
            Show	    /movies/:id	        GET	            Display a single movie's info
            Edit	    /movies/:id/edit	GET	            Display form to update specific movie
            Update	    /movies/:id	        PUT/PATCH	    Update a specific movie
            Destroy	    /movies/:id	        DELETE	        Delete a specific movie

4. Use a json-server to create a RESTful API for your backend and make a `GET` and a `POST` request to the json server. Use a form to make your post request, specifically a controlled form/component.     Additionally, you may choose to incorporate data from an external API but it is not required.
    - You should keep your `json-server` data simple: avoid nested data and associations. You'll learn how to work with more complex data in the next two phases. Focus on the frontend for this project.
    - Upon return of json from your POST request, a state update by a setState function is required!

<!-- 
            // in App:
        function addMovie(newMovie){
        setMovies([...movies, newMovie]) // Updating movies state.
        }

        //in Form
        const configObj = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: "Titanic"})
        }

        fetch('http://localhost:3000/movies', configObj)
        .then(res => res.json())
        .then(data => addMovie(data)) //THIS STATE UPDATE IS REQUIRED!!!
        // clear form -->
Remember: responsibility for re-rendering the page to diplay the updated list of movies should belong to the addMovie function; depending on a subsequent action to load the new data is not best practice.

5. Add some styling: you're encouraged to write your CSS from scratch, either by using styled componentsLinks to an external site. or writing CSS files and using id/className to style your elements. You can also incorporate a UI framework (like React BootstrapLinks to an external site., Semantic UILinks to an external site., or Material UILinks to an external site.) if you prefer.

##Stretch Goals

Once you have met the minimum requirements, feel free to explore! These are only the basic requirements — you're free to add on as much stuff as you'd like. For example, you may want to incorporate data from an external API. Check out a list of APIsLinks on an external site if you need some inspiration!

##Setup

For this project, you will need two separate repositories: one for your frontend and one for your backend. This will make it easier to deploy your project later, should you choose to do so.

    - Frontend Setup:
        -Use `create-react-app` to generate starter code for your project. 

    - Backend Setup:
        -If you prefer, instead of using the template, you can create a db.json file in the root of your project with a structure that looks like this:

            <!-- {
                "toys": [
                    {
                    "id": 1,
                    "name": "Woody",
                    "image": "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png",
                    "likes": 8
                    },
                    {
                    "id": 2,
                    "name": "Buzz Lightyear",
                    "image": "http://www.pngmart.com/files/6/Buzz-Lightyear-PNG-Transparent-Picture.png",
                    "likes": 14
                    }
                ]
            } -->
            
Then, assuming you have json-server installed globally, you can run this command to run the server:

    `json-server --watch db.json`

Whatever top-level keys exist in your db.json file will determine the routes available. In the example above, since we have a key of toys pointing to an array of toy objects, json-server will generate the following routes:

        <!-- 
        GET /toys
        POST /toys
        GET /toys/:id
        PATCH /toys/:id
        DELETE /toys/:id 
        -->

##Figuring Out the First Steps

Consider what the component tree should look like and how information is intended to be passed. 

Below is our component tree:            

                           App
                            |
 ___________________________|__________________________
 |         |           |               |              |
Header   Search    PokeForm     RandomButton    PokePage
                                                    |
                                                    |
                                                PokeCard
