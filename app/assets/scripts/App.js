import "../styles/styles.css";
import "lazysizes";
import Countdown from "./modules/Countdown";

new Countdown();

if (module.hot) {
  module.hot.accept();
}
