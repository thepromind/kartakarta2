import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  makeStyles,
  createStyles,
  Theme,
  useTheme
} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";
import { paddingDownSm, rootSmXl } from "./helper/DefaultStyle";
import MaskedInput from "react-maskedinput";
import ym from "react-yandex-metrika";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      mainRoot: {
        backgroundColor: "white"
      },
      root: {
        padding: paddingDownSm
      },
      mainTitle: {
        fontWeight: '500',
        lineHeight: '1.3',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 16
      },
      subMainTitle: {
        display: 'block',
        fontWeight: 'normal',
        fontSize: 16,
        color: '#4D565F',
        textAlign: 'center'
      },

      buttonPartner: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        textAlign: 'center',
        color: "#141414",
        marginTop: 10
      },
      noteButtonPartner: {
        border: 'none',
        padding: 0,
        paddingLeft: 5,
        fontStyle: "normal",
        fontSize: 'inherit',
        textTransform: 'inherit',
        fontWeight: "normal",
        textDecoration: 'underline',
        verticalAlign: 'unset',
        color: '#7FC1FF'
      },
      rahmetBg: {
        padding: '30px 0',
        '& > img': {
          width: '100%'
        }
      },
      partnerImgBlock: {
        margin: '1rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
      },
      partnerImg: {
        display: 'inline-block',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '35%',
        height: 120,
      },
      stepsBlock: {
        padding: '3rem 0'
      },
      steps: {
        paddingTop: '3rem',
        position: 'relative',
        '&:before': {
          content: '""',
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderTop: '20px solid #5E65F4',
          position: 'absolute',
          bottom: '-40px',
          margin: 'auto',
          left: 0,
          right: 0
        },
        '&:after': {
          content: '""',
          width: 0,
          height: 0,
          borderLeft: '17px solid transparent',
          borderRight: '17px solid transparent',
          borderTop: '17px solid #fff',
          position: 'absolute',
          bottom: '-35px',
          margin: 'auto',
          left: 0,
          right: 0
        },
        '& > span': {
          background: '#EFEFFD',
          width: 64,
          height: 64,
          borderRadius: '50%',
          margin: 'auto',
          fontSize: 24,
          color: '#5E65F4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '& > h4': {
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
          color: '#141414',
          marginBottom: 16,
          marginTop: 16
        },
        '& > p': {
          fontSize: 18,
          fontWeight: 'normal',
          textAlign: 'center',
          color: '#5B5B5B',
          '& > a': {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#7FC1FF',
          }
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {
        padding: "20px 0"
      },
      ...rootSmXl,
      mainTitle: {
        fontWeight: '500',
        lineHeight: '1.3',
        fontSize: 56,
        textAlign: 'center',
        marginBottom: 24
      },
      subMainTitle: {
        display: 'block',
        fontWeight: 'normal',
        fontSize: 24,
        color: '#4D565F',
        textAlign: 'center'
      },
      rahmetBg: {
        padding: '30px 0',
        '& > img': {
          width: '100%'
        }
      },
      buttonPartner: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        textAlign: 'center',
        color: "#141414",
        marginTop: 10
      },
      noteButtonPartner: {
        border: 'none',
        padding: 0,
        paddingLeft: 5,
        fontStyle: "normal",
        fontSize: 'inherit',
        textTransform: 'inherit',
        fontWeight: "normal",
        textDecoration: 'underline',
        verticalAlign: 'unset',
        color: '#7FC1FF'
      },
      partnerImgBlock: {
        margin: '4rem 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      partnerImg: {
        display: 'inline-block',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: 130,
        height: 120,
      },
      stepsBlock: {
        padding: '3rem 0'
      },
      steps: {
        marginTop: '5rem',
        '& > span': {
          background: '#EFEFFD',
          width: 64,
          height: 64,
          borderRadius: '50%',
          margin: 'auto',
          fontSize: 24,
          color: '#5E65F4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '& > h4': {
          fontSize: 24,
          fontWeight: '500',
          textAlign: 'center',
          color: '#141414',
          marginBottom: 16,
          marginTop: 16
        },
        '& > p': {
          fontSize: 18,
          fontWeight: 'normal',
          textAlign: 'center',
          color: '#5B5B5B',
          '& > a': {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#7FC1FF',
          }
        }
      }
    }
  })
);
interface TextMaskCustomProps {
  inputRef: (ref: HTMLInputElement | null) => void;
}
const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask="1(111) 111 11 11"
      placeholder={"7(707) 707 77 77"}
    />
  );
};

const Partners = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "BccCard_kartakarta_Apply_Success",
      action: "kartakarta_Apply_Success"
    });

    if (phoneNumber && setPhoneNumber) {
      api.card
        .order({ fio, phoneNumber })
        .then(m => {
          setFio("");
          setPhoneNumber("");
          props.send();
        })
        .catch(e => console.warn(e));
    }
    ym("reachGoal", "send_mess");
  };

  const classes = useStyles({});
  const { t } = useTranslation();
  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () =>
    fio.length > 1 && phoneNumber.replace("_", "").length === 16 && agree;

  return (
    <Grid container className={classes.mainRoot}>
      <Grid
        container
        className={`${classes.root} ${classes.mainBg}`}
        spacing={4}
      >
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Typography className={classes.mainTitle}>
            Наши партнеры
          </Typography>
          <span className={classes.subMainTitle}>с бесплатной рассрочкой и классными кэшбэками</span>
          <Grid container className={classes.partnerImgBlock}>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-1.svg)' }}></span>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-2.svg)' }}></span>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-3.svg)' }}></span>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-4.svg)' }}></span>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-5.svg)' }}></span>
            <span className={classes.partnerImg} style={{ backgroundImage: 'url(parnter-6.svg)' }}></span>
          </Grid>
          <Typography className={classes.buttonPartner}>
            Каждый день новые партнеры. Посмотреть весь список
            <Button
              href="https://www.bcc.kz/partners/?utm_source=kartakarta_partners&utm_medium=button_click&utm_campaign=kartakarta"
              target="_blank"
              variant="outlined"
              className={classes.noteButtonPartner}
            >
              партнеров
            </Button>
          </Typography>
        </Grid>
        <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.stepsBlock}>
          <Typography className={classes.mainTitle}>
            Хочу #картакарта<br />
            за 15 минут
          </Typography>
          <Grid container>

            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid className={classes.steps}>
                <span>1</span>
                <h4>Подайте заявку</h4>
                <p>Обратитесь за #картакарта<br /> в ближайшее <a href="https://www.bcc.kz/branches-and-atms/?utm_source=instagram&utm_medium=taplink" target="_blank">отделение</a> Банка</p>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid className={classes.steps}>
                <span>2</span>
                <h4>Узнайте решение</h4>
                <p>Мы принимаем решение <br />за 2 минуты</p>
              </Grid>
            </Grid>

            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Grid className={classes.steps}>
                <span>3</span>
                <h4>Получите карту</h4>
                <p>Сразу получите карту и начните <br />пользоваться</p>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

      </Grid>
    </Grid >
  );
};

export default Partners;
