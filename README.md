# Express File Upload

## Description

This project is an Express.js application designed to handle product management, 
including image uploads to Cloudinary. It features robust error handling, 
environment variable management, and a connection to a MongoDB database.

## Features

- Basic Express server setup with error handling
- Environment variable management using `dotenv`
- MongoDB connection using `mongoose`
- Product management with create and read operations
- Image upload handling with `express-fileupload` and `cloudinary`
- Linting with ESLint and Prettier

## Installation

Clone the repository:
```sh
git clone alnah/express-file-upload
```

Navigate to the project directory:
```sh
cd express-file-upload
```

Install dependencies:
```sh
npm install
```

## Usage

Create a `.env` file in the root directory and add the following:
```env
CLOUDINARY_CLOUD_NAME=<your-cloud-name>
CLOUDINARY_API_KEY=<your-api-key>
CLOUDINARY_API_SECRET=<your-api-secret>
MONGO_URI=<your-mongo-uri>
PORT=<your-port>
```

Start the server:
```sh
npm start
```

For development, use:
```sh
npm run dev
```

## API Endpoints

- `GET /api/v1/products` - Get all products
- `POST /api/v1/products` - Create a new product
- `POST /api/v1/products/uploads` - Upload product image

## License

This project is licensed under the MIT License. See the LICENSE file for details.
