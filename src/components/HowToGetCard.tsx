import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        backgroundColor: "#FAFAFA",
        padding: paddingDownSm
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "26px"
      },
      step: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 48,
        color: "#E8E8E8"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 18,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#5B5B5B"
      },
      arrow_m: {
        display: "flex",
        justifyContent: "center",
        padding: "3px 32px!important"
      },
      arrow: {
        width: 30,
        height: 30,
        transform: "rotate(90deg)"
      },
      steps_m: {
        display: "grid",
        textAlign: "center"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        backgroundColor: "#FAFAFA"
      },
      ...rootSmXl,
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px"
      },
      step: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 96,
        color: "#E8E8E8"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B"
      },
      arrow: {
        width: 42,
        height: 42
      }
    }
  })
);

const HowToGetCard = (props: any) => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.mainRoot}>
      <Grid container className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.mainTitle}>
            Как получить карту
          </Typography>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={8}>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid container spacing={8} alignItems="center" className={classes.steps_m}>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.step}>1</Typography>
                  <Typography className={classes.title}>
                    Подайте заявку
                  </Typography>
                  <Typography className={classes.description}>
                    Обратитесь за #картакарта в ближайшее отделение Банка
                  </Typography>
                </Grid>
                <Grid
                  item
                  xl={false}
                  lg={false}
                  md={false}
                  sm={false}
                  xs={false}
                  className={classes.arrow_m}
                >
                  <img className={classes.arrow} src="arrow.svg" alt="arrow" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid container spacing={8} alignItems="center" className={classes.steps_m}>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.step}>2</Typography>
                  <Typography className={classes.title}>
                    Узнайте решение
                  </Typography>
                  <Typography className={classes.description}>
                    Мы принимаем решение за 3 минуты
                  </Typography>
                </Grid>
                <Grid
                  item
                  xl={false}
                  lg={false}
                  md={false}
                  sm={false}
                  xs={false}
                  className={classes.arrow_m}
                >
                  <img className={classes.arrow} src="arrow.svg" alt="arrow" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid container spacing={8} alignItems="center" className={classes.steps_m}>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.step}>3</Typography>
                  <Typography className={classes.title}>
                    Получите карту
                  </Typography>
                  <Typography className={classes.description}>
                    Сразу получите карту и начните пользоваться
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HowToGetCard;
