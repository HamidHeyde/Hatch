### Running the code
###### NOTE: 
- Run the backend first. This will start the connection to the database.
- After that, run the react front-end, so the sample data will be loaded from the backend
- Database is a mongodb instance already hosted on the cloud. no need to set anything up.
#### Back-End
```
cd server && npm run start
```
This start the backend node-express server on port 8000
#### Front-End
```
cd client && npm run start
```
This starts the react application on Port 3000


###### The Application
- The style on the front end has been updated
- Used Material UI for that
- The CSS is SASS
- The application is a responsive one being adapted to 3 sizes (Desktop, iPad and mobile)
- The database is an instance of MongoDB being hosted on the cloud
-database framework for the backend is mongoose