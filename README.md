# 🚀 FEWT PROJECT

<p align="center">
  <img src="https://img.shields.io/badge/ReactJS-19-blue?style=for-the-badge&logo=react" alt="ReactJS">
  <img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-orange?style=for-the-badge&logo=html5" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-blue?style=for-the-badge&logo=css3" alt="CSS3">
  <img src="https://img.shields.io/badge/React%20Router-7-red?style=for-the-badge&logo=reactrouter" alt="React Router">
  <img src="https://img.shields.io/badge/Node.js-Required-green?style=for-the-badge&logo=node.js" alt="Node.js">
</p>

<p align="center">
  <b>Front End Web Technology Practical Project using ReactJS</b>
</p>

<p align="center">
  A practical ReactJS project demonstrating components, arrays, forms, state management, and routing.
</p>

---

## 📸 Project Banner

<p align="center">
  <img src="https://placehold.co/1200x350/20232a/61dafb?text=FEWT+PROJECT+%7C+ReactJS" alt="FEWT Project Banner">
</p>

> 💡 **Note:** You can replace the banner above with your own project screenshot or custom banner image.

---

## 📖 About The Project

**FEWT PROJECT** is an academic project developed for the **Front End Web Technology (FEWT)** practical/lab work.

The project focuses on learning and implementing fundamental ReactJS concepts through practical examples.

It demonstrates how React can be used to build reusable components, display dynamic data, handle forms, manage state, and navigate between multiple pages.

---

## ✨ Features

<table>
<tr>
<td width="50%">

### ⚛️ React Components

* Functional components
* Reusable components
* JSX
* Component-based structure

</td>

<td width="50%">

### 📊 Dynamic Data

* JavaScript arrays
* `map()` method
* Dynamic rendering
* Faculty data
* Student data
* Product data

</td>
</tr>

<tr>
<td width="50%">

### 📝 Form Handling

* Input fields
* State management
* Event handling
* Capture user input
* Display submitted data

</td>

<td width="50%">

### 🧭 React Routing

* Multiple pages
* Navigation
* React Router
* Route configuration
* Page-to-page navigation

</td>
</tr>

<tr>
<td width="50%">

### 🎨 User Interface

* HTML5
* CSS3
* ReactJS
* Clean component structure
* Responsive-friendly layout

</td>

<td width="50%">

### 📚 Practical Learning

* React fundamentals
* Props
* State
* Events
* Arrays
* Forms
* Routing

</td>
</tr>
</table>

---

## 🛠️ Technologies Used

| Technology      | Purpose               |
| --------------- | --------------------- |
| ⚛️ ReactJS      | Front-end development |
| 🟨 JavaScript   | Application logic     |
| 🌐 HTML5        | Page structure        |
| 🎨 CSS3         | Styling               |
| 🧭 React Router | Page navigation       |
| 🟢 Node.js      | JavaScript runtime    |
| 📦 npm          | Package management    |
| 🔧 Git          | Version control       |
| 🐙 GitHub       | Source code hosting   |

---

## 📂 Project Structure

```text
FEWT_PROJECT/
│
├── public/
│   └── ...
│
├── src/
│   ├── components/
│   │   └── ...
│   │
│   ├── pages/
│   │   └── ...
│   │
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

# 📸 Screenshots

Add screenshots of your project here.

### 🏠 Home Page

<p align="center">
  <img src="screenshots/home.png" alt="Home Page" width="800">
</p>

### 📚 Faculty Data

<p align="center">
  <img src="screenshots/faculty.png" alt="Faculty Page" width="800">
</p>

### 👨‍🎓 Student Data

<p align="center">
  <img src="screenshots/student.png" alt="Student Page" width="800">
</p>

### 🛍️ Product Data

<p align="center">
  <img src="screenshots/product.png" alt="Product Page" width="800">
</p>

### 📝 Form Page

<p align="center">
  <img src="screenshots/form.png" alt="Form Page" width="800">
</p>

### 🧭 Routing / Navigation

<p align="center">
  <img src="screenshots/routing.png" alt="Routing Page" width="800">
</p>

> **Important:** Create a folder named `screenshots` in your project and put your actual screenshots inside it using the same filenames shown above.

---

# 🚀 Getting Started

Follow these steps to run the project on your computer.

## 1. Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Check Git:

```bash
git --version
```

---

## 2. Clone The Repository

Open Git Bash and run:

```bash
git clone https://github.com/PatelHeet009/FEWT_PROJECT.git
```

---

## 3. Open The Project

```bash
cd FEWT_PROJECT
```

---

## 4. Install Dependencies

```bash
npm install
```

This installs all required packages from `package.json`.

---

## 5. Start The Application

```bash
npm start
```

The application will normally run at:

```text
http://localhost:3000
```

Open the URL in your browser.

---

# 🧪 Available Commands

### Start Development Server

```bash
npm start
```

### Install Dependencies

```bash
npm install
```

### Build Project

```bash
npm run build
```

### Check Git Status

```bash
git status
```

### Add Changes

```bash
git add .
```

### Commit Changes

```bash
git commit -m "Update project"
```

### Push Changes

```bash
git push
```

---

# 📚 ReactJS Concepts Demonstrated

## 1. Components

React components are used to divide the application into reusable parts.

```jsx
function Home() {
  return <h1>Welcome to FEWT Project</h1>;
}
```

---

## 2. `map()` Method

The project demonstrates displaying array data using `map()`.

```jsx
const students = [
  { name: "Student 1", course: "B.Tech" },
  { name: "Student 2", course: "B.Tech" }
];

students.map((student) => (
  <p>{student.name}</p>
));
```

---

## 3. State

React state is used to store and update component data.

```jsx
const [name, setName] = useState("");
```

---

## 4. Form Handling

User input can be captured using React state.

```jsx
<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
```

---

## 5. Routing

React Router is used to navigate between different pages.

Example:

```jsx
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
```

---

# 🎯 Learning Objectives

After completing this project, the following concepts can be understood:

* ReactJS basics
* JSX
* Components
* Props
* State
* Event handling
* Forms
* Arrays
* `map()` method
* Dynamic rendering
* React Router
* Navigation
* Project organization
* Git and GitHub

---

# 🔄 Development Workflow

```text
Write React Code
       ↓
Run npm start
       ↓
Test Application
       ↓
Make Changes
       ↓
git add .
       ↓
git commit
       ↓
git push
       ↓
GitHub Repository
```

---

# 📌 Future Improvements

Possible future improvements include:

* Responsive design
* Better UI/UX
* Form validation
* Search functionality
* API integration
* Database integration
* Authentication
* Improved navigation
* Deployment using GitHub Pages or another hosting platform

---

# 🎓 Academic Information

| Information  | Details                  |
| ------------ | ------------------------ |
| Subject      | Front End Web Technology |
| Project      | FEWT PROJECT             |
| Technology   | ReactJS                  |
| Project Type | Academic / Practical     |
| Repository   | GitHub                   |

---

# 👨‍💻 Author

### Heet Patel

<p>
  <a href="https://github.com/PatelHeet009">
    <img src="https://img.shields.io/badge/GitHub-PatelHeet009-black?style=for-the-badge&logo=github" alt="GitHub">
  </a>
</p>

---

# ⭐ Support

If you find this project useful for learning ReactJS, consider giving the repository a ⭐ on GitHub.

---

## 📄 License

This project is created for **educational and academic purposes**.


