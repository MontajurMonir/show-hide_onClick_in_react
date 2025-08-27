import { HiOutlineBars2 } from "react-icons/hi2";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [showCategory, setCategory] = useState(false);
  const dropdownRef = useRef(null)

  const handleCategory = () => {
  // setCategory(true) // Only show, no toggle back

  // setCategory(!showCategory)
  setCategory(prev => !prev)

}

const handleClickOutside =(event)=>{
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setCategory(false)
    
  }
}
useEffect(()=>{
  document.addEventListener("mousedown",handleClickOutside);
return()=>{
  document.removeEventListener("mousedown",handleClickOutside)
}
},[])
  return (
    <>
      <div className="">
        {/* onClick={()=> setCategory(!showCategory)} */}
        <div ref={dropdownRef} onClick={handleCategory} className="monir">
          <HiOutlineBars2 />
          <h3>Shop by Category</h3>
        </div>


{showCategory && (
        <ul>
          <li>beauty</li>

          <li>groceries</li>

          <li>fragrances</li>

          <li>furniture</li>
        </ul>
          )
              }
      </div>
    </>
  );
}

export default App;
