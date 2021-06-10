import styles from "../styles/Home.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
//import { vscDarkPlus as theme } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeString = `const listenScrollEvent = (e) => {
  if (window.scrollY > 199) {
    setHeaderBg("black");
  } else {
    setHeaderBg("#0070f3");
  }
};`;

export default function Home() {
  return (
    <div className={styles.container}>
      <SyntaxHighlighter language="javascript">{codeString}</SyntaxHighlighter>
    </div>
  );
}
