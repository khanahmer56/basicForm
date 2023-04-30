import * as yup from "yup";
export const formDeatailSchema = () =>
  yup.object().shape({
    name: yup.string().required("Name is required"),
    sex: yup.string().required("Sex is required"),
    dob: yup.string().required("Date of Birth is required"),
    email: yup
      .string()
      .email()
      .nullable()
      .transform((value, originalValue) => {
        if (originalValue.trim() === "") {
          return null;
        }
        return value;
      }),
    mobile_no: yup
      .string()
      .matches(
        /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
        "Phone number is not valid"
      )
      .nullable()
      .transform((value, originalValue) => {
        if (originalValue.trim() === "") {
          return null;
        }
        return value;
      }),
    emergency_no: yup
      .string()
      .matches(
        /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/,
        "Phone number is not valid"
      )
      .nullable()
      .transform((value, originalValue) => {
        if (originalValue.trim() === "") {
          return null;
        }
        return value;
      }),
  });
