# Backend Project Review

## My Backend In-class Quiz

* https://github.com/martypdx/backend-quiz

## Themes

* Consistent, clean code is important
    * Clean code makes it exceptions pop-out and be meaningful
    * [Broken Windows](https://en.wikipedia.org/wiki/Broken_windows_theory)
    * On a team, becomes more important
    * Dead Code and Files (Git remembers). Dead Routes
    * Idiomatic Style/Format
    * `eslint disable-line` FAIL
    * Use of whitespace (composition)

* REST defining/naming routes. 
    * Routes describe resources (nouns), not queries, actions or options. 
    * Use of `/me` to describe current user
    * POST vs PUT. PUT should have an identifier, POST is for new resources that don't have identifier.
    * Read the route as a sentence, does it make sense?

* Security
    * You cannot trust user input
    * Have to Bootstrap admin
    * Don't serve root as public
    * No client secrets (or private keys) on front-end or github

* Promises
    * Don't serialize what can be done in parallel

* Refactoring
    * DRY (Don't Repeat Yourself)
        * Don't repeat same code
        * Don't repeat same concept
    * Use model methods to clean up route code
    * Testing too!
        * `badRequest`, but what else was repeated?
    * Sometimes repetitive code is indicative of need for design change

* Testing is a thinking activity
    * Model tests were repetitive testing required
    * identifying core functionality and risks and testing that. 
    * don't slip into checking the box with the same tests over and over
