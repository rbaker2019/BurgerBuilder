# Burger Builder

Following Maximilian Schwarzmüller's course on Udemy, [React - The Complete Guide (incl Hooks, React Router, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

## Notable deviations from the course

1. I am using the latest version (at the project instantiation) of react-scripts. This creates a simple functional component as a root application, which I have converted to a class based component. 

2. Because this version of react-scripts supports importing CSS as modules, I have not ejected the project. Instead, we name our custom CSS files using the `[ModuleName].module.css` format, and import accordingly.

3. I prefer using `React.Component` rather than having a named import for this class. To my knowledge this does not have an impact on performance.

4. Usually, though not always, I prefer to explicitly `return` values from functions, even when a single line lambda function would suffice. I will sometimes break this rule for in-line JSX or other areas where a single line function looks and feels better.

5. The Aux.js wrapper will be written as Auxillary.js, to make things easier on Windows.

6. I prefer to return early, such as in the `switch` statement in BurgerIngredient.js

7. I prefer functional components, unless there's a good reason to use classes, such as state management. Ex: BurgerIngredient will remain a functional component.