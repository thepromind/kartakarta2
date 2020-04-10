import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { paddingDownSm, rootSmXl } from './helper/DefaultStyle';
import { PhoneAndroid, Call } from "@material-ui/icons";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        [theme.breakpoints.down('sm')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            root: {
                padding: paddingDownSm
            },
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 15,
                marginTop: 20,
                color: 'white'
            },
            mySocial: {
                display: 'flex',
                '& > a': {
                    marginRight: 10
                }
            },
            myFontTitle: {
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 16,
                color: 'white'
            },
            myCall: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: 8,
                '& > span': {
                    fontSize: 18,
                    lineHeight: 1,
                    color: 'white',
                    '& > small': {
                        fontSize: 14,
                        color: 'white',
                        display: 'block',
                        opacity: '0.54'
                    }
                }
            },
            circleCall: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                marginRight: 8
            }
        },
        [theme.breakpoints.between('sm', 'xl')]: {
            mainRoot: {
                backgroundColor: 'black'
            },
            ...rootSmXl,
            myFont: {
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: 15,
                color: 'white',
                opacity: 0.54,
                '&:last-child': {
                    marginTop: 40
                }
            },
            mySocial: {
                display: 'flex',
                '& > a': {
                    marginRight: 10
                }
            },
            myFontTitle: {
                fontWeight: 'bold',
                fontSize: 16,
                marginBottom: 24,
                color: 'white'
            },
            myCall: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: 16,
                '& > span': {
                    fontSize: 18,
                    lineHeight: 1,
                    color: 'white',
                    '& > small': {
                        fontSize: 14,
                        color: 'white',
                        display: 'block',
                        opacity: '0.54'
                    }
                }
            },
            circleCall: {
                width: 32,
                height: 32,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFFFFF',
                marginRight: 8
            }
        }
    })
)

const Footer = () => {

    const classes = useStyles({});
    const { t } = useTranslation();
    const onClickCall505 = () => {
        ReactGA.event({
            category: "BccCard_call_505",
            action: "call_505"
        });
        window.open("tel:505", "_self");
    };

    const onClickCallMB = () => {
        ReactGA.event({
            category: "BccCard_iron_call_2443030",
            action: "iron_call_2443030"
        });
        window.open("tel:87272443030", "_self");
    };
    return (
        <Grid container className={classes.mainRoot}>
            <Grid container className={classes.root}>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Typography className={classes.myFontTitle}>Контакты</Typography>
                    <Typography className={classes.myCall} onClick={() => onClickCall505()}><span className={classes.circleCall}><img src="mobilePhone.svg" /></span><span>505 <small>Бесплатно с мобильного</small></span></Typography>
                    <Typography className={classes.myCall} onClick={() => onClickCallMB()}><span className={classes.circleCall}><img src="mobile.svg" /></span><span>8 (727) 244 30 30 </span></Typography>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Typography className={classes.myFontTitle}>В соц. сетях</Typography>
                    <Typography className={classes.mySocial}>
                        <a href="https://www.instagram.com/centercreditkz/" target="_blank"><img src="insta.svg" /></a>
                        <a href="https://vk.com/centercredit" target="_blank"><img src="facebook.svg" /></a>
                        <a href="https://www.facebook.com/bcc.kz?fref=ts" target="_blank"><img src="vk.svg" /></a>
                    </Typography>
                </Grid>

                <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                    <Typography className={classes.myFont}>© 2000 - 2019 АО "Банк ЦентрКредит" <br />Все права защищены.</Typography>
                    <Typography className={classes.myFont}>{t('footer.copyright_3_main')}</Typography>
                </Grid>

            </Grid>
        </Grid>
    )
}

export default Footer;