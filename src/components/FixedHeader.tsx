import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link, animateScroll as scroll } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("md", "xl")]: {
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s"
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "21px 52px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: 230,
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        padding: 0,
        "&:hover": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        },
        overflow: "hidden"
      }
    },
    [theme.breakpoints.down("sm")]: {
      cardImage: {
        display: "none"
      },
      hide: {
        opacity: 0,
        transition: "all ease-in-out .3s"
      },
      header: {
        position: "fixed",
        zIndex: 99,
        top: 0,
        left: 0,
        right: 0,
        opacity: 1,
        height: 100,
        width: "100%",
        boxSizing: "border-box",
        padding: "12px 26px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 7px 25px rgba(29, 29, 29, 0.15)",
        transition: "all ease-in-out .3s"
      },
      buttonOrderCard: {
        background: "#3F0259",
        minWidth: "auto",
        padding: "0 10px",
        color: "white",
        height: 48,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: "48px",
        textTransform: "none",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        },
        overflow: "hidden"
      }
    }
  })
);

let hide = true;

const FixedHeader = (props: any) => {
  let [hide, setHide] = useState(true);
  useEffect(() => {
    window.document.addEventListener("scroll", d => {
      const doc = document;
      const element = doc && doc.getElementById("secondHeader");
      const scrollTop = element && element.offsetTop;
      scrollTop && window.scrollY >= scrollTop
        ? setHide((hide = false))
        : setHide((hide = true));
    });
  });

  const classes = useStyles({});

  return (
    <Grid
      container
      justify="space-between"
      alignContent="center"
      alignItems="center"
      className={hide ? classes.hide : classes.header}
    >
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <img src="green-logo.svg" />
      </Grid>
      <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
        <Grid
          justify="flex-end"
          alignContent="center"
          alignItems="center"
          container
        >
          <Grid
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            xs={6}
            className={classes.cardImage}
          >
            <img src="icon_card_small.svg" />
          </Grid>
          <Grid item xl={3} lg={3} md={6} sm={6} xs={6}>
            <Link smooth={true} to="order">
              <Button
                variant="contained"
                className={classes.buttonOrderCard}
                onClick={() => props.scrollToOrder()}
              >
                Заказать карту
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FixedHeader;
