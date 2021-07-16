import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Error 404</h2>
            <p>Sorry that page cannot be found</p>
            <Link to="/">Go to the Home Page</Link>
        </div>
     );
}
 
export default NotFound;