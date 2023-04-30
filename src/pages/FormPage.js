import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { GridChild, Papers, StyledGrid } from "../components/styleComponent";
import TextInput from "../components/TextField";
import { Button, Typography } from "@mui/material";
import DateComponent from "../components/DateComponent";
import DropDown from "../components/DropDown";
import { allowOnlyNumbers } from "../utils/constant";
import { yupResolver } from "@hookform/resolvers/yup";
import { formDeatailSchema } from "./formValidation";
import {
  allowOnlyUniqueAlphabetsNoSpace,
  toCapitalize,
} from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormPage = () => {
  const methods = useForm({
    resolver: yupResolver(formDeatailSchema()),
  });
  const navigate = useNavigate();
  const govIssueId = methods.watch("gov_issue_id");
  const onSubmit = async (data) => {
    const filteredObj = Object.fromEntries(
      Object.entries(data).filter(
        ([key, value]) => value !== undefined && value !== null && value !== ""
      )
    );
    const res = await fetch(
      "https://reactform-86464-default-rtdb.firebaseio.com/form.json",
      {
        method: "POST",
        body: JSON.stringify(filteredObj),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(res);
    if (res.ok) {
      alert("Form Submitted");
      navigate("/table");
      methods.reset();
    } else {
      alert("Form Not Submitted");
    }
  };
  return (
    <>
      <Papers>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Typography variant="h5" fontWeight={"bold"}>
              Personal Details
            </Typography>
            <StyledGrid padding={2}>
              <GridChild>
                <TextInput name="name" label="Name" required={true} />
              </GridChild>

              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name="sex"
                  label="Sex"
                  required={true}
                  options={[
                    {
                      code: "Male",
                      display_name: "Male",
                    },
                    {
                      code: "Female",
                      display_name: "Female",
                    },
                    {
                      code: "Other",
                      display_name: "Other",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <DateComponent
                  name={"dob"}
                  label={"Date of Birth (DD/MM/YYYY)"}
                  required={true}
                />
              </GridChild>
              <GridChild>
                <TextInput
                  name="mobile_no"
                  label="Mobile No"
                  onInput={allowOnlyNumbers}
                  inputProps={{ maxLength: 10 }}
                />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name="gov_issue_id"
                  label={"Govr Issued ID"}
                  placeholder={"Id type"}
                  options={[
                    {
                      code: "Aadhar",
                      display_name: "Aadhar",
                    },
                    {
                      code: "Pan",
                      display_name: "Pan",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <TextInput
                  name="issued_id"
                  label="Govt Issued ID"
                  onInput={allowOnlyNumbers}
                  inputProps={{ maxLength: govIssueId === "Aadhar" ? 12 : 10 }}
                />
              </GridChild>
            </StyledGrid>
            <Typography variant="h5" fontWeight={"bold"}>
              Personal Details
            </Typography>
            <StyledGrid>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name="guardian_type"
                  label={"Guardian Type"}
                  placeholder={"Enter label"}
                  options={[
                    {
                      code: "Father",
                      display_name: "Father",
                    },
                    {
                      code: "Mother",
                      display_name: "Mother",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <TextInput
                  name="guardian_name"
                  label="Guardian Name"
                  onInput={(e) => {
                    toCapitalize(e);
                    allowOnlyUniqueAlphabetsNoSpace(e);
                  }}
                />
              </GridChild>
              <GridChild>
                <TextInput name="email" label="Email" />
              </GridChild>
              <GridChild>
                <TextInput
                  name="emergency_no"
                  label="Emergency No"
                  onInput={allowOnlyNumbers}
                  inputProps={{ maxLength: 10 }}
                />
              </GridChild>
            </StyledGrid>
            <Typography variant="h5" fontWeight={"bold"}>
              Address Details
            </Typography>
            <StyledGrid>
              <GridChild>
                <TextInput name="address" label="Address" />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name="state"
                  label="State"
                  options={[
                    {
                      code: "Maharashtra",
                      display_name: "Maharashtra",
                    },
                    {
                      code: "Karnataka",
                      display_name: "Karnataka",
                    },
                    {
                      code: "Goa",
                      display_name: "Goa",
                    },
                    {
                      code: "Gujrat",
                      display_name: "Gujrat",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <TextInput
                  name="pincode"
                  label="Pincode"
                  onInput={allowOnlyNumbers}
                />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name={"city"}
                  label={"City"}
                  options={[
                    {
                      code: "Mumbai",
                      display_name: "Mumbai",
                    },
                    {
                      code: "gandhi_nagar",
                      display_name: "Gandhi Nagar",
                    },
                    {
                      code: "panaji",
                      display_name: "Panaji",
                    },
                    {
                      code: "bangalore",
                      display_name: "Bangalore",
                    },
                    {
                      code: "ahmedabad",
                      display_name: "Ahmedabad",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <TextInput
                  name={"country"}
                  label={"Country"}
                  onInput={(e) => {
                    toCapitalize(e);
                    allowOnlyUniqueAlphabetsNoSpace(e);
                  }}
                />
              </GridChild>
            </StyledGrid>
            <Typography variant="h5" fontWeight={"bold"}>
              Other Details
            </Typography>
            <StyledGrid>
              <GridChild>
                <TextInput name="occupation" label="Occupation" />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name="religion"
                  label="Religion"
                  options={[
                    {
                      code: "Hindu",
                      display_name: "Hindu",
                    },
                    {
                      code: "Muslim",
                      display_name: "Muslim",
                    },
                    {
                      code: "Sikh",
                      display_name: "Sikh",
                    },
                    {
                      code: "Christian",
                      display_name: "Christian",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name={"mrtial_status"}
                  label={"Martial Status"}
                  options={[
                    {
                      code: "Married",
                      display_name: "Married",
                    },
                    {
                      code: "Unmarried",
                      display_name: "Unmarried",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <DropDown
                  saveDisplayName={false}
                  name={"blood_group"}
                  label={"Blood Group"}
                  options={[
                    {
                      code: "A+",
                      display_name: "A+",
                    },
                    {
                      code: "B+",
                      display_name: "B+",
                    },
                  ]}
                />
              </GridChild>
              <GridChild>
                <TextInput name="nationality" label="Nationality" />
              </GridChild>
            </StyledGrid>
            <Button type="submit" variant="contained" sx={{ mt: 4 }}>
              Submit
            </Button>
          </form>
        </FormProvider>
      </Papers>
    </>
  );
};

export default FormPage;
