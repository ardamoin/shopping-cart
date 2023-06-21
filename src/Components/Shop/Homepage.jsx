import Page from "../UI/Page";
import { Link } from "react-router-dom";
import hasbikMain from "../../Assets/hasbulla_main.jpg";

const Homepage = () => {
  return (
    <Page className="flex items-center justify-center gap-[100px] min-w-[600px]">
      <div className="flex flex-col items-start gap-5">
        <h1 className="font-barlow text-4xl font-semibold text-primary">
          For all things Hasbulla
        </h1>
        <p className="font-montserrat">
          Check out our vast selection of Hasbulla merch
        </p>
        <Link
          to="/products"
          className="mb-2 mr-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-2.5 text-center font-montserrat text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800"
        >
          Shop Now
        </Link>
      </div>
      <img src={hasbikMain} alt="Hasbulla homepage img" className="h-3/4 rounded-full"></img>
    </Page>
  );
};

export default Homepage;
