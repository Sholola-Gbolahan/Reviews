import { useState } from "react";
import people from "./data";
import {FaBeer} from 'react-icons/fa'

const App = () => {
  const [index, setindex] = useState(3);
  const {name,job,text,image }= people[index]

  console.log(name)

  return (

    <div>
      
      <h2>Reviews Starter</h2>;
      <FaBeer className="beer" />
    </div>
  );
};
export default App;
