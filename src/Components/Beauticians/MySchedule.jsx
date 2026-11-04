
import { useState } from "react";

export default function MySchedule() {
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("19:00");
  const [days, setDays] = useState([
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ]);

  const allDays = [
    "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday", "Sunday"
  ];

  const toggleDay = (day) => {
    if (days.includes(day)) {
      setDays(days.filter((item) => item !== day));
    } else {
      setDays([...days, day]);
    }
  };

  return (
    <>
      <h2 className="beautician-title">My Schedule</h2>
      <p className="beautician-subtitle">
        Manage your working days and availability.
      </p>

      <div className="beautician-card schedule-card">
        <h3>Working Days</h3>

        <div className="schedule-days">
          {allDays.map((day) => (
            <label key={day}>
              <input
                type="checkbox"
                checked={days.includes(day)}
                onChange={() => toggleDay(day)}
              />
              {day}
            </label>
          ))}
        </div>

        <h3>Working Hours</h3>

        <div className="schedule-time">
          <label>
            Start Time
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </label>

          <label>
            End Time
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </label>
        </div>

        <button
          className="beautician-btn"
          onClick={() => alert("Schedule saved (demo only)")}
        >
          Save Schedule
        </button>
      </div>

      <style>{`
        .schedule-card h3 {
          color: #654735;
          margin: 10px 0 18px;
        }

        .schedule-days {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-bottom: 30px;
        }

        .schedule-days label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #76543e;
          font-size: 13px;
        }

        .schedule-days input {
          accent-color: #76543e;
        }

        .schedule-time {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-bottom: 25px;
        }

        .schedule-time label {
          display: flex;
          flex-direction: column;
          gap: 9px;
          color: #76543e;
          font-size: 13px;
        }

        .schedule-time input {
          padding: 12px;
          border: 1px solid #e0d2c4;
          border-radius: 7px;
        }

        @media(max-width: 600px) {
          .schedule-days {
            grid-template-columns: repeat(2, 1fr);
          }

          .schedule-time {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
