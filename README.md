### Running the code

<div style="background-color:teal; border: 1px Solid black"></div>
<div style="border: 1px Solid black;padding: 0 15px 10px 15px; font-size: 15px;border-radius:15px; margin-top:10px">
<h5>NOTE:</h5> 
<ul style="font-size: 14px;">
<li>Run the backend first. This will start the connection to the database.</li>
<li>After that, run the react front-end, so the sample data will be loaded from the backend</li>
<li>Database is a mongodb instance already hosted on the cloud. no need to set anything up.</li>
</ul>
</div>
##### The Application
```
git clone THE_REPOSITORY
```
##### Back-End
```
cd server
npm install
npm run start
```
This start the backend node-express server on port 8000
##### Front-End
```
cd client
npm install
npm run start
```
This starts the react application on Port 3000

##### About the application
- The style on the front end has been updated
- Used Material UI for that
- The CSS is SASS
- The application is a responsive one being adapted to 3 sizes (Desktop, iPad and mobile)
- database framework for the backend is mongoose
