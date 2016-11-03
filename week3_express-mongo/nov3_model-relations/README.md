![cf](http://i.imgur.com/7v5ASc8.png)  Designing Mongoose Schemas
===

## Today's Learning Objectives

* Create related data models based on data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* Consolidate business logic in models using static and instance mongoose model methods

## Agenda

* Database Relations
	* One to one
	* One to many
	* Many to many
* Mongoose document objects
	* Wrapper arround data
	* performance considerations
	* use `.lean()`
* Related Models
	* ObjectId
	* Prefer children referencing parent ids
	* Sub Documents
		* logical Mongoose constructs
	* ObjectId ref’s
* Using mongoose `.populate`
* Augmenting Models with methods
	static
	instance
