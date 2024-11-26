import { NavLink, useParams } from 'react-router-dom'

const techSummaries = {
  webpack:
    'Webpack is a module bundler for JavaScript applications. It bundles JavaScript files for browser usage and can also optimize and transform resources like images, CSS, and HTML. Webpack offers powerful features like code splitting, hot module replacement, and tree shaking, which help improve performance and the developer experience in modern web applications.',

  react:
    'React is a popular JavaScript library for building user interfaces, primarily for single-page applications. Developed by Facebook, React allows developers to create reusable UI components that efficiently update in response to data changes, using a virtual DOM for optimal performance. It promotes a declarative, component-based approach to building interactive UIs.',

  router:
    'A Router (often associated with React Router in the React ecosystem) is a library or tool that manages navigation in single-page applications (SPAs). It enables developers to map URL paths to components and handles the routing logic, allowing users to navigate between different views or pages without triggering a full page reload. Routers typically support features like nested routes, dynamic parameters, and route guards.',

  virtualDom:
    'The Virtual DOM is an in-memory representation of the actual DOM elements in the browser. It allows frameworks like React to efficiently update the UI by comparing the current Virtual DOM to a new version and then only applying the minimal changes to the real DOM, reducing performance bottlenecks and enhancing rendering speed.',

  propTypes:
    'PropTypes is a type-checking tool for validating the props passed to React components. It helps catch bugs by ensuring that the data passed into components matches the expected types (e.g., string, number, array). PropTypes can be defined for each prop to enforce correct usage and improve the development workflow by providing warnings in development mode when prop types are mismatched.',
}

export const Topics = (props) => {
  const { topicId } = useParams()
  console.log(topicId)
  return (
    <div>
      <div>
        <NavLink to="/topics/webpack" className="button" activeclassname="true">
          Webpack
        </NavLink>
        <NavLink to="/topics/react" className="button" activeclassname="true">
          React
        </NavLink>
        <NavLink to="/topics/router" className="button" activeclassname="true">
          Router
        </NavLink>
        <NavLink to="/topics/virtualDom" className="button" activeclassname="true">
          Virtual Dom
        </NavLink>
        <NavLink to="/topics/propTypes" className="button" activeclassname="true">
          PropTypes
        </NavLink>
      </div>
    </div>
  )
}
