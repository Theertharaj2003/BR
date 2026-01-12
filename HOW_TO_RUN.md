# How to Run the School Operations Platform in VS Code

## Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **VS Code** - [Download here](https://code.visualstudio.com/)
- **Git** - [Download here](https://git-scm.com/)

## Step 1: Clone the Repository

Open VS Code terminal (`` Ctrl+` `` or `View > Terminal`) and run:

```bash
git clone https://github.com/Theertharaj2003/school.git
cd school
```

## Step 2: Install Dependencies

In the VS Code terminal, run:

```bash
npm install
```

This will install all required packages including:
- React
- TypeScript
- Tailwind CSS
- React Router
- Recharts
- And all other dependencies

## Step 3: Start the Development Server

Run the following command:

```bash
npm start
```

The application will automatically open in your default browser at `http://localhost:3000`

## Step 4: Login to the Application

The application has **5 different user roles**. Use these credentials to login:

### 🛡️ Super Admin
- **Email:** `superadmin@school.com`
- **Password:** `admin123`
- **Access:** Platform-wide management, all schools, subscriptions

### 🏫 School Admin
- **Email:** `admin@school.com`
- **Password:** `admin123`
- **Access:** Full school management, students, teachers, fees, exams

### 👨‍🏫 Teacher
- **Email:** `teacher@school.com`
- **Password:** `teacher123`
- **Access:** Student list, attendance marking, classes, homework, evaluations

### 🎓 Student
- **Email:** `student@school.com`
- **Password:** `student123`
- **Access:** Assignments, exams, attendance, fees

### 👨‍👩‍👧 Parent
- **Email:** `parent@school.com`
- **Password:** `parent123`
- **Access:** Child's attendance, fee payment, messages, performance

## Features by Role

### Super Admin Dashboard
- Platform health metrics
- School onboarding analytics
- Subscription management
- Feature usage tracking

### School Admin Dashboard
- Student & teacher management
- Attendance overview
- Fee collection tracking
- Exam scheduling
- Reports & analytics

### Teacher Dashboard
- **My Students** - View all students in your classes
- **Mark Attendance** - Quick attendance marking with Present/Absent/Late
- Today's classes schedule
- Homework assignments
- Pending evaluations

### Student Dashboard
- Attendance percentage
- Upcoming exams
- Homework due dates
- Fee status
- Performance tracking

### Parent Dashboard
- Child performance summary
- **Fee Payment** - Complete payment gateway with UPI, Card, Net Banking
- Attendance alerts
- Teacher messages

## Key Features Implemented

✅ **Authentication System** - Role-based login for 5 user types
✅ **Separate Pages** - Dedicated pages for Students, Teachers, Attendance, Fees, Exams
✅ **Payment Gateway** - Full payment screen in parent module with multiple payment methods
✅ **Teacher Student List** - Teachers can view all students in their classes
✅ **Attendance Marking** - Teachers can mark Present/Absent/Late for students
✅ **Dark Mode** - Toggle between light and dark themes
✅ **Mobile Responsive** - Works on all devices
✅ **TypeScript** - Fully typed codebase

## Project Structure

```
src/
├── components/
│   ├── layout/          # AppShell, Sidebar, Topbar
│   ├── ui/              # Reusable UI components
│   ├── charts/          # Chart components
│   └── ProtectedRoute.tsx
├── contexts/
│   └── AuthContext.tsx  # Authentication context
├── pages/
│   ├── auth/
│   │   └── LoginPage.tsx
│   ├── dashboards/      # Role-based dashboards
│   └── modules/         # Feature modules
│       ├── StudentListPage.tsx
│       ├── TeacherListPage.tsx
│       ├── TeacherStudentList.tsx
│       ├── AttendanceMarkingPage.tsx
│       └── ParentPaymentPage.tsx
├── theme/               # Theme configuration
├── hooks/               # Custom React hooks
└── data/                # Mock data
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

### `npm run lint`
Runs ESLint to check code quality

## Troubleshooting

### Port 3000 is already in use
If you see this error, either:
1. Stop the other process using port 3000
2. Or the app will prompt you to use a different port (usually 3001)

### Module not found errors
Run `npm install` again to ensure all dependencies are installed

### Build errors
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again
4. Run `npm start`

## VS Code Extensions (Recommended)

Install these extensions for better development experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **ESLint**
- **Prettier - Code formatter**
- **Auto Rename Tag**

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Check the terminal for build errors
3. Ensure all dependencies are installed
4. Try clearing browser cache

## Production Deployment

To deploy to production:

```bash
npm run build
```

The `build` folder will contain the optimized production build ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

---

**Repository:** https://github.com/Theertharaj2003/school.git

**Build Status:** ✅ Production Ready (203.46 KB gzipped)

**Last Updated:** January 12, 2026
