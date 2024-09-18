import React from "react";
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
    {
      startTime: "09:00 AM",
      endTime: "11:00 AM",
      title: "Breathwork With Walid Aboulnaga",
      location: "DOME",
      images: [CalligaraphyImage],
    },
    {
      startTime: "11:00 AM",
      endTime: "11:30 AM",
      title: "Handpan with Anas",
      location: "Market Place",
      images: [HandPanwithAnas],
    },
    {
      startTime: "11:30 AM",
      endTime: "12:30 PM",
      title: "Anas Handpan Orchestra Workshop",
      location: "DOME",
      images: [AnasHandPan , Illumination],
    },
    {
      startTime: "01:00 PM",
      endTime: "02:00 PM",
      title: "Calligraphy Workshop with Fatma Bin Hendi",
      location: "DOME",
      images: [CalligaraphyImage],
    },
    {
      startTime: "1:30 PM",
      endTime: "02:30 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "DOME",
      images: [PoetryByNujoom],
    },
    {
      startTime: "2:30 PM",
      endTime: "03:30 PM",
      title: "Poetry by Nujoom Al-Ghanem",
      location: "DOME",
      images: [maryMalifarges],
    },
    {
      startTime: "03:30 PM",
      endTime: "04:00 PM",
      title: "Art Tour",
      location: "DOME",
    },
    {
      startTime: "04:00 PM",
      endTime: "04:30 PM",
      title: "Hassan Hakoum, Gnawa",
      location: "Market Place",
      images: [HasanHakmoun],
    },
    {
      startTime: "04:30 PM",
      endTime: "05:30 PM",
      title: "Illumination & Calligraphy Workshop with Mohamed Mkhaiyar",
      location: "Workshop Tent",
      images: [Illumination],
    },
    
    {
      startTime: "05:30 PM",
      endTime: "06:00 PM",
      title: "Sandu",
      location: "Market Place",
      images: [SanduImage],
    },
    {
      startTime: "06:00 PM",
      endTime: "07:00 PM",
      title: "Shiny Camara & Art Performers: Many Colors of the UAE",
      location: "Market Place",
      images: [SennyCamara],
    },
    
    {
      startTime: "07:00 PM",
      endTime: "07:30 PM",
      title: "Babaka Blue & Shabbi Band",
      location: "Stage 1",
      images: [BarakaBand],
    },
    {
      startTime: "07:30 PM",
      endTime: "08:00 PM",
      title: "Semma Workshop with Fatma",
      location: "DOME",
      images: [Seemawirling],
    },
    {
      startTime: "08:00 PM",
      endTime: "09:00 PM",
      title: "Athan followed by Heritage Band Tour",
      location: "Heritage Village",
      images: [Heritage],
    },
    {
      startTime: "09:30 PM",
      endTime: "10:30 PM",
      title: "Calligraphy Workshop with Julien Breton",
      location: "Workshop Tent",
      images: [CalligaraphyImage],
    },
    {
      startTime: "10:00 PM",
      endTime: "11:00 PM",
      title: "Contemporary Heritage Band Tour",
      location: "Tour of UAE",
      images: [Breathwork],
    },
    {
      startTime: "11:00 PM",
      endTime: "11:30 PM",
      title: "Art Tour",
      location: "DOME",
    },
    {
      startTime: "11:30 PM",
      endTime: "12:30 AM",
      title: "Journey of Light",
      location: "Market Place",
      images: [JorneyImage],
    }
  ];
  
  

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
  const heightPerMinute = 120 / 30; // 120px for 30 minutes
  return duration * heightPerMinute;
};


const calculateImageSize = (startTime, endTime) => {
  const duration = calculateDuration(startTime, endTime); // Calculate duration in minutes
  const imageSize = duration >= 60 ? 160 : (duration / 60) * 160; // Proportional size for events < 1 hour
  return imageSize;
};


const renderEventData = () => {
  const renderEventDataElements = [];
  for (let index = 0; index < eventsData.length; index++) {
    let event = eventsData[index];
    const eventHeight = getEventHeight(event.startTime, event.endTime);
            const imageSize = calculateImageSize(event.startTime, event.endTime);
          
            let topOffset = 0;
            const previousEvent = index > 0 ? eventsData[index - 1] : null;
            const previousEventHeight = index > 0 ? getEventHeight(previousEvent.startTime, previousEvent.endTime) : 0;
          
            // Check for overlaps with the previous event
            if (previousEvent && doEventsOverlap(previousEvent, event)) {
              topOffset = -previousEventHeight - 26; // Adjust top offset if events overlap
            }
          
            // Check if the start time or end time matches the previous event
            const displayStartTime = !previousEvent || previousEvent.startTime !== event.startTime;
            const displayEndTime = !previousEvent || previousEvent.endTime !== event.endTime;
            // Check if the event's start time is the same as the previous event's end time
            const isContiguous = previousEvent && previousEvent.endTime === event.startTime;


            // Calculate gap between events
            let gap = 0;
            if (previousEvent) {
              const gapDuration = calculateDuration(previousEvent.endTime, event.startTime);
              const gapHeight = (gapDuration / 30) * 120; // Convert gap to pixel height
              gap = gapHeight > 0 ? gapHeight : 0;

              if (previousEvent && doEventsOverlap(previousEvent, event)) {
                gap=0; // Adjust top offset if events overlap
              }
            }

            topOffset = gap; // Set top offset based on the gap

            const renderElement = <div
                key={index}
                className={`timeline-entry ${index % 2 === 0 ? "right" : "left"}`}
                style={{
                  height: `${eventHeight}px`,
                  position: "relative",
                  top: `${topOffset}px`, // Adjust top position dynamically for overlapping events
                }}
              >
                {displayStartTime && !isContiguous && <div className="time-label">{event.startTime}</div>}
                <div className="event-info">
               { renderEventContent(event, imageSize)}
                  
                  
                </div>{event.images &&
                    event.startTime === eventsData[index + 1]?.startTime &&
                    renderEventContent(eventsData[index + 1], imageSize)}
                {displayEndTime && <div className="time-label2">{event.endTime}</div>}
              </div>
            
    renderEventDataElements.push(renderElement);
    if (
      event.images &&
      event.startTime === eventsData[index + 1]?.startTime
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
 



  return (
    <section className="program-section">
      <div className="container">
        <ProgramImage className="programe_image" />
        <ul className="day-list">
          <li className="day-list-iem">
            <a href="/" className="day-link">
              Day 1
            </a>
          </li>
          <li className="day-list-iem">
            <a href="/" className="day-link active">
              Day 2
            </a>
          </li>
          <li className="day-list-iem">
            <a href="/" className="day-link">
              Day 3
            </a>
          </li>
        </ul>
        <h2 className="full-date">Saturday, November 23, 2024</h2>
        
        <div className="timeline">
          {renderEventData()}
        </div>

      </div>
    </section>
  );
}

export default ProgramSection;
