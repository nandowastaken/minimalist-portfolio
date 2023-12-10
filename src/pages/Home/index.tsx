import "./styles.css";
import Navbar from "../../components/Navbar";
import BuildTogether from "../../components/BuildTogether";

export default function Home() {
  return (
    <div className="screen">
      <Navbar />

      <main className="main">
        <section className="introduction">
          <h1 className="whoIam">Hey, I'm Fernando - Fullstack Developer</h1>
          <p className="slogan">
            Unindo design e código, sigo criando projetos únicos.
          </p>
          <p className="status">
            <div className="dot"></div>
            Coding and currently listening to <span className="lofi">lofi</span>
          </p>
        </section>
      </main>

      <BuildTogether />
    </div>
  );
}
