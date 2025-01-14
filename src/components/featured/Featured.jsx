import Loader from "../../Alertwindow/Loader";
import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "https://stayback1.onrender.com/api/hotels/countByCity?cities=jaipur,kota,Delhi,Noida,Bhawani mandi"
  );

  return (


        <div className="container-md featured  ">
        <div className="marquee-container">
    <div className="marquee-content">
          <div className="row ">
            {loading ? (
              <Loader />
            ) : (
              <>
                <div className="settlement">
                  <div className="featuredItem ">
                    <img
                      src="images/jaipur.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Jaipur</h3>
                      <h6>{data[0]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem ">
                    <img
                      src="Images/kota.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Kota</h3>
                      <h6>{data[1]} properties</h6>
                    </div>
                  </div>
                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Delhi</h3>
                      <h6>{data[2]} properties</h6>
                    </div>
                  </div>
                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Noida</h3>
                      <h6>{data[3]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Bhawani mandi</h3>
                      <h6>{data[4]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Noida</h3>
                      <h6>{data[4]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Noida</h3>
                      <h6>{data[4]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem ">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Noida</h3>
                      <h6>{data[4]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Noida</h3>
                      <h6>{data[4]} properties</h6>
                    </div>
                  </div>

                  <div className="featuredItem">
                    <img
                      src="images/delhi.jpg"
                      alt=""
                      className="featuredImg"
                    />
                    <div className="featuredTitles">
                      <h3>Bhawani Mandi</h3>
                      <h6>{data[5]} properties</h6>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
