
#  Kanban Task Board 

A modern Trello-like Task Management Board built using **React + Vite**.

This project demonstrates advanced frontend concepts including:
- React State Management
- Drag and Drop (dnd-kit)
- Component Architecture
- Local Storage Persistence
- Search & Filter Functionality
- Priority-based UI Styling

##  Live Features

###  Core Features
- Add new tasks
- Delete tasks
- Three workflow columns:
  - To Do
  - In Progress
  - Done

###  Priority System
Each task can be assigned a priority:
-  High (Red Border)
-  Medium (Orange Border)
-  Low (Green Border)

###  Drag & Drop (Level 3 Feature)
Tasks can be smoothly dragged between columns using **@dnd-kit**.

###  Search Filter
Search bar filters tasks dynamically across all columns.

###  Local Storage Persistence
Tasks are saved in browser localStorage.
Data remains even after page refresh.

---

##  Tech Stack

- React (with Vite)
- JavaScript (ES6+)
- @dnd-kit/core
- @dnd-kit/sortable
- CSS (Modern UI Styling)

##  Project Structure

src/
├── components/
│ ├── AddTask.jsx
│ ├── Column.jsx
│ └── TaskCard.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx

## ⚙️ Installation & Setup

1️ Clone the repository

https://github.com/YOUR-USERNAME/kanban-task-board.git

2️ Navigate to project folder
cd kanban-task-board

3️ Install dependencies
npm install

4️ Run the project
npm run dev

Open in browser:
http://localhost:5173

##  Why This Project?

This project was built as part of an advanced frontend mission to practice modern React development techniques without direct DOM manipulation.

It follows the "React Way" — where UI updates automatically based on state changes.
# YouTube Link
kanban-board-eight-beta.vercel.app
# Live Demo Link
[kanban-board-eight-beta.vercel.app](https://kanban-board-eight-beta.vercel.app/)
# Screenshots
![Home Screen](week-5ss.png)
