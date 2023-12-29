/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Box, Button, Card, FormControl, MenuItem, Select, Slider, Typography } from "@mui/material";
import DetailedCalculator from "./DetailedCalculator";
import { ArrowDropDown } from "@mui/icons-material";
// import krita from "../krita.svg";

const regions = ["North America", "South America", "Europe", "MENA", "Africa", "South Asia", "East Asia", "Australia", "Others"];

const Calculator = () => {
  // Define state variables for each input
  const [emplyeesize, setemplyeesize] = useState(100);
  const [hirePerYear, sethirePerYear] = useState(emplyeesize*25/100);
  const [companyLocation, setCompanyLocation] = useState("North America");
  const [calculatedData, setCalculatedData] = useState();
  const [detailedFlag, setDetailedFlag] = useState(false);
  const isSmallScreen = window.innerWidth <= 800;
  const marks = [{ value: 10 }, { value: 50 }, { value: 100 }, { value: 200 }, { value: 500 }, { value: 1000 }, { value: 2000 }, { value: 5000 }, { value: 10000 }, { value: 15000 }];

  // Event handler for role slider
  const handleemplyeesizeChange = (event, newValue) => {
    sethirePerYear(newValue*25/100);
    setemplyeesize(newValue);
  };
  useEffect(() => {}, []);
  // Event handler for applications slider
  const handlehirePerYearChange = (event, newValue) => {
    sethirePerYear(newValue);
  };

  // Event handler for company location select
  const handleCompanyLocationChange = (event) => {
    setCompanyLocation(event.target.value);
  };
  const handleDetailedFlagChange = (newFlag) => {
    setDetailedFlag(newFlag);
  };
  const receiveCalculatedData = (data) => {
    setCalculatedData(data);
  };
  useEffect(() => {}, [hirePerYear]);
  return (
    <>
      <div>
        {" "}
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          <Card
            style={{
              width: isSmallScreen ? "90%" : "50%",
              boxShadow: "none",
              paddingLeft: "10%",
              paddingTop: "30px",
              paddingRight: "5%",
              marginBottom: isSmallScreen ? "20px" : "0px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>Your employee size</div>
            <div style={{ color: "#FFCD00", fontSize: "30px" }}>{emplyeesize}</div>
            {/* <Slider
              aria-label="Hire/Year"
              value={emplyeesize}
              min={1}
              max={10000}
              step={50}
              onChange={handleemplyeesizeChange}
              sx={{ color: "#FFCD00", width: "80%" }}
            /> */}
            
            <Slider aria-label="Hire/Year" value={emplyeesize} min={10} max={15000} step={null} marks={marks} onChange={handleemplyeesizeChange} sx={{ color: "#FFCD00", width: "80%" }} />
           <Box sx={{ marginTop: "30px" }} />
            <div
              style={{
                fontSize: "16px",
                color: "#A3A0A0",
                wordBreak: "break-word",
              }}
            >
             How many roles do you hire per year?
            </div>

            <div style={{ color: "#FFCD00", fontSize: "30px" }}>
              {hirePerYear}
            </div>
            <Slider
              aria-label="Hire/Year"
              value={hirePerYear}
              // defaultValue={(emplyeesize*25/100)}
              min={1}
              max={(emplyeesize*5)}
              step={1}
              onChange={handlehirePerYearChange}
              sx={{ color: "#FFCD00", width: "80%" }}
            />
            {/* <br/> */}
            <Box sx={{ marginTop: "30px" }} />
            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>Your country of operations ?</div>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={companyLocation}
                onChange={handleCompanyLocationChange}
                variant={"standard"}
                sx={{
                  color: "#FFCD00",
                  backgroundColor: "#FFF",
                  width: "80%",
                  fontSize: "30px",
                  marginBottom: 0,
                }}
                label="Country"
              >
                {regions.map((region, index) => (
                  <MenuItem key={index} value={region}>
                    {region}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Card>
          <Card
            style={{
              width: isSmallScreen ? "70%" : "25%",
              boxShadow: "none",
              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(to right, #FFF, #E3F0FF)", // Set the background gradient here
              marginLeft: isSmallScreen ? "10%" : "0px",
              // marginTop: isSmallScreen ? "20px" : "0px",
              padding: "20px",
            }}
          >
            <br />
            <Typography
              variant="h7"
              style={{
                color: "#A3A0A0",

                textDecorationThickness: "1px",
              }}
            >
              Effort spent
            </Typography>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                Effort spent today / year
              </Typography>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                {calculatedData?.normalHours} hrs
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Effort saved with AI
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>{calculatedData?.kritaHours} hrs</b>
              </Typography>
            </div>
            <br />
            <Typography
              variant="h7"
              style={{
                color: "#A3A0A0",

                textDecorationThickness: "1px",
              }}
            >
              Cost saved
            </Typography>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                Averge cost incurred today /year
              </Typography>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                US{" "}
                {(calculatedData?.normalCost - 0).toFixed(2) % 1 === 0
                  ? (calculatedData?.normalCost - 0)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .slice(0, -3) // Remove the last three characters (".00")
                  : (calculatedData?.normalCost - 0).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Cost saved with AI
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  US{" "}
                  {(calculatedData?.kritaCost - 0).toFixed(2) % 1 === 0
                    ? (calculatedData?.kritaCost - 0)
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .slice(0, -3) // Remove the last three characters (".00")
                    : (calculatedData?.kritaCost - 0).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                </b>
              </Typography>
            </div>

            <br />
            <br />
            {/* <Typography variant="h6" style={{ color: "#78A6D8", textAlign: "right" }}>
              Hire talent 10x faster using <img src={krita} alt="krita.ai"></img>
            </Typography> */}
            <br />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "30px",
                  fontSize: "16px",
                  background: "linear-gradient(to bottom, #70A8DC, #70A8DC)",
                  backgroundSize: "100% 200%",
                  transition: "background-position 0.5s",
                  "&:hover": {
                    background: "linear-gradient(to bottom, #FFCD00, #FFCD00)",
                  },
                }}
                onClick={() => {
                  window.open("https://calendly.com/krita/meet-kesavan", "_blank");
                }}
              >
                schedule a demo
              </Button>
            </div>
          </Card>
        </div>
        {!detailedFlag && (
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDetailedFlag(!detailedFlag);
            }}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "10%",
                color: "#A3A0A0",
                marginTop:'40px'
              }}
            >
              Expand for detailed analysis
              <ArrowDropDown style={{ height: "25px" }} />
            </Typography>
          </div>
        )}
      </div>

      <DetailedCalculator emplyeesize={emplyeesize} hirePerYear={hirePerYear} companyLocation={companyLocation} sendCalculatedData={receiveCalculatedData} detailedFlag={detailedFlag} onDetailedFlagChange={handleDetailedFlagChange} onhirePerYearChange={handlehirePerYearChange} />
    </>
  );
};

export default Calculator;
