import "../styles/Banner.css";

import Recommendation from "./Recommendation";

const Banner = ({ children }) => {
  return (
    <div className="lmj-banner">
      {children}
      <Recommendation />
    </div>
  );
};

export default Banner;
