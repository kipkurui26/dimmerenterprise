import { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const TopNav = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);
  const items = [
    { icon: FaPhoneVolume, text: "+254 712 055 342" },
    { icon: MdEmail, text: "dimmerenterprisesltd@yahoo.com" },
    { icon: FaMapMarkerAlt, text: "Kabanas, Nairobi Kenya" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <section className="topnav">
      {items.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="topnav__content">
            <IconComponent className="topnav__content--icon" />
            <span
              className={`topnav__content--text ${
                visibleIndex === index ? "visible" : ""
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
