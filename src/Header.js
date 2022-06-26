import React from "react";
import {AppBar, Container, makeStyles, Toolbar,Typography } from "@material-ui/core"

const useStyles = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily:"sans-serif",
        fontWeight:"bold",
        cursor:"pointer"
    }
}))
const Header = () =>
{  const classes=useStyles();
  return (
    <AppBar color='transparent' position='static'>
    <Container>
        <Toolbar>
            <Typography className={classes.title}>CryptoZeus</Typography>
            
        </Toolbar>
    </Container>


    </AppBar>
  )
}
export default Header;