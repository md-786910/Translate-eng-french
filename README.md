# Vite React + Node.js Backend

This is the backend portion of a Vite.js and React.js application. It's built using Node.js to provide the server-side functionality for the application.

## Getting Started

To get started with the backend server, follow these steps:

1. **Install Dependencies**: Run `npm install` to install all required dependencies.

2. **Run the Server**: Execute `npm start` to start the backend server.

3. **Verify Connection**: Once the server is running, you can verify its connection by visiting `http://localhost:5000` in your browser.

## Development

For development purposes, you can run the server in watch mode to automatically restart it when changes are made. To do this, use `npm run dev`.

# Translate API Endpoint

## Endpoint

- **URL**: `/api/v1/translate`
- **Method**: POST

## Request Body

- **Text**: The text to be translated.
- **Source Language**: The language of the text to be translated.
- **Target Language**: The language to which the text should be translated.

```json
{
  "text": "Hello, how are you?",
  "source_language": "en",
  "target_language": "fr"
}


# Vite React Frontend

This is the frontend portion of a Vite.js and React.js application. It's built using Vite.js as the build tool and React.js for the user interface.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Install Dependencies**: Run `npm install` to install all required dependencies.

2. **Start Development Server**: Execute `npm run dev` to start the development server. This will automatically open the application in your default web browser.

3. **Build for Production**: Use `npm run build` to create a production build of the application. The build output will be located in the `dist` directory.
```
