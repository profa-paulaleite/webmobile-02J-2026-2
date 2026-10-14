import OlaMundo from "./components/OlaMundo";
import Saudacao from "./components/Saudacao";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1> Testando NextJS </h1>
      <OlaMundo />
      <Saudacao nome="Catarina" />
    </main>
  );
}
