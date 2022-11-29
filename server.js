// cmd "/C TASKKILL /IM node.exe /F"

// Week 8 day 1
// Section 1
// Intro to Express: CRUD, MVC, REST, INDUCES and JSX

// Begin with the End In Mind
    // Read URL parameters
    // Common error: two responses
    // Common error: Place routes in correct order
    // Multiple Params
    // Request Object
    // URL Queries
    // Describe REST and list the various routes
    // Create an Index route
    // Create a Show route
    // Enhance the data in your data array
    // Define MVC and explain why it matters
    // Move our data into a separate file
    // Move our presentation code into an JSX file

// Explanation
// CRUD, MVC, REST, INDUCES and JSX: Remember where we are going

// What is CRUD?
    // CRUD stands for Create, Read, Updateand Delete. Why and how is this important you ask? Well CRUD is in everything you interact with online on a daily basis. Browsing Instagram and looking at posts? Thats Read. Are you posting something? Well that's Create. Didn't like that picture you posted? Deleteto the rescue and finally, liking pictures of adorable animals? Hello Udate!

    // So now that we have a reference point, how does that relate to code?

    // Below you'll find a table that relates normal HTTPactions to our CRUD operators.

    // HTTP Action	CRUD Operator
    // GET	        Read
    // POST	        Create
    // PUT	        Update
    // DELETE	    Delete

// Breaking It Down
    // Create
    // A Create or POSTcreates a new entry in a database that either you or someone else created. When we perform a POSTrequest, we send some amount of information to our data source, usually data from a form; and we create a new entry in the data source.

    // Read
    // The Reador GEToperation is something that you interact with every day. Whenever you pull information from an api, you are performing a GETrequest. GETrequests only allow users to view or read from a data source. This can be something as simple as you checking your email in the morning. We perform a GETrequest to a server and if everything goes OK we get some type of information or data back.

    // Update
    // Update or PUTworks very similar to a POSTrequest. We are still sending along some sort of data to our data source, but instead of creating a new entry, we are actually updating an existing entry. In order to this, we need to target that entry specifically, most of the times using an id. This allows us to send some new information to to our existing piece of data and overwrite it's existing attributes.

    // Delete
    // Delete does just as the name implies, it DELETE's something from our data source. We target the specific piece of information in the same way we did with our PUTrequest. This sends a request to the server to DELETEthis item.

// Demonstration
// Describe REST and list the various routes
// REST stands for Representational state transfer
// It's just a set of principles that describe how networked resources are accessed and manipulated
// We have 7 RESTful routes that allow us basic operations for reading and manipulating a collection of data:

// https://gist.github.com/alexpchin/09939db6f81d654af06b

// 
// URL	            HTTP Verb	    Action	    Used For
// /photos/	        GET	            index	    Displaying a list of all photos
// /photos/new	    GET	            new	        Display HTML form for creating a new photo
// /photos	        POST	        create	    Create a new photo
// /photos/:id	    GET	            show	    Display a specific photo
// /photos/:id/edit	GET	            edit	    Return an HTML form for editing a photo
// /photos/:id	    PATCH/PUT	    update	    Update a specific photo
// /photos/:id	    DELETE	        destroy	    Delete a specific photo

// Imitation
// Create an Index route
// Setup our app
// Let's have a set of resources which is just a javascript array. To create an index route, we'd do the following:

// const express = require('express');
// const app = express();

// const fruits = ['apple', 'banana', 'pear'];

// app.get('/fruits', (req, res) => {
//     res.send(fruits);
// });

// app.listen(3000, () => {
//     console.log('listening');
// });

// Now go to http://localhost:3000/fruits/

// If you haven't already Install JSON Formatter to make viewing JSON easier
    // JSON stands for Javascript Object Notation
    // It's just a way to represent data that looks like a Javascript object or array
    // JSON Formatter extension just makes it easier to view JSON data.
    // Install it:

    // Go to https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa
    // Click on "Add To Chrome"

// Create a Show route:
// const express = require('express');
// const app = express();

// const fruits = ['apple', 'banana', 'pear'];

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

// //add show route
// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });

// app.listen(3000,() => {
//     console.log('listening');
// });

// Enhance the data in your data array: 

// const express = require('express');
// const app = express();

// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

// app.get('/fruits/', (req, res) => {
//     res.send(fruits);
// });

// app.get('/fruits/:indexOfFruitsArray', (req, res) => {
//     res.send(fruits[req.params.indexOfFruitsArray]);
// });

// app.listen(3000, () => {
//     console.log('listening');
// });



// Define MVC and explain why it matters
    // CRUD, MVC, REST, INDUCES and JSX: Remember where we are going

// One of the core tenants of good programming is to compartmentalize your code
    // Already our code is getting a little messy, we have data, app instantiation (listening), and routes all in one file

// One way to keep an app from getting messy is to separate it out into three sections
    // - Models
    //     - data (javascript variables)
    // - Views (HTML)
    //     - how the data is displayed to the user (HTML)
    // - Controllers
    //     - the glue that connects the models with the views with logic

// This allows various developers to divide up a large code base
    // - minimizes likelihood of developers overwriting each others code
    // - allows developers to specialize
    //     - one can focus just on getting good with dealing with data
    //     - one can focus just on getting good with html
    //     - one can focus just on getting good with connecting the two

// Think of MVC as a restaurant
    // - Models are the cook
    //     - prepares food/data
    // - Views are the customer
    //     - consumes food/data
    // - Controllers are the waiter
    //     - brings food from cook to customer
    //     - has no idea how food/data is prepared
    //     - has no idea how the food/data is consumed


// Move our data into a folder called Models
//     1. Create a directory called models inside our app directory
//     2. Inside /models, create your data file (fruits.js)
//     3. Put your fruits variable in there
//     4. We now require that file in the original server.js

//  But, we could have multiple variables in our /models/fruits.js file.

// How does javascript know which variable in /models/fruits.js to assign to the fruits const in server.js (the result of the require()statment)?
// We must tell javascript which variable we want to be the result of the require()statement in server.js

// ❓ Essential Review Questions
        // In your own words, describe MVC.
        // What does the acronym INDUCES stand for (index, new, delete, update, create, update, edit, show)
        // What is and index route and How does it differ from a show route?

// Move our presentation code into an JSX file

// What is JSX ?
    // A Syntax that allows us to write our HTML, CSS and Javascript in the same file so that we can more easily create user interfaces React is one of the most well known users of JSX. But other libraries like Lit-HTML, and KofuJS use it as well.

// express-react-views
    // This is an Express view engine which renders React components on a server. It uses react because it was made by facebook. It renders static markup and does not support mounting those views on the client.

    // This is intended to be used as a replacement for existing server-side view solutions, like jade, ejs (Like we have been using), or handlebars.

// JSX USES
    // You can use JSX as a template language to tell your server how to dynamically change your HTML ( That's what we'll be doing for now)
    // You can also use JSX for very very sophisticated Dom Manipulation, and that's what we'll be doing in in 2 weeks after we have a good handle on servers.
//A different way of Seperating Concerns ( Component Driven Development 


// Now we want to move our View code (HTML) into a separate file just like we did with the data
// 1. Install the NPM package EXPRESS React Views, react, react-dom (This will let us make our pages appear in the dom)

    // this is a templating library that allows us to mix data into our html
    // the HTML will change based on the data!
    // npm install express-react-views react react-dom --save

// 2. Create a views directory inside our app directory
// 3. Inside /views, create a file called Show.jsx(capitalized)
    // this will be the html for our show route
// 4. Put some html into Show.jsx

require("dotenv").config()
const express = require("express")
const app = express()
const PORT = 3000
const Fruit = require("./models/fruits")
const Vegetable = require("./models/vegetables")
// const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
// const vegetables = require('./models/vegetables.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const methodOverride = require('method-override');

// must include if engine written like this: app.engine('jsx', reactViews.createEngine())
const reactViews = require('express-react-views')

const mongoose = require("mongoose")
// console.log(process.env.MONGO_URI)

const fruitsController = require("./controllers/fruitController")

//=================================CONNECTION TO DATABASE =================================
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open",() => {
    console.log("connected to mongo")
})

//=================================SET UP ENGINE =================================

app.set('view engine', 'jsx')

// app.engine('jsx', require('express-react-views').createEngine())
// More conventional way to create the engine:
app.engine('jsx', reactViews.createEngine())

//=================================MIDDLEWARE =================================
app.use((req, res, next)=> {
    console.log("I'm running for all routes")
    console.log("1. middleware")
    next()
})

app.use(express.urlencoded({extended:false}))
app.use(methodOverride("_method"))
app.use(express.static('public')); //tells express to try to match requests with files in the directory called 'public'


// I.N.D.U.C.E.S
// Index, New, Delete, Update, Create, Edit, Show
// always put more specific routes before Show Route

//=================================ROUTES =================================
app.use("/fruits", fruitsController)

//=================================INDEX- Fruits =================================

// app.get("/fruits", (req, res) => {
//     Fruit.find({}, (error, allFruits) => {
//         if(!error) {
//             res.status(200).render("fruits/Index", {
//                 fruits:allFruits
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })

//=================================INDEX- Vegetables =================================

// app.get("/vegetables", (req, res) => {
//     Vegetable.find({}, (error, allVegetables) => {
//         if(!error) {
//             res.status(200).render("vegetables/Index", {
//                 vegetables:allVegetables
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })

//================================= NEW Fruit Route- renders New.jsx=================================
// app.get("/fruits/new", (req, res) => {
//     console.log("2. controller")
//     res.render("fruits/New")
// })

//================================= NEW Vegetables Route =================================
// app.get("/vegetables/new", (req, res) => {
//     console.log("2. controller")
//     res.render("vegetables/New")
// })

//=============================== DELETE- FRUITS =================================
// app.delete("/fruits/:id", (req, res) => {
// Fruit.findByIdAndDelete(req.params.id, (err, data) => {
//       res.redirect("/fruits")
//     })
// })

//=============================== UPDATE- FRUITS =================================
// app.put("/fruits/:id", (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === "on" ? true : false
//     Fruit.findByIdAndUpdate(req.params.id, req.body, (err, updatedFruit) => {
//       if(!err){
//         res.status(200).redirect(`/fruits/${req.params.id}`)
//       } else {
//         res.status(400).send(err)
//       }
//     })
// })


//=============================== CREATE- FRUITS =================================
// New Fruit Post Route- when submit button is pressed

// app.post("/fruits", (req, res) =>{
//     console.log("2. controller")
//     if(req.body.readyToEat ==="on") {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     Fruit.create(req.body, (error, createdFruit) => {
//         if(!error) {
//             // redirects after creating fruit, to the Index page
//             console.log(createdFruit) 
//             res.status(200).redirect("/fruits")
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })


//=============================== CREATE- VEGETABLES =================================
// New Vegetable Post Route- when submit button is pressed

// app.post("/vegetables", (req, res) =>{
//     console.log("2. controller")
//     if(req.body.readyToEat ==="on") {
//         req.body.readyToEat = true
//     } else {
//         req.body.readyToEat = false
//     }
//     Vegetable.create(req.body, (error, createdVegetable) => {
//         if(!error) {
//             console.log(createdVegetable) 
//             res.status(200).redirect("/vegetables")
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })

//=============================== EDIT- FRUITS =================================
// app.get("/fruits/:id/edit", (req, res) => {
//     Fruit.findById(req.params.id, (err, foundFruit) => {
//         if(!err) {
//             res.status(200).render("fruits/Edit", {fruit: foundFruit})
//         } else {
//             res.status(400).send({msg: err.message})
//         }
//     })
// })

//=============================== SHOW- FRUITS =================================
// app.get("/fruits/:id", (req, res) => {
//     Fruit.findById(req.params.id , (error, foundFruit) => {
//         if (!error) {
//             res.status(200).render("fruits/Show", {
//                 fruit:foundFruit
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })

//=============================== SHOW- VEGETABLES =================================
// app.get("/vegetables/:id", (req, res) => {
//     Vegetable.findById(req.params.id , (error, foundVegetable) => {
//         if (!error) {
//             res.status(200).render("vegetables/Show", {
//                 vegetable:foundVegetable
//             })
//         } else {
//             res.status(400).send(error)
//         }
//     })
// })


app.listen(PORT, () => { 
  console.log(`Listening on port: ${PORT}`)
}) 