# Comic Book Inventory API

This is a RESTful API for managing a comic book inventory. It allows users to create, retrieve, update, and delete comic book entries. The API supports pagination, filtering, and sorting of comic books.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Testing with Thunder Client](#testing-with-thunder-client)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)

## Features
- Create, read, update, and delete comic books.
- Pagination support for large datasets.
- Filtering options based on attributes like author, year, price, and condition.
- Sorting options for comic books (e.g., by price, year, or alphabetically).

## Technologies Used
- **Node.js**: JavaScript runtime for building the API.
- **Express.js**: Web framework for Node.js.
- **Mongoose**: ODM for MongoDB, used for data modeling.
- **MongoDB**: NoSQL database for storing comic book data.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Thunder Client**: API testing tool for Visual Studio Code, used to easily test and manage API requests.


## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- A code editor (e.g., VSCode)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/comic-inventory-api.git
   cd comic-inventory-api
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:

- Create a ```.env``` file in the root directory of the project and add your MongoDB URI:
```
MONGODB_URI=<your-mongodb-uri>
PORT=5000

```

4. Start the server:
```
npm start
```
5. The API will be running at 
```
http://localhost:5000/api/comics.
```

## Testing with Thunder Client

Thunder Client can be used to test the API endpoints directly from Visual Studio Code.

#### 1. Install the **Thunder Client** extension from the [VS Code marketplace](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

#### 2. Open Thunder Client:
   - Click on the Thunder Client icon in the sidebar.
   - Create requests for the API endpoints (e.g., `POST`, `GET`, `PUT`, `DELETE`).
#### 3. Use the appropriate URLs (e.g., `http://localhost:5000/api/comics`) to test the API's functionality.






## API Endpoints

### 1. Create a Comic
- **Method :** ``` POST ```
- **URL :** ``` /api/comics ```
- **Body :** JSON format
![My Image](`./screenshots/create.png`)

### 2. Get All Comics with Pagination, Filtering, and Sorting
- **Method :** ``` GET ```
- **URL :** ``` /api/comics ```
- **Query Params :** 
  - ``` page ```: Page number (default: 1)    
  - ``` limit ```: Number of comics per page (default: 10)   
  - ``` sortBy ```: Field to sort by (default:``` bookName```)   
  - ``` filter ```:Filter conditions like ```authorName```, ```yearOfPublication```, ```condition```.    

![My Image](`./screenshots/get-query.png`)



### 3. Get Comic by ID
- **Method :** ``` POST ```
- **URL :** ``` /api/comics/:id ```
- **Body :** JSON format
![My Image](`./screenshots/get-id.png`)

### 4. Update a Comic by ID
- **Method :** ``` PUT ```
- **URL :** ``` /api/comics/:id ```
- **Body :** JSON format
![My Image](`./screenshots/update.png`)

### 5. Delete a Comic by ID
- **Method :** ``` DELETE ```
- **URL :** ``` /api/comics/:id ```
![My Image](`./screenshots/delete.png`)



## Error Handling
The API returns standard HTTP status codes for success and error responses:

- **200 OK** : Successful requests.
- **201 Created** : Resource successfully created.
- **400 Bad Request** : The request was invalid.
- **404 Not Found** : The requested resource was not found.
-  **500 Internal Server Error** : Server-side error

## Contributing
- Contributions are welcome! Please fork the repository and create a pull request.