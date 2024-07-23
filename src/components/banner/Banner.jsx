import "./banner.css";

const Banner = ({
  bannerTitle,
  bannerDescription,
  bannerButton,
  bannerSpan,
  isSpan = false,
}) => {
  return (
    <section className="banner">
      <div className="banner__container">
        {isSpan && <span className="banner__span">{bannerSpan}</span>}
        <h1 className="banner__title">{bannerTitle}</h1>
        <p className="banner__description">{bannerDescription}</p>
        <button className="banner__button" type="submit">
          {bannerButton}
        </button>
      </div>
    </section>
  );
};

export default Banner;
