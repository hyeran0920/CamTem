import { useEffect } from "react";
import "../css/CircleButton.css";

function CircleButton(props) {
  const buttons = [
    { text: "#강원", eventKey: "강원", link: "#강원" },
    { text: "#경기", eventKey: "경기도", link: "#경기" },
    { text: "#부산", eventKey: "부산", link: "#부산" },
    { text: "#인천", eventKey: "인천", link: "#인천" },
    { text: "#전북", eventKey: "전북", link: "#전북" },
    { text: "#충남", eventKey: "충남", link: "#충남" },
  ];

  // location 상태가 변경될 때 콘솔에 메시지 출력
  useEffect(() => {}, [props.location]);

  return (
    <div className="circle-button-container">
      {buttons.map((button, index) => (
        <div
          key={index}
          className="circle-button"
          onClick={() => props.handleLocationChange(button.eventKey)}
        >
          {button.text}
        </div>
      ))}
    </div>
  );
}

export default CircleButton;
// import { useState, useEffect } from "react";

// function CircleButton(props) {


//   const buttons = [
//     { text: "#강원", eventKey: "강원", link: "#강원" },
//     { text: "#경기", eventKey: "경기도", link: "#경기" },
//     { text: "#부산", eventKey: "부산", link: "#부산" },
//     { text: "#인천", eventKey: "인천", link: "#인천" },
//     { text: "#전북", eventKey: "전북", link: "#전북" },
//     { text: "#충남", eventKey: "충남", link: "#충남" },
//   ];

//   // location 상태가 변경될 때 콘솔에 메시지 출력
//   useEffect(() => {
//   }, [props.location]);

//   return (
//     <div style={{ display: "flex", justifyContent: "space-around", width: "80%", margin: "0 auto" }}>
//       {buttons.map((button, index) => (
//         <div
//           key={index}
//           style={{
//             width: "100px",
//             height: "100px",
//             borderRadius: "50%",
//             border: "2px solid #ef9F11",
//             backgroundColor: "rgba(255, 255, 255, 0)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             cursor: "pointer",
//             textAlign: "center",
//             color: "#fff",
//             fontSize: "20px",
//             fontWeight: "500",
//             fontWeight: "bold",
//           }}
//           onClick={() => props.handleLocationChange(button.eventKey)}
//         >
//           {button.text}
//         </div>
//       ))}
//     </div>
//   );
// }
// export default CircleButton;
