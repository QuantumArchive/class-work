![cf](http://i.imgur.com/7v5ASc8.png)  ExpressJS Basics
===

## Feedback: Thank You!

* workload
* recap/overview
* lab comprehension

## 1-on-1
* [Sign-up](https://marty-nelson.youcanbook.me/)
	
## Roadmap

### Course
* First Week: JavaScript and Node Fundamentals
* Last Week: Server Fundamentals with Node
* **This Week: Middleware (Express.js) and Data (MongoDB)**
* Next Week: Authentication, Deployment, Goodies for Project Week

## Today's Learning Objectives

* Setup app routing _with ExpressJS_ correctly using 
route matching, parameters, and order of routes
* “Starting” an express app, just _httpServer_, ie .listen() vs http.createServer(app)
* Serve static assets using `express.static`
* Server serve rendered pages using ~~`jade`~~ `pug` and `render.view`

## Overview

* routing
	* method based functions (`app.get`)
	* response.send
	* regex
	* order
	* parameters (route and query)
		* request
	* `app.use()`
* static files
* rendered views
* project structure
	* don't use one huge app.js file!
	* views, routes, static
	* express generator
	* `express.Router()` (tomorrow)

## Misc

My crappy file-store db: 
* [`bad-store` on npm](https://www.npmjs.com/package/bad-store) 
* [repo on github](https://github.com/martypdx/bad-store) 