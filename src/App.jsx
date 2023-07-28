import img from "../public/images/illustration-hero.svg";
import img2 from "../public/images/icon-music.svg";
const App = () => {
  return (
    <div className="container">
      <img src={img} alt="image-hero" />

      <div className="text-container">
        <h3>Order Summary</h3>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
      <div className="plan-anual">
        <div>
          <img src={img2} alt="icon" id="icon" />
        </div>
        <div>
          <p>Annual Plan</p>
          <span>$59.99/year</span>
        </div>

        <a href="">Change</a>
      </div>
      <div className="payment">
        <a href="" className="proceed">
          Proceed to Payment
        </a>
        <a href="" className="cancel-order">
          Cancel Order
        </a>
      </div>
    </div>
  );
};

export default App;
