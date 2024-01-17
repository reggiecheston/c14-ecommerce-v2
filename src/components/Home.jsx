import React from "react";
import "../styles/index.css";
// import { BrowserRouter as Link} from "react-router-dom";

/*
LINKS FOR CAROUSEL
<Link to="/shop?category=accent-chairs">Shop Accent Chairs</Link>
<Link to="/shop?category=sofas">Shop Sofas</Link>
<Link to="/shop?category=coffee-tables">Shop Coffee Tables</Link>
<Link to="/shop?category=lamps">Shop Lamps</Link>
*/

export default function Home() {
  return (
    <div>
      <section className="hero-section">
        <div className="hero-section__text">
          <h2 className="hero-section__text--header">
            Simplicity meets luxury
          </h2>
          <p className="hero-section__text--copy">
            Scroll to shop our featured collection
          </p>
        </div>
      </section>
    </div>
  );
}
