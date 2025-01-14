import { useEffect, useRef } from "react";
import Headers from "../header/Headers";
import "../propertyList/propertyList.css"
import Typed from "typed.js";
import { Link } from "react-router-dom";
const Listland = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hotel", "Hostel", "Guest House", "Apartment","Villa"],
      typeSpeed: 100,
      loop: true,
      loopCount: Infinity,
      cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (<>
    <Headers />
    <div className="Listland">

    <div className=" container Listland">
      <div className="row">
        
        <div className="col-md-6  p-3 bg">
          <h2 className=" change ">
            List <br />
            {" "}
            Your , <span className="ret bg-white" ref={el} />{" "}<br />
            on Staymenu
          </h2>

          <h6 className="masa p-2"> 
          &emsp;&emsp;&emsp;&emsp; " List your
            apartment
            hotel
            vacation home
            guest house
            bed & breakfast
            on Staymenu
            Whether hosting is your side passion, list your home today and quickly start earning more income...!"</h6>

        </div>
        <div className="col-md-6">
          <Link to="/Listland"><img src="images/aas.gif" className="nana" /></Link>
        </div>
      </div>

    </div>
    </div>
  </>
  );
};
export default Listland;