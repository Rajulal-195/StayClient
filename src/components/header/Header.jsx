import {
  faBed,
  faCalendarDays,
  faPerson
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Header = ({ type }) => {
  // const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [cities, setCity] = useState([])
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [destination, setDestination] = useState(null);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };




  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setDestination(null); // Clear selected item when typing

    if (value.length > 0) {
      // Filter the array based on input
      const filtered = cities.filter((city) =>
        city.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle selecting an item from suggestions
  const handleSelectItem = (item) => {
    setQuery(item);
    setDestination(item);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  // Handle keyboard events (up, down, enter)
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      // Navigate down in suggestions
      if (activeSuggestionIndex < filteredSuggestions.length - 1) {
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    } else if (e.key === 'ArrowUp') {
      // Navigate up in suggestions
      if (activeSuggestionIndex > 0) {
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      }
    } else if (e.key === 'Enter') {
      // Select the active suggestion
      if (filteredSuggestions.length > 0) {
        handleSelectItem(filteredSuggestions[activeSuggestionIndex]);
      }
    }
  };
  // Fetch suggestions from API
  const getDestination = async () => {
    try {
      const res = await axios.get(`https://stayback1.onrender.com/api/hotels`);
      // Assuming `res.data.city` contains an array of city names
      setCity(res.data.map(item => item.city));
    } catch (error) {
      console.error("Failed to fetch suggestions:", error);
    }
  };

  console.log("city data is ", cities)

  // Fetch suggestions once component mounts
  useEffect(() => {
    getDestination();
  }, []);


  return (
    <>
<div className="container">

      <div className="head ms-5 pt-5" id="searching">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >

          {type !== "list" && (
            <>

              <div className="headerSearch row setting ">
                <div className="headerSearchItem col-lg-3 set ">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />


                  <input className="setinput"
              onClick= {() => setOpenDate(openDate)}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Where are you going?"
                    
                  /><br />

                </div>

                <div className="headerSearchItem col-lg-3 set ">

                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span
                    onClick={() => setOpenOptions(!openOptions)}
                    className="headerSearchText"
                  >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.adult <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="headerSearchItem col-lg-3 set ">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span
                    onClick={() => setOpenDate(!openDate)}
                    className="headerSearchText"
                  >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                    dates[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                  </span>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                <div className="headerSearchItem col-lg-1 set  ps-2">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="setsuggestion ">

        {showSuggestions && filteredSuggestions.length > 0 && (
          <ul>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                
                onClick={() => handleSelectItem(suggestion)}

              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
                </div>
    </>
  );
};

export default Header;






