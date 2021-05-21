import { CSSProperties, useContext, useEffect, useRef } from "react";
import ThemeContext, { Theme } from "../../contexts/themeContext";
import { ClickableLabel } from "./ClickableLabel";
import { ConcealedRadio } from "./ConcealedRadio";

function switchStyle(theme: Theme): CSSProperties {
  switch (theme) {
    case 1:
      return {
        left: 5,
      };
    case 2:
      return {
        left: "50%",
        transform: "translate(-50%, -50%)",
      };
    case 3:
      return {
        right: 5,
      };
  }
}

interface SelectorProps {
  textColor: string;
}
export const CalculatorThemeSelector = ({ textColor }: SelectorProps) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      const clickListener = (e: MouseEvent) => {
        const rightOfElement = currentRef.getBoundingClientRect().right;
        const leftOfElement = currentRef.getBoundingClientRect().left;
        const mousePositionRelativeToElement = e?.clientX ?? 0;

        const mousePos = rightOfElement - mousePositionRelativeToElement;
        const fullWidth = rightOfElement - leftOfElement;
        if (mousePos / fullWidth < 1 / 3) {
          setTheme(3);
        } else if (mousePos / fullWidth < 2 / 3) {
          setTheme(2);
        } else {
          setTheme(1);
        }
      };
      currentRef.addEventListener("click", clickListener);
      return () => {
        currentRef.removeEventListener("click", clickListener);
      };
    }
  }, [setTheme]);

  return (
    <div className="theme-selector">
      <div className={`theme-selector-title text-text-${textColor}`}>THEME</div>
      <div className="toggle">
        <div className="toggle-container">
          {[1, 2, 3].map((value) => (
            <span key={value}>
              <ConcealedRadio value={value} selected={theme} handleChange={() => setTheme(value)} />
              <ClickableLabel value={value} textColor={textColor} handleChange={() => setTheme(value)} />
            </span>
          ))}
        </div>
        <div className="toggle-selection-wrapper bg-background-keypad" ref={ref}>
          <div className="toggle-selection bg-keys-secondary" style={switchStyle(theme)}></div>
        </div>
      </div>
    </div>
  );
};
