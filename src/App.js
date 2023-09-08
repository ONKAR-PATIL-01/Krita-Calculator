import { Card, Typography } from "@mui/material";
import "./App.css";
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import statement1 from "./statement1.svg";
import Calculator from "./Components/Calculator";
function App() {
  return (
    <>
      <ResponsiveAppBar  />
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
    </>
  );
}

export default App;
