// import "./Header.scss";
import { generatePath } from "react-router";
import { Link } from "react-router-dom";


import { AppBar, CssBaseline, Button, Grid, Toolbar, Typography } from "@mui/material";

const Header = () => {
  const username = "sasha";
  const userId = 11;
  const profileLink = generatePath('/profile/:username/:userId', {username, userId});
  
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
          <Toolbar>
              <Typography variant="h6">
                  TO DO LIST
              </Typography>
          </Toolbar>
      </AppBar>

      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Link to="/" style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary">
                  Home
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/stat" style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary">
                  Stat
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/stat/subpage" style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary">
                  Stat subpage
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to="/admin" style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary">
                  Admin
              </Button>
            </Link>
          </Grid>
          <Grid item>
            <Link to={profileLink} style={{textDecoration: "none"}}>
              <Button variant="contained" color="primary">
                  Profile
              </Button>
            </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Header;
