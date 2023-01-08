import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useWidth } from "../Context/WidthContext";

const NotFound = () => {
    const { width } = useWidth();

    return (
        <div style={{height: "95vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingLeft: "20px", paddingRight: "20px"}}>
            <Typography align="center" variant={width > 1000 ? "h3" : "h4"} sx={{fontFamily: "Montserrat", fontWeight: "bold"}}>404 Not Found</Typography>
            <Typography align="center" variant={width > 1000 ? "h5" : "h6"} sx={{fontFamily: "Montserrat", marginTop: "20px"}}>Sorry, the page you are looking for does not exist!</Typography>
            <Button component={Link} to="/" variant="outlined" sx={{marginTop: "30px", color: "black", border: "1px solid black", "&:hover": {backgroundColor: "#C9C9C9", border: "1px solid black"}}}>Back to Home</Button>
        </div>
    );
};

export default NotFound;