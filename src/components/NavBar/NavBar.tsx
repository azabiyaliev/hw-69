import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MaterialUISwitch from '../UI/MaterialUISwitch/MaterialUISwitch.tsx';


const NavBar = () => {

  return (
    <>
      <Box sx={{ flexGrow: 1, mb: 5, boxShadow: 10 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              color="inherit"
              variant="h5"
              sx={{ flexGrow: 1, textDecoration: "none", fontSize: "18px" }}
            >
              TV shows
            </Typography>
            <MaterialUISwitch/>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
