import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import PropertyList from "../../components/propertyList/PropertyList";
import Headers from '../../components/header/Headers'
import "./home.css";
import Footers from "../../components/footer/Footers";
import Carousel from '../../components/header/Carousel'
const Home = () => {
  return (
    <div>
      <Headers />
      <Header />
      <div className="homeContainer">
      <Carousel />
        <h1 className="homeTitle">Browse by Top Cities </h1>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <MailList />
        <Footers />
      </div>
    </div>
  );
};

export default Home;
