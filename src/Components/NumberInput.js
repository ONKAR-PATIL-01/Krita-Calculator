import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function NumberInput({ defaultValue, onValueChange }) {
  const [value, setValue] = useState(defaultValue || "0");

  const handleIncrement = () => {
    const newValue = String(Number(value) + 1);
    setValue(newValue);
    onValueChange( Number(newValue));
  };

  const handleDecrement = () => {
    const newValue = String(Number(value) - 1);
    setValue(newValue);
    onValueChange(Number(newValue));
  };

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue) || newValue === "") {
      setValue(newValue);
      onValueChange( Number(newValue));
    }
  };

  useEffect(() => {
    if (defaultValue !== undefined) {
      setValue(String(defaultValue));
    }
  }, [defaultValue]);

  return (
    <TextField
      variant="outlined"
      size="small"
      value={value}
      onChange={handleChange}
      sx={{ width: "90px" }}
      InputProps={{
        style: {
          textAlign: "center",
          color: "#FFCD00",
          fontSize: "16px",
          fontWeight: "bold",
        },
        endAdornment: (
          <InputAdornment position="end">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <IconButton
                style={{ padding: "0px", height: "20px" }}
                onClick={handleIncrement}
              >
                <ArrowDropUpIcon
                  style={{ fontSize: "1.5rem", padding: "0px" }}
                />
              </IconButton>
              <IconButton
                style={{ padding: "0px", height: "20px" }}
                onClick={handleDecrement}
              >
                <ArrowDropDownIcon
                  style={{ fontSize: "1.5rem", padding: "0px" }}
                />
              </IconButton>
            </div>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default NumberInput;
