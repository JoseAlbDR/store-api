# Storefront API

This is a REST API for a storefront application. The API is designed to handle various filtering, sorting, and querying options for products in a simulated store.

## Technologies Used

- **Node.js**: The runtime environment for the server.
- **Express.js**: A web application framework for building APIs.
- **MongoDB**: A NoSQL database for storing product information.
- **Mongoose**: An ODM (Object-Document Mapper) for MongoDB.
- **Joi**: A validation library for validating request data.
- **CORS**: Middleware for enabling cross-origin resource sharing.
- **dotenv**: Library for loading environment variables.
- **express-async-errors**: Middleware to handle asynchronous errors with Express.
- **ts-node-dev**: A development server for running TypeScript code.

## Project Structure

The project directory structure is as follows:

```
store-api/
├── src/
│ ├── controllers/
│ ├── db/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── types/
│ ├── utils/
│ ├── app.ts
├── package.json
└── README.md
```

## Getting Started

1. Install Node.js and npm.
2. Clone the repository.
3. Install project dependencies: `npm install`.
4. Create a `.env` file based on `.env.example` and provide your database URL.
5. Run the development server: `npm run dev`.
6. The API should be accessible at `http://localhost:3000`.

## API Endpoints

### `/api/v1/products`

Endpoint for querying products with various filters, sorting, and pagination options.

#### Query Parameters

- `name`: Filter products by name using a case-insensitive regular expression.
- `price`: Filter products by price.
- `featured`: Filter products by featured status (boolean).
- `rating`: Filter products by rating.
- `company`: Filter products by company.
- `sort`: Sort products by specified fields (comma-separated list).
- `fields`: Select specific fields to include in the response (comma-separated list).
- `page`: Specify the page number for pagination.
- `limit`: Specify the number of items per page.

### `/api/v1/products/static`

Endpoint for fetching products with a static filter and sorting.

#### Query Parameters

- None.

## Usage

You can use tools like Postman or any API testing tool to make requests to the API endpoints.

For detailed information on how to use each endpoint and the available query parameters, please refer to the code and comments in the respective files.

## Error Handling

The API includes error handling middleware to handle both general and validation errors.

## Contributions and Issues

Feel free to contribute to the project by opening pull requests or reporting issues on the [GitHub repository](https://github.com/JoseAlbDR/store-api).

## License

This project is licensed under the [ISC License](LICENSE).
