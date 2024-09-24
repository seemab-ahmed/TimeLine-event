import React, { useState , useEffect } from 'react';
import "../App.css";
import {ReactComponent as ProgramImage} from '../assets/Program.svg';
import SennyCamara from "../assets/SennyCamara.png";
import maryMalifarges from "../assets/Mary Malifarges.png";
import HandPanwithAnas from "../assets/handPan.png";
import AnasHandPan from "../assets/ANSHandpan.png";
// import CalligaraphyImage from "../assets/CalliGraphy.png";
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

function ProgramSection() {
 
  const eventsData = [
    // Day 1 (2024-11-22)
    {
      date: "2024-11-22",
      startTime: "06:15 PM",
      endTime: "06:30 PM",
      title: "Emirati Heritage band – Al Nadba",
      location: "Main Stage",
      images: [Heritage],
    },
    {
      date: "2024-11-22",
      startTime: "06:30 PM",
      endTime: "07:00 PM",
      title: "Bodour Al Qasimi opening speech and poetry with Senny Camara",
      location: "Main Stage",
      images: [SennyCamara, Bodour],
    },
    {
      date: "2024-11-22",
      startTime: "07:00 PM",
      endTime: "08:30 PM",
      title: "Rumi’s Ziyad Sahab & Alifmotion Light Calligraphy by Julien Bruton",
      location: "Main Stage",
      images: [Ziyad, JulienBreton],
    },
    {
      date: "2024-11-22",
      startTime: "08:45 PM",
      endTime: "09:30 PM",
      title: "Art tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-22",
      startTime: "10:00 PM",
      endTime: "11:00 PM",
      title: "Sami Yusuf",
      location: "Main Stage",
      images: [SamiYusuf],
    },
    {
      date: "2024-11-22",
      startTime: "11:30 PM",
      endTime: "12:30 AM",
      title: "Anas Handpan Orchestra",
      location: "Tree of Life",
      images: [AnasHandPan],
    },
    
    // Day 2 (2024-11-23)
    {
      date: "2024-11-23",
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      title: "Breathwork with Walid Aboulnaga",
      location: "Dome",
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
      title: "Anas Handpan Orchestra workshop",
      location: "Dome",
      images: [AnasHandPan],
    },
    {
      date: "2024-11-23",
      startTime: "12:30 PM",
      endTime: "01:00 PM",
      title: "Art tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-23",
      startTime: "01:00 PM",
      endTime: "01:30 PM",
      title: "Illumination & Geometry workshop",
      location: "Dome",
      images: [Illumination],
    },
    {
      date: "2024-11-23",
      startTime: "01:30 PM",
      endTime: "02:00 PM",
      title: "Poetry by Farima Berenji",
      location: "Market Place",
      images: [Farima],
    },
    {
      date: "2024-11-23",
      startTime: "02:00 PM",
      endTime: "03:00 PM",
      title: "Hassan Hakmoun (Gnawa)",
      location: "Tree of Life",
      images: [HasanHakmoun],
    },
    {
      date: "2024-11-23",
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      title: "Sufi Whirling workshop with Farima Berenji",
      location: "Dome",
      images: [Seemawirling],
    },
    {
      date: "2024-11-23",
      startTime: "03:30 PM",
      endTime: "04:00 PM",
      title: "Emirati Heritage band – Al Aahaal",
      location: "Tree of Life",
      images: [Heritage],
    },
    {
      date: "2024-11-23",
      startTime: "04:00 PM",
      endTime: "05:00 PM",
      title: "Senny Camara & Art performer Mary Malifarges",
      location: "Tree of Life",
      images: [SennyCamara, maryMalifarges],
    },
    {
      date: "2024-11-23",
      startTime: "05:00 PM",
      endTime: "05:30 PM",
      title: "Emirati Heritage Band – Noban",
      location: "Market Place",
    },
    {
      date: "2024-11-23",
      startTime: "05:30 PM",
      endTime: "06:30 PM",
      title: "Baraka Blue and Shadi’s band",
      location: "Tree of Life",
      images: [BarakaBand],
    },
    {
      date: "2024-11-23",
      startTime: "05:30 PM",
      endTime: "06:30 PM",
      title: "Light Calligraphy workshop with Julien Breton",
      location: "Dome",
      images: [JulienBreton],
    },
    {
      date: "2024-11-23",
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      title: "Constantinople & Ghalia Benali",
      location: "Main Stage",
      images: [Constantinople],
    },
    {
      date: "2024-11-23",
      startTime: "08:15 PM",
      endTime: "08:45 PM",
      title: "Art tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-23",
      startTime: "09:00 PM",
      endTime: "10:00 PM",
      title: "Journeys of Light featuring Kamal Musallam, Lisa Gerard, Loire Cotler and Rasha Rizk",
      location: "Main Stage",
      images: [JorneyImage],
    },
    {
      date: "2024-11-23",
      startTime: "11:00 PM",
      endTime: "12:00 AM",
      title: "Abi Sampa & Rushil Ranjan Orchestral Qawwali",
      location: "Main Stage",
      images: [RushilQawali],
    },
    
    // Day 3 (2024-11-24)
    {
      date: "2024-11-24",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      title: "Sound immersion with Zarine",
      location: "Dome",
      images: [Soundimmersion],
    },
    {
      date: "2024-11-24",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      title: "Dervish Whirling workshop",
      location: "Dome",
      images: [Seemawirling],
    },
    {
      date: "2024-11-24",
      startTime: "12:00 PM",
      endTime: "12:45 PM",
      title: "Art tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-24",
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Baraka Blue & Shadi’s Band",
      location: "Tree of Life",
      images: [BarakaBand],
    },
    {
      date: "2024-11-24",
      startTime: "02:00 PM",
      endTime: "03:00 PM",
      title: "Illumination & Geometry workshop",
      location: "Dome",
      images: [Illumination],
    },
    
    // {
    //   date: "2024-11-24",
    //   startTime: "02:30 PM",
    //   endTime: "03:00 PM",
    //   title: "Sandu",
    //   location: "Market Place",
    //   images: [SanduImage],
    // },
    {
      date: "2024-11-24",
      startTime: "03:00 PM",
      endTime: "04:00 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "Tree of Life",
      images: [PoetryByNujoom],
    },
    {
      date: "2024-11-24",
      startTime: "04:00 PM",
      endTime: "04:30 PM",
      title: "Emirati Heritage band – Al Aahaal",
      location: "Main Stage",
      images: [Heritage],
    },
    {
      date: "2024-11-24",
      startTime: "04:45 PM",
      endTime: "05:30 PM",
      title: "Rasha Rizk & Orpheus Ensemble",
      location: "Main Stage",
      images: [Ensemble],
    },
    {
      date: "2024-11-24",
      startTime: "05:45 PM",
      endTime: "06:45 PM",
      title: "Art performance by Mary Malifarges",
      location: "Main Stage",
      images: [maryMalifarges],
    },
    {
      date: "2024-11-24",
      startTime: "07:00 PM",
      endTime: "08:00 PM",
      title: "Waed Bouhassoun & musicians",
      location: "Main Stage",
      images: [FadiRifaai],
    },
    {
      date: "2024-11-24",
      startTime: "08:00 PM",
      endTime: "09:00 PM",
      title: "Art tour",
      location: "(A.3)",
    },
    {
      date: "2024-11-24",
      startTime: "09:00 PM",
      endTime: "10:00 PM",
      title: "Ziya Tabassian, Constantinople & Guests",
      location: "Main Stage",
      images: [Constantinople],
    },
  ];
  

  const [heightPerMinute, setHeightPerMinute] = useState(window.innerWidth <= 768 ? 150 / 30 : 150 / 30);

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
  // Filter events for the given day
  const filteredEvents = eventsData.filter((event) => event.date === day);

  // Sort events by start time
  const sortedEvents = filteredEvents.sort((a, b) => {
    const timeToMinutes = (time) => {
      const [hour, minute, period] = time.split(/[:\s]/);
      let hours = parseInt(hour);
      if (period === "PM" && hours !== 12) {
        hours += 12;
      } else if (period === "AM" && hours === 12) {
        hours = 0;
      }
      return hours * 60 + parseInt(minute);
    };

    return timeToMinutes(a.startTime) - timeToMinutes(b.startTime);
  });

  // Render the sorted events with calculated gaps between them
  const renderEventDataElements = [];
  for (let index = 0; index < sortedEvents.length; index++) {
    const event = sortedEvents[index];
    const eventHeight = getEventHeight(event.startTime, event.endTime) >= 400 ? 400 : getEventHeight(event.startTime, event.endTime);
    const imageSize = calculateImageSize(event.startTime, event.endTime);

    let topOffset = 0;
    const previousEvent = index > 0 ? sortedEvents[index - 1] : null;
    const previousEventHeight =
        index > 0
          ? getEventHeight(previousEvent.startTime, previousEvent.endTime)
          : 0;

    if (previousEvent && doEventsOverlap(previousEvent, event)) {
      topOffset = -previousEventHeight - 26;
    }

    let gap = 0;

    if (previousEvent) {
      // Calculate the gap between the previous event's end time and the current event's start time
      const gapDuration = calculateDuration(previousEvent.endTime, event.startTime);
      const gapHeight = gapDuration * heightPerMinute; // Gap height based on time difference and heightPerMinute

      gap = gapHeight > 0 ? gapHeight : 0;

      if (gap > 0) {
        // If there's a gap, add a gap element
        renderEventDataElements.push(
          <div
            key={`gap-${index}`}
            className="timeline-gap"
            style={{
              height: `${gap}px`,  // Adjust height of the gap based on minutes
            }}
          ></div>
        );
      }
    }

    // Determine whether to display the start time based on overlap with the previous event
    const shouldDisplayStartTime =
      !previousEvent || previousEvent.startTime !== event.startTime;

    const renderElement = (
      <div
        key={index}
        className={`timeline-entry ${index % 2 === 0 ? "right" : "left"} timeline-${index}`}
        style={{
          height: `${eventHeight}px`,
          position: "relative",
          top: `${topOffset}px`,
        }} 
      >
        {/* Only show the start time if the previous event does not have the same start time */}
        {shouldDisplayStartTime && <div className="time-label">{event.startTime}</div>}
        <div className="event-info">
          {renderEventContent(event, imageSize)}
          {/* {event.images &&
            event.startTime === filteredEvents[index + 1]?.startTime && window.innerWidth >= 768 &&
            renderEventContent(filteredEvents[index + 1], imageSize)} */}
        </div>

       {shouldDisplayStartTime && <div className="time-label2">{event.endTime}</div>}
      </div>
    );

    renderEventDataElements.push(renderElement);
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
  
  // Ensure that days are in the correct format before converting them
  // const dates = days.map((day) => new Date(Date.parse(day)).toDateString());
  const dates = days.map((day) => new Date(day + 'T00:00:00').toDateString());
  
  console.log({ dates, activeTab, days });
  
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
        <h2 className="full-date">{dates[activeTab]}</h2>
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
