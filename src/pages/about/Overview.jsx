import TestImage from "../../assets/image1.jpg";

const Overview = () => {
  const paragraphText = [
    {
      id: 1,
      text: "Dimmer Enterprises LTD is a leading Borehole Drilling Firm located in Nairobi, Kenya. With over 10 years of industry experience, we specialize in providing high-quality water solutions for residential, commercial, and industrial clients.",
    },
    {
      id: 2,
      text: "Our dedication to quality and sustainability has established us as a trusted name in the industry. We offer a comprehensive range of services, including borehole drilling, hydrogeological surveys, pump and solar installation, and maintenance.",
    },
    {
      id: 3,
      text: "Our team of experienced professionals is committed to delivering reliable and efficient water solutions that meet the unique needs of our clients. Reach out to us today to learn more about how we can help you with your water needs.",
    },
  ];
  return (
    <div className="about__overview">
      {/* <h1 className="about__overview--title">
        <span className="about__overview--span">Dimmer</span> Enterprises
        Limited
      </h1> */}
      <div className="about__container">
        <div className="about__overview--col">
          {paragraphText.map(({ id, text }) => (
            <p className="about__overview--text" key={id}>
              {text}
            </p>
          ))}
        </div>
        <figure className="about__figure">
          <img
            className="about__figure--image"
            src={TestImage}
            alt="About Dimmer Enterprises LTD"
          />
        </figure>
      </div>
    </div>
  );
};

export default Overview;
