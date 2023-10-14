import React, { useState, useEffect } from "react";
import styles from "./timer.module.css";
import up from "../../assets/up.png";
import down from "../../assets/down.png";
import ping from "../../assets/ping.mp3";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [play, setPlay] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // When play state changes, updates the key to reset the timer
    setKey((prevKey) => prevKey + 1);
  }, [play]);

  const increaseSecond = () => {
    if (seconds === 59) {
      return;
    }
    setSeconds((sec) => sec + 1);
  };
  const increaseMinute = () => {
    if (minutes === 59) {
      return;
    }
    setMinutes((min) => min + 1);
  };
  const increaseHour = () => {
    setHours((hours) => hours + 1);
  };
  const decreaseSecond = () => {
    if (seconds === 0) {
      return;
    }
    setSeconds((sec) => sec - 1);
  };
  const decreaseMinute = () => {
    if (minutes === 0) {
      return;
    }
    setMinutes((min) => min - 1);
  };
  const decreaseHour = () => {
    if (hours === 0) {
      return;
    }
    setHours((hours) => hours - 1);
  };

  const displayRemainingTime = (time) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;
    if (time === 0) {
      new Audio(ping).play();
      setPlay(false);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }

    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    const formattedSecond = second.toString().padStart(2, "0");

    return `${formattedHour}:${formattedMinute}:${formattedSecond}`;
  };

  const totalSeconds = seconds + minutes * 60 + hours * 60 * 60;

  return (
    <div className={styles.timerCard}>
      <div className={styles.circleTimer}>
        <CountdownCircleTimer
          isPlaying={play}
          duration={totalSeconds}
          colors={["#FF6A6A"]}
          rotation={["counterclockwise"]}
          size={130}
          trailColor={["#191E39"]}
          strokeWidth={6}
          key={key}
        >
          {({ remainingTime }) => (
            <span style={{ color: "white", fontSize: "1.2rem" }}>
              {displayRemainingTime(remainingTime)}
            </span>
          )}
        </CountdownCircleTimer>
      </div>
      <div className={styles.setTime}>
        <div className={styles.clock}>
          <div className={styles.box}>
            <h4>Hours</h4>
            <img src={up} alt="" onClick={increaseHour} />
            <h3>{hours.toString().padStart(2, "0")}</h3>
            <img src={down} alt="" onClick={decreaseHour} />
          </div>

          <span>:</span>

          <div className={styles.box}>
            <h4>Minutes</h4>
            <img src={up} alt="" onClick={increaseMinute} />
            <h3>{minutes.toString().padStart(2, "0")}</h3>
            <img src={down} alt="" onClick={decreaseMinute} />
          </div>

          <span>:</span>

          <div className={styles.box}>
            <h4>Seconds</h4>
            <img src={up} alt="" onClick={increaseSecond} />
            <h3>{seconds.toString().padStart(2, "0")}</h3>
            <img src={down} alt="" onClick={decreaseSecond} />
          </div>
        </div>

        <button className={styles.startbtn} onClick={() => setPlay((e) => !e)}>
          {play ? `Pause` : `Start`}
        </button>
      </div>
    </div>
  );
}

export default Timer;
