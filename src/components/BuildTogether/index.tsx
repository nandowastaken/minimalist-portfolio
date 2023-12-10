import "./styles.css";
import buildTogether from "../../assets/icons/buildTogether.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Linkedin from "../../assets/icons/linkedin.svg";
import Github from "../../assets/icons/github.svg";

export default function BuildTogether() {
  return (
    <div className="buildTogether">
      <div className="buildTogetherContent">
        <h2 className="buildTogetherTitle">VAMOS CONSTRUIR ALGO JUNTOS?</h2>
        <p className="buildTogetherDescription">
          Se você tem algum projeto em mente, sinta-se à vontade para me enviar
          uma mensagem.
        </p>
        <button className="buildTogetherButton">
          Fale comigo <img src={buildTogether} />
        </button>
      </div>

      <div className="socialMedia">
        <button className="socialMediaButton">
          <img src={Instagram} alt="" />
        </button>

        <button className="socialMediaButton">
          <img src={Linkedin} alt="" />
        </button>

        <button className="socialMediaButton">
          <img src={Github} alt="" />
        </button>
      </div>
    </div>
  );
}
