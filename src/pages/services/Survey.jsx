import GalleryComponent from "./GalleryComponent"
import TextComponent from "./TextComponent"
import TestImage1 from "../../assets/water-is-life.jpg";
import TestImage2 from "../../assets/bannerImage.jpeg";
import TestImage3 from "../../assets/landing.jpg";


const Survey = () => {
  const imageList = [
    {
      id: 1,
      src: TestImage1,
      alt: "Water is life"
    },
    {
      id: 2,
      src: TestImage2,
      alt: "Banner"
    },
    {
      id: 3,
      src: TestImage3,
      alt: "Banner"
    },
    {
      id: 4,
      src: TestImage2,
      alt: "Banner"
    },
  ];
  return (
    <section className="survey" id="hydrogeological-survey">
      <TextComponent />
      <GalleryComponent imageList={imageList}/>
    </section>
  )
}

export default Survey