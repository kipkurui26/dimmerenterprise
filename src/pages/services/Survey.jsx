import GalleryComponent from "./GalleryComponent";
import surveyImage1 from '../../assets/survey2.jpg'
import surveyImage2 from '../../assets/survey1.jpg'
import surveyImage3 from '../../assets/survey3.jpeg'
import surveyImage4 from '../../assets/survey4.webp'
import surveyImage5 from '../../assets/surveykit.jpg'
import TextComponent from "./TextComponent"



const Survey = () => {
  const imageList = [
    {
      id: 1,
      src: surveyImage1,
      alt: "Hydrogeological Survey 1",
    },
    {
      id: 2,
      src: surveyImage2,
      alt: "Hydrogeological Survey 2",
    },
    {
      id: 3,
      src: surveyImage3,
      alt: "Hydrogeological Survey 3",
    },
    {
      id: 4,
      src: surveyImage4,
      alt: "Hydrogeological Survey 4",
    },
    {
      id: 5,
      src: surveyImage5,
      alt: "Hydrogeological Survey 5",
    },
  ];
  return (
    <section className="survey" id="hydrogeological-survey">
      <TextComponent />
      <GalleryComponent imageList={imageList} />
    </section>
  )
}

export default Survey