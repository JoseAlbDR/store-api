
<div align="center">
<h1>GENERATED WITH AI</h1>
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>store-api
</h1>
<h3>◦ Empowering seamless e-commerce, one API at a time.</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style&logo=TypeScript&logoColor=white" alt="TypeScript" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
</p>
<img src="https://img.shields.io/github/languages/top/JoseAlbDR/store-api?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/JoseAlbDR/store-api?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/JoseAlbDR/store-api?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/JoseAlbDR/store-api?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents

- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The project is a store API built with Express.js and MongoDB. It allows users to perform CRUD operations on a collection of products. The core functionalities include retrieving products based on various query parameters, adding new products, updating existing products, and deleting products. The project's value proposition lies in providing a robust and scalable backend solution for managing and serving product data in a store application.

---

## ⚙️ Features

| Feature                | Description                                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **⚙️ Architecture**    | The codebase follows a typical server-side architecture with an Express server handling routes and interacting with a MongoDB database. Its modular structure separates concerns into different files. The provided product endpoints and database connection demonstrate good separation of concerns.                                                        |
| **📖 Documentation**   | The codebase includes useful comments in most files, providing explanations for functions and code blocks. However, comprehensive API documentation is missing, making it harder for developers to understand and use the API.                                                                                                                                |
| **🔗 Dependencies**    | It relies on notable dependencies like Express for server functionality, Joi for request parameter validation, and Mongoose as the MongoDB object modeling library. These dependencies enhance the development experience and contribute to the scalability and performance of the system.                                                                    |
| **🧩 Modularity**      | The codebase is organized into separate files, splitting responsibilities such as API routes, controllers, database connections, middleware, and models. However, some codes could be further modularized by extracting reusable logic into separate functions or utility modules.                                                                            |
| **✔️ Testing**         | The codebase lacks comprehensive tests. While some critical functionalities have been tested, overall coverage is minimal, with no integration tests. The addition of unit and integration tests would ensure more robust software development practices.                                                                                                     |
| **⚡️ Performance**    | The system's performance is dependent on external factors such as server hosting and MongoDB performance configurations. The codebase itself doesn't exhibit any significant performance concerns. However, careful optimization of database queries and server-side computations could enhance performance further.                                          |
| **🔐 Security**        | The codebase properly handles the most basic security concerns, such as parameter validation and error handling, preventing common vulnerabilities like injection attacks. However, more security measures, such as input sanitation and authentication/authorization, should be added to improve security.                                                   |
| **🔀 Version Control** | The codebase is hosted on GitHub, utilizing Git for version control. While it lacks clear documentation on the specific process, branches, pull requests, and commits provide rudimentary version history. Further documentation should be added to define branching strategies and guidelines.                                                               |
| **🔌 Integrations**    | The system integrates effectively with MongoDB, using the Mongoose library for data modeling and connection management. This integration allows seamless interactions with the database. Integration with external services like authentication or payment processors is not implemented in the current codebase.                                             |
| **📶 Scalability**     | The current architecture allows for horizontal scalability by adding more instances of the server behind a load balancer. Additionally, MongoDB's scalable nature supports expected future growth with appropriate database configuration. However, further optimization and structural improvements may be required as the user base and data size increase. |

---

## 📂 Project Structure

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [.eslintrc](https://github.com/JoseAlbDR/store-api/blob/main/.eslintrc)                                | This code snippet is a configuration file for ESLint, a popular tool for static code analysis. It extends recommended configurations for TypeScript and provides additional rules to enforce code style and best practices. It sets up rules such as requiring semicolons, ignoring explicit function return types and module boundaries, restricting template expressions and operands, and turning off unsafe member access. It also configures the parser for TypeScript and specifies the project's tsconfig.json file for type-checking. |
| [populate.ts](https://github.com/JoseAlbDR/store-api/blob/main/populate.ts)                            | The code snippet establishes a database connection and interacts with a "Product" model. It deletes all existing products, adds a fresh batch from "products" data, and logs the result. Finally, the process is gracefully terminated.                                                                                                                                                                                                                                                                                                       |
| [products.ts](https://github.com/JoseAlbDR/store-api/blob/main/products.ts)                            | This code snippet exports an array of product objects that contain information such as product name, price, company, and rating. The data represents a list of furniture products with their respective details.                                                                                                                                                                                                                                                                                                                              |
| [app.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\app.ts)                                  | This code snippet sets up an Express server with CRUD routes for a store API. Key functionalities include handling route requests, connecting to a database, implementing error handling, and validating query parameters using Joi. The server listens for incoming requests on a specified port when connected to the database.                                                                                                                                                                                                             |
| [products.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\controllers\products.ts)            | The provided code snippet is for a backend API endpoint that retrieves products based on different query parameters. It includes functions for both static and dynamic product retrieval, allowing querying by name, numeric filters, featured status, company, sorting, specific fields, and pagination. The response includes the number of hits and the retrieved products.                                                                                                                                                                |
| [connect.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\db\connect.ts)                       | This code snippet is a function that connects to a MongoDB database using a connection String extracted from the.env file.                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [error-handler.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\middleware\error-handler.ts)   | This code snippet is an error handling middleware function for an Express.js server. It logs the error to the console and returns a JSON response with a 500 status code and a message indicating that something went wrong, along with the error object.                                                                                                                                                                                                                                                                                     |
| [joi-validation.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\middleware\joi-validation.ts) | This code snippet defines a middleware function called "validateQuery" in an Express application. It receives a request and response object, and a next function. It extracts the query parameters from the request, validates them using a "validateProductQuery" function, and if invalid, sends a 400 response with error messages. If valid, it attaches the validated query to the request object and calls the next function to proceed to the next middleware.                                                                         |
| [not-found.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\middleware\not-found.ts)           | The code snippet is an exported function called "notFound" that sets the response status to 404 and sends a message indicating that the requested route does not exist.                                                                                                                                                                                                                                                                                                                                                                       |
| [product.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\models\product.ts)                   | This code snippet defines a mongoose schema for the "Product" model, with fields such as name, price, featured, rating, company, and createdAt. It also specifies required, default, and validation properties for these fields. The schema is then exported as the "Product" model.                                                                                                                                                                                                                                                          |
| [products.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\routes\products.ts)                 | This code snippet generates an Express router that handles two routes: "/" and "/static". The "getAllProducts" function from the productsController is invoked when a GET request is made to either of these routes.                                                                                                                                                                                                                                                                                                                          |
| [index.d.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\types\index.d.ts)                    | This code snippet defines interface extensions for the Express.Request and NodeJS.ProcessEnv namespaces, adding properties for productQuery, PORT, and DATABASE_URL, to be used in a TypeScript project.                                                                                                                                                                                                                                                                                                                                      |
| [interfaces.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\types\interfaces.ts)              | The code snippet introduces two interfaces, `IProduct` and `IProductQuery`, which define the structure of product data and product query parameters respectively. These interfaces are used to ensure type safety and consistency in handling product-related information. The `ICompany` type and `ProductName` type are also defined as optional parameters within the interfaces to provide flexibility in filtering and querying products.                                                                                                |
| [validation.ts](https://github.com/JoseAlbDR/store-api/blob/main/src\utils\validation.ts)              | This code snippet provides functions for validating product data and product query parameters. The product data validation ensures that the required fields are present and have the correct data types. The product query validation validates query parameters, such as sorting and filtering options, and ensures that they adhere to predefined rules.                                                                                                                                                                                    |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

### 📦 Installation

1. Clone the store-api repository:

```sh
git clone https://github.com/JoseAlbDR/store-api
```

2. Change to the project directory:

```sh
cd store-api
```

3. Install the dependencies:

```sh
npm install
```

### 🎮 Using store-api

```sh
npm run build && node dist/main.js
```

### 🧪 Running Tests

```sh
npm test
```

---

## 🗺 Roadmap

> - [x] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
