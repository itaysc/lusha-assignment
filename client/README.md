### Assumptions

I added some extra validations to the create-user form (only validations that make sense)

I did't focus on the css and styling because for me it looks like it is not he purpose of this assignment.

No navigation menu was required so navigation will be done manually by the user. available routes are "/", "/users", "/create"

the server is using port 3000 and the client is using port 3001, so make sure theu are not already in use before running the app. I also used nginx as a reverse proxy server that is listening on port 80, so make sure this port is also available for use.

assuming you are using linux or mac, if not- the client start script will fail. I added a "start-windows" script in package.json file that you can use instead.