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
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import MaskedInput from "react-maskedinput";
import ym from "react-yandex-metrika";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                backgroundColor: 'white',
                display: 'none'
            },
            root: {
                padding: paddingDownSm
            },
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 12,
                color: 'white'
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                backgroundColor: '#27AE60',
                padding: "20px 0",
                display: 'none'
            },
            ...rootSmXl,
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 32,
                textAlign: "center",
                color: 'white'
            },
            buttonPartner: {
                display: 'table',
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "18px",
                height: "64px",
                width: "232px",
                textTransform: "none",
                margin: 'auto',
                marginTop: "15px",
                backgroundColor: "white",
                borderRadius: "4px",
                color: "#141414"
            }
        }
    })
)
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
            <Grid container className={classes.root}>
                <Grid item xl={12} lg={12} md={12} sm={6} xs={6}>
                    <Typography className={classes.myFont}>Хотите стать партнером?</Typography>
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Button
                        className={classes.buttonPartner}
                    >
                        Стать партнером
              </Button>



                </Grid>
            </Grid>
        </Grid>
    )
}

export default Partners;