import { useState, useEffect } from "react";
import "./services.css";
import Survey from "./Survey";
import Drilling from "./Drilling";
import Camera from "./Camera";
import TestPumping from "./TestPumping";
import PumpSolar from "./PumpSolar";
import TowerConstruction from "./TowerConstruction";
import waterImageBanner from "../../assets/water-is-life.jpg";
import MiniBanner from "../../components/minibanner/MiniBanner";

const Services = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  const servicesList = [
    {
      id: 1,
      breadcrumbTitle: "Hydrogeological Survey Services",
      miniBannerContent:
        "Comprehensive hydrogeological surveys to identify groundwater resources and ensure optimal borehole placement.",
      imageAlt: "Hydrogeological Survey Dimmer Enterprises LTD Banner",
      hashLink: "/services#hydrogeological-survey",
    },
    {
      id: 2,
      breadcrumbTitle: "Borehole Drilling Services",
      miniBannerContent:
        "Professional borehole drilling services for reliable water access in residential, commercial, and industrial applications.",
      imageAlt: "Borehole Drilling Dimmer Enterprises LTD Banner",
      hashLink: "/services#borehole-drilling",
    },
    {
      id: 3,
      breadcrumbTitle: "Borehole Camera Inspection Services",
      miniBannerContent:
        "Advanced camera inspections to assess borehole conditions and ensure optimal performance and longevity.",
      imageAlt: "Borehole Camera Inspection Dimmer Enterprises LTD Banner",
      hashLink: "/services#camera-inspection",
    },
    {
      id: 4,
      breadcrumbTitle: "Borehole Test Pumping Services",
      miniBannerContent:
        "Thorough test pumping services to evaluate groundwater yield and quality, ensuring sustainable water management.",
      imageAlt: "Borehole Test Pumping Dimmer Enterprises LTD Banner",
      hashLink: "/services#test-pumping",
    },
    {
      id: 5,
      breadcrumbTitle: "Pump and Solar Installation Services",
      miniBannerContent:
        "Efficient pump and solar installations for sustainable and cost-effective water supply solutions.",
      imageAlt: "Pump and Solar Installation Dimmer Enterprises LTD Banner",
      hashLink: "/services#pump-and-solar-installation",
    },
    {
      id: 6,
      breadcrumbTitle: "Elevated Tank Tower Construction Services",
      miniBannerContent:
        "Robust tank and tower construction services for secure and reliable water storage solutions.",
      imageAlt:
        "Elevated Tank Tower Construction Dimmer Enterprises LTD Banner",
      hashLink: "/services#tower-construction",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % servicesList.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [servicesList.length]);

  return (
    <section className="services">
      <div className="services-banner-wrapper">
        {servicesList.map((service, index) => (
          <div
            key={service.id}
            className={`services-banner ${
              currentBanner === index ? "visible" : ""
            }`}
          >
            <MiniBanner
              isAbout={false}
              miniBannerContent={service.miniBannerContent}
              breadcrumbTitle={service.breadcrumbTitle}
              imageAlt={service.imageAlt}
              imageImg={waterImageBanner}
              hashLink={service.hashLink}
            />
          </div>
        ))}
      </div>
      <Survey />
      <Drilling />
      <Camera />
      <TestPumping />
      <PumpSolar />
      <TowerConstruction />
    </section>
  );
};

export default Services;
