import TestImage from "../../assets/image1.jpg";

const Equipments = () => {
    const equipmentsList = [
        {
            id: 1,
            image: TestImage,
            title: "Borehole Rig",
            description: "Our advanced borehole rigs are designed for precision and efficiency, capable of drilling through various soil types and rock formations. These rigs ensure accurate and reliable access to underground water resources, providing a sustainable solution for water extraction."
        },
        {
            id: 2,
            image: TestImage,
            title: "Test Pumping Unit",
            description: "Our state-of-the-art test pumping units are essential for evaluating well performance. They measure yield, drawdown, and recovery rates to determine the optimum pumping capacity and efficiency. This ensures that your borehole delivers consistent and reliable water supply."
        },
        {
            id: 3,
            image: TestImage,
            title: "Hydrogeological Survey Equipment",
            description: "We utilize cutting-edge hydrogeological survey equipment to map and analyze underground water reserves. This technology helps in identifying the most productive drilling sites, assessing aquifer properties, and providing data for sustainable water management."
        },
        {
            id: 4,
            image: TestImage,
            title: "Camera Inspection Tool",
            description: "Our high-resolution camera inspection tools allow for thorough examination of boreholes. These tools are used to inspect the condition of the borehole casing, identify blockages, and detect any structural issues. Regular inspections ensure the longevity and reliability of your borehole."
        }
    ];

    return (
        <section className="equipments">
            <div className="equipments__header">
                <h2 className="equipments__title">Our Equipments</h2>
                <p className="equipments__slogan">We use state-of-the-art equipment to ensure the highest quality services for our clients.</p>
            </div>
            <div className="equipments__container">
                {equipmentsList.map(({id, image, title, description}) => (
                    <div key={id} className="equipments__equipment">
                        <figure className="equipments__figure">
                            <img src={image} alt={title} className="equipments__figure--image" />
                        </figure>
                        <div className="equipments__content">
                            <h2 className="equipments__content--title">{title}</h2>
                            <p className="equipments__content--text">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Equipments;
