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
          <a href="https://www.instagram.com/nan.tsx" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </button>

        <button className="socialMediaButton">
          <a href="https://www.linkedin.com/in/nandowastaken/" target="_blank">
            <img src={Linkedin} alt="" />
          </a>
        </button>

        <button className="socialMediaButton">
          <a href="https://github.com/nandowastaken" target="_blank">
            <img src={Github} alt="" />
          </a>
        </button>
      </div>
    </div>
  );
}
