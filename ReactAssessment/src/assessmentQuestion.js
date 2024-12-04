//React Assessment 4th Dec-2024

//1. create a webpack setup, index html and one css file to show css in next questions
//2. how react renders dom in conservative manner - explain

// It prevent unnecessary re-rendering of the entire component. The component is structured into multiple node with virtual dom.
// When a component is updated, it update virtual dom and only make necessary changes to real dom.

//3. create a class component named - Success and show some quotes (messages) on success in it
//4. create a functional component SuccessChild, make it child of Success and pass Name and Address to it from Success
//5. create SuccessStory as another component, pass this as props in SuccessChild from Success component
//6. create UserSignIn component using uncontrolled way, should be class component
//7. explain how virtual dom works

//The Virtual DOM is an in-memory representation of the real DOM.
//It minimizes expensive DOM manipulations by comparing updates
//using a diffing algorithm, ensuring efficient and optimized UI rendering and performance.

//8. pass a random value from SuccessStory component back to Success
//9. Create a class component and show all the life cycle hooks/methods
//10. Make a state change, the state should be duplicate and then stop it to call render method to improve efficiency.
