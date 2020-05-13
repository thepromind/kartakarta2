import React from "react";
import {
  Grid,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Box
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { rootSmXl, paddingDownSm } from "../helper/DefaultStyle";
import ExpansionPanel from "./ExpansionPanel";
import ReactGA from "react-ga";
import { useTranslation } from 'react-i18next';

const useStylesTarifs = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        color: "black"
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0",
        whiteSpace: "nowrap"
      },

      tarifsTable: {
        marginTop: 64,
        display: 'table',
        '& > span': {
          '& > span': {
            borderBottom: '1px solid #F3F3F3'
          }
        },
        '& span:first-child': {
          '& span': {
            fontWeight: 'bold',
          },
          '& span:nth-child(2)': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }
        },
        '& span:last-child': {
          '& span': {
            borderBottom: '0px solid #F3F3F3',
          },
          '& span:nth-child(2)': {
            borderBottom: '0px solid #F3F3F3',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16
          },
        }
      },
      trTable: {
        display: 'flex',
        '& span:nth-child(1)': {
          textAlign: 'left',
          fontWeight: 'bold'
        },
        '& span': {
          display: 'none'
        },
        '& span:nth-child(2)': {
          color: '#444444',
          backgroundColor: '#CBF1FF',
          display: 'block',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.15)',
        }
      },
      tdTable: {
        width: '100%',
        textAlign: 'center',
        padding: '32px 0',
        color: '#444444'
      },
    },
    [theme.breakpoints.between("sm", "xl")]: {
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#898989"
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black"
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0"
      }
    }
  })
);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 32,
        color: "#141414",
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 64,
      },
      boxTable: {
        margin: 'auto',
        width: '100%'
      },

      tarifsTable: {
        marginTop: 64,
        display: 'table',
        '& > span': {
          '& > span': {
            borderBottom: '1px solid #F3F3F3'
          }
        },
        '& span:first-child': {
          '& span': {
            fontWeight: 'bold',
          },
          '& span:nth-child(2)': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }
        },
        '& span:last-child': {
          '& span': {
            borderBottom: '0px solid #F3F3F3',
          },
          '& span:nth-child(2)': {
            borderBottom: '0px solid #F3F3F3',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16
          },
        }
      },
      trTable: {
        display: 'flex',
        '& span:nth-child(1)': {
          textAlign: 'left',
          fontWeight: 'bold'
        },
        '& span': {
          display: 'none'
        },
        '& span:nth-child(2)': {
          color: '#444444',
          backgroundColor: '#5e65f44f',
          display: 'block'
        }
      },
      tdTable: {
        width: '100%',
        textAlign: 'center',
        padding: '32px 10px',
        color: '#444444'
      },
      big: {
        fontSize: 20,
        color: '#141414',
        fontStyle: "normal",
        fontWeight: "500"
      },
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#141414",
        width: '40%'
      },
      tr: {
        '& > th': {
          borderBottom: '1px solid transparent'
        },
        '& > td': {
          borderBottom: '1px solid transparent'
        }
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#141414",
        width: '60%',
        '& > small': {
          fontSize: 12,
          color: '#B9B9B9'
        }
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0"
      },
      bottomTitle: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 28,
        color: "#141414",
        textAlign: 'center',
        marginBottom: 16,
        marginTop: 32,
      },
      filesType: {
        display: 'grid',
        background: '#FAFAFA',
        borderRadius: 8,
        width: '100%',
        marginTop: 10,
        '& > a': {
          padding: '14px 5px',
          width: '100%',
          textAlign: 'center',
          display: 'block'
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 56,
        color: "#141414",
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 128,
      },
      boxTable: {
        margin: 'auto'
      },

      tarifsTable: {
        marginBottom: 32,
        display: 'table',
        '& > span': {
          '& > span': {
            borderBottom: '1px solid #F3F3F3',
          }
        },
        '& span:first-child': {
          '& span': {
            fontWeight: 'bold',
          },
          '& span:nth-child(2)': {
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16
          }
        },
        '& span:last-child': {
          '& span': {
            borderBottom: '0px solid #F3F3F3',
          },
          '& span:nth-child(2)': {
            borderBottom: '0px solid #F3F3F3',
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16
          },
        }
      },
      trTable: {
        display: 'flex',
        '& span:nth-child(2)': {
          color: '#444444',
          backgroundColor: '#5e65f44f',
        },
        '& span:nth-child(1)': {
          textAlign: 'left',
          fontWeight: 'bold',
          justifyContent: 'flex-start',
        },
      },
      tdTable: {
        width: '24%',
        textAlign: 'center',
        padding: '18px 8px',
        color: '#444444',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& b': {

        }
      },
      big: {
        fontSize: 20,
        color: '#141414',
        fontStyle: "normal",
        fontWeight: "500"
      },
      th: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#141414",
        width: '40%'
      },
      tr: {
        '& > th': {
          borderBottom: '1px solid transparent'
        },
        '& > td': {
          borderBottom: '1px solid transparent'
        }
      },
      td: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "#141414",
        width: '60%',
        '& > small': {
          fontSize: 12,
          color: '#B9B9B9'
        }
      },
      a: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        margin: "4px 0"
      },
      bottomTitle: {
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: 36,
        color: "#141414",
        textAlign: 'center',
        marginBottom: 32,
        marginTop: 64,
      },
      filesType: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#FAFAFA',
        borderRadius: 8,
        marginTop: 10,
        '& > a': {
          padding: '14px 5px',
          width: '100%',
          textAlign: 'center',
          display: 'block'
        }
      }
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});
  const { t } = useTranslation();



  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Условия и тарифы</Typography>
      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.tarifsTableMain}>
        <Grid container className={classes.tarifsTable}>
          <span className={classes.trTable}>
            <span className={classes.tdTable}></span>
            <span className={classes.tdTable}>Банк Центр Кредит</span>
            <span className={classes.tdTable}>Банк - 2</span>
            <span className={classes.tdTable}>Банк - 3</span>
          </span>
          <span className={classes.trTable}>
            <span className={classes.tdTable}>Кредитный лимит</span>
            <span className={classes.tdTable}>до 3 000 000 ₸</span>
            <span className={classes.tdTable}>до 150 000</span>
            <span className={classes.tdTable}>до 3 000 000</span>
          </span>
          <span className={classes.trTable}>
            <span className={classes.tdTable}>Льготный период</span>
            <span className={classes.tdTable}>до 55 дней</span>
            <span className={classes.tdTable}>не предусмотрено</span>
            <span className={classes.tdTable}>до 55 дней</span>
          </span>
          <span className={classes.trTable}>
            <span className={classes.tdTable}>Процентная ставка <br />(без рассрочки)</span>
            <span className={classes.tdTable}><p>0% в льготный период
              <br />22,99% - для участников зарплатного проекта (ГЭСВ до 26%)
            <br />24,99% - для других клиентов (ГЭСВ до 29%) </p></span>

            <span className={classes.tdTable}>не предусмотрено</span>
            <span className={classes.tdTable}>0% в льготный период<br />26% (ГЭСВ от 27.8%)</span>
          </span>
          <span className={classes.trTable}>
            <span className={classes.tdTable}>Процентная ставка<br />(в рассрочку)</span>
            <span className={classes.tdTable}>0%</span>
            <span className={classes.tdTable}>0%</span>
            <span className={classes.tdTable}>0%</span>
          </span>
          <span className={classes.trTable}>
            <span className={classes.tdTable}>Кэшбэк</span>
            <span className={classes.tdTable}>до 30%</span>
            <span className={classes.tdTable}>до 1% на покупки, 5% и <br />более - по акциям</span>
            <span className={classes.tdTable}>1,3% (не во всех странах)</span>
          </span>

          <span className={classes.trTable}>
            <span className={classes.tdTable}>Выпуск и <br />обслуживание карты</span>
            <span className={classes.tdTable}>Бесплатно</span>
            <span className={classes.tdTable}>со 2-ого года
            <br />5 995 - 13 995 Т в год
            <br />(участие в клубе)</span>
            <span className={classes.tdTable}>со 2-ого года<br />210 Т в месяц</span>
          </span>

          <span className={classes.trTable}>
            <span className={classes.tdTable}>Покупки в рассрочку</span>
            <span className={classes.tdTable}>бесплатно - у партнеров Банка<br /> на 3, 6, 12 мес 1% в мес - <br />вне сети партнеров Банка</span>
            <span className={classes.tdTable}>бесплатно у партнеров банка на 3 мес,<br />вне сети партнеров - не предусмотрено</span>
            <span className={classes.tdTable}>бесплатно на 3 мес <br />до 50 000 Т, 7,5%-30% <br />до 24 мес свыше 50 000 Т</span>
          </span>

          <span className={classes.trTable}>
            <span className={classes.tdTable}>Снятие личных денег<br />в банкоматах РК</span>
            <span className={classes.tdTable}>бесплатно - до 300 000 Т в мес. <br />в любом банкомате РК</span>
            <span className={classes.tdTable}>не предусмотрено</span>
            <span className={classes.tdTable}>2.5% (своя сеть), <br />2.7% (мин. 1 000 Т) (другие банки)</span>
          </span>
        </Grid>


      </Grid>

      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box width={0.7} className={classes.boxTable}>


          <Typography className={classes.filesType}>
            <a href={t('block_8.tarifs')} className={classes.a}>
              <img src="pdf.svg" alt="pdf" />
              &nbsp; Тарифы
            </a>
          </Typography>

          <Typography className={classes.bottomTitle}>Документы</Typography>
          <Typography className={classes.filesType}>
            <a href={t('block_8.cashbacks')} className={classes.a}>
              <img src="pdf.svg" alt="pdf" />
              &nbsp; {t('block_8.title_13_tab_4')}
            </a>
          </Typography>
        </Box>

      </Grid>
    </Grid >
  );
};

export default AdditionalInfo;
