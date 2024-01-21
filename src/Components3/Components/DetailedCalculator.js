/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Button, Card, Grid, IconButton } from "@mui/material";
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
      Multiple: 1.0,
      TalentAcquisitionTeam: 50.0,
      ContentCreator: 30.0,
      MarketingAssociate: 45.0,
      Others: 40.0,
    },
  },
  {
    Geography: "South America",
    data: {
      Multiple: 0.55,
      TalentAcquisitionTeam: 27.5,
      ContentCreator: 16.5,
      MarketingAssociate: 24.75,
      Others: 22.0,
    },
  },
  {
    Geography: "Europe",
    data: {
      Multiple: 1.2,
      TalentAcquisitionTeam: 60.0,
      ContentCreator: 36.0,
      MarketingAssociate: 54.0,
      Others: 48.0,
    },
  },
  {
    Geography: "MENA",
    data: {
      Multiple: 0.8,
      TalentAcquisitionTeam: 40.0,
      ContentCreator: 24.0,
      MarketingAssociate: 36.0,
      Others: 32.0,
    },
  },
  {
    Geography: "Africa",
    data: {
      Multiple: 0.4,
      TalentAcquisitionTeam: 20.0,
      ContentCreator: 12.0,
      MarketingAssociate: 18.0,
      Others: 16.0,
    },
  },
  {
    Geography: "South Asia",
    data: {
      Multiple: 0.5,
      TalentAcquisitionTeam: 25.0,
      ContentCreator: 15.0,
      MarketingAssociate: 22.5,
      Others: 20.0,
    },
  },
  {
    Geography: "East Asia",
    data: {
      Multiple: 0.7,
      TalentAcquisitionTeam: 35.0,
      ContentCreator: 21.0,
      MarketingAssociate: 31.5,
      Others: 28.0,
    },
  },
  {
    Geography: "Australia",
    data: {
      Multiple: 1.2,
      TalentAcquisitionTeam: 60.0,
      ContentCreator: 36.0,
      MarketingAssociate: 54.0,
      Others: 48.0,
    },
  },
  {
    Geography: "Others",
    data: {
      Multiple: 0.8,
      TalentAcquisitionTeam: 40.0,
      ContentCreator: 24.0,
      MarketingAssociate: 36.0,
      Others: 32.0,
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
const DetailedCalculator = ({
  rolesPerYear,
  employeeSize,
  budgetperRole,
  companyLocation,
  sendCalculatedData,
  detailedFlag,
  onDetailedFlagChange,
  // onApplicationsPerRoleChange,
}) => {
  const isSmallScreen = window.innerWidth <= 800;
  const handleToggleDetail = () => {
    const newFlag = !detailedFlag; // Toggle the flag
    onDetailedFlagChange(newFlag); // Pass the updated flag back to the parent component
  };

  useEffect(() => {
    const calculatedData = {
      value_from_increased_retention: Math.round(total_6),
      value_from_decreased_time_to_fill: Math.round(total_7),
      value_from_descreased_cost_to_fill: Math.round(total_1_saving + total_2_saving),
      value_from_increased_conversion_rates: Math.round((today_cost_per_hire - accepted_cost_per_stage_2) * rolesPerYear),
    };

    // Call the function to send the calculated data to App.js
    sendCalculatedData(calculatedData);
  }, [rolesPerYear, employeeSize, companyLocation, budgetperRole]);

  // table 1
  var ta_team_costs = (rolesPerYear / 16) * (120 * 12) * (countryData?.find((country) => country.Geography === companyLocation)).data.TalentAcquisitionTeam;
  var ta_team_costs_saving = (((ta_team_costs * 10) / 100) * budgetperRole) / 610;
  var referral_Bonus = ((rolesPerYear * 15) / 100) * 180 * (countryData?.find((country) => country.Geography === companyLocation)).data.Others;
  var referral_Bonus_saving = (((-referral_Bonus * 25) / 100) * budgetperRole) / 610;
  var interviews_1 = rolesPerYear * 15 * (countryData?.find((country) => country.Geography === companyLocation)).data.Others;
  var interviews_1_saving = (((interviews_1 * 10) / 100) * budgetperRole) / 610;
  var misc_cost = (ta_team_costs * 10) / 100;
  var misc_cost_saving = 0;
  var total_1 = ta_team_costs + referral_Bonus + interviews_1 + misc_cost;
  var total_1_saving = ta_team_costs_saving + referral_Bonus_saving + interviews_1_saving + misc_cost_saving;

  // table 2
  var agency_fees = (ta_team_costs * 50) / 100;
  var agency_fees_saving = (((agency_fees * 50) / 100) * budgetperRole) / 610;
  var careers_events = ((rolesPerYear * 5) / 100) * 1000;
  var careers_events_saving = (((careers_events * 50) / 100) * budgetperRole) / 610;
  var job_boards = rolesPerYear * 100;
  var job_boards_saving = (((job_boards * 10) / 100) * budgetperRole) / 610;
  var recruiting_tools = rolesPerYear * 500;
  var recruiting_tools_saving = (((recruiting_tools * 25) / 100) * budgetperRole) / 610;
  var total_2 = agency_fees + careers_events + job_boards + recruiting_tools;
  var total_2_saving = agency_fees_saving + careers_events_saving + job_boards_saving + recruiting_tools_saving;

  // table 3
  var today_cost_per_hire = (total_1 + total_2) / rolesPerYear;
  var cost_per_hire_saving = (total_1_saving + total_2_saving) / rolesPerYear;
  var cost_per_hire_with_krita = today_cost_per_hire - cost_per_hire_saving;
  var Annual_saving_1 = cost_per_hire_saving * rolesPerYear;

  // table 4
  var average_attrition_Rate = 17 / 100;
  var backfills_required = employeeSize * average_attrition_Rate;
  var cost_incurred_backfills = today_cost_per_hire * backfills_required;

  // table 5
  var reduced_average_attrition_Rate = ((2 / 100) * budgetperRole) / 610;
  var new_backfills_required = backfills_required * (1 - reduced_average_attrition_Rate);
  var fewer_hires_made = backfills_required - new_backfills_required;

  // table 6
  var saving_from_hiring_budget = today_cost_per_hire * fewer_hires_made;
  var onboarding_costs_per_role = ((180 * 15) / 100) * 12 * (countryData?.find((country) => country.Geography === companyLocation)).data.Others;
  var onboarding_cost_saved = onboarding_costs_per_role * fewer_hires_made;
  var incremental_salary_cost = 30 / 100;
  var additional_salary_increament = 180 * 12 * fewer_hires_made * incremental_salary_cost * (countryData?.find((country) => country.Geography === companyLocation)).data.Others;
  var total_6 = saving_from_hiring_budget + onboarding_cost_saved + additional_salary_increament;

  // table 7
  var reduction_in_time_to_hire = (((84 * 2) / 100) * budgetperRole) / 610;
  var average_salary_of_new_hire = 180 * 12 * (1 + incremental_salary_cost) * (countryData?.find((country) => country.Geography === companyLocation)).data.Others;
  var value_delivered = 200 / 100;
  var value_saved_per_hire = ((average_salary_of_new_hire * value_delivered) / 365) * reduction_in_time_to_hire;
  var total_7 = value_saved_per_hire * rolesPerYear;

  // table 8

  // row 1
  var view_candidatein_pipeline = 2000;
  var view_conversion_rate = 5 / 100;
  var view_cost_per_stage_1 = 0;
  var view_values = view_candidatein_pipeline;
  var view_conversion_rate_2 = view_conversion_rate + ((1 / 100) * budgetperRole) / 610;
  var view_cost_per_stage_2 = 0;

  // row 2
  var applicant_candidatein_pipeline = 100;
  var applicant_conversion_rate = 20 / 100;
  var applicant_cost_per_stage_1 = today_cost_per_hire / applicant_candidatein_pipeline;
  var applicant_values = view_values * view_conversion_rate_2;
  var applicant_conversion_rate_2 = 25 / 100;
  var applicant_cost_per_stage_2 = today_cost_per_hire / applicant_values;

  // row 3
  var phonescreens_candidatein_pipeline = 20;
  var phonescreens_conversion_rate = 20 / 100;
  var phonescreens_cost_per_stage_1 = today_cost_per_hire / phonescreens_candidatein_pipeline;
  var phonescreens_values = applicant_values * applicant_conversion_rate_2;
  var phonescreens_conversion_rate_2 = 20 / 100;
  var phonescreens_cost_per_stage_2 = today_cost_per_hire / phonescreens_values;

  // row 4
  var interviews_candidatein_pipeline = 4;
  var interviews_conversion_rate = 50 / 100;
  var interviews_cost_per_stage_1 = today_cost_per_hire / interviews_candidatein_pipeline;
  var interviews_values = phonescreens_values * phonescreens_conversion_rate_2;
  var interviews_conversion_rate_2 = 50 / 100;
  var interviews_cost_per_stage_2 = today_cost_per_hire / interviews_values;

  // row 5
  var hires_candidatein_pipeline = 2;
  var hires_conversion_rate = 50 / 100;
  var hires_cost_per_stage_1 = today_cost_per_hire / hires_candidatein_pipeline;
  var hires_values = interviews_values * interviews_conversion_rate_2;
  var hires_conversion_rate_2 = 50 / 100;
  var hires_cost_per_stage_2 = today_cost_per_hire / hires_values;

  // row 6
  var accepted_candidatein_pipeline = 1;
  var accepted_conversion_rate = 100 / 100;
  var accepted_cost_per_stage_1 = today_cost_per_hire / accepted_candidatein_pipeline;
  var accepted_values = hires_values * hires_conversion_rate_2;
  var accepted_conversion_rate_2 = 100 / 100;
  var accepted_cost_per_stage_2 = today_cost_per_hire / accepted_values;

  // row 7
  var ramped_candidatein_pipeline = 1;
  // var ramped_conversion_rate=100/100;
  // var ramped_cost_per_stage_1=today_cost_per_hire/ramped_candidatein_pipeline;
  var ramped_values = accepted_values * accepted_conversion_rate_2;
  // var ramped_conversion_rate_2=100/100;
  var ramped_cost_per_stage_2 = today_cost_per_hire / ramped_values;

  return (
    <>
      {detailedFlag && (
        <Box>
          <Box  sx={{ color: "#78A6D8", marginLeft: "10%",fontSize:'20px' }}>
            Detailed calculation of time taken at each stage
          </Box>
          {/* onClick={handleToggleDetail} */}
          <Box
            sx={{
              cursor: "pointer",
              marginTop: "10px",
              marginBottom: "40px",
            }}
            onClick={handleToggleDetail}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "right",
                marginLeft: "70%",
                color: "#808080",
              }}
            >
              Back to simplified analysis
              <ArrowDropUp sx={{ height: "25px" }} />
            </Box>
          </Box>
          {/* table 1 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18px", fontWeight: "600" }}>Corporate Costs</Box>
            {/* row 0 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}></Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}></Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>Savings</Box>
            </Box>
            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>TA team Cost</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(ta_team_costs))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(ta_team_costs_saving))}
              </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Referral Bonuses</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(referral_Bonus))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(referral_Bonus_saving))}
              </Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Time spent by employees in recruitment (interviews etc)</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(interviews_1))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(interviews_1_saving))}
              </Box>
            </Box>
            {/* row 4 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Misc costs</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(misc_cost))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(misc_cost_saving))}
              </Box>
            </Box>
            {/* total */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%", fontWeight: "550" }}>Total corporate costs</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_1))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_1_saving))}
              </Box>
            </Box>
          </Box>
          {/* table 2 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18px", fontWeight: "600" }}>Jobs Marketing & Platform Costs</Box>
            {/* row 0 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}></Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}></Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>Savings</Box>
            </Box>
            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Agency Fees</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(agency_fees))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(agency_fees_saving))}
              </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Careers Events</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(careers_events))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(careers_events_saving))}
              </Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Job Boards</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(job_boards))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(job_boards_saving))}
              </Box>
            </Box>
            {/* row 4 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Recruiting Tools</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(recruiting_tools))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(recruiting_tools_saving))}
              </Box>
            </Box>
            {/* total */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%", fontWeight: "550" }}>Total Jobs Marketing costs</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_2))}
              </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_2_saving))}
              </Box>
            </Box>
          </Box>
          {/* table 3 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            {/* <Box sx={{color:'#808080', margin: "auto"}}>Jobs Marketing & Platform Costs</Box> */}

            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Today cost per hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(today_cost_per_hire))}
              </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>Saving per hire </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(cost_per_hire_saving))}
              </Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "60%" }}>cost per hire with krita</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(cost_per_hire_with_krita))}
              </Box>
            </Box>
            {/* row 4 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%", fontWeight: "550" }}>Annual savings</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(Annual_saving_1))}
              </Box>
            </Box>
          </Box>
          {/* table 4 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18px", fontWeight: "550" }}>Cost Per Hire</Box>
            <br />

            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Average Attrition rate</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{"17%"}</Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Backfills required </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{backfills_required}</Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Cost incurred for backfills</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(cost_incurred_backfills))}
              </Box>
            </Box>
          </Box>
          {/* table 5 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18px", fontWeight: "550" }}>Reduction In Cost Per Hire</Box>
            <br />
            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Reduced Attrition due to talent marketing</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{`${(reduced_average_attrition_Rate * 100).toFixed(2)}%`}</Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>New Backfills required </Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{new_backfills_required.toFixed()}</Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Fewer hires made / year</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{fewer_hires_made.toFixed()}</Box>
            </Box>
          </Box>

          {/* table 6 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18px", fontWeight: "550" }}>Cost Savings</Box>
            <br />
            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Cost Per Hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {" "}
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(today_cost_per_hire))}
              </Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Savings from Hiring Budget</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {" "}
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(saving_from_hiring_budget))}
              </Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Onboarding Costs / Role</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(onboarding_costs_per_role))}
              </Box>
            </Box>

            {/* row 4 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Onboarding Costs Saved</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(onboarding_cost_saved))}
              </Box>
            </Box>

            {/* row 5 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Incremental Salary Costs for Backfill roles</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{(incremental_salary_cost * 100).toFixed()}% </Box>
            </Box>

            {/* row 6  */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Additional Salary Increment Saved</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(additional_salary_increament))}
              </Box>
            </Box>

            {/* total  */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%", fontWeight: "550" }}>Total cost saved in hiring & onboarding</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_6))}
              </Box>
            </Box>
          </Box>

          {/* table 7 */}
          <Box sx={{ display: "table", margin: "auto", width: "80%", marginBottom: "2%" }}>
            <Box sx={{ color: "#808080", margin: "auto", fontSize: "18x", fontWeight: "550" }}>Value from decrease in time to fill</Box>
            <br />
            {/* Row 1 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Current time to hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}> {7 * 12} days</Box>
            </Box>

            {/* Row 2 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Reduction in time to hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}> {reduction_in_time_to_hire.toFixed()} days</Box>
            </Box>
            {/* row 3 */}

            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Average Salary of New Hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(average_salary_of_new_hire))}
              </Box>
            </Box>

            {/* row 4 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Value Delivered</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>{value_delivered * 100}%</Box>
            </Box>

            {/* row 5 */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%" }}>Value Saved Per Hire</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%" }}>
                {" "}
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(value_saved_per_hire))}
              </Box>
            </Box>

            {/* total  */}
            <Box sx={{ display: "table-row" }}>
              <Box sx={{ display: "table-cell", padding: "5px", textAlign: "left", color: "#808080", width: "80%", fontWeight: "550" }}>Total value saved</Box>
              <Box sx={{ display: "table-cell", padding: "5px",textAlign: "center",overflow:'auto' , color: "#808080", width: "20%", fontWeight: "550" }}>
                {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(total_7))}
              </Box>
            </Box>
          </Box>

          {/* final table */}
          <Box sx={{ margin: "auto", width: "95%", marginBottom: "2%", }}>
            <Box sx={{ color: "#808080", margin: "auto", textAlign: "left", fontSize: "18px", fontWeight: "550" }}>Value from increase in conversion rates</Box>
            <br />

            <Box sx={{width:'100% !important', overflowX: "auto" }}>
              {/* Row 1 */}
              <Grid container rowSpacing={1} >
                <Grid item xs={2}></Grid>
                <Grid item xs={5}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto' }}>
                    Current Process
                  </Box>
                </Grid>
                <Grid item xs={5}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    After Talent marketing using Krita
                  </Box>
                </Grid>
              </Grid>

              {/* Row 2 */}
              <Grid container rowSpacing={1} sx={{ width: "100%" }}>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Candidates in Pipeline
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Conversion Rate
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Cost Per Stage
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Values
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Conversion Rate
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Cost Per Stage
                  </Box>
                </Grid>
              </Grid>
              {/* Row 3 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Views
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {view_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(view_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(view_cost_per_stage_1))} */}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {view_values}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(view_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(view_cost_per_stage_2))} */}
                  </Box>
                </Grid>
              </Grid>
              {/* row 4 */}

              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Applicants
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {applicant_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(applicant_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(applicant_cost_per_stage_1))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {applicant_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(applicant_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(applicant_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 5 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Phone Screens
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {phonescreens_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(phonescreens_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(phonescreens_cost_per_stage_1))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {phonescreens_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(phonescreens_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(phonescreens_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 6 */}

              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Interviews
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {interviews_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(interviews_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(interviews_cost_per_stage_1))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {interviews_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(interviews_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(interviews_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 7 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Hires
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {hires_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(hires_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(hires_cost_per_stage_1))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {hires_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(hires_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(hires_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 8 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Accepted
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {accepted_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(accepted_conversion_rate * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(accepted_cost_per_stage_1))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {accepted_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {(accepted_conversion_rate_2 * 100).toFixed()}%
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(accepted_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 9 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Ramped
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {ramped_candidatein_pipeline}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(accepted_cost_per_stage_1))} */}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {accepted_values.toFixed()}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate_2*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(accepted_cost_per_stage_2))}
                  </Box>
                </Grid>
              </Grid>

              {/* row 10  */}

              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left", marginTop: "30px" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Cost Per Hire
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {ramped_candidatein_pipeline} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(today_cost_per_hire))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_values).toFixed()} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate_2*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(accepted_cost_per_stage_2))} */}
                  </Box>
                </Grid>
              </Grid>

              {/* row 11 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    New Cost/Hire
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {ramped_candidatein_pipeline} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(accepted_cost_per_stage_2))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_values).toFixed()} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate_2*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(accepted_cost_per_stage_2))} */}
                  </Box>
                </Grid>
              </Grid>

              {/* row 12 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    Difference
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {ramped_candidatein_pipeline} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round(today_cost_per_hire - accepted_cost_per_stage_2))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_values).toFixed()} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate_2*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(accepted_cost_per_stage_2))} */}
                  </Box>
                </Grid>
              </Grid>

              {/* row 13 */}
              <Grid container rowSpacing={1} sx={{ padding: "5px", color: "#808080", textAlign: "left" }}>
                <Grid item xs={1}>
                  {" "}
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto' , fontWeight: "600" }}>
                    Total Savings
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {ramped_candidatein_pipeline} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto' , fontWeight: "600" }}>
                    {new Intl.NumberFormat("en-US", {
                      sx: "currency",
                      currency: "USD",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 2,
                    }).format(Math.round((today_cost_per_hire - accepted_cost_per_stage_2) * rolesPerYear))}
                  </Box>
                </Grid>
                <Grid item xs={1}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_values).toFixed()} */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {(accepted_conversion_rate_2*100).toFixed()}% */}
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box  sx={{ padding: "5px", color: "#808080",textAlign: "center",overflow:'auto'  }}>
                    {/* {new Intl.NumberFormat("en-US", {
                  sx: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 2,
                }).format(Math.round(accepted_cost_per_stage_2))} */}
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* Add more rows as needed */}
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailedCalculator;
