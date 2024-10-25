import theme from "@/app/theme";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(({ spacing }) => ({
  headerColor: {
    backgroundColor: theme.palette.background.default,
    display: "flex",
    width: "100%",
    height: "fit-content",
    borderBottom: "solid 5px white",
    boxShadow: theme.shadows[10],
  },
  headerContainer: {
    paddingRight: spacing(2),
  },
  showdownLogo: {
    width: spacing(6),
    height: spacing(6),
    backgroundSize: "cover",
    margin: spacing(1),
  },
}));

export default useStyles;
