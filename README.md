# Temp Online Care

A modern web application built with Next.js, React, and TypeScript.

## 🚀 Technologies

- [Next.js](https://nextjs.org/) - React framework for production
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📦 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd temp-online-care
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Environment Variables

This project uses environment variables for configuration. To set up your environment:

1. Create a `.env.local` file in the root directory:
```bash
touch .env.local
```

2. Add the required environment variables to `.env.local`:
```env
# Base path for the project (used for asset paths)
NEXT_PUBLIC_PROJECT_ROOT=/online-care
```

3. For production deployment, make sure to set these environment variables in your hosting platform.

> **Note**: The `.env.local` file is already included in `.gitignore` to prevent committing sensitive information. Make sure to never commit this file to version control.

## 🛠️ Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Runs the built application
- `npm run lint` - Runs ESLint to check for code issues

## 📁 Project Structure

```
temp-online-care/
├── src/              # Source files
├── public/           # Static assets
├── .next/            # Next.js build output
├── node_modules/     # Dependencies
├── package.json      # Project metadata and dependencies
├── tsconfig.json     # TypeScript configuration
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js # PostCSS configuration
```

## 🔧 Development

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Tailwind CSS for styling
- Next.js for server-side rendering and routing

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details. 