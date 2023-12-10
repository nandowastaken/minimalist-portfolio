import "./styles.css";
import downArrow from "../../assets/icons/downArrow.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <p className="bigPart">Na²</p>
        <p className="smallPart">nana</p>
      </div>

      <div className="links">
        <button className="link">
          Sobre
          <img src={downArrow} alt="" />
        </button>

        <button className="link">
          Contato
          <img src={downArrow} alt="" />
        </button>
      </div>
    </nav>
  );
}
