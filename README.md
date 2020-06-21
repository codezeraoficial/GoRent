
<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="250px" />
</h1>

<h4 align="center"> 
	 NextLevelWeek 1.0 APIRestful 🚀 Done! 
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/codezeraoficial/GoRent?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/codezeraoficial/GoRent">
	
  <a href="https://www.linkedin.com/in/leonardo-rviana/">
    <img alt="Made by LeonardoViana" src="https://img.shields.io/badge/made%20by-LeonardoViana-%2304D361">
  </a>

  <a href="https://github.com/codezeraoficial/GoRent/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/codezeraoficial/GoRent">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/codezeraoficial/GoRent/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/codezeraoficial/GoRent?style=social">
  </a>
</p>





## :gear: APIREST

This application aims to provide data from a car rental service. Using the stack node as APIREST providing performance
data loading and flexibility in access.

<h1 align="center">
    <img alt="Example" title="Example" src="https://peerbits-wpengine.netdna-ssl.com/wp-content/uploads/2019/10/rest-api-code-main.png" width="600px" />
</h1>


## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [MongoDB][mongodb]



## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Install API 

```bash

# Go into the folder
$ cd infosistemas

# Clone this repository
$ git clone https://github.com/codezeraoficial/GoRent.git

# Go into the repository
$ cd infosistemas/server

# Install dependencies
$ yarn install or npm install

# Start server
$ yarn dev

running on port 3333
```

## :battery: How does it work? 


1 - First download the [Insomnia][insomnia] it will simulate a client for us

Port: http://localhost:3333/


##INDEX
    - we will list all available vehicles 
    - Create a request of type GET, paste the url of the port concatenating with "vehicles". Staying like this: http://localhost:3333/vehicles
    - Click send and watch that
    - This should work by bringing all vehicles (if exists of course)

##STORE
    - Now We will now create a new vehicle.
    - Create a POST request paste the url of the port concatenating with "vehicles". http://localhost:3333/vehicles

     {
      "licensePlate": "PCY-6780",
      "chassis": "9dfddfd8f98d98fd98f",
      "renavam": "1235334545885",
      "model": "Iron 883",
      "brand": "Harley Davidson",
      "year": "2020"	
    }

    - Click send and watch that
    - This should work by creating a new vehicle

##SHOW
    - This time we will list a single vehicle specified by id
    - Create a request of type GET, paste the url of the port concatenating with "vehicles/id" . Staying like this: http://localhost:3333/vehicles/5eee846796f4c70e586ab5a6
    - Click send and watch that
    - This should work by bringing a unique specified vehicle

###UPDATE
    - Here we will now update a vehicle.
    - Create a PUT request paste the url of the port concatenating with "vehicles" and fllowind id. Staying like this: http://localhost:3333/vehicles/5eee846796f4c70e586ab5a6
    - Change the desired data
     {
      "licensePlate": "PCY-6780",
      "chassis": "9dfddfd8f98d98fd98f",
      "renavam": "1235334545885",
      "model": "Iron 883",
      "brand": "Harley Davidson",
      "year": "2020"	
    }

    - Click send and watch that
    - This should work by updating a vehicle

##DESTROY
5 - In this last step we will remove a single vehicle specified by id

    - Create a request of type DELETE, paste the url of the port concatenating with "vehicles" . 
       Staying like this: http://localhost:3333/vehicles/5eee846796f4c70e586ab5a6
    
    - Click send and watch that
    - This should work by removing a unique vehicle specified by id


### If you performed each step, the possibility of working perfectly is 100%. If everything went well, you were able to interact with api, that means everything went well.

Thanks! :metal:

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[mongodb]: https://www.mongodb.com/cloud/atlas/
[insomnia]: https://insomnia.rest/
