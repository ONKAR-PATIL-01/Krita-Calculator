import React from "react";
import { Box, Button, Card } from "@mui/material";

import ResponsiveAppBar from "./ResponsiveAppBar";
// import statement1 from "../statement1.svg";
import Calculator from "./Calculator";
import { usePDF } from "react-to-pdf";
const Container = () => {
  const isSmallScreen = window.innerWidth <= 800;
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <>
      <div ref={targetRef} style={{ width: "100%" }}>
        <ResponsiveAppBar />
        <Card
          style={{
            marginTop: "30px",
            paddingLeft: "10%",
            paddingBottom: "10px",
            boxShadow: "none",
            marginBottom: "20px",
          }}
        >
          <Box
            style={{
              height: "2%",
              width: isSmallScreen ? "80%" : "50%",
              marginBottom: "10px",
              fontSize:'22px',
              color:'#808080',
              marginTop:'10px'
            }}

          >Talent Marketing ROI Calculator</Box>
          <div
            style={{
              color: "#A3A0A0",
              fontSize: isSmallScreen ? "10px" : "16px",
            }}
          >
            {/* Discover your savings potential  with our genAI Recruiter Copilot!   */}
            Calculate the total value companies can derive out of investing in talent marketing.         </div>
        </Card>

        <Calculator />
      </div>
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          borderRadius: "50px", // Set border-radius to make it round
          fontSize: "12px",
          height:'30px',
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
};

export default Container;
