import { Button, Card, Typography } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import statement1 from "./statement1.svg";
import Calculator from "./Components/Calculator";
import { usePDF } from "react-to-pdf";
function App() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
   <div ref={targetRef}>
      <ResponsiveAppBar />
      <Card
        style={{
          marginTop: "50px",
          paddingLeft: "10%",
          paddingBottom: "10px",
          boxShadow: "none",
          marginBottom: "20px",
        }}
      >
        <img
          style={{ height: "40px" }}
          src={statement1}
          alt="How much you can save with krita ?"
        ></img>
        <Typography style={{ color: "#A3A0A0" }}>
          Try our recruitment process automation calculator <br /> here below
          and find out now.
        </Typography>
      </Card>
   
        <Calculator />
        </div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: "50px", // Set border-radius to make it round
          fontSize: "16px",
          background: "linear-gradient(to bottom, #70A8DC, #70A8DC)",
          backgroundSize: "100% 200%",
          transition: "background-position 0.5s",
          "&:hover": {
            background: "linear-gradient(to bottom, #FFCD00, #FFCD00)",
          },
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
        onClick={() => toPDF()}
      >
        Download PDF
      </Button>
    </>
  );
}

export default App;
