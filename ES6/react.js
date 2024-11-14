/**
 * A task runner is a tool that automates repetitive tasks commonly involved in development workflows, particularly for web development.
 * It helps with tasks like minification, compilation, testing, linting, deployment, and other processes that need to be executed regularly.
 */

// Library, for UI
// Based on component based architecture
// MVC - Model, View, Controller

// Uses additional libraries for routing and data handling
// Routing - React Router Dom <http:/>/localhost:9090/user/1981>
// Data(Model) - Redux

// Framework - not a framework as we have many dependencies

//Component - (reusable components, to split at its minimal)

//Components are of two types -
//Class based component - this inherits from the component root library and follows the react lifecycle
//uses state object to define the changeable parts or define the component <this.state = {}>
//uses this.setState({}) API/CallBack method, which works in async way to update the state and call lifecycle or react component
//lifecycle methods include render, ShouldComponentUpdate, ComponentDidMount etc.
//render - method once called will create new virtual dom

//Functional component - this is static component used to render the data passed via props
// with the evolution of react, react-redux -hooks this is also able to update data
