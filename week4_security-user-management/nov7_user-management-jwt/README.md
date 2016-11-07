![cf](http://i.imgur.com/7v5ASc8.png)  User Management and Authentication
===

## Feedback and Announcements
* 201 day class starting in front class room
* Space update
	* Lease Auditorium Building November & December
	* Unlikely to have demo here in 2016
	* New Space expected move-in mid-December
* Lecture still needs better context
	* Mongoose
* Questions: Pls raise hand

## Agenda

* Manage Users
	* Sign Up
	* Sign In
* Issue Tokens
	* Keep Users "signed in" - even across new browser
	* Stateless
	* Keep Info (like "roles" or "user name") in Payload
* Create middleware to protect routes
	* Must be "authenticated", ie have a token
	* Check user roles to provide "authorization" checks
