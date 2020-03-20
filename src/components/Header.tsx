import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm, paddingSmXl, rootSmXl } from "./helper/DefaultStyle";
import ReactGA from "react-ga";
import "../App.css";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    "@keyframes xaxis": {
      '0%': {
        transform: 'translate(-96px)'
      },
      '100%': {
        transform: 'translate(96px)'
      }
    },
    "@keyframes yaxis": {
      '0%': {
        transform: 'translateY(42px)'
      },
      '100%': {
        transform: 'translateY(-66px) scale(0.8)',
        background: '#8B75F3'
      }
    },
    "@keyframes xaxislateral": {
      '0%': {
        transform: 'translate(-36px)'
      },
      '100%': {
        transform: 'translate(36px)'
      }
    },
    "@keyframes yaxislateral": {
      '0%': {
        transform: 'translateY(12px)'
      },
      '100%': {
        transform: 'translateY(-60px)',
        background: '#8B75F3'
      }
    },
    [theme.breakpoints.down("sm")]: {
      svgFile: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        le: 0,
      },
      wrapper: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '100px',
        height: '100px',
        filter: "url('#filter')"
      },
      ball: {
        width: '60px',
        height: '60px',
        position: 'absolute',
        top: 'calc(50% - 30px)',
        left: 'calc(50% - 30px)',
        '&:before': {
          background: '#8B75F3',
          borderRadius: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          content: "' '",
        },
        '&:nth-child(1)': {
          transform: 'translate(-66px)',
          animation: '$xaxislateral 2s infinite alternate ease-in-out',
          '&:before': {
            content: "''",
            animation: '$yaxislateral 1s infinite 0.1s alternate ease-in-out',
          }
        },
        '&:nth-child(2)': {
          animation: '$xaxis 2s infinite alternate ease-in-out',
          '&::before': {
            content: "''",
            animation: '$yaxis 1s infinite .5s alternate ease-in-out',
          },
        },
        '&:nth-child(3)': {
          transform: 'translate(66px, 78px)',
          animation: '$xaxislateral 2s infinite alternate ease',
          '&:before': {
            content: "''",
            animation: '$yaxislateral 1s infinite .4s alternate ease-in-out',
          }
        }
      },
      mainRoot: {
        background: "#fff",
        position: 'relative'
      },
      imgKlyaks: {
        position: 'absolute',
        top: '-23%',
        right: '-6%',
        zIndex: 0,
        display: 'none',
        '& > svg': {
          animationName: '$rotateRight',

          transform: 'translate3d(0, 0, 0)',
          transformOrigin: '200px 200px',
          animationDuration: '1s',
          animationDelay: '1s',
          animationFillMode: 'forwards',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationDirection: ''
        }
      },
      root: {
        padding: paddingDownSm
      },
      logo_div: {
        zIndex: 2
      },
      logo_img: {
        width: "168px",
        height: "40px",
      },
      cardDescriptionBlock: {
        marginTop: "80px"
      },
      cardTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "50px",
        textAlign: 'center',
        color: "#141414"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        color: "#141414",
        opacity: 0.87
      },
      bonusLove: {
        padding: '14px 20px',
        background: 'linear-gradient(80.98deg, #FFF5F5 0%, #FFF8EB 98.57%)',
        borderRadius: 8,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "22px",
        paddingLeft: 60,
        color: "#141414",
        position: 'relative',
        '&:before': {
          content: 'url(gift-box.svg)',
          position: 'absolute',
          left: 20
        }
      },
      assetCard: {
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.24)',
        zIndex: 1,
        width: '100%',
        marginTop: 20
      },
      grid_header: {
        justifyContent: 'space-around'
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "30px",
        color: "#141414",
        marginTop: "16px",
        textAlign: 'center'
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "16px",
        color: "#5B5B5B",
        opacity: 0.87,
        textAlign: 'center'
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        display: 'table',
        margin: 'auto',
        padding: '1rem 4rem',
        fontSize: "18px",
        textTransform: "none",
        backgroundColor: "#5E65F4",
        borderRadius: "8px",
        color: "#fff",
        marginTop: 30,
        marginBottom: 15,
        transition: '.3s',
        "&:hover, &:active": {
          backgroundColor: "#5E65F4",
          opacity: 0.8
        }
      },
      cardMotivation: {
        background: 'linear-gradient(85.46deg, #F0FBFF 0%, #EEEEFF 101.76%);',
        borderRadius: 8,
        padding: '25px 25px'
      },
      motivateText: {
        display: 'flex',
        alignItems: 'center',
        '& > h6': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 64,
          color: '#141414',
          margin: 0
        },
        '& > small': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          margin: '0 11px 0 2px',
          fontSize: 20,
          color: '#141414',
          opacity: '0.3'
        },
        '& > span': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 20,
          color: '#141414'
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      svgFile: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 0,
        right: 0,
      },
      wrapper: {
        position: 'absolute',
        top: -90,
        right: 0,
        width: '300px',
        height: '300px',
        filter: "url('#filter')"
      },
      ball: {
        width: '200px',
        height: '200px',
        position: 'absolute',
        top: 'calc(50% - 30px)',
        left: 'calc(50% - 30px)',
        '&:before': {
          background: '#8B75F3',
          borderRadius: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          content: "' '",
        },
        '&:nth-child(1)': {
          transform: 'translate(-66px)',
          animation: '$xaxislateral 2s infinite alternate ease-in-out',
          '&:before': {
            content: "''",
            animation: '$yaxislateral 1s infinite 0.1s alternate ease-in-out',
          }
        },
        '&:nth-child(2)': {
          animation: '$xaxis 2s infinite alternate ease-in-out',
          '&::before': {
            content: "''",
            animation: '$yaxis 1s infinite .5s alternate ease-in-out',
          },
        },
        '&:nth-child(3)': {
          transform: 'translate(66px, 78px)',
          animation: '$xaxislateral 2s infinite alternate ease',
          '&:before': {
            content: "''",
            animation: '$yaxislateral 1s infinite .4s alternate ease-in-out',
          }
        }
      },
      mainRoot: {
        background: "#fff",
        position: 'relative'
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
        fontSize: "72px",
        color: "#141414"
      },
      cardWhatYourWant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "24px",
        color: "#141414",
        opacity: 0.87
      },
      bonusLove: {
        padding: '14px 20px',
        background: 'linear-gradient(81.63deg, #FFF5F5 0%, #FFF8EB 98.57%)',
        borderRadius: 8,
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "24px",
        marginTop: "22px",
        display: 'table',
        paddingLeft: 60,
        color: "#141414",
        position: 'relative',
        '&:before': {
          content: 'url(gift-box.svg)',
          position: 'absolute',
          left: 20
        }
      },
      assetCard: {
        boxShadow: '0px 4px 50px rgba(0, 0, 0, 0.24)',
        width: '100%',
        zIndex: 1
      },
      grid_header: {
        justifyContent: 'space-around'
      },
      featureTitle: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "28px",
        color: "#141414",
        marginTop: "42px",
        textAlign: 'center'
      },
      featureDesc: {
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: "18px",
        color: "#141414",
        opacity: 0.87,
        textAlign: 'center'
      },
      buttonOrderCard: {
        fontStyle: "normal",
        fontWeight: 500,
        display: 'table',
        margin: 'auto',
        padding: '1rem 7rem',
        fontSize: "18px",
        textTransform: "none",
        backgroundColor: "#5E65F4",
        borderRadius: "8px",
        color: "#fff",
        marginTop: "65px",
        marginBottom: "150px",
        transition: '.3s',
        "&:hover, &:active": {
          backgroundColor: "#5E65F4",
          opacity: 0.8
        }
      },
      cardMotivation: {
        background: 'linear-gradient(85.46deg, #F0FBFF 0%, #EEEEFF 101.76%);',
        borderRadius: 8,
        padding: '55px 45px',
      },
      motivateText: {
        display: 'flex',
        alignItems: 'center',
        '& > h6': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 64,
          color: '#141414',
          margin: 0
        },
        '& > small': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 20,
          color: '#141414',
          opacity: '0.3'
        },
        '& > span': {
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontSize: 20,
          color: '#141414'
        }
      },
    },
    select: {
      display: 'none',
      color: 'white',
      '&:before': {
        borderColor: 'white',
      },
      '&:after': {
        borderColor: 'white',
      }
    },
    icon: {
      fill: 'white',
    },
  })
);

const Header = (props: any) => {
  const classes = useStyles({});
  const { t, i18n } = useTranslation();
  const eventGAOrderCard = () => {
    ReactGA.event({
      category: "BccCard_1button_to_order_card",
      action: "1button_to_order_card"
    });
    props.scrollToOrder(true);
  };

  const handleLangChange = (lang: any) => {
    props.changeLang(lang)
  }

  return (
    <Grid container className={classes.mainRoot}>
      <div className={classes.wrapper}>
        <div className={classes.ball}></div>
        <div className={classes.ball}></div>
        <div className={classes.ball}></div>
      </div>
      <svg className={classes.svgFile} >
        <defs>
          <filter id="filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
            <feComposite in="SourceGraphic" in2="filter" operator="atop" />
          </filter>
        </defs>
      </svg>
      <Grid container className={classes.root}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
              <div className={classes.logo_div}>
                <img
                  className={classes.logo_img}
                  src="logo-bcc-black.svg"
                  alt="logo-bcc"
                />
              </div>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={6} xs={6} style={{ textAlign: 'right' }}>
              <Select
                className={classes.select}
                value={props.lang}
                onChange={(e: any) => handleLangChange(e.target.value)}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
              >
                <MenuItem value="ru">Рус</MenuItem>
                <MenuItem value="kz">Каз</MenuItem>
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Grid container className={classes.cardDescriptionBlock}>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.cardTitle}>{t('header.title')}</Typography>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Typography className={classes.cardWhatYourWant}>
                  {t('header.subtitle_desc')}
                </Typography>
                <Typography className={classes.bonusLove}>
                  10% приятный бонус на первую покупку (до 1000 ₸)
              </Typography>
              </Grid>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12} container justify="flex-end">
              <img src="asset_card.svg" className={classes.assetCard} />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container spacing={6} className={classes.grid_header}>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    до 3 000 000 ₸
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    Без процентов - до 55 дней
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    Умная рассрочка - только у нас
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    Под 0% до 12 месяцев
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography className={classes.featureTitle}>
                    до 30% кэшбека
                  </Typography>
                  <Typography className={classes.featureDesc}>
                    C управлением категориями
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
                {t('header.button_main')}
              </Button>
            </Grid>

            <Grid xl={12} lg={12} md={12} sm={12} xs={12}>
              <Grid container justify="space-between" className={classes.cardMotivation}>
                <Grid className={classes.motivateText}>
                  <h6>0</h6>
                  <small>₸</small>
                  <span>Выпуск и<br />обслуживание карты</span>
                </Grid>
                <Grid className={classes.motivateText}>
                  <h6>0</h6>
                  <small>₸</small>
                  <span>SMS - <br />уведомления</span>
                </Grid>
                <Grid className={classes.motivateText}>
                  <h6>0</h6>
                  <small>₸</small>
                  <span>Cнятие личных <br />средств</span>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
