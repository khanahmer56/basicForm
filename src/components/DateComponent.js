import * as React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormHelperText, FormLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import moment from "moment";
import styled from "@emotion/styled";

export default function DateComponent({
  label,
  name,
  required,
  variant,
  open,
  outputFormat = "DD-MM-YYYY",
  readOnly,
  ...otherProps
}) {
  const CalenderIcon = styled(CalendarMonthIcon)({
    fontSize: variant === "standard" ? "15px" : "",
    margin: variant === "standard" ? "0 5px 3px 0" : "",
  });

  const {
    watch,
    control,
    trigger,
    formState: { errors },
  } = useFormContext();

  const TextFieldInput = (params) => {
    return (
      <TextField
        {...params}
        variant={variant || "outlined"}
        error={Boolean(errors[name])}
        sx={{
          pointerEvents: readOnly ? "none" : "",
          "& .MuiOutlinedInput-root": {
            position: "static",
            justifyContent: "space-between",
            border: errors[name] ? " 1px solid red " : "1px solid #bdd5da",
            boxShadow: errors[name]
              ? // ? `1px 1px 0 0 red, -1px -1px 0 0 red`
                ``
              : `0 2px 3px 0 rgba(189, 213, 218, 0.57)`,
            borderRadius: "7px",
            width: "100%",
            pointerEvents: readOnly ? "none" : "",
          },
          "& .MuiInputLabel-root": {
            fontSize: "15px",
            color: "text.secondary",
            width: "100%",
          },
          "label + &": {
            display: "flex",
            alignItems: "space-between",
            justifyContent: "space-between",
            width: "100%",
          },
          "& .MuiInputBase-input": {
            display: "flex",
            alignItems: "space-between",
            justifyContent: "space-between",
            width: "100%",
            padding: variant !== "standard" && "9.5px",
            backgroundColor: readOnly ? "#dbe9ed" : "white",
          },

          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            outline: "none",
            border: "none",
          },
          "&. Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#bdd5da",
            outline: "none",
          },
        }}
      />
    );
  };
  const dateValue = watch(name);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <div className="flex flex-col ">
        <FormLabel
          sx={{
            fontSize: "15px",
            color: "#6e8185",
            mb: variant === "standard" ? "7px" : "8px",
          }}
        >
          {label}{" "}
          <span style={{ fontSize: "15px", color: "red" }}>
            {required ? "*" : ""}
          </span>
        </FormLabel>
        {open ? (
          <>
            <Controller
              name={name}
              control={control || {}}
              render={({ field: { onChange } }) => (
                <StaticDatePicker
                  componentsProps={{
                    actionBar: {
                      actions: [],
                    },
                  }}
                  inputFormat="DD/MM/YYYY"
                  value={moment(dateValue, outputFormat) || null}
                  {...otherProps}
                  renderInput={(params) => TextFieldInput(params)}
                  onChange={(date) => {
                    onChange(moment(date).format(outputFormat));
                    trigger(name);
                  }}
                />
              )}
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
          </>
        ) : (
          <Controller
            name={name}
            control={control || {}}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                inputFormat="DD/MM/YYYY"
                components={{
                  OpenPickerIcon: CalenderIcon,
                }}
                views={["year", "month", "day"]}
                openTo={"year"}
                value={value ? moment(value, outputFormat) : null}
                onChange={(date) => {
                  onChange(moment(date).format(outputFormat));
                }}
                {...otherProps}
                renderInput={(params) => TextFieldInput(params)}
              />
            )}
          />
        )}
      </div>

      {!open && (
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
      )}
    </LocalizationProvider>
  );
}

// const CalenderIcon = styled(CalendarMonthIcon)(({ variant }) => ({
//   fontSize: "15px",
//   margin: variant === "standard" ? "0 5px 3px 0" : "",
// }));
