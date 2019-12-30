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
import MaskedInput from "react-text-mask";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ReactGA from "react-ga";
import api from "../api/Api";

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
        padding: "12px 8px 12px 8px",
        backgroundColor: "white",
        border: "1px solid #E8E8E8",
        boxSizing: "border-box",
        borderRadius: 8
      },
      box: {
        textAlign: "center",
        fontWeight: "fontWeightBold",
        fontSize: "20px",
        lineHeight: "40px"
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
        background: "#FFCF87",
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 500,
        fontStyle: "normal",
        boxShadow: "none",
        textTransform: "none",
        height: 31,
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          boxShadow: "none",
          color: "#FFFFFF"
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        marginTop: "34px",
        padding: "72px 52px 72px 52px",
        alignItems: "center"
      },
      paper: {
        padding: "48px 32px 48px 32px",
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
        fontWeight: "fontWeightBold",
        fontSize: "40px",
        lineHeight: "40px"
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
        background: "#FFCF87",
        borderRadius: "8px",
        fontSize: "20px",
        lineHeight: "28px",
        fontWeight: "500",
        fontStyle: "normal",
        textTransform: "none",
        boxShadow: "none",
        height: "62px",
        "&:hover, &:active": {
          backgroundColor: "#3F0259",
          borderColor: "#3F0259",
          opacity: 0.8,
          boxShadow: "none",
          color: "#FFFFFF"
        },
        "&:disabled": {
          backgroundColor: "#FFCF87",
          opacity: 0.4,
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

function TextMaskCustom(props: TextMaskCustomProps) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "+",
        /[1-9]/,
        " ",
        "(",
        /\d/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

const CardOrder = (props: any) => {
  const [fio, setFio] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("7");
  const [agree, setAgree] = React.useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    ReactGA.event({
      category: "BccCard",
      action: "kartakarta_Apply_Success"
    });

    if (phoneNumber && setPhoneNumber) {
      api.card
        .order({ fio, phoneNumber })
        .then(m => {
          props.send();
        })
        .catch(e => console.warn(e));
    }
  };
  const classes = useStyles({});

  const theme = useTheme();
  const isXS = useMediaQuery(theme.breakpoints.down("sm"));

  const isValid = () => fio.length > 1 && phoneNumber.length === 17 && agree;

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
        <Typography className={classes.box}>Закажите #картукарту</Typography>
        <Typography className={classes.box}>прямо сейчас</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Фамилия, имя и отчество"
            name="name"
            value={fio}
            onChange={(e: any) => setFio(e.target.value)}
          />
          <TextField
            size={isXS ? "small" : "medium"}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="phone"
            value={phoneNumber}
            onChange={(e: any) => setPhoneNumber(e.target.value)}
            label="Номер телефона"
            id="phone"
            InputProps={{
              inputComponent: TextMaskCustom as any
            }}
          />
          <FormControlLabel
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
                Я согласен(а) с условиями
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
