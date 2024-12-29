const employees = [
  {
    id: "E001",
    name: "Ahmed",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        description: "Complete project documentation",
        date: "2024-11-06",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        description: "Review team performance",
        date: "2024-11-07",
        category: "Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        description: "Client meeting for feedback",
        date: "2024-11-08",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "E002",
    name: "Fatima",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        description: "Prepare sales report",
        date: "2024-11-05",
        category: "Reporting",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        description: "Update CRM records",
        date: "2024-11-06",
        category: "CRM",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        description: "Organize client workshop",
        date: "2024-11-09",
        category: "Workshop",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "E003",
    name: "Aisha",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        description: "Design new logo",
        date: "2024-11-06",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        description: "Prepare social media calendar",
        date: "2024-11-07",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        description: "Meet with content team",
        date: "2024-11-08",
        category: "Team Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: "E004",
    name: "Omar",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        description: "Perform code review",
        date: "2024-11-06",
        category: "Code Review",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        description: "Optimize database queries",
        date: "2024-11-07",
        category: "Optimization",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        description: "Update API documentation",
        date: "2024-11-09",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: "E005",
    name: "Zainab",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        description: "Set up virtual machines",
        date: "2024-11-06",
        category: "Infrastructure",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        description: "Monitor server health",
        date: "2024-11-07",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        description: "Backup database",
        date: "2024-11-08",
        category: "Database",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: "A001",
    email: "admin@example.com",
    password: "123",
  },
];
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
