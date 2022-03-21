# interview-project
This is a full-stack project consisting of a single HTML page, a Web Component, and an Express server.
- No additional dependencies may be added to this project.
- You may add files, classes, and code as necessary but you may not delete the existing files
and code.

## Frontend
The frontend consists of a single HTML page, a Web Component to render a pie chart, and an API 
class to retrieve the relevant data from the backend. All files can be found in the "frontend"
folder and it is expected that the backend will also serve the files in this folder as static content.

### index.html
Imports the "pie-chart" Web Component and renders 3 pie charts for 3 customers based on their
customer ids. The output should resemble the given image.
![alt text](
https://github.com/Dulce-Engineering/interview-project/blob/main/frontend.png?raw=true)

### Pie_Chart.js
Implements the "pie-chart" Web Component by calling the relevant Api method, rendering a pie 
chart, and rendering a product legend below the chart.

### Api.js
Implements the function "Get_Popular_Products" which calls a backend endpoint to return an
array of products. Each product object has a "product_name" and "count" field. The function
also accepts a single "customer_id" parameter.

## Back-End
The backend consists of a single Express instance that serves both the static frontend content
and exposes a single endpoint to return the relevant product data. All relevant files can be found in the "backend" folder.

### index.js
Implements the Express server and must create the neccessary database instance. An endpoint must be defined that calls the Api.Get_Popular_Products() function.

### Api.js
Implements a single function "Get_Popular_Products" that accepts an instance of an Sqlite database and a customer id. The function must return an array of products that represent the 5 most bought items by the given customer. 
This must be achieved by summing the quanity of each product ordered. Each product object, in the resulting array, must consist of the "product_name" field and a "count" field of the number bought.

## Database
The database for this project is SQLite and can be access via the node-sqlite3 library. The "backend/sql" folder contains an ER diagram and SQL scripts to create the necessary database.

## References
- Web Components - https://developer.mozilla.org/en-US/docs/Web/Web_Components
- Express - https://expressjs.com/
- SQLite - https://www.sqlite.org/index.html
- node-sqlite3 - https://github.com/mapbox/node-sqlite3
