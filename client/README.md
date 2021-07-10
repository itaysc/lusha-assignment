# Lusha home assignment
## Created by Itay Schmidt

**Assumptions made while writing the code**

1. I added some extra validations to the create-user form that were not specified as a requirement (only validations that make sense).

2. I did't focus on the css and styling because it looks like it is not the purpose of this assignment.

3. No navigation menu was required so navigation will be done manually by the user. available routes are ```/```, ```/users```, ```/create```

4. The server is using port ```3000``` and the client is using port ```3001```, so make sure theu are not already in use before running the app. I also used nginx as a reverse proxy server that is listening on port ```80```, so make sure this port is also available to use.

5. I added a script that will create 500 random users, if you wish to run it, uncomment the line of code that is inside the ```server.js``` file inside the constructor.


## How to run

* In the root directory you can find a ```docker-compose.yaml``` file. first, make the build using ```docker-compose build```, once it i done run it using ```docker-compose up```.