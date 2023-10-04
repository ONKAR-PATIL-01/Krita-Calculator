/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  FormControl,
  MenuItem,
  Select,
  Slider,
  Typography,
} from "@mui/material";
import DetailedCalculator from "./DetailedCalculator";
import { ArrowDropDown } from "@mui/icons-material";
import krita from "../krita.svg";

const regions = [
  "North America",
  "South America",
  "Europe",
  "MENA",
  "Africa",
  "South Asia",
  "East Asia",
  "Australia",
  "Others",
];

const Calculator = () => {
  // Define state variables for each input
  const [rolesPerYear, setRolesPerYear] = useState(100);
  const [applicationsPerRole, setApplicationsPerRole] = useState(200);
  const [companyLocation, setCompanyLocation] = useState("North America");
  const [calculatedData, setCalculatedData] = useState();
  const [detailedFlag, setDetailedFlag] = useState(false);
  const isSmallScreen = window.innerWidth <= 800;

  // Event handler for role slider
  const handleRolesPerYearChange = (event, newValue) => {
    setRolesPerYear(newValue);
  };
  useEffect(() => {}, []);
  // Event handler for applications slider
  const handleApplicationsPerRoleChange = (event, newValue) => {
    setApplicationsPerRole(newValue);
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
  useEffect(() => {}, [applicationsPerRole]);
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
            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>
              How many roles do you hire per year ?
            </div>
            <div style={{ color: "#FFCD00", fontSize: "30px" }}>
              {rolesPerYear}
            </div>
            <Slider
              aria-label="Hire/Year"
              value={rolesPerYear}
              min={1}
              max={10000}
              step={50}
              onChange={handleRolesPerYearChange}
              sx={{ color: "#FFCD00", width: "80%" }}
            />

            <div
              style={{
                fontSize: "16px",
                color: "#A3A0A0",
                wordBreak: "break-word",
              }}
            >
              How many applications do you receive per job post?
            </div>

            <div style={{ color: "#FFCD00", fontSize: "30px" }}>
              {applicationsPerRole}
            </div>
            <Slider
              aria-label="Hire/Year"
              value={applicationsPerRole}
              min={1}
              max={2000}
              step={100}
              onChange={handleApplicationsPerRoleChange}
              sx={{ color: "#FFCD00", width: "80%" }}
            />

            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>
              In which geography do you primarily hire candidates?
            </div>
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
            <Typography
              style={{
                color: "#A3A0A0",
                fontWeight: "bold",

                textDecorationThickness: "2px",
              }}
            >
              Potential savings per year
            </Typography>
            <hr></hr>

            <Typography
              variant="h4"
              style={{
                color: "#78A6D8",
                textAlign: "right",
                fontWeight: "200",
              }}
            >
              US{" "}
              {(
                (calculatedData?.normalCost - calculatedData?.kritaCost) *
                rolesPerYear
              ).toFixed(2) %
                1 ===
              0
                ? (
                    (calculatedData?.normalCost - calculatedData?.kritaCost) *
                    rolesPerYear
                  )
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                    .slice(0, -3) // Remove the last three characters (".00")
                : (
                    (calculatedData?.normalCost - calculatedData?.kritaCost) *
                    rolesPerYear
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
            </Typography>
            <br />
            <Typography
              variant="h7"
              style={{
                color: "#A3A0A0",

                textDecorationThickness: "1px",
              }}
            >
              Effort saved per role
            </Typography>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                Averge hours spent today
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
                Hours saved using Krita
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  {calculatedData?.normalHours - calculatedData?.kritaHours} hrs
                </b>
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
              Cost saved per role
            </Typography>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "12px",
                }}
              >
                Averge cost incurred today
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
                Cost saved using Krita
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  US{" "}
                  {(
                    calculatedData?.normalCost - calculatedData?.kritaCost
                  ).toFixed(2) %
                    1 ===
                  0
                    ? (calculatedData?.normalCost - calculatedData?.kritaCost)
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .slice(0, -3) // Remove the last three characters (".00")
                    : (
                        calculatedData?.normalCost - calculatedData?.kritaCost
                      ).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                </b>
              </Typography>
            </div>

            <br />
            <br />
            <Typography
              variant="h6"
              style={{ color: "#78A6D8", textAlign: "right" }}
            >
              Hire talent 10x faster using{" "}
              <img src={krita} alt="krita.ai"></img>
            </Typography>
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
                  window.open(
                    "https://calendly.com/krita/meet-kesavan",
                    "_blank"
                  );
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
              }}
            >
              Expand for detailed analysis
              <ArrowDropDown style={{ height: "25px" }} />
            </Typography>
          </div>
        )}
      </div>

      <DetailedCalculator
        rolesPerYear={rolesPerYear}
        applicationsPerRole={applicationsPerRole}
        companyLocation={companyLocation}
        sendCalculatedData={receiveCalculatedData}
        detailedFlag={detailedFlag}
        onDetailedFlagChange={handleDetailedFlagChange}
        onApplicationsPerRoleChange={handleApplicationsPerRoleChange}
      />
    </>
  );
};

export default Calculator;
