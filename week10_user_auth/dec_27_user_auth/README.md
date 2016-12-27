# User Auth

## Agenda

* Adding User Sign in/up
* Forms/Popups

## User Auth

Prerequisite:
* Server is running with JWT Auth

App Pieces:
* User Service
    * Sign in/up, logout, isAuthenticated
* Token Service
    * Manages storing the token locally
* State Change Event
    * Look for: unauthed and router state requires Auth
        * scheme for detecting route states
    * Use ngDialog to prompt for credentials
    * Additional `require` needed 
* ngDialog
    * 3rd party library with service-based model dialog
    * `css` requires (webpack)
* `<user-auth>` component for signin/up
* Http Interceptor
    * Inject token into header on request
    * Look for token failure status code and redirect to home