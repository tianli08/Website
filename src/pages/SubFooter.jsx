function SubFooter() {
  return (
    <footer
      className="no-select"
      style={{
        position: "absolute",
        bottom: "0", // Aligns the element to the bottom
        left: "50%", // Positions the element at the center horizontally
        transform: "translateX(-50%)", // Offsets the element by half its width to center it correctly
        fontSize: "7px",
        margin: "0",
        padding: "0",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </footer>
  );
}

export default SubFooter;

//   style={{
//     backgroundColor: "black",
//     height: "100vh",
//     color: "white",
//     textAlign: "center",
//     display: "flex",
//     flexDirection: "column",
//   }}
