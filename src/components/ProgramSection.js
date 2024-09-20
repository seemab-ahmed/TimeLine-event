import React, { useState , useEffect } from 'react';
import "../App.css";
import Breathwork from "../assets/breath-work.png";
import {ReactComponent as ProgramImage} from '../assets/Program.svg';
import maryMalifarges from "../assets/Mary Malifarges.png";
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

function ProgramSection() {
  const eventsData = [
    // Day 1: 2024-11-22
    {
      date: "2024-11-22",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      title: "Breathwork With Walid Aboulnaga",
      location: "DOME",
      images: [CalligaraphyImage],
    },
    {
      date: "2024-11-22",
      startTime: "11:00 AM",
      endTime: "11:30 AM",
      title: "Handpan with Anas",
      location: "Market Place",
      images: [HandPanwithAnas],
    },
    {
      date: "2024-11-22",
      startTime: "11:30 AM",
      endTime: "12:30 PM",
      title: "Anas Handpan Orchestra Workshop",
      location: "DOME",
      images: [AnasHandPan, Illumination],
    },
    {
      date: "2024-11-22",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Calligraphy Workshop with Fatma Bin Hendi",
      location: "DOME",
      images: [CalligaraphyImage],
    },
    {
      date: "2024-11-22",
      startTime: "1:30 PM",
      endTime: "02:30 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "DOME",
      images: [PoetryByNujoom],
    },
    {
      date: "2024-11-22",
      startTime: "2:30 PM",
      endTime: "03:30 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "DOME",
      images: [maryMalifarges],
    },
    {
      date: "2024-11-22",
      startTime: "03:30 PM",
      endTime: "04:00 PM",
      title: "Art Tour",
      location: "DOME",
    },
    {
      date: "2024-11-22",
      startTime: "04:00 PM",
      endTime: "04:30 PM",
      title: "Hassan Hakoum, Gnawa",
      location: "Market Place",
      images: [HasanHakmoun],
    },
    {
      date: "2024-11-22",
      startTime: "04:30 PM",
      endTime: "05:30 PM",
      title: "Illumination & Calligraphy Workshop with Mohamed Mkhaiyar",
      location: "Workshop Tent",
      images: [Illumination],
    },

    // Day 2: 2024-11-23
    {
      date: "2024-11-23",
      startTime: "05:30 PM",
      endTime: "06:00 PM",
      title: "Sandu",
      location: "Market Place",
      images: [SanduImage],
    },
    {
      date: "2024-11-23",
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      title: "Shiny Camara & Art Performers: Many Colors of the UAE",
      location: "Market Place",
      images: [SennyCamara],
    },
    {
      date: "2024-11-23",
      startTime: "07:00 PM",
      endTime: "07:30 PM",
      title: "Babaka Blue & Shabbi Band",
      location: "Stage 1",
      images: [BarakaBand],
    },
    {
      date: "2024-11-23",
      startTime: "07:30 PM",
      endTime: "08:00 PM",
      title: "Semma Workshop with Fatma",
      location: "DOME",
      images: [Seemawirling],
    },
    {
      date: "2024-11-23",
      startTime: "08:00 PM",
      endTime: "09:00 PM",
      title: "Athan followed by Heritage Band Tour",
      location: "Heritage Village",
      images: [Heritage],
    },
    {
      date: "2024-11-23",
      startTime: "09:30 PM",
      endTime: "10:30 PM",
      title: "Calligraphy Workshop with Julien Breton",
      location: "Workshop Tent",
      images: [CalligaraphyImage],
    },
    {
      date: "2024-11-23",
      startTime: "10:30 PM",
      endTime: "11:30 PM",
      title: "Athan followed by Heritage Band Tour",
      location: "Heritage Village",
      images: [Heritage],
    },

    // Day 3: 2024-11-24
    {
      date: "2024-11-24",
      startTime: "10:00 PM",
      endTime: "11:00 PM",
      title: "Contemporary Heritage Band Tour",
      location: "Tour of UAE",
      images: [Breathwork],
    },
    {
      date: "2024-11-24",
      startTime: "11:00 PM",
      endTime: "11:30 PM",
      title: "Art Tour",
      location: "DOME",
    },
    {
      date: "2024-11-24",
      startTime: "11:30 PM",
      endTime: "12:30 AM",
      title: "Journey of Light",
      location: "Market Place",
      images: [JorneyImage],
    }
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
            event.startTime === filteredEvents[index + 1]?.startTime &&
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
