import React from "react";
import { Grid, Typography, Button, Paper, Slider } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  withStyles
} from "@material-ui/core/styles";
import NumberFormat from "react-number-format";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const PrettoSlider = withStyles((theme: Theme) =>
  createStyles({
    root: {
      color: "#5E65F4",
      height: 4
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: "#5E65F4",
      border: "4px solid #FFFFFF",
      marginTop: -10,
      marginLeft: -12,
      boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.24)"
    },
    active: {},
    valueLabel: {
      left: "calc(-50% + 1px)"
    },
    track: {
      height: 4,
      borderRadius: 4
    },
    rail: {
      height: 4,
      borderRadius: 4
    },
    mark: {
      background: 'white',
      width: 10,
      height: 10,
      borderRadius: '50%',
      top: 8,
      marginLeft: '-7px',
      border: '2px solid #5E65F4'
    },
    markLabel: {
      color: '#898989',
      fontSize: 12
    },
    markActive: {
      background: '#5E65F4',
      opacity: '1'
    },

    [theme.breakpoints.down("sm")]: {
      mark: {
        width: 10,
        height: 10,
        borderRadius: '50%',
        top: 15,
        marginLeft: '-7px',
      },
      markLabel: {
        display: 'none'
      },
    }
  }))(Slider);

const marks = [
  {
    value: 20000,
    label: '20 000',
  },
  {
    value: 100000,
    label: '100 000',
  },
  {
    value: 200000,
    label: '200 000',
  },
  {
    value: 300000,
    label: '300 000',
  },
  {
    value: 400000,
    label: '400 000',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("xs")]: {
      root: {
        padding: paddingDownSm
      },
      mark: {
        background: 'white',
        width: 10,
        height: 10,
        borderRadius: '50%',
        top: 15,
        marginLeft: '-7px',
        border: '2px solid #5E65F4'
      },
      title: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        color: '#141414',
        textAlign: 'center',
        margin: 'auto',
        marginBottom: 20,
        width: '70%'
      },
      paperCard: {
        background: '#FBFBFB',
        borderRadius: 8,
        padding: '16px 24px'
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#5E65F4",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      },
      result: {
        padding: "32px",
        marginTop: 50,
        background: "#FFFFFF",
        borderRadius: "8px"
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        paddingLeft: 15,
        color: "#B9B9B9",
        textAlign: 'center'
      },
      resultTitleTour: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        paddingLeft: 15,
        color: "#141414",
        paddingTop: 130,
        textAlign: 'center'
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "40px",
        paddingLeft: 15,
        color: "#141414",
        lineHeight: '1',
        textAlign: 'center'
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#5E65F4",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 30,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#5E65F4",
          borderColor: "#5E65F4",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        }
      },
      titleText: {
        fontSize: 32,
        fontWeight: '500',
        color: "#141414",
        textAlign: 'center'
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        color: "#141414",
        opacity: 0.7,
        marginTop: "10px",
        textAlign: 'center'
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 30,
        textAlign: 'center'
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989"
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 32
      },
      placeRelate: {
        position: 'relative'
      },
      findPlace: {
        width: '100px',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        top: 80
      },
      cardCircle: {
        textAlign: 'center',
        display: 'table',
        margin: 'auto',
        position: 'relative',
        marginBottom: 40,
        '& > p': {
          fontSize: 18,
          padding: '0 20px',
          color: '#141414',
          opacity: '0.87',
          marginTop: 16
        }
      },
      circleCash: {
        width: 128,
        height: 128,
        margin: 'auto',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      circleCashInner: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontSize: '40px',
        fontWeight: '500',
        color: '#141414',
        '& > small': {
          fontSize: 14,
          marginBottom: 5,
          marginRight: 5
        }
      },
      colorOne: {
        background: '#FFF2F2'
      },
      colorTwo: {
        background: '#F0FBFF'
      },
      colorThree: {
        background: '#EEEEFF'
      },
      colorFour: {
        background: '#FFF8EB',
        marginLeft: 10
      },
      colorFive: {
        background: '#FFE8BB',
      },
      circleInnerWith: {
        position: 'absolute',
        top: 0,
        right: 30
      },
      padFourty: {
        paddingBottom: 40
      }
    },
    [theme.breakpoints.between("xs", "sm")]: {
      root: {
        padding: paddingDownSm
      },
      paperCard: {
        padding: '16px 24px',
        background: '#FBFBFB',
        borderRadius: 8
      },
      mark: {
        background: 'white',
        width: 10,
        height: 10,
        borderRadius: '50%',
        top: 15,
        marginLeft: '-7px',
        border: '2px solid #5E65F4'
      },
      title: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "32px",
        color: '#141414',
        textAlign: 'center',
        marginBottom: 20
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#5E65F4",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      },
      result: {
        padding: "32px",
        marginTop: 50,
        background: "#FFFFFF",
        borderRadius: "8px"
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        paddingLeft: 15,
        color: "#B9B9B9",
        textAlign: 'center'
      },
      resultTitleTour: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        paddingLeft: 15,
        color: "#141414",
        paddingTop: 130,
        textAlign: 'center'
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "40px",
        paddingLeft: 15,
        color: "#141414",
        lineHeight: '1',
        textAlign: 'center'
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#5E65F4",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 30,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#5E65F4",
          borderColor: "#5E65F4",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        }
      },
      titleText: {
        fontSize: 32,
        fontWeight: '500',
        color: "#141414",
        textAlign: 'center'
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        color: "#141414",
        opacity: 0.7,
        marginTop: "10px",
        textAlign: 'center'
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 30,
        textAlign: 'center'
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989"
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 32
      },
      placeRelate: {
        position: 'relative'
      },
      findPlace: {
        width: '100px',
        position: 'absolute',
        margin: 'auto',
        left: 0,
        right: 0,
        top: 80
      },
      cardCircle: {
        textAlign: 'center',
        display: 'table',
        margin: 'auto',
        position: 'relative',
        marginBottom: 40,
        '& > p': {
          fontSize: 18,
          padding: '0 20px',
          color: '#141414',
          opacity: '0.87',
          marginTop: 16
        }
      },
      circleCash: {
        width: 128,
        height: 128,
        margin: 'auto',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      circleCashInner: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '40px',
        color: '#141414',
        '& > small': {
          fontSize: 14,
          marginBottom: 5,
          marginRight: 5
        }
      },
      colorOne: {
        background: '#FFF2F2'
      },
      colorTwo: {
        background: '#F0FBFF'
      },
      colorThree: {
        background: '#EEEEFF'
      },
      colorFour: {
        background: '#FFF8EB',
        marginLeft: 10
      },
      colorFive: {
        background: '#FFE8BB',
      },
      circleInnerWith: {
        position: 'absolute',
        top: 0,
        right: 30
      },
      padFourty: {
        paddingBottom: 40
      }
    },
    [theme.breakpoints.between("md", "xl")]: {
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "40px",
        color: '#141414',
        textAlign: 'center',
        marginBottom: 64
      },
      paperCard: {
        padding: '4rem 10rem',
        background: '#FBFBFB',
        borderRadius: 8
      },
      tabButtonActive: {
        width: "215px",
        height: "36px",
        backgroundColor: "#5E65F4",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none",
        "&:hover, &:active": {
          backgroundColor: "#FFCF87",
          opacity: 0.8
        }
      },
      findPlace: {
        width: '156px'
      },
      tabButton: {
        width: "181px",
        height: "36px",
        backgroundColor: "#E8E8E8",
        borderRadius: "4px",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        textTransform: "none"
      },
      result: {
        padding: "32px",
        marginTop: 50,
        background: "#FFFFFF",
        borderRadius: "8px"
      },
      resultTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#B9B9B9"
      },
      resultTitleTour: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#B9B9B9"
      },
      resultSum: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "90px",
        color: "#141414",
        lineHeight: '1'
      },
      resultOrderCard: {
        width: "324px",
        height: "64px",
        backgroundColor: "#5E65F4",
        borderRadius: "8px",
        fontStyle: "normal",
        fontWeight: 500,
        marginTop: 30,
        fontSize: "20px",
        textTransform: "none",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#5E65F4",
          borderColor: "#5E65F4",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        }
      },
      titleText: {
        fontSize: 36,
        fontWeight: 500,
        color: "#141414",
        textAlign: 'center'
      },
      monthSpending: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#141414",
        opacity: 0.7,
        marginTop: "16px",
        textAlign: 'center'
      },
      monthSpendingSum: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "32px",
        color: "#141414",
        marginTop: 30,
        textAlign: 'center'
      },
      monthSpendingInterval: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "13px",
        color: "#898989"
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#898989",
        opacity: 0.7,
        marginTop: 32
      },
      cardCircle: {
        textAlign: 'center',
        display: 'table',
        margin: 'auto',
        position: 'relative',
        '& > p': {
          fontSize: 18,
          color: '#141414',
          opacity: '0.87',
          marginTop: 14
        }
      },
      circleCash: {
        width: 128,
        height: 128,
        margin: 'auto',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      circleCashInner: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        fontSize: '40px',
        fontWeight: '500',
        color: '#141414',
        '& > small': {
          fontSize: 14,
          marginBottom: 5,
          marginRight: 5
        }
      },
      textBottomCircle: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        textAlign: 'center',
        color: '#4D565F',
        opacity: 0.87
      },
      colorOne: {
        background: '#FFF2F2'
      },
      colorTwo: {
        background: '#F0FBFF'
      },
      colorThree: {
        background: '#EEEEFF'
      },
      colorFour: {
        background: '#FFF8EB',
        marginLeft: 10
      },
      colorFive: {
        background: '#FFE8BB',
      },
      circleInnerWith: {
        position: 'absolute',
        top: 0,
        right: 0
      },
      padFourty: {
        paddingBottom: 40
      }
    }
  })
);
const data = [{
  id: 0,
  from: "билет в Париж",
  fromIcon: "event-6.png",
  price: 200000
}, {
  id: 1,
  from: "билеты в Таиланд",
  fromIcon: "image-cashback-1.png",
  price: 170000
}, {
  id: 2,
  from: "отдых в санатории",
  fromIcon: "event-5.png",
  price: 120000
}, {
  id: 3,
  from: "годовой абонемент на фитнес",
  fromIcon: "event-4.png",
  price: 90000
}, {
  id: 4,
  from: "наушники от Apple",
  fromIcon: "event-3.png",
  price: 60000
}, {
  id: 5,
  from: "ювелирное украшение",
  fromIcon: "event-2.png",
  price: 30000
}, {
  id: 6,
  from: "ужин в ресторане",
  fromIcon: "event-1.png",
  price: 12000
},]
const CaclulatorCashBack = (props: any) => {
  const classes = useStyles({});
  const { t } = useTranslation();

  const [spendingSum, setSpendingSum] = React.useState(300000);

  const onClickIssue = () => {
    ReactGA.event({
      category: "BccCard_button_Get",
      action: "button_Get"
    });
    props.scrollToOrder();
  };

  return (
    <Grid container className={classes.root} spacing={4}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Зарабатывайте больше денег</Typography>
      </Grid>
      <Grid className={classes.padFourty} container justify="space-between" xl={12} lg={12} md={12} sm={12} xs={12}>

        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Grid className={classes.cardCircle}>
            <span className={`${classes.circleCash} ${classes.colorOne}`}>
              <span className={classes.circleCashInner}>
                <small>до</small>
                30%
              </span>
            </span>
            <Typography>
              у наших партнеров
            </Typography>
          </Grid>
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Grid className={classes.cardCircle}>
            <span className={`${classes.circleCash} ${classes.colorTwo}`}>
              <span className={classes.circleCashInner}>
                <small>до</small>
                10%
              </span>
            </span>
            <Typography>
              в любимых категориях
            </Typography>
          </Grid>
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Grid className={classes.cardCircle}>
            <span className={`${classes.circleCash} ${classes.colorThree}`}>
              <span className={classes.circleCashInner}>
                10%
              </span>
            </span>
            <Typography>
              бонус за первую покупку
            </Typography>
            <span className={classes.textBottomCircle}>до 1 000 ₸</span>
          </Grid>
        </Grid>

        <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
          <Grid className={classes.cardCircle}>
            <span className={`${classes.circleCash} ${classes.colorFour}`}>
              <span className={classes.circleCashInner}>
                1%
              </span>
            </span>
            <span className={`${classes.circleCash} ${classes.colorFive} ${classes.circleInnerWith}`}>
              <span className={classes.circleCashInner}>
                +1%
              </span>
            </span>
            <Typography>
              за покупки по всему миру
            </Typography>
            <span className={classes.textBottomCircle}>+1% при наличии вклада <br />
              Рахмет/Рахмет+ от 1 000 000 ₸</span>
          </Grid>
        </Grid>

      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container spacing={4}>

          <Grid container className={classes.paperCard}>
            <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.titleText}>
                  Больше кэшбэка в вашем кармане
                </Typography>
                <Typography className={classes.monthSpending}>
                  * В расчет для примера взят кэшбэк 5%. Ваша трата в месяц:
                </Typography>
              </Grid>
              <Grid
                item
                xl={12}
                lg={12}
                md={12}
                sm={12}
                xs={12}
                className={classes.monthSpendingSum}
              >
                <NumberFormat
                  value={spendingSum}
                  thousandSeparator={" "}
                  displayType="text"
                />
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <PrettoSlider
                  min={20000}
                  marks={marks}
                  max={400000}
                  step={10000}
                  valueLabelDisplay="off"
                  aria-label="pretto slider"
                  defaultValue={spendingSum}
                  onChange={(e, val) =>
                    setSpendingSum(val instanceof Array ? val[1] : val)
                  }
                />
              </Grid>
              {
                data.filter(f => f.price <= Math.round(spendingSum * 0.05) * 12).splice(0, 1).map(d => {
                  return (
                    <Paper elevation={0} className={classes.result}>
                      <Grid container alignItems="center" className={classes.placeRelate}>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                          <img src={d.fromIcon} className={classes.findPlace} />
                        </Grid>
                        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                          <Typography align="left" className={classes.resultTitle}>
                            Ваш заработок в год
                </Typography>
                          <Typography align="left" className={classes.resultSum}>
                            <NumberFormat
                              value={Math.round(spendingSum * 0.05) * 12}
                              thousandSeparator={" "}
                              displayType="text"
                            />{" "}
                            ₸
              </Typography>
                          <Typography align="left" className={classes.resultTitleTour}>
                            Накопленного кэшбэка хватит на {d.from}
                          </Typography>
                        </Grid>
                      </Grid>

                    </Paper>

                  )
                })
              }
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>

                <Typography align="center">
                  <Button
                    onClick={() => onClickIssue()}
                    className={classes.resultOrderCard}
                  >
                    {t('block_4.button_main')}
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaclulatorCashBack;
