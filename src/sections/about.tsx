import { useTranslation } from "react-i18next";

function About(): JSX.Element {
  const { t } = useTranslation();

  const onDownload = (): void => {
    let anchor: HTMLAnchorElement = document.createElement("a");
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("download", "true");
    anchor.setAttribute(
      "href",
      process.env.REACT_APP_RESUME_DOWNLOAD_URL as string
    );
    anchor.click();
  };

  return (
    <section
      id="about"
      className="width_100% height_100vh display_flex justify-content_center align-items_center background-color_primary"
    >
      <div>
        <h1 className="header color_primary">
          <span className="display_block font-size_large font-weight_normal media:mobile--font-size_medium">
            {t("hello")}, {t("iam")}
          </span>
          <span className="display_block font-weight_normal font-size_double-extra-large media:mobile--font-size_extra-large">
            {t("suneel_simhadri")}
          </span>
        </h1>
        <p
          className="text-align_center font-size_medium media:mobile--font-size_small"
          style={{ marginTop: "1rem" }}
        >
          {t("senior_software_engineer")}
        </p>
        <div className="text-align_center" style={{ marginTop: "3rem" }}>
          <button
            className="color_primary background-color_primary border-color_primary on-active--background-color_primary-invert on-active--color_primary-invert cursor_pointer"
            style={{ borderWidth: "1px", padding: "0.5rem" }}
            onClick={(e) => onDownload()}
          >
            {t("download_resume")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
