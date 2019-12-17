# Burger Builder

Following Maximilian Schwarzmüller's course on Udemy, [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Notable deviations from the course

1. I am using the latest version (at the project instantiation) of react-scripts. This creates a simple functional component as a root application, which I have converted to a class based component. **Because this version supports importing CSS as modules**, I have not ejected the project.

2. I prefer using `React.Component` rather than having a named import for this class. To my knowledge this does not have an impact on performance.

3. Usually, though not always, I prefer to explicitly `return` values from functions, even when a single line lambda function would suffice. I will sometimes break this rule for in-line JSX or other areas where a single line function looks and feels better.