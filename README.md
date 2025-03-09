# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Installation Process

Follow these steps to install and set up your Vite + React project with Tailwind CSS, Material UI components, Material UI icons, and Axios.

# Live link

https://weatherappdhaka.netlify.app/

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## First

```
npm i

npm run dev
```

then

```
npm run build

npm start
```

## Step 1: Create a Vite + React Project

```sh
npm create vite@latest my-vite-app --template react-ts
# or
yarn create vite@latest my-vite-app --template react-ts
cd my-vite-app
```

## Step 2: Install Dependencies

### Install Tailwind CSS

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add Tailwind to `src/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Install Material UI Components and Icons

```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material
```

### Install Axios

```sh
npm install axios
```

## Step 3: Start the Development Server

```sh
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173/`.

You're all set! 🎉

# Why React, Material-UI, Material-UI Icons, Tailwind CSS, and Axios?

In this project, I chose **React**, **Material-UI**, **Material-UI Icons**, **Tailwind CSS**, and **Axios** for the following reasons:

- **React**: It’s fast, flexible, and perfect for building interactive UIs. Its component-based structure helps keep things organized and reusable.
- **Material-UI**: Provides a set of pre-built, customizable components based on Google’s Material Design, which makes creating a consistent, modern UI super easy. It’s also responsive and accessible.

- **Material-UI Icons**: It offers a large collection of easy-to-use icons that can be easily customized and styled, helping enhance the UI without needing to search for external resources.

- **Tailwind CSS**: A utility-first CSS framework that lets me style elements quickly using simple classes. It’s highly customizable, efficient, and great for building responsive designs without extra custom CSS.

- **Axios**: A lightweight and easy-to-use library for making HTTP requests. It simplifies the process of fetching data and handling responses, with built-in features like interceptors and error handling.

Together, these tools let me build fast, beautiful, and maintainable apps with a smooth development process.
