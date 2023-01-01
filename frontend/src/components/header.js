import style from "../styles/Header.module.css";
import pb from "../images/PB.png";
import tech from "../images/TECH.png";
function Header() {
  return (
    <div className={style.headerContainer}>
      {/* Dark stripat top of page */}
      <div className={style.colourStrip}></div>
      {/* Contains logo, search bar, sign in and create account button*/}
      <div>
        <img src={pb} alt="PB of the PB tech logo" />
        <img src={tech} alt="Tech of the PB tech logo" />
        <input type="search" placeholder="Enter the name of the laptop" />
        <button>Sign in</button>
        <button>create account</button>
      </div>
      {/* contains hamburger menu, nav bar and cart icon*/}
      <div>ininini</div>
    </div>
  );
}
export default Header;
