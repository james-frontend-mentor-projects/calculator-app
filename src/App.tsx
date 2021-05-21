import { useContext } from "react";
import { Calculator } from "./components/Calculator";
import ThemeContext from "./contexts/themeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`theme-${theme}`}>
      <main className="bg-background-main">
        <Calculator />
      </main>
    </div>
  );
}

export default App;
