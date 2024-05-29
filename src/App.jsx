import { useState } from "react";
import people from "./data";
import {FaChevronCircleLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const App = () => {
  const [index, setindex] = useState(0);
  const {name,job,text,image }= people[index]

  console.log(name)

  return (

    <main>
      <article className="review">
        <div className="img-container" >
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="text">{text}</p>

      </article>
    </main>
  );
};
export default App;
