import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        background: "linear-gradient(70.95deg, #FFF2F2 0%, #FFF8EB 101.12%)",
        position: 'relative'
      },
      root: {
        padding: "18px 13px 0px 13px"
      },
      descValues: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: 16,
        marginBottom: 16
      },
      descValuesInner: {
        paddingRight: 16
      },
      descBlock: {
        height: "100%",
        padding: '24px 16px'
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 26,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#141414",
        marginBottom: 16
      },
      googlePlayAppStore: {
        "&:hover": {
          cursor: "pointer"
        }
      },
      img: {
        width: '260px',
        height: '100%',
        position: 'relative',
        bottom: 0
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "linear-gradient(70.95deg, #FFF2F2 0%, #FFF8EB 101.12%)",
        position: 'relative'
      },
      root: {
        padding: "61px 52px 0px 52px",
        maxWidth: 1280,
        marginLeft: "auto",
        marginRight: "auto"
      },
      descValues: {
        display: 'flex',
        alignItems: 'flex-start',
        marginTop: 24,
        marginBottom: 48
      },
      descValuesInner: {
        paddingRight: 16
      },
      descBlock: {
        height: "100%",
        padding: '64px 48px'
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
      googlePlayAppStore: {
        "&:hover": {
          cursor: "pointer"
        }
      },
      img: {
        width: '300px',
        height: 'auto',
        position: 'absolute',
        bottom: 0
      }
    }
  })
);

const MobileBanking = () => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const onClickAppStore = () => {
    ReactGA.event({
      category: "BccCard_AppStore_download",
      action: "AppStore_download"
    });

    window.open(
      "https://apps.apple.com/kz/app/starbanking/id743617904",
      "_blank"
    );
  };

  const onClickGooglePlay = () => {
    ReactGA.event({
      category: "BccCard_GooglePlay_download",
      action: "GooglePlay_download"
    });

    window.open(
      "https://play.google.com/store/apps/details?id=kz.bcc.starbanking&hl=ru",
      "_blank"
    );
  };

  return (
    <Grid container className={classes.root}>
      <Grid container className={classes.mainRoot}>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <Grid container alignItems="center" className={classes.descBlock}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.title}>
                Мобильное приложение <br />StarBanking
              </Typography>
              <Grid container className={classes.descValues}>
                <Grid className={classes.descValuesInner}>
                  <img src="check-icon.svg" />
                  <Typography className={classes.description}>
                    Оплачивайте услуги
                    <br />бесплатно
                  </Typography>
                </Grid>

                <Grid className={classes.descValuesInner}>
                  <img src="exchange-icon.svg" />
                  <Typography className={classes.description}>
                    Управляйте рассрочкой
                    <br />и кэшбэком
                  </Typography>
                </Grid>

                <Grid className={classes.descValuesInner}>
                  <img src="card-icon.svg" />
                  <Typography className={classes.description}>
                    Пополняйте карту удобным <br />для вас способом бесплатно
                  </Typography>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item>
                  <img
                    onClick={() => onClickAppStore()}
                    className={classes.googlePlayAppStore}
                    src="app_store.svg"
                    alt="app_store"
                  />
                </Grid>
                <Grid item>
                  <img
                    onClick={() => onClickGooglePlay()}
                    className={classes.googlePlayAppStore}
                    src="google_play.svg"
                    alt="google_play"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Grid container justify="center">
            <img
              className={classes.img}
              src="starsMobile.svg"
              alt="star_mobile_banking"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileBanking;
