import { Grid, Paper, styled } from "@mui/material";

export const StyledGrid = styled(Grid)({});
StyledGrid.defaultProps = {
  container: true,
  spacing: 2,
  mt: 1,
};

const GridChild = styled(Grid)(() => ({}));

GridChild.defaultProps = {
  ...GridChild.defaultProps,
  xxs: 6,
  xs: 6,
  sm: 4,
  md: 3,
  item: true,
};

export { GridChild };
export const Papers = styled(Paper)(({ theme }) => ({
  padding: "1.5rem",
  margin: "1rem",
  borderRadius: "1rem",
  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
  height: "fit-content",
  [theme.breakpoints.down("xs")]: {
    margin: "8px",
    padding: "18px",
  },
}));
