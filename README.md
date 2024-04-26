# **Project Setup Guide**

## **Introduction**

This guide will walk you through the process of setting up and running a project using Vite, React, Tailwind CSS, React Router, and React Icons.

**Prerequisites**

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14.0.0 or newer)
- npm (v6.0.0 or newer) or Yarn (v1.0.0 or newer)

**Step 1: Create a new React project**

Open your terminal and run the following command to create a new React project using the Vite template:

```bash
npx create-vite@latest my-react-app --template react
Replace my-react-app with the desired name for your project.

**Step 2: Navigate to the project directory**

Once the project is created, navigate into the project directory:

bash
Copy code
cd my-react-app

**Step 3: Install dependencies**

Install project dependencies using npm or Yarn:

bash
Copy code
npm install
# or
yarn

**Step 4: Install additional dependencies**

Install Tailwind CSS, React Router, and React Icons:

bash
Copy code
npm install tailwindcss @headlessui/react @heroicons/react
npm install react-router-dom
npm install react-icons

**Step 5: Start the development server**

To start the development server, run:

bash
Copy code
npm run dev
# or
yarn dev

This command will launch the development server, and your React application will be available at `http://localhost:3000` by default.

**Step 6: Build for production**

When you're ready to build your project for production, run:

-npm run build
or
-yarn build

Additional Resources

For more information on how to use Vite with React, Tailwind CSS, React Router, and React Icons, refer to the official documentation:

https://vitejs.dev/

https://reactjs.org/

https://tailwindcss.com/docs/guides/vite

https://www.npmjs.com/package/react-router

https://www.npmjs.com/package/react-icons

