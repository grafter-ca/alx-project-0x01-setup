# 🚀 Next.js + TypeScript + Tailwind CSS Project

This project is a modern web application built with **Next.js**, **TypeScript**, and **Tailwind CSS**. It demonstrates best practices in frontend development including reusable components, API integration, responsive design, and static site generation.

---

## 📦 Features

✅ Next.js app with TypeScript and Tailwind CSS  
✅ Dynamic routing and navigation  
✅ Fetch and display data from external APIs (JSONPlaceholder)  
✅ Reusable UI components (Button, Card, Modal)  
✅ Modal dialogs for adding posts and users  
✅ Type-safe code using TypeScript interfaces  
✅ Responsive design using Tailwind CSS utilities  
✅ Organized project structure following Atomic Design principles  
✅ ESLint configured for code quality

---

## 🛠 Tech Stack

- [Next.js](https://nextjs.org/) (v13+)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)

---

## 📁 Folder Structure

/components
/ui # Reusable UI elements (Button, Modal)
/posts # PostCard & PostModal
/users # UserCard & UserModal
/pages
index.tsx # Home page
posts.tsx # Posts page
users.tsx # Users page
_app.tsx # Global layout and providers
/types
post.ts # Post interface
user.ts # User interface
/utils
api.ts # API functions
/styles
globals.css # Tailwind global styles
/public
logo.svg # Static assets


---

## 📚 Best Practices

- 📦 **Atomic Design**: Components organized as Atoms (UI), Molecules (Cards), Organisms (Lists)  
- 🛡 **Type Safety**: All props and state are typed with TypeScript interfaces  
- 🎨 **Styling**: Tailwind CSS utilities for consistent and responsive UI  
- 🪝 **State Management**: React hooks (`useState`, `useReducer`) for local state  
- 📂 **Clean Project Structure**: Feature/domain-based organization  
- 🚦 **Code Quality**: ESLint for linting and Prettier for formatting

---

## 🚀 Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
npm install

# Run the development server
npm run dev
