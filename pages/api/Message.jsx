export const Message = ({ user, text, classs }) => {
  //console.log(text)
  const getTime = () => {
    const today = new Date();
    let hours =
      today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
    const am_pm = today.getHours() >= 12 ? "pm" : "am";
    // hours = hours < 10 ? "0" + hours : hours;
    return (
      hours + ":" + String(today.getMinutes()).padStart(2, 0) + " " + am_pm
    );
  };

  if (user) {
    return (
      <div>
        <div className={`messageBox ${classs}`}>
          {`${user} : ${text}`} <span className={`arrowTool${classs}`}></span>{" "}
          <br />{" "}
          <span
            style={{
              fontSize: "2px"
            }}
            className="showTime"
          >
            {getTime()}
          </span>{" "}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={`messageBox ${classs}`}>
          {`You : ${text}`} <span className={`arrowTool${classs}`}></span>{" "}
          <br /> <span className="showTime">{getTime()}</span>
        </div>
      </div>
    );
  }
};
