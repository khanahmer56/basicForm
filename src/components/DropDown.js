import {
  Autocomplete,
  FormLabel,
  TextField,
  FormHelperText,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { styled } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const StyledSelectAutoComplete = styled(Autocomplete)(({ variant }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  // bottom: "3px",

  "label + &": {
    marginTop: variant === "standard" ? "7px" : "",
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
  },

  "& .MuiAutocomplete-input": {
    outline: "none",
    padding: variant === "standard" ? "0 !important" : "",
    marginTop: variant === "standard" ? "8px" : "",

    "&:hover": {
      outline: "none",
      border: "none",
    },
  },

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "7px",
    },
  },
}));
function DropDown({
  name,
  options = [],
  label,
  placeholder,
  required,
  readOnly,
  variant,
  saveDisplayName = true,
  isLoading,
}) {
  function filterOptions(options, { inputValue }) {
    const normalizedInput = inputValue
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, "");
    return options.filter((option) => {
      const normalizedOption = option.display_name
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s]/g, "")
        .split(" ");

      return normalizedOption.some((item) => item.startsWith(normalizedInput));
    });
  }
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const value = watch(name);

  // if only one option is present on required field then that one option will get selected
  useEffect(() => {
    if (options.length === 1 && required) setValue(name, options[0].code);
  }, [JSON.stringify(options)]);
  // console.log({ value, name, options });

  const selectedOption = useMemo(() => {
    const foundOption = options.find((item) => item.code == value) ?? null;
    if (saveDisplayName && foundOption)
      setValue(`${name}_data`, foundOption?.display_name);
    return foundOption;
  }, [JSON.stringify(options), value]);

  return (
    <Box>
      <FormLabel
        sx={{
          // fontSize: variant === "standard" ? "12px" : "15px",
          fontSize: "15px",
          color: "#6e8185",
        }}
      >
        {label}{" "}
        <span style={{ fontSize: "15px", color: "red" }}>
          {required ? "*" : ""}
        </span>
      </FormLabel>
      <Controller
        sx={{ border: "1px solid red" }}
        render={({ field: { ref, onChange, ...field } }) => (
          <StyledSelectAutoComplete
            fullWidth
            disableClearable
            size="medium"
            filterOptions={filterOptions}
            sx={{
              pointerEvents: readOnly ? "none" : "",
              "& .MuiOutlinedInput-root": {
                // borderColor: "#bdd5da",
                outline: "none",
                padding: "5px",
                pointerEvents: readOnly ? "none" : "",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                outline: "none",
                border: "none",
              },
              "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#bdd5da",
                outline: "none",
              },
              "& .MuiInputBase-input": {
                //to remove default padding from mui input
                padding: variant === "standard" ? "0 !important" : "",
                marginTop: variant === "standard" ? "4px" : "",
              },
            }}
            popupIcon={
              <ArrowDropDownIcon
                sx={{
                  fontSize: "30px",
                  color: "#305056",
                }}
              ></ArrowDropDownIcon>
            }
            options={options}
            isOptionEqualToValue={(option, value) => option.code === value.code}
            getOptionLabel={(option) => option.display_name}
            value={selectedOption}
            isLoading={isLoading}
            renderInput={(params) => (
              <TextField
                sx={{
                  pointerEvents: readOnly ? "none" : "",
                  // borderRadius: "7px",
                  borderRadius: variant === "standard" ? "" : "7px",
                  backgroundColor: readOnly ? "#dbe9ed" : "white",
                  // marginTop: "8px",
                  marginTop: variant === "standard" ? 0 : "8px",
                  border:
                    variant === "standard"
                      ? ""
                      : errors[name]
                      ? " 1px solid red "
                      : "1px solid #bdd5da",
                  // border: errors[name]
                  //   ? " 1px solid red "
                  //   : "1px solid #bdd5da",
                  boxShadow:
                    variant === "standard"
                      ? ""
                      : "0 2px 3px 0 rgba(189, 213, 218, 0.57)",
                  // boxShadow: errors[name]
                  //   ? ``
                  //   : `0 2px 3px 0 rgba(189, 213, 218, 0.57)`,
                  // borderBottom: variant === "standard" && "1px solid #bdd5da",
                  fontSize: "15px",
                  // height: "45px",
                  height: variant === "standard" ? "" : "45px",
                }}
                {...params}
                {...field}
                fullWidth
                inputRef={ref}
                placeholder={placeholder}
                variant={variant === "standard" ? "standard" : "outlined"}
              />
            )}
            onChange={(_, data) => {
              onChange(data.code);
            }}
          />
        )}
        name={name}
        control={control && control}
        isOptionEqualToValue={(option, value) => {
          return option.id === value.id;
        }}
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
    </Box>
  );
}
export default React.memo(DropDown);
