import "./banner.css";
import BannerImage from '../../assets/bannerImage.jpeg'

const Banner = ({
  bannerTitle,
  bannerDescription,
  bannerButton,
  bannerSpan,
  isSpan = false,
}) => {
  return (
    <section className="banner">
        {/* <figure className="banner__figure">
            <img className='banner__image' src={BannerImage} alt="" />
        </figure> */}
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
