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
      }
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
        <Typography className={classes.title}>Условия и обслуживание по карте</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Box width={0.7} className={classes.boxTable}>
          <Table>
            <TableBody>

              <TableRow>
                <TableCell className={classes.th}>Кредитный лимит</TableCell>
                <TableCell className={classes.td}>до 3 000 000 ₸</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Льготный период</TableCell>
                <TableCell className={classes.td}>до 55 дней</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Процентная ставка<br />
                  (без рассрочки)</TableCell>
                <TableCell className={classes.td}><span><span className={classes.big}>0%</span> в льготный период</span><br />
                  <small>22,99% - для участников зарплатного проекта (ГЭСВ до 26%)<br />
                    24,99% - для других клиентов (ГЭСВ до 29%)</small></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Процентная ставка<br />
                  (в рассрочку)</TableCell>
                <TableCell className={classes.td}>0%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Кешбэк</TableCell>
                <TableCell className={classes.td}>до 30%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Выпуск и обслуживание карты</TableCell>
                <TableCell className={classes.td}>бесплатно</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className={classes.th}>Покупки в рассрочку</TableCell>
                <TableCell className={classes.td}>бесплатно - у партнеров Банка<br />
                  1% в мес. - вне сети партнеров Банка</TableCell>
              </TableRow>
              <TableRow className={classes.tr}>
                <TableCell className={classes.th}>Снятие наличных</TableCell>
                <TableCell className={classes.td}>бесплатно - личные средства до 300 000 Т  в мес. в<br /> любом банкомате РК</TableCell>
              </TableRow>

            </TableBody>
          </Table>
          <Typography className={classes.filesType}>
            <a href="Cashback_program_ru.pdf" className={classes.a}>
              <img src="pdf.svg" alt="pdf" />
              &nbsp; Тарифы
            </a>
          </Typography>

          <Typography className={classes.bottomTitle}>Документы</Typography>
          <Typography className={classes.filesType}>
            <a href="Cashback_program_ru.pdf" className={classes.a}>
              <img src="pdf.svg" alt="pdf" />
              &nbsp; {t('block_8.title_13_tab_4')}
            </a>
          </Typography>
        </Box>

      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
