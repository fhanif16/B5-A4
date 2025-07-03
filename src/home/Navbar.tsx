
import { Link } from "react-router";
import logo from "../assets/logo.png"


export default function Navbar() {
  return (
    <nav  className=" mx-auto h-20 flex justify-between gap-3 px-5">
<div >
  
        <img  className ="w-20 h-20 "src={logo} alt="" /> 
</div>

<div className=" mt-5 flex gap-x-4">
    
<Link  className="hover:underline" to="/"> All Books</Link>
 <Link className="hover:underline" to="/addbook">
       Add Book
      </Link>
      <Link className="hover:underline" to="/borrowbook">
       Borrow Book
      </Link>
</div>

     
     
      
    </nav>
  );
}