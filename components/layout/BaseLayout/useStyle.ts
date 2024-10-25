import { makeStyles } from "tss-react/mui";
import background from "../../../assets/background.png";
console.log(background);

const useStyles = makeStyles()(({ spacing }) => ({
  mainContent: {
    display: "flex",
    flexDirection: "column",
  },
  containerContent: {
    width: "100%",
    backgroundImage: `url(${background.src})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    display: "flex",
    posiiton: "absolute",
  },
  containerPadding: {
    padding: spacing(2),
  },
}));

export default useStyles;
