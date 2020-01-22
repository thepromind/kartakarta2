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
import MaskedInput from "react-maskedinput";
import ym from "react-yandex-metrika";
import { getByDisplayValue } from "@testing-library/react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        marginTop: "8px",
        padding: "36px 20px 36px 20px",
        alignItems: "center"
      },
      icon: {
        width: "18px",
        height: "19px"
      },
      paper: {
        padding: "22px 16px 22px 16px",
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        boxSizing: "border-box",
        borderRadius: 8
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "20px"
      },
      formControlCheckBox: {
        marginTop: "20px"
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "black"
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12
      },
      submit: {
        background: "#3F0259",
        borderRadius: 4,
        fontSize: 16,
        fontWeight: 500,
        fontStyle: "normal",
        boxShadow: "none",
        textTransform: "none",
        height: 40,
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.4,
          boxShadow: "none",
          color: "#FFFFFF"
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        padding: "64px 252px 64px 252px",
        maxWidth: 1280,
        margin: "auto"
      },
      paper: {
        padding: "45px 72px 45px 72px",
        background: "#FFFFFF",
        border: "2px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px"
      },
      icon: {
        width: "18px",
        height: "19px"
      },
      box: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "40px",
        lineHeight: "40px",
        marginBottom: "27px"
      },
      formControlCheckBox: {
        marginTop: "25px"
      },
      checkBoxLabel: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black"
      },
      garant: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14
      },
      submit: {
        background: "#3F0259",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        boxShadow: "none",
        height: "62px",
        color: "#FFFFFF",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        },
        "&:disabled": {
          backgroundColor: "#3F0259",
          opacity: 0.6,
          boxShadow: "none",
          color: "#FFFFFF"
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

const CardOrder = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [agree, setAgree] = React.useState<boolean>(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "BccCard_kartakarta_Apply_Success",
      action: "kartakarta_Apply_Success"
    });

    const time: any = new Date();
    let itemsArrayHelp: any = [];
    itemsArrayHelp.push(["11111111111", time]);

    let itemsArray = localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items")!)
      : [itemsArrayHelp];

    if (phoneNumber && setPhoneNumber) {
      for (let i = itemsArray.length - 1; i >= 0; i--) {
        if (itemsArray[i][0] == phoneNumber) {
          if (
            Date.parse(time) - Date.parse(itemsArray[i][1]) <
            1000 * 60 * 15
          ) {
            props.snackUp(
              "Мы уже получили Вашу заявку и скоро Вам перезвоним."
            );
            return;
          }
        }
      }
      api.card
        .order({ fio, phoneNumber })
        .then(m => {
          setFio("");
          setPhoneNumber("");
          itemsArray.push([phoneNumber, time]);
          localStorage.setItem("items", JSON.stringify(itemsArray));

          if (
            time.getDay() >= 1 &&
            time.getDay() <= 5 &&
            (time.getHours() >= 9 || time.getHours() < 21)
          ) {
            props.snackUp(
              "Спасибо, заявка принята. Мы перезвоним Вам в течение 15 минут."
            );
          } else if (
            (time.getDay() == 6 || time.getDay() == 0) &&
            (time.getHours() >= 11 || time.getHours() < 20)
          ) {
            props.snackUp(
              "Спасибо, заявка принята. Мы перезвоним Вам в течение 15 минут."
            );
          } else {
            props.snackUp(
              "Спасибо, заявка принята. Мы перезвоним Вам в ближайшее рабочее время."
            );
          }
        })
        .catch(e => console.warn(e));
    }
    ym("reachGoal", "send_mess");
  };

  const classes = useStyles({});

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () =>
    fio.length > 1 && phoneNumber.replace("_", "").length === 16 && agree;

  return (
    <Grid
      ref={props.refProp}
      container
      className={classes.root}
      spacing={4}
      direction="column"
      justify="center"
    >
      <Paper elevation={0} className={classes.paper}>
        <Typography className={classes.box}>
          Заполните заявку <br />и получите #картакарта
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            fullWidth
            id="name"
            label="Имя"
            name="name"
            value={fio}
            onChange={(e: any) => setFio(e.target.value)}
          />
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            fullWidth
            id="phone"
            label="Номер телефона"
            name="phone"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            InputProps={{
              inputComponent: TextMaskCustom as any
            }}
          />
          <FormControlLabel
            className={classes.formControlCheckBox}
            control={
              <Checkbox
                value="remember"
                color="primary"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />
            }
            label={
              <Typography className={classes.checkBoxLabel}>
                Я согласен(а) на сбор и обработку персональных данных
              </Typography>
            }
          />
          <Grid container style={{ marginTop: "15px" }} spacing={4}>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xl={false}
                  lg={false}
                  md={false}
                  sm={false}
                  xs={false}
                >
                  <img
                    src="card_order_security.svg"
                    className={classes.icon}
                    alt="order_security"
                  />
                </Grid>
                <Grid item xl={true} lg={true} md={true} sm={true} xs={true}>
                  <Typography className={classes.garant}>
                    Мы гарантируем безопасность и сохранность ваших данных
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                disabled={!isValid()}
              >
                Подать заявку
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default CardOrder;
