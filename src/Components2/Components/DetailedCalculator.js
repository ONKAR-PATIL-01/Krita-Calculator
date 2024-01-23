/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Grid, IconButton, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React, { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import DeleteIcon from "@mui/icons-material/Delete";
import { ArrowDropUp } from "@mui/icons-material";
import krita from "../../krita.svg";
const countryData = [
  {
    Geography: "North America",
    data: {
      Multiple: "1.00",
      MarketingManager: 60.0,
      ContentCreator: 30.0,
      MarketingAssociate: 45.0,
      Others: 36.0,
    },
  },
  {
    Geography: "South America",
    data: {
      Multiple: "0.55",
      MarketingManager: 33.0,
      ContentCreator: 16.5,
      MarketingAssociate: 24.75,
      Others: 19.8,
    },
  },
  {
    Geography: "Europe",
    data: {
      Multiple: "1.20",
      MarketingManager: 72.0,
      ContentCreator: 36.0,
      MarketingAssociate: 54.0,
      Others: 43.2,
    },
  },
  {
    Geography: "MENA",
    data: {
      Multiple: "0.80",
      MarketingManager: 48.0,
      ContentCreator: 24.0,
      MarketingAssociate: 36.0,
      Others: 28.8,
    },
  },
  {
    Geography: "Africa",
    data: {
      Multiple: "0.40",
      MarketingManager: 24.0,
      ContentCreator: 12.0,
      MarketingAssociate: 18.0,
      Others: 14.4,
    },
  },
  {
    Geography: "South Asia",
    data: {
      Multiple: "0.50",
      MarketingManager: 30.0,
      ContentCreator: 15.0,
      MarketingAssociate: 22.5,
      Others: 18.0,
    },
  },
  {
    Geography: "East Asia",
    data: {
      Multiple: "0.70",
      MarketingManager: 42.0,
      ContentCreator: 21.0,
      MarketingAssociate: 31.5,
      Others: 25.2,
    },
  },
  {
    Geography: "Australia",
    data: {
      Multiple: "1.20",
      MarketingManager: 72.0,
      ContentCreator: 36.0,
      MarketingAssociate: 54.0,
      Others: 43.2,
    },
  },
  {
    Geography: "Others",
    data: {
      Multiple: "0.80",
      MarketingManager: 48.0,
      ContentCreator: 24.0,
      MarketingAssociate: 36.0,
      Others: 28.8,
    },
  },
];

const companyEffortsData = [
  {
    CompanySize: 10,
    ResearchPercentage: 500,
    ContentTeamMultiple: 0.2,
  },
  {
    CompanySize: 50,
    ResearchPercentage: 300,
    ContentTeamMultiple: 0.3,
  },
  {
    CompanySize: 100,
    ResearchPercentage: 200,
    ContentTeamMultiple: 0.5,
  },
  {
    CompanySize: 200,
    ResearchPercentage: 175,
    ContentTeamMultiple: 0.75,
  },
  {
    CompanySize: 500,
    ResearchPercentage: 150,
    ContentTeamMultiple: 1.0,
  },
  {
    CompanySize: 1000,
    ResearchPercentage: 125,
    ContentTeamMultiple: 2.0,
  },
  {
    CompanySize: 2000,
    ResearchPercentage: 90,
    ContentTeamMultiple: 3.0,
  },
  {
    CompanySize: 5000,
    ResearchPercentage: 40,
    ContentTeamMultiple: 4.0,
  },
  {
    CompanySize: 10000,
    ResearchPercentage: 22,
    ContentTeamMultiple: 5.0,
  },
  {
    CompanySize: 15000,
    ResearchPercentage: 15,
    ContentTeamMultiple: 6.0,
  },
];

const DetailedCalculator = ({ emplyeesize, hirePerYear, companyLocation, sendCalculatedData, detailedFlag, onDetailedFlagChange }) => {
  const isSmallScreen = window.innerWidth <= 800;
  var multiplier = hirePerYear / emplyeesize / (25 / 100);

  var effortsToday, effortsWithAI, costToday, costWithAI;

  effortsToday =
    (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
    (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
    (emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100 +
    (4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
    (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (50 / 100) *
        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (50 / 100) *
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
    (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
    52 * 5 * 0.25 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple;

  costToday =
    ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others +
    ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others +
    ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others +
    (15 *
      6 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
      (50 / 100) *
        (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
      4 *
        8 *
        2 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
      12 *
        4 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
      12 *
        4 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager) +
    (1 *
      8 *
      52 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
      multiplier +
      4 *
        52 *
        5 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
        multiplier +
      (50 / 100) *
        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
        multiplier +
      (50 / 100) *
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
        multiplier) +
    (1 *
      52 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
      multiplier +
      2 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
        multiplier +
      1 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        multiplier +
      2 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        multiplier) +
    (52 *
      5 *
      0.25 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
      multiplier +
      52 *
        5 *
        0.25 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
        multiplier);

  effortsWithAI =
    (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
    (((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100 +
    ((75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
    ((80 / 100) * (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (75 / 100) *
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (25 / 100) *
        (50 / 100) *
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
    ((75 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (50 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
      (25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
    0;
  costWithAI =
    (((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
      ((((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100)) /
      ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) +
    (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
      (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
      ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
      50) /
      100 /
      ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) +
    ((15 *
      6 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
      ((25 / 100) * (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
      (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((50 / 100) *
        (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        ((50 / 100) *
          (50 / 100) *
          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
        ((50 / 100) *
          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (12 *
        4 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        ((75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
        (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (12 *
        4 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        ((25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
        (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (12 *
        4 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        ((50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
        (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) +
    ((1 *
      8 *
      52 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
      multiplier *
      ((75 / 100) * 1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
      (1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((80 / 100) *
        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        (4 *
          52 *
          5 *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
          (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
          multiplier)) /
        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((50 / 100) *
        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
        multiplier *
        ((75 / 100) *
          ((50 / 100) *
            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((25 / 100) *
        (50 / 100) *
        ((50 / 100) *
          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        ((50 / 100) *
          ((50 / 100) *
            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
          multiplier)) /
        ((50 / 100) *
          ((50 / 100) *
            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) +
    ((1 *
      52 *
      companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
      (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
      multiplier *
      ((50 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
      (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((50 / 100) *
        2 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (2 *
          52 *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
          multiplier)) /
        (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      (1 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
        multiplier *
        ((25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
        (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
      ((75 / 100) *
        2 *
        52 *
        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
        (2 *
          52 *
          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
          multiplier)) /
        (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) +
    0;

  const handleToggleDetail = () => {
    const newFlag = !detailedFlag; // Toggle the flag
    onDetailedFlagChange(newFlag); // Pass the updated flag back to the parent component
  };

  // console.log(effortsToday);
  // console.log(costToday);
  // console.log(effortsWithAI);
  // console.log(costWithAI);
  useEffect(() => {
    const calculatedData = {
      normalHours: Math.round(effortsToday),
      normalCost: Math.round(costToday),
      kritaHours: Math.round(effortsWithAI),
      kritaCost: Math.round(costWithAI),
    };

    // Call the function to send the calculated data to App.js
    sendCalculatedData(calculatedData);
  }, [costWithAI]);
  return (
    <>
      {detailedFlag && (
        <div>
          <Typography variant="h5" style={{ color: "#78A6D8", marginLeft: "10%", marginTop: "50px" }}>
            Detailed calculation of time taken at each stage
          </Typography>
          {/* onClick={handleToggleDetail} */}
          <div
            style={{
              cursor: "pointer",
              marginTop: "10px",
              marginBottom: "40px",
            }}
            onClick={handleToggleDetail}
          >
            <Typography
              style={{
                display: "flex",
                alignItems: "right",
                marginLeft: "70%",
                color: "#808080",
              }}
            >
              Back to simplified analysis
              <ArrowDropUp style={{ height: "25px" }} />
            </Typography>
          </div>

          {/* step 1 header */}
          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: "5%",
              color: "#A3A0A0",
              paddingRight: "5%",
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "left",
                  borderBottom: "2px solid #A3A0A0",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  color: "#808080",
                }}
              >
                Research EVP
              </Typography>
            </Grid>

            {/* First grid */}
            <Grid item xs={12} sm={9} sx={{ paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Current Effort & Cost (Manual)
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Activity
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Frequency
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Effort Involved (hrs)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Involved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
               
                      textAlign: "left",
                    }}
                  >
                    Research competitors and talent preferences.
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Onetime
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others
                      )
                    )}
                  </Typography>
                </Grid>

                {/* row 2 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                      textAlign: "left",
                    }}
                  >
                    Bubble up authentic, aspirational and differentiating values{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Onetime
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign: "left",
                    }}
                  >
                    Create EVP and Brand Assets
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Onetime
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others
                      )
                    )}
                  </Typography>
                </Grid>

                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
                        (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
                        (emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others +
                          ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.Others +
                          ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.Others
                      )
                    )}
                  </Typography>
                </Grid>

                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>

            {/* grid 1.2 */}

            {/* Second grid */}
            <Grid item xs={12} sm={3} sx={{ borderLeft: " 1px solid #ccc", textAlign: "center", paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  // height:'50px',
                  overflow: "auto",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Cost and Effort Savings
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                     Effort Saved(hrs)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Saved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    {Math.round((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                          50) /
                          100 /
                          ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100)
                      )
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    {Math.round((((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          ((((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100)) /
                          ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100)
                      )
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    0
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    $0
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100 +
                        (((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      height: "50px",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          ((((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) * 25) / 100)) /
                          ((((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) * 50) / 100) +
                          (((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                            ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100) *
                            50) /
                            100 /
                            ((emplyeesize * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ResearchPercentage) / 100)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>
          </Grid>

          {/* step 2 header */}
          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: "5%",
              color: "#A3A0A0",
              paddingRight: "5%",
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "left",
                  borderBottom: "2px solid #A3A0A0",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  color: "#808080",
                }}
              >
                Develop Strategy & Plan
              </Typography>
            </Grid>

            {/* First grid */}
            <Grid item xs={12} sm={9} sx={{ paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Current Effort & Cost (Manual)
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Activity
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Frequency
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Effort Involved (hrs)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Involved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Develop talent proposition for each target audience{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Onetime
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        15 *
                          6 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>

                {/* row 2 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Create and manage talent marketing calender{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Onetime
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (50 / 100) *
                        (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (50 / 100) *
                          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>

                {/* row 3 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    {" "}
                    Weekly planning{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        4 *
                          8 *
                          2 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>

                {/* row 4 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    {" "}
                    Listening to competitor updates, trends and talent insights{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        12 *
                          4 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 5 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                       textAlign:'left'
                    }}
                  >
                    Dashboard & reporting
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        12 *
                          4 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>

                {/* total */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      // borderBottom:'1px solid #A3A0A0'
                      // color:'#A3A0A0 !important',
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      // 15 *
                      // 6 *
                      // companyEffortsData?.find(
                      //   (company) => company.CompanySize === emplyeesize
                      // )?.ContentTeamMultiple +
                      // (50 / 100) *
                      //   (15 *
                      //     6 *
                      //     companyEffortsData?.find(
                      //       (company) => company.CompanySize === emplyeesize
                      //     )?.ContentTeamMultiple) *
                      //   companyEffortsData?.find(
                      //     (company) => company.CompanySize === emplyeesize
                      //   )?.ContentTeamMultiple +
                      (4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        15 *
                          6 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
                          (50 / 100) *
                            (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
                          4 *
                            8 *
                            2 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
                          12 *
                            4 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager +
                          12 *
                            4 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager
                      )
                    )}
                  </Typography>
                </Grid>

                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>

            {/* Second grid */}
            <Grid item xs={12} sm={3} sx={{ borderLeft: " 1px solid #ccc", textAlign: "center", paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Cost and Effort Savings
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                     Effort Saved(hrs)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Saved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row1 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((25 / 100) * (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (15 *
                          6 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((25 / 100) * (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
                          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (50 / 100) *
                        (50 / 100) *
                        (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((50 / 100) *
                          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((50 / 100) *
                            (50 / 100) *
                            (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          ((50 / 100) *
                            (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* <Grid item xs={12}></Grid> */}
                {/* row3 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (12 *
                          4 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row4 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (12 *
                          4 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row5 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (12 *
                          4 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>

                {/* total */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      (75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (15 *
                          6 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          ((25 / 100) * (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
                          (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((50 / 100) *
                            (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            ((50 / 100) *
                              (50 / 100) *
                              (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                            ((50 / 100) *
                              (15 * 6 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          (12 *
                            4 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            ((75 / 100) * 4 * 8 * 2 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                            (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          (12 *
                            4 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            ((25 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                            (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          (12 *
                            4 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            ((50 / 100) * 12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                            (12 * 4 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>
          </Grid>

          {/* step 3 header */}

          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: "5%",
              color: "#A3A0A0",
              paddingRight: "5%",
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "left",
                  borderBottom: "2px solid #A3A0A0",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  color: "#808080",
                }}
              >
                Build & Launch Campaigns
              </Typography>
            </Grid>

            {/* First grid */}
            <Grid item xs={12} sm={9} sx={{ paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Current Effort & Cost (Manual)
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Activity
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Frequency
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Effort Involved (hrs)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Involved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Create campaigns
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        1 *
                          8 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Create content
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        4 *
                          52 *
                          5 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Review content
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (50 / 100) *
                        (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 4 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Publish content
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (50 / 100) *
                        ((50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (50 / 100) *
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* total  */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (50 / 100) *
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        1 *
                          8 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier +
                          4 *
                            52 *
                            5 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                            multiplier +
                          (50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                            multiplier +
                          (50 / 100) *
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                            multiplier
                      )
                    )}
                  </Typography>
                </Grid>

                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>

            {/* Second grid */}
            <Grid item xs={12} sm={3} sx={{ borderLeft: " 1px solid #ccc", textAlign: "center", paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Cost and Effort Savings
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                     Effort Saved(hrs)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Saved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((75 / 100) * 1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (1 *
                          8 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier *
                          ((75 / 100) * 1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((80 / 100) * (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((80 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          (4 *
                            52 *
                            5 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                            multiplier)) /
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (75 / 100) *
                        ((50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                          multiplier *
                          ((75 / 100) *
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 4 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(
                      (25 / 100) *
                        (50 / 100) *
                        ((50 / 100) *
                          (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                        companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((25 / 100) *
                          (50 / 100) *
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          ((50 / 100) *
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                            multiplier)) /
                          ((50 / 100) *
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* total   */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      (80 / 100) * (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                        (75 / 100) *
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                        (25 / 100) *
                          (50 / 100) *
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (1 *
                          8 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier *
                          ((75 / 100) * 1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (1 * 8 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((80 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            (4 *
                              52 *
                              5 *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                              (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                              multiplier)) /
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((50 / 100) *
                            (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.ContentCreator *
                            multiplier *
                            ((75 / 100) *
                              ((50 / 100) *
                                (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                                companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple))) /
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((25 / 100) *
                            (50 / 100) *
                            ((50 / 100) *
                              (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            ((50 / 100) *
                              ((50 / 100) *
                                (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                                companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                              (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                              multiplier)) /
                            ((50 / 100) *
                              ((50 / 100) *
                                (4 * 52 * 5 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                                companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>
          </Grid>

          {/* step 4 header */}

          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: "5%",
              color: "#A3A0A0",
              paddingRight: "5%",
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "left",
                  borderBottom: "2px solid #A3A0A0",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  color: "#808080",
                }}
              >
                Optimize Campaigns
              </Typography>
            </Grid>

            {/* First grid */}
            <Grid item xs={12} sm={9} sx={{ paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Current Effort & Cost (Manual)
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Activity
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Frequency
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Effort Involved (hrs)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Involved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Engage with talent{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Track performance matrics{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        2 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Create dashboard and report{" "}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 4 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Fine tune plan, topics and content
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        2 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>

                {/* total   */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier +
                          2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                            multiplier +
                          1 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            multiplier +
                          2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            multiplier
                      )
                    )}
                  </Typography>
                </Grid>

                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>

            {/* Second grid */}
            <Grid item xs={12} sm={3} sx={{ borderLeft: " 1px solid #ccc", textAlign: "center", paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Cost and Effort Savings
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                     Effort Saved(hrs)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Saved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((50 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier *
                          ((50 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((50 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((50 / 100) *
                          2 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                            multiplier)) /
                          (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 3 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                          multiplier *
                          ((25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 4 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round((75 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        ((75 / 100) *
                          2 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            multiplier)) /
                          (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* total  */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(
                      (75 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (50 / 100) * 2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple +
                        (25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        (1 *
                          52 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                          multiplier *
                          ((50 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                          (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((50 / 100) *
                            2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (2 *
                              52 *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                              (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingAssociate *
                              multiplier)) /
                            (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          (1 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                            multiplier *
                            ((25 / 100) * 1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)) /
                            (1 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple) +
                          ((75 / 100) *
                            2 *
                            52 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (2 *
                              52 *
                              companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                              (countryData?.find((country) => country.Geography === companyLocation)).data.MarketingManager *
                              multiplier)) /
                            (2 * 52 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)
                      )
                    )}
                  </Typography>
                </Grid>
                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>
          </Grid>

          {/* step 5 header */}

          <Grid
            container
            spacing={2}
            sx={{
              paddingLeft: "5%",
              color: "#A3A0A0",
              paddingRight: "5%",
              paddingBottom: "20px",
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  textAlign: "left",
                  borderBottom: "2px solid #A3A0A0",
                  paddingBottom: "8px",
                  marginBottom: "12px",
                  color: "#808080",
                }}
              >
                Collaboration
              </Typography>
            </Grid>

            {/* First grid */}
            <Grid item xs={12} sm={9} sx={{ paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  textAlign: "center",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Current Effort & Cost (Manual)
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Activity
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Frequency
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Effort Involved (hrs)
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Involved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Coordination & Communication overheads
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(52 * 5 * 0.25 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        52 *
                          5 *
                          0.25 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                      textAlign:'left'
                    }}
                  >
                    Management overhead in review meetings
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    Recurring
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {Math.round(52 * 5 * 0.25 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        52 *
                          5 *
                          0.25 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          multiplier
                      )
                    )}
                  </Typography>
                </Grid>

                {/* total  */}
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  ></Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {Math.round(52 * 5 * 0.25 * companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple)}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    {new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(
                      Math.round(
                        52 *
                          5 *
                          0.25 *
                          companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                          (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                          multiplier +
                          52 *
                            5 *
                            0.25 *
                            companyEffortsData?.find((company) => company.CompanySize === emplyeesize)?.ContentTeamMultiple *
                            (countryData?.find((country) => country.Geography === companyLocation)).data.Others *
                            multiplier
                      )
                    )}
                  </Typography>
                </Grid>

                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>

            {/* Second grid */}
            <Grid item xs={12} sm={3} sx={{ borderLeft: " 1px solid #ccc", textAlign: "center", paddingTop: "0px !important" }}>
              <Typography
                variant="h6"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "auto",
                  maxWidth: "100%",
                  marginBottom: "20px",
                }}
              >
                Cost and Effort Savings
              </Typography>
              <Grid container spacing={2} style={{ textAlign: "center" }}>
                {/* Column headers */}
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                     Effort Saved(hrs)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="h6"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                    }}
                  >
                    Cost Saved
                  </Typography>
                </Grid>

                {/* Add your data rows here */}
                {/* For example */}
                {/* row 1 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    0
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    $0
                  </Typography>
                </Grid>
                {/* row 2 */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    0
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      // whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      height: "50px",
                    }}
                  >
                    $0
                  </Typography>
                </Grid>
                {/* total  */}
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    0
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body1"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "auto",
                      maxWidth: "100%",
                      fontWeight: "bold",
                    }}
                  >
                    $0
                  </Typography>
                </Grid>
                {/* Repeat this structure for more rows */}
              </Grid>
            </Grid>
          </Grid>
          <br />
          <br />
          {/* <hr/> */}

          <br />
        </div>
      )}
    </>
  );
};

export default DetailedCalculator;
