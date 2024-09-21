import React, { useState , useEffect } from 'react';
import "../App.css";
import {ReactComponent as ProgramImage} from '../assets/Program.svg';
import SennyCamara from "../assets/SennyCamara.png";
import HandPanwithAnas from "../assets/handPan.png";
import AnasHandPan from "../assets/ANSHandpan.png";
import CalligaraphyImage from "../assets/CalliGraphy.png";
import PoetryByNujoom from "../assets/PoetryByBujoom.png";
import HasanHakmoun from "../assets/Hassanhakmoun.png";
import Illumination from "../assets/Illumination.png";
import SanduImage from "../assets/Sandu.png";
import Seemawirling from "../assets/Sema Whirling.png";
import BarakaBand from "../assets/BarakaBlue&ShadiBand.png";
import Heritage from "../assets/Heritage band tour.png";
import JorneyImage from "../assets/Journey of Light.png";
import Bodour from "../assets/Bodour Al Qasimi_.png";
import Ziyad from "../assets/Rumi’s Ziyad Sahab.png";
import JulienBreton from "../assets/Calligraphy lighting Workshop with Julien Breton.png";
import SamiYusuf from "../assets/Sami Yusuf (1).png";
import Constantinople from "../assets/Constantinople & Ghalia Benali.png"
import Farima from "../assets/Farima Berenji.png";
import RushilQawali from "../assets/AbiSampaRushilOrchestralQawwali.png";
import Soundimmersion from "../assets/Layer 2.png";
import FadiRifaai from "../assets/Fadi Rifaai.png";
import Ensemble from "../assets/Ensemble Khourchid_.png";
import DhaferYoussef from "../assets/Dhafer Youssef.png";

function ProgramSection() {
  const eventsData = [
    {
      date: "2024-11-22",
      startTime: "06:00 PM",
      endTime: "06:30 PM",
      title: "Heritage Band - Al Nadba",
      location: "MAIN STAGE (6:15 pm)",
      images: [Heritage],
    },
    {
      date: "2024-11-22",
      startTime: "06:30 PM",
      endTime: "07:00 PM",
      title: "Bodour Al Qasimi opening speech ",
      location: "MAIN STAGE",
      images: [SennyCamara, Bodour],
    },
    {
      date: "2024-11-22",
      startTime: "07:00 PM",
      endTime: "07:30 PM",
      title: "Athan",
    },
    {
      date: "2024-11-22",
      startTime: "07:30 PM",
      endTime: "08:30 PM",
      title:
        "Rumi’s Ziyad Sahab & Alifmotion Light",
      location: "MAIN STAGE",
      images: [Ziyad, JulienBreton],
    },
    {
      date: "2024-11-22",
      startTime: "08:30 PM",
      endTime: "09:30 PM",
      title: "Art Tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-22",
      startTime: "09:30 PM",
      endTime: "10:30 PM",
      title: "Sami Yusuf",
      location: "MAIN STAGE",
      images: [SamiYusuf],
    },
    {
      date: "2024-11-22",
      startTime: "10:30 PM",
      endTime: "11:00 PM",
      title: "Anas Handpan Orchestra",
      location: "TREE OF LIFE",
      images: [AnasHandPan],
    },
    // 2nd Day  
    {
      date: "2024-11-23",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      title: "Breathwork With Walid Aboulnaga",
      location: "DOME",
      images: [CalligaraphyImage],
    },
    {
      date: "2024-11-23",
      startTime: "11:00 AM",
      endTime: "11:30 AM",
      title: "Handpan with Anas",
      location: "Market Place",
      images: [HandPanwithAnas],
    },
    {
      date: "2024-11-23",
      startTime: "11:30 AM",
      endTime: "12:30 PM",
      title: "Art Tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-23",
      startTime: "12:30 PM",
      endTime: "01:00 PM",
      title: "Anas Handpan Orchestra Workshop",
      location: "DOME",
      images: [AnasHandPan],
    },
    {
      date: "2024-11-23",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Poetry by Farima Berenji",
      location: "MARKET PLACE",
      images: [Farima],
    },
    {
      date: "2024-11-23",  
      startTime: "02:00 PM",
      endTime: "02:30 PM",
      title: "Illumination & Geometry Workshop",
      location: "DOME",
      images: [Illumination],
    },
    
    {
      date: "2024-11-23",
      startTime: "02:00 PM",
      endTime: "03:00 PM",
      title: "Hassan Hakmoun (Gnawa)",
      location: "TREE OF LIFE",
      images: [HasanHakmoun],
    },
    // {
    //   date: "2024-11-23",
    //   startTime: "03:00 PM",
    //   endTime: "04:00 PM",
    //   title: "Sema Whirling Workshop with Farima Berenji",
    //   location: "DOME",
    //   images: [Seemawirling],
    // },
    {
      date: "2024-11-23",
      startTime: "03:00 PM",
      endTime: "03:30 PM",
      title: "Sandu",
      location: "Market Place",
      images: [SanduImage],
    },
    {
      date: "2024-11-23",
      startTime: "03:30 PM",
      endTime: "04:00 PM",
      title: "Heritage Band - Al Aahaal",
      location: "TREE OF LIFE",
      images: [Heritage],
    },

    // {
    //   date: "2024-11-23",
    //   startTime: "04:00 PM",
    //   endTime: "04:30 PM",
    //   title: "Senny Camara & Art performer Mary Malifarges",
    //   location: "TREE OF LIFE",
    //   images: [SennyCamara, maryMalifarges],
    // },
    {
      date: "2024-11-23",
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      title: "Heritage Band - Noban",
      location: "Market Place",
      images: [SennyCamara],
    },

    {
      date: "2024-11-23",
      startTime: "05:00 PM",
      endTime: "06:30 PM",
      title: "Baraka Blue & Shadi’s Band",
      location: "TREE OF LIFE",
      images: [BarakaBand],
    },
    {
      date: "2024-11-23",
      startTime: "06:30 PM",
      endTime: "07:30 PM",
      title: "Calligraphy lighting Workshop with Julien Breton",
      location: "DOME",
      images: [JulienBreton],
    },
    {
      date: "2024-11-23",
      startTime: "07:30 PM",
      endTime: "08:30 PM",
      title: "Constantinople & Ghalia Benali",
      location: "MAIN STAGE",
      images: [Constantinople],
    },
    {
      date: "2024-11-23",
      startTime: "08:30 PM",
      endTime: "09:00 PM",
      title: "Art Tour",
      location: "(A.3)",
    },
    {
        date: "2024-11-23",
      startTime: "09:00 PM",
      endTime: "10:00 PM",
      title: "Journey of Light Featuring Kamal Musallam Lisa Gerrard ",
      location: "MAIN STAGE",
      images: [JorneyImage],
    },
    {
        date: "2024-11-23",
      startTime: "10:00 PM",
      endTime: "11:30 AM",
      title: "Abi Sampa & Rushil Orchestral Qawwali",
      location: "MAIN STAGE",
      images: [RushilQawali],
    },
    // Day 3 
    {
      date: "2024-11-24",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      title: "Sound immersion with Zarine",
      location: "DOME",
      images: [Soundimmersion],
    },
    {
      date: "2024-11-24",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      title: "Dervish Whirling Workshop",
      location: "DOME",
      images: [Seemawirling],
    },
    {
      date: "2024-11-24",
      startTime: "12:00 PM",
      endTime: "01:00 PM",
      title: "Art Tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-24",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Illumination & Geometry Workshop",
      location: "DOME",
      images: [Illumination],
    },
    {
      date: "2024-11-24",
      startTime: "02:00 PM",
      endTime: "02:30 PM",
      title: "Baraka Blue & Shadi’s Band",
      location: "TREE OF LIFE",
      images: [BarakaBand],
    },
    {
      date: "2024-11-24",
      startTime: "02:30 PM",
      endTime: "03:00 PM",
      title: "Sandu",
      location: "MARKET PLACE",
      images: [SanduImage],
    },
    {
      date: "2024-11-24",
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "TREE OF LIFE",
      images: [PoetryByNujoom],
    },
    {
      date: "2024-11-24",
      startTime: "04:00 PM",
      endTime: "04:30 PM",
      title: "Heritage Band Al Weliyah",
      location: "TREE OF LIFE",
      images: [Heritage],
    },
    {
      date: "2024-11-24",
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      title: "Calligraphy Workshop",
      location: "DOME",
      images: [Illumination],
    },
    {
      date: "2024-11-24",
      startTime: "04:30 PM",
      endTime: "05:30 PM",
      title: "Hassan Hakmoun (Gnawa)",
      location: "TREE OF LIFE",
      images: [HasanHakmoun],
    },
    // {
    //   date: "2024-11-24",
    //   startTime: "05:30 PM",
    //   endTime: "06:00 PM",
    //   title: "Athan Followed by Heritage Band - Al Liwah",
    //   location: "MARKET PLACE",
    //   images: [Heritage],
    // },
    {
      date: "2024-11-24",
      startTime: "05:30 PM",
      endTime: "06:30 PM",
      title: "Calligraphy lighting Workshop with Julien Breton",
      location: "DOME",
      images: [JulienBreton],
    },
    
    {
      date: "2024-11-24",
      startTime: "06:30 PM",
      endTime: "07:00 PM",
      title: "Fadi Rifaai & Sandu",
      location: "TREE OF LIFE",
      images: [SanduImage, FadiRifaai],
    },
    {
      date: "2024-11-24",
      startTime: "07:00 PM",
      endTime: "07:30 PM",
      title: "Followed by Heritage Band - Al Malad",
      location: "MAIN STAGE",
      images: [Heritage],
    },
    {
      date: "2024-11-24",
      startTime: "07:30 PM",
      endTime: "08:30 PM",
      title: "Ensemble Khourchid & The Whirling Dervishes of Damas",
      location: "MAIN STAGE",
      images: [Ensemble],
    },
    {
      date: "2024-11-24",
      startTime: "08:30 PM",
      endTime: "09:30 PM",
      title: "Closing Bodour Al Qasimi ",
      location: "MAIN STAGE",
      images: [Bodour],
    },
    {
      date: "2024-11-24",
      startTime: "9:30 PM",
      endTime: "10:30 PM",
      title: "Dhafer Youssef",
      location: "MAIN STAGE",
      images: [DhaferYoussef],
    },

  ];

  const [heightPerMinute, setHeightPerMinute] = useState(window.innerWidth <= 768 ? 80 / 30 : 120 / 30);

  useEffect(() => {
    const handleResize = () => {
      setHeightPerMinute(window.innerWidth <= 768 ? 80 / 30 : 120 / 30);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Helper function to check if two events overlap
  const doEventsOverlap = (event1, event2) => {
    const convertTo24Hour = (time) => {
      const [hour, minute, period] = time.split(/[:\s]/);
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return { hours, minutes: parseInt(minute) };
    };

    const start1 = convertTo24Hour(event1.startTime);
    const end1 = convertTo24Hour(event1.endTime);
    const start2 = convertTo24Hour(event2.startTime);
    const end2 = convertTo24Hour(event2.endTime);

    const event1Start = start1.hours * 60 + start1.minutes;
    const event1End = end1.hours * 60 + end1.minutes;
    const event2Start = start2.hours * 60 + start2.minutes;
    const event2End = end2.hours * 60 + end2.minutes;

    // Check for overlap
    return event1End > event2Start && event2End > event1Start;
  };

  // Helper function to calculate duration in minutes
  const calculateDuration = (start, end) => {
    const convertTo24Hour = (time) => {
      const [hour, minute, period] = time.split(/[:\s]/);
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return { hours, minutes: parseInt(minute) };
    };

    const startTime = convertTo24Hour(start);
    const endTime = convertTo24Hour(end);

    const startInMinutes = startTime.hours * 60 + startTime.minutes;
    const endInMinutes = endTime.hours * 60 + endTime.minutes;

    return endInMinutes - startInMinutes;
  };

  const getEventHeight = (startTime, endTime) => {
    const duration = calculateDuration(startTime, endTime);
    return duration * heightPerMinute;
  };

  const calculateImageSize = (startTime, endTime) => {
    const duration = calculateDuration(startTime, endTime); // Calculate duration in minutes
  
    if (window.innerWidth <= 768) {
      return 40; 
    }
  
    // Use dynamic size for larger screens
    const imageSize = duration >= 60 ? 160 : (duration / 60) * 160; // Proportional size for events < 1 hour
    return imageSize;
  };

  const renderEventData = (day) => {
    const filteredEvents = eventsData.filter((event) => event.date === day);
    const renderEventDataElements = [];
    for (let index = 0; index < filteredEvents.length; index++) {
      let event = filteredEvents[index];
      const eventHeight = getEventHeight(event.startTime, event.endTime);
      const imageSize = calculateImageSize(event.startTime, event.endTime);

      let topOffset = 0;
      const previousEvent = index > 0 ? filteredEvents[index - 1] : null;
      const previousEventHeight =
        index > 0
          ? getEventHeight(previousEvent.startTime, previousEvent.endTime)
          : 0;

      if (previousEvent && doEventsOverlap(previousEvent, event)) {
        topOffset = -previousEventHeight - 26;
      }

      const displayStartTime =
        !previousEvent || previousEvent.startTime !== event.startTime;
      const displayEndTime =
        !previousEvent || previousEvent.endTime !== event.endTime;
      const isContiguous =
        previousEvent && previousEvent.endTime === event.startTime;

      let gap = 0;
      if (previousEvent) {
        const gapDuration = calculateDuration(
          previousEvent.endTime,
          event.startTime
        );
        const gapHeight = (gapDuration / 30) * 120;
        gap = gapHeight > 0 ? gapHeight : 0;

        if (previousEvent && doEventsOverlap(previousEvent, event)) {
          gap = 0;
        }
      }

      topOffset = gap;

      const renderElement = (
        <div
          key={index}
          className={`timeline-entry ${index % 2 === 0 ? "right" : "left"}`}
          style={{
            height: `${eventHeight}px`,
            position: "relative",
            top: `${topOffset}px`,
          }}
        >
          {displayStartTime && !isContiguous && (
            <div className="time-label">{event.startTime}</div>
          )}
          <div className="event-info">
            {renderEventContent(event, imageSize)}
          </div>
          {event.images &&
            event.startTime === filteredEvents[index + 1]?.startTime && window.innerWidth >= 768 &&
            renderEventContent(filteredEvents[index + 1], imageSize)}
          {displayEndTime && <div className="time-label2">{event.endTime}</div>}
        </div>
      );

      renderEventDataElements.push(renderElement);
      if (
        event.images &&
        event.startTime === filteredEvents[index + 1]?.startTime
      ) {
        index++;
      }
    }
    return renderEventDataElements;
  };

  const renderEventContent = (event, imageSize) => {
    return (
      <>
        {event.images &&
          event.images.length &&
          event.images.map((image) => {
            return (
              <div
                className="event-img-wrap"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                }}
              >
                <img
                  src={image}
                  alt={event.title}
                  style={{
                    width: `${imageSize}px`,
                    height: `${imageSize}px`,
                  }}
                />
              </div>
            );
          })}
        <div className="event-content">
          <h4 className="event-title">{event.title}</h4>
          <span className="event-location">{event.location}</span>
        </div>
      </>
    );
  };
  const days = [...new Set(eventsData.map((event) => event.date))];
  const [activeTab, setActiveTab] = useState(0);
  const dates = days.map((day) => new Date(day).toDateString());
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <section className="program-section">
      <div className="container">
        <ProgramImage className="programe_image" />
        <ul className="day-list">
          {days.map((day, index) => (
            <li
              key={index}
              className={`day-list-item ${activeTab === index ? "active" : ""}`}
            >
              <a
                href={`#day${index + 1}`}
                className="day-link"
                onClick={() => handleTabClick(index)}
              >
                {`Day ${index + 1}`}
              </a>
            </li>
          ))}
        </ul>
        <h2 className="full-date">{dates[activeTab + 1]}</h2>
        <div className="tab-content">
          <div id={`day${activeTab}`}>
            <div className="timeline">{renderEventData(days[activeTab])}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgramSection;
