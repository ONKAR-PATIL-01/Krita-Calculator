/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import React, { useEffect, useState } from "react";
import NumberInput from "./NumberInput";
import DeleteIcon from "@mui/icons-material/Delete";
import { ArrowDropUp } from "@mui/icons-material";
import krita from "../krita.svg";

const countryData = [
  {
    Geography: "North America",
    data: {
      TalentMarketer: 60,
      Recruiter: 45,
      Interviewer: 90,
      Others: 50,
    },
  },
  {
    Geography: "South America",
    data: {
      TalentMarketer: 33,
      Recruiter: 25,
      Interviewer: 50,
      Others: 28,
    },
  },
  {
    Geography: "Europe",
    data: {
      TalentMarketer: 72,
      Recruiter: 54,
      Interviewer: 108,
      Others: 60,
    },
  },
  {
    Geography: "MENA",
    data: {
      TalentMarketer: 48,
      Recruiter: 36,
      Interviewer: 72,
      Others: 40,
    },
  },
  {
    Geography: "Africa",
    data: {
      TalentMarketer: 24,
      Recruiter: 18,
      Interviewer: 36,
      Others: 20,
    },
  },
  {
    Geography: "South Asia",
    data: {
      TalentMarketer: 30,
      Recruiter: 23,
      Interviewer: 45,
      Others: 25,
    },
  },
  {
    Geography: "East Asia",
    data: {
      TalentMarketer: 42,
      Recruiter: 32,
      Interviewer: 63,
      Others: 35,
    },
  },
  {
    Geography: "Australia",
    data: {
      TalentMarketer: 72,
      Recruiter: 54,
      Interviewer: 108,
      Others: 60,
    },
  },
  {
    Geography: "Others",
    data: {
      TalentMarketer: 48,
      Recruiter: 36,
      Interviewer: 72,
      Others: 40,
    },
  },
];
const DetailedCalculator = ({
  rolesPerYear,
  applicationsPerRole,
  companyLocation,
  sendCalculatedData,
  detailedFlag,
  onDetailedFlagChange,
  onApplicationsPerRoleChange,
}) => {
  const isSmallScreen = window.innerWidth <= 800;
  const [stepInputs, setStepInputs] = useState({
    "Job Assets Creation & Publishing": { minPerJob: 60 },
    "Resume Filtering": { timeSpent: 5, selectionRate: 30 },
    "Screening applicants": { timeSpent: 30, selectionRate: 30 },
    "Interview - 1": { timeSpent: 60, selectionRate: 30 },
    "Interview - 2": { timeSpent: 60, selectionRate: 30 },
    "Final Interview": { timeSpent: 60, selectionRate: 30 },
    "Candidate communication and coordination": { timeSpent: 5 },
    "Interview preparation": { timeSpent: 15 },
    "Interview feedback": { timeSpent: 15 },
    "Misc Tasks": { timeSpent: 10 },
  });
  const [stages, setStages] = useState([]);

  const handleInputChange = (stepName, field, value) => {
    setStepInputs((prevInputs) => ({
      ...prevInputs,
      [stepName]: {
        ...prevInputs[stepName],
        [field]: value,
      },
    }));
  };

  console.log(stepInputs);
  console.log(applicationsPerRole);

  const handleToggleDetail = () => {
    const newFlag = !detailedFlag; // Toggle the flag
    onDetailedFlagChange(newFlag); // Pass the updated flag back to the parent component
  };

  const [stepwiseCalculations, setStepwiseCalculations] = useState([]);
  const [normalhours, setNormalHours] = useState(0);
  const [kritahours, setKritaHours] = useState(0);
  const [normalCost, setNormalCost] = useState(0);
  const [kritaCost, setKritaCost] = useState(0);

  const [candidatesInPipeline, setCandidatesInPipeline] = useState(0);
  useEffect(() => {
    calculateValues();
    setNormalHours(Math.round(totalTime));
    setNormalCost(Math.round(totalCost));
    setKritaCost(Math.round(totalCostKrita));
    setKritaHours(Math.round(totalTimeKrita));
    const calculatedData = {
      normalHours: Math.round(totalTime),
      normalCost: Math.round(totalCost),
      kritaHours: Math.round(totalTimeKrita),
      kritaCost: Math.round(totalCostKrita),
    };

    // Call the function to send the calculated data to App.js
    sendCalculatedData(calculatedData);
  }, [rolesPerYear, companyLocation, applicationsPerRole, stepInputs]);
  useEffect(() => {
    calculateValues();
    setNormalHours(Math.round(totalTime));
    setNormalCost(Math.round(totalCost));
    setKritaCost(Math.round(totalCostKrita));
    setKritaHours(Math.round(totalTimeKrita));
    const calculatedData = {
      normalHours: Math.round(totalTime),
      normalCost: Math.round(totalCost),
      kritaHours: Math.round(totalTimeKrita),
      kritaCost: Math.round(totalCostKrita),
    };

    // Call the function to send the calculated data to App.js
    sendCalculatedData(calculatedData);
  }, []);
  useEffect(() => {
    setCandidatesInPipeline(applicationsPerRole);
  }, [applicationsPerRole]);
  var totalCost = 0;
  var totalCostKrita = 0;
  var totalTime = 0;
  var totalTimeKrita = 0;
  // var jobAssetsCreation,step1time,step2time,step3time,step4time,step5time,
  const calculateValues = () => {
    var foundCountry = countryData.find(
      (country) => country.Geography === companyLocation
    );

    var jobAssetsCreation;
    var NextStepnoofcandidate1 = 0;
    var NextStepnoofcandidate2 = 0;
    var noOfApplications = applicationsPerRole;
    var Pipeline1,
      Pipeline2,
      Pipeline3,
      Pipeline4,
      Pipeline5,
      Pipeline6,
      Pipeline7,
      Pipeline8,
      Pipeline9;

    const jobAssetsData = stepInputs["Job Assets Creation & Publishing"]?.minPerJob;
   
     // const calculatedValues = {};
    totalTime=0;
    totalTimeKrita=0;
    totalCost=0;
    totalCostKrita=0;
    jobAssetsCreation = jobAssetsData/60;
    
    totalTime += jobAssetsCreation;
    totalTimeKrita += (jobAssetsCreation * 0.1) / 100;
    totalCost += foundCountry.data.TalentMarketer * jobAssetsCreation;
    totalCostKrita += foundCountry.data.TalentMarketer * (10 / 100);

    //step 1
    var resumeFiltering = stepInputs["Resume Filtering"];
    var step1time = (noOfApplications * resumeFiltering.timeSpent) / 60;

    totalTime += step1time;
    totalTimeKrita += (step1time * 5) / 100;

    totalCost += foundCountry.data.Recruiter * step1time;
    totalCostKrita += foundCountry.data.Recruiter * ((step1time * 5) / 100);

    noOfApplications = Math.round(
      (noOfApplications * resumeFiltering.selectionRate) / 100
    );
    Pipeline1 = noOfApplications;
    NextStepnoofcandidate1 += noOfApplications;

    //step 2
    var ScreeningApplicants = stepInputs["Screening applicants"];
    var step2time = (noOfApplications * ScreeningApplicants.timeSpent) / 60;
    totalTime += step2time;
    totalTimeKrita += (step2time * 5) / 100;

    totalCost += foundCountry.data.Recruiter * step2time;
    totalCostKrita += (foundCountry.data.Recruiter * step2time * 5) / 100;

    noOfApplications = Math.round(
      (noOfApplications * ScreeningApplicants.selectionRate) / 100
    );
    Pipeline2 = noOfApplications;
    NextStepnoofcandidate1 += noOfApplications;
    NextStepnoofcandidate2 += noOfApplications;

    //step 3
    var interview1 = stepInputs["Interview - 1"];
    var step3time = (noOfApplications * interview1.timeSpent) / 60;
    totalTime += step3time;
    totalTimeKrita += (step3time * 80) / 100;

    totalCost += foundCountry.data.Interviewer * step3time;
    totalCostKrita += (foundCountry.data.Interviewer * step3time * 80) / 100;

    noOfApplications = Math.round(
      (noOfApplications * interview1.selectionRate) / 100
    );
    Pipeline3 = noOfApplications;
    NextStepnoofcandidate1 += noOfApplications;
    NextStepnoofcandidate2 += noOfApplications;

    //step 4
    var interview2 = stepInputs["Interview - 2"];
    var step4time = (noOfApplications * interview2.timeSpent) / 60;
    totalTime += step4time;
    totalTimeKrita += (step4time * 100) / 100;

    totalCost += foundCountry.data.Interviewer * step4time;
    totalCostKrita += (foundCountry.data.Interviewer * step4time * 100) / 100;

    noOfApplications = Math.round(
      (noOfApplications * interview2.selectionRate) / 100
    );
    Pipeline4 = noOfApplications;
    NextStepnoofcandidate1 += noOfApplications;
    NextStepnoofcandidate2 += noOfApplications;

    //step 5
    var finalInterview = stepInputs["Final Interview"];
    var step5time = (noOfApplications * finalInterview.timeSpent) / 60;
    totalTime += step5time;
    totalTimeKrita += (step5time * 100) / 100;

    totalCost += foundCountry.data.Others * step5time;
    totalCostKrita += (foundCountry.data.Others * step5time * 100) / 100;

    noOfApplications = Math.round(
      (noOfApplications * finalInterview.selectionRate) / 100
    );
    Pipeline5 = noOfApplications;
    NextStepnoofcandidate1 += noOfApplications;
    NextStepnoofcandidate2 += noOfApplications;
    const stepwiseData = [];
    const stepwisePipeline = [];
    stages.map((items, index) => {
      var additionalStep = stepInputs[`Custom  Stage ${index}`]; // Assuming 'additionalSteps' corresponds to the additional steps and index represents their order
      if (additionalStep) {
        var NextStep = noOfApplications * (additionalStep?.timeSpent / 60);
        totalTime += NextStep;
        totalTimeKrita += (NextStep * 100) / 100;

        totalCost += foundCountry.data.Others * NextStep;
        totalCostKrita += (foundCountry.data.Others * NextStep * 100) / 100;

        noOfApplications = Math.round(
          noOfApplications * (additionalStep?.selectionRate / 100)
        );
        NextStepnoofcandidate1 += noOfApplications;
        NextStepnoofcandidate2 += noOfApplications;
        stepwiseData.push(Math.round(NextStep));
        stepwisePipeline.push(Math.round(noOfApplications));
      }
    });

    //next step 1
    var candidateCommunication =
      stepInputs["Candidate communication and coordination"];
    var nextStepTime1 =
      (NextStepnoofcandidate1 * candidateCommunication.timeSpent) / 60;
    totalTime += nextStepTime1;
    totalTimeKrita += (nextStepTime1 * 10) / 100;

    totalCost += foundCountry.data.Recruiter * nextStepTime1;
    totalCostKrita += (foundCountry.data.Recruiter * nextStepTime1 * 10) / 100;
    Pipeline6 = NextStepnoofcandidate1;
    //next step 2
    var interviewprep = stepInputs["Interview preparation"];
    var nextStepTime2 = (NextStepnoofcandidate2 * interviewprep.timeSpent) / 60;
    totalTime += nextStepTime2;
    totalTimeKrita += (nextStepTime2 * 100) / 100;

    totalCost += foundCountry.data.Interviewer * nextStepTime2;
    totalCostKrita +=
      (foundCountry.data.Interviewer * nextStepTime2 * 100) / 100;
    Pipeline7 = NextStepnoofcandidate2;
    //next step 3
    var interviewfeedback = stepInputs["Interview feedback"];
    var nextStepTime3 =
      (NextStepnoofcandidate2 * interviewfeedback.timeSpent) / 60;
    totalTime += nextStepTime3;
    totalTimeKrita += (nextStepTime3 * 50) / 100;

    totalCost += foundCountry.data.Interviewer * nextStepTime3;
    totalCostKrita +=
      (foundCountry.data.Interviewer * nextStepTime3 * 50) / 100;
    Pipeline8 = NextStepnoofcandidate2;
    //next step 4
    var misctasks = stepInputs["Misc Tasks"];
    var nextStepTime4 = (NextStepnoofcandidate2 * misctasks.timeSpent) / 60;
    totalTime += nextStepTime4;
    totalTimeKrita += (nextStepTime4 * 25) / 100;

    totalCost += foundCountry.data.Others * nextStepTime4;
    totalCostKrita += (foundCountry.data.Others * nextStepTime4 * 25) / 100;
    Pipeline9 = NextStepnoofcandidate2;

    noOfApplications = applicationsPerRole;
    // return calculatedValues;
    setStepwiseCalculations({
      one: Math.round(jobAssetsCreation),
      pipeline: noOfApplications,
      two: Math.round(step1time),
      Pipeline1: Pipeline1,
      three: Math.round(step2time),
      Pipeline2: Pipeline2,
      four: Math.round(step3time),
      Pipeline3: Pipeline3,
      five: Math.round(step4time),
      Pipeline4: Pipeline4,
      six: Math.round(step5time),
      Pipeline5: Pipeline5,
      seven: stepwiseData,
      additionalpipeline: stepwisePipeline,
      eight: Math.round(nextStepTime1),
      Pipeline6: Pipeline6,
      nine: Math.round(nextStepTime2),
      Pipeline7: Pipeline7,
      ten: Math.round(nextStepTime3),
      Pipeline8: Pipeline8,
      eleven: Math.round(nextStepTime4),
      Pipeline9: Pipeline9,
    });
  };

  // console.log(candidatesInPipeline);

  const handleAddStage = () => {
    setStages([...stages, {}]);
  };
  const handleDeleteStep = (stepIndex) => {
    setStages((prevSteps) =>
      prevSteps.filter((_, index) => index !== stepIndex)
    );
  };

  return (
    <>
      {detailedFlag && (
        <div>
          <Typography
            variant="h5"
            style={{ color: "#FFCD00", marginLeft: "10%" }}
          >
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
                color: "#A3A0A0",
              }}
            >
              Back to simplified analysis
              <ArrowDropUp style={{ height: "25px" }} />
            </Typography>
          </div>
          {/* <div style={{ marginLeft: "10%", marginBottom: "20px" }}>
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
              onChange={(event, newValue) =>
                onApplicationsPerRoleChange(event, newValue)
              }
              sx={{ color: "#FFCD00", width: "40%" }}
            />
          </div> */}
          {/* step 1 header */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                RECRUITMENT STEPS
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                MINUTES TAKEN / ROLE
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                CANDIDATES IN PIPELINE{" "}
                <Tooltip title="Calculated value. Represents the number of candidates selected for the next stage of the recruitment process.">
                  <HelpOutlineIcon />
                </Tooltip>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
               TOTAL EFFORT (HOURS)
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br/>
          {/* <hr/> */}
          {/* step 1 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Time to create and post job opening{" "}
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={
                  stepInputs["Job Assets Creation & Publishing"].minPerJob
                }
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Job Assets Creation & Publishing",
                    "minPerJob",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.pipeline}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.one}hours
              </Typography>
            </Grid>
          </Grid>

          <br />
          {/* <hr/> */}
          {/* step 2 Header */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
              RECRUITMENT  STAGE
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
              MINUTES TAKEN / CANDIDATE
              </Typography>
            </Grid>
            <Grid item xs={1.5}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
              PASS RATE %
              <Tooltip title="Represents the percentage of candidates who are selected for the next stage of the recruitment process.">
                  <HelpOutlineIcon />
                </Tooltip>
              </Typography>
            </Grid>

            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                CANDIDATES IN PIPELINE{" "}
                <Tooltip title="Calculated value. Represents the number of candidates selected for the next stage of the recruitment process.">
                  <HelpOutlineIcon />
                </Tooltip>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
               TOTAL EFFORT (HOURS)
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br />
          {/* <hr/> */}
          {/* step 2 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Resume Filtering
              </Typography>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Resume Filtering"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Resume Filtering", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Resume Filtering"].selectionRate}
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Resume Filtering",
                    "selectionRate",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.pipeline}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.two} hours
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* step 3 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                 Applicant Screening
              </Typography>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Screening applicants"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Screening applicants",
                    "timeSpent",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Screening applicants"].selectionRate}
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Screening applicants",
                    "selectionRate",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline1}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.three} hours
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* step 4 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Interview 1
              </Typography>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview - 1"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Interview - 1", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview - 1"].selectionRate}
                onValueChange={(newValue) =>
                  handleInputChange("Interview - 1", "selectionRate", newValue)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline2}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.four} hours
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* step 5 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Interview 2
              </Typography>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview - 2"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Interview - 2", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview - 2"].selectionRate}
                onValueChange={(newValue) =>
                  handleInputChange("Interview - 2", "selectionRate", newValue)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline3}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.five} hours
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* step 6 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Final Interview
              </Typography>
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Final Interview"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Final Interview", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid
              item
              xs={1.5}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Final Interview"].selectionRate}
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Final Interview",
                    "selectionRate",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline4}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.six} hours
              </Typography>
            </Grid>
          </Grid>
          <br />
          {/* step 7 */}
          {stages.map((stage, index) => (
            <Grid
              container
              spacing={2}
              style={{ marginBottom: "20px" }}
              key={index}
            >
              <Grid item xs={4}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#A3A0A0",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  Custom Stage {index}
                </Typography>
              </Grid>
              <Grid
                item
                xs={1.5}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <NumberInput
                  defaultValue={0}
                  onValueChange={(newValue) =>
                    handleInputChange(
                      `Custom  Stage ${index}`,
                      "timeSpent",
                      newValue
                    )
                  }
                />
              </Grid>
              <Grid
                item
                xs={1.5}
                style={{
                  display: "flex",
                  paddingLeft: "58px",
                  //   justifyContent: "center",
                  //   textAlign: "center",
                }}
              >
                <NumberInput
                  defaultValue={0}
                  onValueChange={(newValue) =>
                    handleInputChange(
                      `Custom  Stage ${index}`,
                      "selectionRate",
                      newValue
                    )
                  }
                />
                <IconButton
                  aria-label="Delete Step"
                  onClick={() => handleDeleteStep(index)}
                  style={{ height: "40px" }}
                >
                  <DeleteIcon style={{ color: "#FFCD00" }} />
                </IconButton>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#A3A0A0",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {stepwiseCalculations?.additionalpipeline?.[index]}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="h7"
                  sx={{
                    color: "#A3A0A0",
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  {stepwiseCalculations?.seven?.[index]} hours
                </Typography>
              </Grid>
            </Grid>
          ))}

          <div onClick={handleAddStage} style={{ marginBottom: "40px" }}>
            <Typography
              variant="h7"
              style={{
                color: "#FFCD00",
                marginLeft: "10%",
                cursor: "pointer",
              }}
            >
              Add another stage +
            </Typography>
          </div>

          {/* step 8 header */}
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                OTHER ACTIVITIES
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
               MINUTES TAKEN / CANDIDATE
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                CANDIDATES IN PIPELINE{" "}
                <Tooltip title="Calculated value. Represents the number of candidates selected for the next stage of the recruitment process.">
                  <HelpOutlineIcon />
                </Tooltip>
 
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
             TOTAL EFFORT (HOURS)
              </Typography>
            </Grid>
          </Grid>
          <br />
          <br/>
          {/* step 8 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Candidate communication and coordination
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={
                  stepInputs["Candidate communication and coordination"]
                    .timeSpent
                }
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Candidate communication and coordination",
                    "timeSpent",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline6}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.eight} hours
              </Typography>
            </Grid>
          </Grid>

          <br />
          {/* step 9 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Interview preparation
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview preparation"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange(
                    "Interview preparation",
                    "timeSpent",
                    newValue
                  )
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline7}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.nine} hours
              </Typography>
            </Grid>
          </Grid>

          <br />

          {/* step 10 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Interview feedback
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Interview feedback"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Interview feedback", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline8}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.ten} hours
              </Typography>
            </Grid>
          </Grid>

          <br />
          {/* step 11 */}
          <Grid container spacing={2} style={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                Misc Tasks
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <NumberInput
                defaultValue={stepInputs["Misc Tasks"].timeSpent}
                onValueChange={(newValue) =>
                  handleInputChange("Misc Tasks", "timeSpent", newValue)
                }
              />
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.Pipeline9}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                variant="h7"
                sx={{
                  color: "#A3A0A0",
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {stepwiseCalculations.eleven} hours
              </Typography>
            </Grid>
          </Grid>

          <br />

          <Card
            style={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",

              borderRadius: "10px",
              border: "none",
              background: "linear-gradient(to right, #FFF, #E3F0FF)", // Set the background gradient here
              marginLeft: "5%",
              marginRight: "5%",
            
              padding: "10px",
            }}
          >
            <div style={{ width: "60%" }}>
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
                    fontSize: "14px",
                  }}
                >
                  Averge hours spent today 
                </Typography>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "14px",
                  }}
                >
                  {normalhours}{" "}hrs
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "16px",
                  }}
                >
                 Hours saved using Krita
                </Typography>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "16px",
                  }}
                >
                  <b>
                  {normalhours - kritahours}{" "}hrs
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
                    fontSize: "14px",
                  }}
                >
                 Averge cost incurred today
                </Typography>
                <Typography
                  style={{
                    color: "#A3A0A0",
                    fontSize: "14px",
                  }}
                >
                  US${" "}
                  {normalCost.toFixed(2) % 1 === 0
                    ? normalCost
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .slice(0, -3) // Remove the last three characters (".00")
                    : normalCost.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                </Typography>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "16px",
                  }}
                >
                   Cost saved using Krita
                </Typography>
                <Typography
                  style={{
                    color: "#78A6D8",
                    fontSize: "16px",
                  }}
                >
                  <b>
                  US{" "}
                  {(normalCost - kritaCost).toFixed(2) % 1 === 0
                    ? (normalCost - kritaCost)
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })
                        .slice(0, -3) // Remove the last three characters (".00")
                    : (normalCost - kritaCost).toLocaleString("en-US", {
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
              <br />
            </div>
            <div style={{ width: "40%" }}>
              <Typography
              variant="h5"
                style={{
                  color: "#A3A0A0",
                  fontWeight: "bold",
                  textAlign: "center",
                  textDecorationThickness: "2px",
                }}
              >
             Potential savings per year for <span style={{color:"#78A6D8"}}>{rolesPerYear}</span> hires
              </Typography>
              {/* <Typography
                style={{
                  color: "#A3A0A0",
                  fontSize: "18px",
                  textAlign: "right",
                  marginTop: "10px",
                }}
              >
                US{" "}
                {normalCost.toFixed(2) % 1 === 0
                  ? normalCost
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .slice(0, -3) // Remove the last three characters (".00")
                  : normalCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}{" "}
                - US{" "}
                {kritaCost.toFixed(2) % 1 === 0
                  ? kritaCost
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .slice(0, -3) // Remove the last three characters (".00")
                  : kritaCost.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </Typography> */}
              <Typography
                variant="h3"
                style={{
                  color: "#78A6D8",
                  textAlign: "center",
                  marginTop: "60px",
                }}
              >
                US{" "}
                {((normalCost - kritaCost)*rolesPerYear).toFixed(2) % 1 === 0
                  ? ((normalCost - kritaCost)*rolesPerYear)
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                      .slice(0, -3) // Remove the last three characters (".00")
                  : ((normalCost - kritaCost)*rolesPerYear).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
              </Typography>
              <br />

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "45px",
                }}
              >
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
                    window.open(
                      "https://calendly.com/krita/meet-kesavan",
                      "_blank"
                    );
                  }}
                >
                  schedule a demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DetailedCalculator;
