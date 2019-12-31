import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        background: "url(header-main.svg) no-repeat center center fixed",
        backgroundSize: "cover",
        padding: paddingDownSm,
        height: 420
      },
      logo_img: {
        width: "126px",
        height: "30px"
      },
      cardDescriptionBlock: {
        marginTop: "20px"
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        color: "white"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        color: "white",
        opacity: 0.87
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        color: "white",
        marginTop: "30px"
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "14px",
        color: "white",
        opacity: 0.54
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "10px",
        height: "32px",
        width: "116px",
        textTransform: "none",
        marginTop: "32px",
        backgroundColor: "white",
        borderRadius: "2px",
        color: "#141414",
        marginBottom: "75px"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        background: "url(header-main.svg) no-repeat center center fixed",
        backgroundSize: "cover",
        height: 580
      },
      ...rootSmXl,
      logo_img: {
        width: "168px",
        height: "40px"
      },
      cardDescriptionBlock: {
        marginTop: "80px"
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "48px",
        color: "white"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "white",
        opacity: 0.87
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "20px",
        color: "white",
        marginTop: "42px"
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "white",
        opacity: 0.54
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        height: "64px",
        width: "232px",
        textTransform: "none",
        marginTop: "65px",
        backgroundColor: "white",
        borderRadius: "4px",
        color: "#141414",
        marginBottom: "150px"
      }
    }
  })
);

const Header = (props: any) => {
  const classes = useStyles({});

  const eventGAOrderCard = () => {
    ReactGA.event({
      category: "BccCard_1button_to_order_card",
      action: "1button_to_order_card"
    });
    props.scrollToOrder();
  };

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <div className={classes.logo_div}>
                <img
                  className={classes.logo_img}
                  src="logo-bcc.svg"
                  alt="logo-bcc"
                />
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}></Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container className={classes.cardDescriptionBlock}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.cardTitle}>#картакарта</Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Typography className={classes.cardWhatYourWant}>
                бери для всего, что ты хочешь
              </Typography>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={6}>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    Кредит - до 3 000 000 ₸
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    Без процентов - до 55 дней
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    Рассрочка без процентов
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    До 12 месяцев
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    до 30%
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    Кешбэк
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Button
                onClick={() => eventGAOrderCard()}
                variant="contained"
                className={classes.buttonOrderCard}
              >
                Заказать карту
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
