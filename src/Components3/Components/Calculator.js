/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Avatar, Button, Card, FormControl, MenuItem, Select, Slider, Typography } from "@mui/material";
import DetailedCalculator from "./DetailedCalculator";
import { ArrowDropDown } from "@mui/icons-material";
import krita from "../../krita.svg";

const regions = ["North America", "South America", "Europe", "MENA", "Africa", "South Asia", "East Asia", "Australia", "Others"];

const Calculator = () => {
  // Define state variables for each input

  const [employeeSize, setemployeeSize] = useState(1000);
  const [rolesPerYear, setRolesPerYear] = useState(employeeSize * (17 / 100) + employeeSize * (8 / 100));
  // const [applicationsPerRole, setApplicationsPerRole] = useState(200);
  const [companyLocation, setCompanyLocation] = useState("North America");
  const [calculatedData, setCalculatedData] = useState();
  const [detailedFlag, setDetailedFlag] = useState(false);
  const [budgetperRole, setBudgetperRole] = useState(700);
  const isSmallScreen = window.innerWidth <= 800;
  const Emplyee = [{ value: 10 }, { value: 50 }, { value: 100 }, { value: 200 }, { value: 500 }, { value: 1000 }, { value: 2000 }, { value: 5000 }, { value: 10000 }, { value: 15000 }];
  const marks = [{ value: 100 }, { value: 200 }, { value: 300 }, { value: 400 }, { value: 500 }, { value: 600 }, { value: 700 }, { value: 800 }, { value: 1000 }, { value: 1500 }];

  // Event handler for role slider
  const handleRolesPerYearChange = (event, newValue) => {
    setRolesPerYear(newValue);
  };
  const handleEmployeeSizeChange = (event, newValue) => {
    setemployeeSize(newValue);
    setRolesPerYear((newValue * 17) / 100 + (newValue * 8) / 100);
  };
  useEffect(() => {}, []);
  // Event handler for applications slider
  const handleBudgetperRoleChange = (event, newValue) => {
    setBudgetperRole(newValue);
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

  useEffect(() => {}, [budgetperRole,rolesPerYear,companyLocation,employeeSize]);
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
              width: isSmallScreen ? "90%" : "45%",
              boxShadow: "none",
              paddingLeft: "10%",
              paddingTop: "10px",
              paddingRight: "5%",
              marginBottom: isSmallScreen ? "20px" : "0px",
            }}
          >
            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>Your employee size ?</div>
            <div style={{ color: "#FFCD00", fontSize: "18px" }}>{employeeSize}</div>
            <Slider aria-label="Employee size" value={employeeSize} min={10} max={15000} step={null} marks={Emplyee} onChange={handleEmployeeSizeChange} sx={{ color: "#FFCD00", width: "80%" }} />

            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>How many roles do you hire per year ?</div>
            <div style={{ color: "#FFCD00", fontSize: "18px" }}>{rolesPerYear}</div>
            <Slider aria-label="Hire/Year" value={rolesPerYear} min={1} max={5000} step={1} onChange={handleRolesPerYearChange} sx={{ color: "#FFCD00", width: "80%" }} />

            <div
              style={{
                fontSize: "16px",
                color: "#A3A0A0",
                wordBreak: "break-word",
              }}
            >
              Talent marketing budget per role?
            </div>

            <div style={{ color: "#FFCD00", fontSize: "18px" }}>{budgetperRole}</div>
            <Slider aria-label="Budget/Role" value={budgetperRole} min={100} max={1500} step={null} marks={marks} onChange={handleBudgetperRoleChange} sx={{ color: "#FFCD00", width: "80%" }} />

            <div style={{ fontSize: "16px", color: "#A3A0A0" }}>In which geography do you primarily hire candidates?</div>
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
                  fontSize: "18px",
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
              width: isSmallScreen ? "70%" : "27%",
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
              Total Talent Marketing Cost Incurred
              {/* Potential savings per year */}
            </Typography>

            <hr></hr>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  textAlign: "center",
                  width: "60px",
                  height: "60px",
                  fontSize: "18px",
                  marginLeft: "15px",
                  color: "#70A8DC", // Change the background color
                  background: "#FFF", // Change the text color
                  border:'2px solid #70A8DC'
                  // margin: "20px auto",
            
                }}
              >
                ROI{" "}
                {((1 +
                  ((calculatedData?.value_from_increased_retention +
                    calculatedData?.value_from_increased_conversion_rates +
                    calculatedData?.value_from_descreased_cost_to_fill +
                    calculatedData?.value_from_decreased_time_to_fill) -
                    rolesPerYear * budgetperRole) /
                    (rolesPerYear * budgetperRole))*100).toFixed()}
                % {/* Display your ROI % here */}
              </Avatar>
              <Typography
                variant="h4"
                style={{
                  color: "#78A6D8",
                  textAlign: "right",
                  fontWeight: "200",
                }}
              >
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(
                  Math.round(
                    calculatedData?.value_from_increased_retention +
                      calculatedData?.value_from_increased_conversion_rates +
                      calculatedData?.value_from_descreased_cost_to_fill +
                      calculatedData?.value_from_decreased_time_to_fill
                  )
                )}
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
              Value delivered
            </Typography>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Value from increased retentions
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  {/* {calculatedData?.normalHours - calculatedData?.kritaHours} hrs */}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(Math.round(calculatedData?.value_from_increased_retention))}

                  {/* 100 */}
                </b>
              </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Value from decrease in time to fill
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  {/* {calculatedData?.normalHours - calculatedData?.kritaHours} hrs */}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(Math.round(calculatedData?.value_from_decreased_time_to_fill))}
                </b>
              </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Value from decrease in cost to fill
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  {/* {calculatedData?.normalHours - calculatedData?.kritaHours} hrs */}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(Math.round(calculatedData?.value_from_descreased_cost_to_fill))}
                </b>
              </Typography>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                Value from increase in conversion rates
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                }}
              >
                <b>
                  {/* {calculatedData?.normalHours - calculatedData?.kritaHours} hrs */}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 2,
                  }).format(Math.round(calculatedData?.value_from_increased_conversion_rates))}
                </b>
              </Typography>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                TOTAL VALUE DELIVERED
              </Typography>
              <Typography
                style={{
                  color: "#78A6D8",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                {/* {calculatedData?.normalHours - calculatedData?.kritaHours} hrs */}
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(
                  Math.round(
                    calculatedData?.value_from_increased_retention +
                      calculatedData?.value_from_increased_conversion_rates +
                      calculatedData?.value_from_descreased_cost_to_fill +
                      calculatedData?.value_from_decreased_time_to_fill
                  )
                )}
              </Typography>
            </div>

            <br />
            <Typography variant="body2" style={{ color: "#78A6D8", textAlign: "right" }}>
              Hire talent 10x faster using <img style={{ height: "15px", paddingTop: "5px" }} src={krita} alt="krita.ai"></img>
            </Typography>
            <br />

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                variant="contained"
                sx={{
                  height: "30px",

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
                color: "#808080",
              }}
            >
              Expand for detailed analysis
              <ArrowDropDown style={{ height: "25px" }} />
            </Typography>
          </div>
        )}
      </div>

      <DetailedCalculator
        employeeSize={employeeSize}
        rolesPerYear={rolesPerYear}
        budgetperRole={budgetperRole}
        companyLocation={companyLocation}
        sendCalculatedData={receiveCalculatedData}
        detailedFlag={detailedFlag}
        onDetailedFlagChange={handleDetailedFlagChange}
        // onApplicationsPerRoleChange={handleApplicationsPerRoleChange}
      />
    </>
  );
};

export default Calculator;
