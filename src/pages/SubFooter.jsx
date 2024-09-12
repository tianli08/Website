function SubFooter() {
  return (
    <footer
      className="no-select"
      style={{
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
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
