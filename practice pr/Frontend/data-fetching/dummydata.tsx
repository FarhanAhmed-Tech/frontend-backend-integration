import React from "react";

// Dummy frontend TSX file for GitHub language label
const App: React.FC = () => {
  console.log("Frontend connected with backend");

  // Sample variables
  const appName: string = "Fullstack Integration";
  const version: string = "1.0.0";

  // Sample function: greet user
  const greetUser = (name: string): string => `Hello, ${name}! Welcome to ${appName}.`;
  console.log(greetUser("Farhan"));

  // Sample array and loop
  const users: string[] = ["Ali", "Sara", "Ahmed", "Zara"];
  users.forEach((user, index) => {
    console.log(`User ${index + 1}: ${user}`);
  });

  // Sample object
  const project: { name: string; version: string; status: string } = {
    name: appName,
    version: version,
    status: "active",
  };

  // Function to print project details
  const projectInfo = (proj: typeof project) =>
    console.log(`Project: ${proj.name}, Version: ${proj.version}, Status: ${proj.status}`);
  projectInfo(project);

  // Sample conditional
  if (project.status === "active") {
    console.log("The project is running smoothly!");
  } else {
    console.log("The project is inactive.");
  }

  // Sample arrow function
  const multiply = (a: number, b: number): number => a * b;
  console.log("5 x 6 =", multiply(5, 6));

  // Sample function with default parameter
  const welcomeUser = (name: string = "Guest"): string => `Welcome, ${name}!`;
  console.log(welcomeUser());
  console.log(welcomeUser("Farhan"));

  // Another small function
  const sumArray = (arr: number[]): number => arr.reduce((total, num) => total + num, 0);
  console.log("Sum of numbers:", sumArray([10, 20, 30, 40]));

  return <div style={{ display: "none" }}></div>; // UI nahi dikhani, safe
};

export default App;
