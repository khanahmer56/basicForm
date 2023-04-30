import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useFormContext } from "react-hook-form";

const StyledTextField = styled(InputBase)(
  ({ theme, error, multiline, standard, readOnly }) => ({
    width: "100%",
    height: standard || multiline ? "" : "45px",
    "label + &": {
      marginTop: standard ? "" : "8px",
      display: "flex",
      alignItems: "left",
      justifyContent: "left",
    },

    borderRadius: standard ? "" : "7px",
    padding: standard ? "" : "10px",
    border: standard ? "none" : error ? " 1px solid red " : "1px solid #bdd5da",
    borderBottom: standard
      ? "1px solid rgb(0,0,0, 0.4)"
      : error
      ? " 1px solid red "
      : "1px solid #bdd5da",
    boxShadow: standard
      ? "none"
      : error
      ? ""
      : `0 2px 3px 0 rgba(189, 213, 218, 0.57)`,

    boxSizing: "border-box",
    "&.Mui-focused": {
      borderBottom: standard && `2px solid ${theme.palette.primary.main}`,
    },
    "&:hover": {
      borderBottom: standard && `2px solid black`,
    },
    "& .MuiInputBase-input": {
      borderRadius: standard ? "" : "7px",
      backgroundColor: readOnly ? "#dbe9ed" : "white",
      height: "90%",
      padding: standard && "0",
      marginTop: standard && "6px",
    },
  })
);

export default function TextInput({
  label,
  required,
  name,
  readOnly,
  multiline,
  ...otherProps
}) {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();
  const value = watch(name);

  const [show, setShow] = useState(false);

  return (
    <Box component="div">
      <FormControl variant="standard" fullWidth>
        <FormLabel
          sx={{
            // fontSize: otherProps.standard ? "12px" : "15px",
            fontSize: "15px",
            color: "#6e8185",
          }}
        >
          {label}{" "}
          <span style={{ fontSize: "15px", color: "red" }}>
            {required && label ? "*" : ""}
          </span>
        </FormLabel>
        <StyledTextField
          type={
            ["password", "confirmPassword"].includes(name) && !show
              ? "password"
              : "text"
          }
          variant="standard"
          multiline={multiline}
          {...register(name)}
          {...otherProps}
          error={Boolean(errors[name])}
          value={value}
          readOnly={readOnly}
          helpertext={errors[name] && errors[name].message}
        />
        <FormHelperText
          error={Boolean(errors[name])}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 10px",
            color: "red",
          }}
        >
          <span>{errors[name]?.message}</span>
        </FormHelperText>
      </FormControl>
    </Box>
  );
}
