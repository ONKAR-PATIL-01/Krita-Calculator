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
import krita from '../krita.svg'
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
  const [applicationsPerRole, setApplicationsPerRole] = useState(500);
  const [companyLocation, setCompanyLocation] = useState("South America");
  const [calculatedData, setCalculatedData] = useState();
  const [detailedFlag, setDetailedFlag] = useState(false);


  // Event handler for role slider
  const handleRolesPerYearChange = (event, newValue) => {
    setRolesPerYear(newValue);
  };
  useEffect(()=>{
    
  },[])
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
  useEffect(()=>{

  },[applicationsPerRole])
  return (
    <>
      {!detailedFlag && (
        <div>
          {" "}
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Card
              style={{
                width: "50%",
                boxShadow: "none",
                paddingLeft: "10%",
                paddingTop: "30px",
              }}
            >
              <Typography style={{ fontSize: "16px", color: "#A3A0A0" }}>
                How many roles do you hire per year ?
              </Typography>
              <Typography style={{ color: "#FFCD00", fontSize: "30px" }}>
                {rolesPerYear}
              </Typography>
              <Slider
                aria-label="Hire/Year"
                value={rolesPerYear}
                min={1}
                max={1000}
                step={1}
                onChange={handleRolesPerYearChange}
                sx={{ color: "#FFCD00", width: "80%" }}
              />

              <Typography style={{ fontSize: "16px", color: "#A3A0A0" }}>
                How many applications do you receive per role ?
              </Typography>
              <Typography style={{ color: "#FFCD00", fontSize: "30px" }}>
                {applicationsPerRole}
              </Typography>
              <Slider
                aria-label="Hire/Year"
                value={applicationsPerRole}
                min={1}
                max={5000}
                step={1}
                onChange={handleApplicationsPerRoleChange}
                sx={{ color: "#FFCD00", width: "80%" }}
              />

              <Typography style={{ fontSize: "16px", color: "#A3A0A0" }}>
                Where is your company located ?
              </Typography>
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
                width: "25%",
                boxShadow: "none",
                borderRadius: "10px",
                border: "none",
                background: "linear-gradient(to right, #FFF, #E3F0FF)", // Set the background gradient here

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
                Total savings per year
              </Typography>
              <hr></hr>

              <Typography
                variant="h4"
                style={{ color: "#78A6D8", textAlign: "right" }}
              >
                US
                {(
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
                Effort/Role
              </Typography>
              <hr />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "12px",
                  }}
                >
                  Averge hours spent
                </Typography>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "12px",
                  }}
                >
                  {calculatedData?.normalHours}h
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "14px",
                  }}
                >
                  Averge hours saved with krita.ai
                </Typography>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "14px",
                  }}
                >
                  {calculatedData?.normalHours - calculatedData?.kritaHours}h
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
                Cost/Role
              </Typography>
              <hr />

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "12px",
                  }}
                >
                  Averge spent
                </Typography>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "12px",
                  }}
                >
                  US{" "}
                  {(calculatedData?.normalCost - 0).toLocaleString("en-US", {
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
                  Averge saved with krita.ai
                </Typography>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "14px",
                  }}
                >
                  US
                  {(
                    calculatedData?.normalCost - calculatedData?.kritaCost
                  ).toLocaleString("en-US", {
                    style: "currency",
                    currency: "USD",
                  })}
                </Typography>
              </div>

              <br />
              <br />
              <Typography
                variant="h6"
                style={{ color: "#78A6D8", textAlign: "right" }}
              >
                Save up to 115h per role with <img src={krita} alt="krita.ai"></img>
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
                      background:
                        "linear-gradient(to bottom, #FFCD00, #FFCD00)",
                    },
                  }}
                  onClick={() => {
                    window.open('https://meetings.hubspot.com/kesavan', '_blank');
                  }}
                >
                  schedule a demo
                </Button>
              </div>
            </Card>
          </div>
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
        </div>
      )}

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
