Instructions to setup and run the code
--------------------------------------

To run the sample you need to have Node.js installed on your system and have the following packages insatalled globally:

 -  tsd (npm install -g tsd)
 -  http-server (npm install -g http-server)
 -  gulp (npm install -g gulp)

The sample needs NPM packages listed in the package.json and the TypeScript type definition files listed in tsd.json file to be installed locally. For this, run the following command:

 -  npm install
 -  tsd install

Run the following command to transpile typescript and to start the web server:

 -  npm run start

Now a Node.js server is running on your system at port 8080. The pages of the application can be browsed on the following URLs:

 -  http://localhost:8080 or, http://localhost:8080/index.html (To view demo of TypeScript version)
 -  http://localhost:8080/index.es5.html (To view demo of ECMAScript 5 version)