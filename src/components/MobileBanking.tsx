import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      root: {
        padding: "18px 13px 0px 13px"
      },
      descBlock: {
        height: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#141414",
        marginBottom: 24
      },
      googlePlayAppStore: {
        width: 120,
        height: 40
      },
      img: {
        width: 165,
        height: 242,
        marginTop: 20
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      root: {
        padding: "61px 52px 0px 52px",
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto"
      },
      descBlock: {
        height: "100%"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#141414",
        marginBottom: 48
      },
      img: {
        width: 330,
        height: 484,
        marginRight: 50
      }
    }
  })
);

const MobileBanking = () => {
  const classes = useStyles({});

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard",
      action: "AppStore_download"
    });
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard",
      action: "GooglePlay_download"
    });
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Grid container alignItems="center" className={classes.descBlock}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.title}>
                Мобильное приложение StarBanking
              </Typography>
              <Typography className={classes.description}>
                Оплачивайте услуги, управляйте рассрочкой и кешбэком,
                <br />
                пополняйте карту онлайн с карт других банков РК
              </Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <a href="https://apps.apple.com/kz/app/starbanking/id743617904">
                    <img
                      onClick={() => onClickAppStore()}
                      className={classes.googlePlayAppStore}
                      src="app_store.svg"
                      alt="app_store"
                    />
                  </a>
                </Grid>
                <Grid item>
                  <a href="https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru">
                    <img
                      onClick={() => onClickGooglePlay()}
                      className={classes.googlePlayAppStore}
                      src="google_play.svg"
                      alt="google_play"
                    />
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container justify="center">
            <img
              className={classes.img}
              src="star_mobile_banking.png"
              alt="star_mobile_banking"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileBanking;
