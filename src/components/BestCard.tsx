import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 26,
        color: "#141414"
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#8B98A7",
        marginBottom: 10
      },
      paper: {
        padding: "12px 8px 12px 8px",
        background: "#FAFAFA",
        border: "1px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "2px",
        height: "100%"
      },
      icon: {
        width: "40px",
        height: "40px",
        marginRight: "16px"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "18px",
        color: "#141414",
        lineHeight: 1
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        color: "#5B5B5B",
        marginTop: 5,
        lineHeight: 1.2
      },
      ul: {
        padding: 0,
        paddingLeft: 15,
        margin: 0,
        marginTop: 10
      },
      li: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        color: "#5B5B5B"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      mainTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "40px",
        color: "#141414"
      },
      mainDescription: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#8B98A7",
        marginBottom: "16px"
      },
      paper: {
        padding: "27px 32px 27px 32px",
        background: "#FAFAFA",
        border: "1px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
        height: "100%"
      },
      icon: {
        width: "80px",
        height: "80px",
        marginRight: "32px"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        color: "#141414"
      },
      description: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B",
        marginTop: 16
      },
      ul: {
        padding: 0,
        paddingLeft: 15,
        margin: 0,
        marginTop: 16
      },
      li: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "16px",
        color: "#5B5B5B"
      }
    }
  })
);

const BestCard = (props: any) => {
  const classes = useStyles({});

  return (
    <Grid container className={classes.root} id="secondHeader">
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.mainTitle}>Лучшая карта</Typography>
        <Typography className={classes.mainDescription}>
          во всех смыслах этого слова
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container spacing={2}>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_installment_credit.svg"
                  className={classes.icon}
                  alt="installment"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  Рассрочка и кредитка в одном пластике
                </Typography>
                <Typography className={classes.description}>
                  Банк дает вам сумму до 3 000 000 ₸, <br />
                  Вы решаете, как оплачивать покупки: одним платежом или в
                  рассрочку
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_cashback.svg"
                  className={classes.icon}
                  alt="cashback"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>Кешбэк до 30%</Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    1% с любой личной покупки картой (2% при вкладе
                    Рахмет/Рахмет+ от 1 000 000 ₸)
                  </li>
                  <li className={classes.li}>до 10% в любимых категориях</li>
                  <li className={classes.li}>до 30% у наших партнеров</li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img
                  src="about_fast_decision.svg"
                  className={classes.icon}
                  alt="decision"
                />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>
                  Проценты? Не, не слышали
                </Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>
                    Тратьте и возвращайте деньги, выданные Банком, без процентов
                    до 55 дней
                  </li>
                  <li className={classes.li}>
                    Покупайте у наших партнеров в рассрочку без переплат
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Grid container className={classes.paper}>
              <Grid item xl={false} lg={false} md={false} sm={false} xs={false}>
                <img src="about_free.svg" className={classes.icon} alt="free" />
              </Grid>
              <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                <Typography className={classes.title}>Бесплатно</Typography>
                <ul className={classes.ul}>
                  <li className={classes.li}>Выпуск и обслуживание карты</li>
                  <li className={classes.li}>СМС уведомления</li>
                  <li className={classes.li}>
                    Снятие личных средств до 300 000 ₸ в мес. в любом банкомате
                    РК
                  </li>
                </ul>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BestCard;
