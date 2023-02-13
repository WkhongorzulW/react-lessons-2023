import { useEffect } from "react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { useFetch } from "../context/UseFetch";

export default function Body() {
  const URL = "https://dog.ceo/api/breeds/image/random";

  const { theme } = useTheme();
  const { response, error } = useFetch(URL, {});

  const [styleClass, setStyleClass] = useState();

  useEffect(() => {
    setStyleClass(`${theme} middle-container`);
  }, [theme]);
  return (
    <div className={styleClass}>
      <p>Body</p>
      {response.message && <img src={response.message} alt="dog" width={400} />}
    </div>
  );
}
