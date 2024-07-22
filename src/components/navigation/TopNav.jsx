import { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const TopNav = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("fade-in");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 800);

  const items = [
    { icon: FaPhoneVolume, text: "+254 712 055 342" },
    { icon: MdEmail, text: "dimmerenterprisesltd@yahoo.com" },
    { icon: FaMapMarkerAlt, text: "Kabanas, Nairobi Kenya" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 800);
    };

    window.addEventListener("resize", handleResize);

    const interval = setInterval(() => {
      if (isSmallScreen) {
        setAnimationClass("fade-out");
        setTimeout(() => {
          setVisibleIndex((prevIndex) => (prevIndex + 1) % items.length);
          setAnimationClass("fade-in");
        }, 500); // Duration of the fade-out animation
      }
    }, 8000);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(interval);
    };
  }, [isSmallScreen, items.length]);

  return (
    <section className="topnav">
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div
            key={index}
            className={`topnav__content ${
              visibleIndex === index && isSmallScreen
                ? `visible ${animationClass}`
                : ""
            }`}
          >
            <IconComponent className="topnav__content--icon" />
            <span
              className={`topnav__content--text ${
                visibleIndex === index && isSmallScreen ? "visible" : ""
              }`}
            >
              {item.text}
            </span>
          </div>
        );
      })}
    </section>
  );
};

export default TopNav;
