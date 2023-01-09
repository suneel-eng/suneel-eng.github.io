import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import About from "./sections/about";
import Projects from "./sections/projects";
import english from "./translations/en.json";
import telugu from "./translations/te.json";
import hindi from "./translations/hi.json";
import kannada from "./translations/kn.json";

function getClientLocale() {
  let locale = navigator.language;
  return locale.slice(0, 2);
}
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    te: {
      translation: telugu,
    },
    hi: {
      translation: hindi,
    },
    kn: {
      translation: kannada,
    },
  },
  lng: getClientLocale(),
  fallbackLng: "en",
});

function App(): JSX.Element {
  return (
    <>
      <About />
      <Projects />
    </>
  );
}

export default App;
