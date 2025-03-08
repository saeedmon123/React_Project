
import { Link } from "react-router";


function Navbar() {
  

    return (
        <>
          
    <nav className="navbar">
     
  
    <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
    </div>
    
    </nav>
    </>
    );
    }

export default Navbar