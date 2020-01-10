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
import Tab from "./Tab";
import { rootSmXl, paddingDownSm } from "../helper/DefaultStyle";
import ExpansionPanel from "./ExpansionPanel";
import ReactGA from "react-ga";

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
        textDecoration: "none"
      }
    }
  })
);

const Tarifs = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Выпуск и обслуживание карты", value: "бесплатно" },
    { code: "Перевыпуск карты", value: "бесплатно" },
    { code: "СМС-уведомления", value: "бесплатно" },
    { code: "Пополнение", value: "бесплатно" },
    { code: "Покупки без рассрочки", value: "бесплатно" },
    {
      code: "Покупки в рассрочку",
      value: (
        <Typography className={classes.td}>
          бесплатно - у партнеров Банка <br /> 1% в мес. - вне сети партнеров
          Банка
        </Typography>
      )
    },
    {
      code: "Снятие наличных",
      value:
        "бесплатно - личные средства до 300 000 Т в мес. в любом банкомате РК"
    }
  ];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
          <TableRow key={15}>
            <TableCell colSpan={2} className={classes.td}>
              {
                <div>
                  <Typography>
                    <a href="tarifs_kz.pdf" className={classes.a}>
                      <img src="pdf.svg" alt="pdf" />
                      &nbsp; Тарифы на казахском
                    </a>
                  </Typography>
                  <Typography>
                    <a href="tarifs_ru.pdf" className={classes.a}>
                      <img src="pdf.svg" alt="pdf" />
                      &nbsp; Тарифы на русском
                    </a>
                  </Typography>
                </div>
              }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

const Conditions = () => {
  const classes = useStylesTarifs({});

  const rows = [
    { code: "Кредитный лимит", value: "до 3 000 000 ₸" },
    { code: "Льготный период", value: "до 55 дней" },
    {
      code: "Процентная ставка (без рассрочки)",
      value: (
        <Typography className={classes.td}>
          <b>0% в льготный период</b>
          <br />
          22,99% - для участников зарплатного проекта (ГЭСВ до 26%)
          <br />
          24,99% - для других клиентов (ГЭСВ до 29%)
        </Typography>
      )
    },
    { code: "Процентная ставка (в рассрочку)", value: "0%" },
    { code: "Кешбэк", value: "до 30%" }
  ];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell className={classes.th}>{m.code}</TableCell>
              <TableCell className={classes.td}>{m.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const Documents = () => {
  const classes = useStylesTarifs({});

  const rows = ["Кешбэк программа.pdf", "Программа рассрочки.pdf"];

  return (
    <Box width={0.7}>
      <Table>
        <TableBody>
          {rows.map((m, i) => (
            <TableRow key={i}>
              <TableCell colSpan={2} className={classes.td}>
                {
                  <Typography>
                    <img src="pdf.svg" alt="pdf" />
                    &nbsp; {m}
                  </Typography>
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      ...rootSmXl,
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      }
    }
  })
);

const AdditionalInfo = () => {
  const classes = useStyles({});

  const swipeTab = (index: number) => {
    let actionName = "Additional_Conditions";

    if (index === 1) {
      actionName = "Additional_Rates";
    } else if (index === 2) {
      actionName = "Additionally_FAQ";
    } else if (index === 3) {
      actionName = "Additionally_Documents";
    }

    ReactGA.event({
      category: `BccCard_${actionName}`,
      action: actionName
    });
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Дополнительно</Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Tab
          onHandleChanged={(i: number) => swipeTab(i)}
          menuTitle={[
            "Условия",
            "Тарифы",
            "Часто задаваемые вопросы",
            "Документы"
          ]}
          pans={[<Conditions />, <Tarifs />, <ExpansionPanel />, <Documents />]}
        />
      </Grid>
    </Grid>
  );
};

export default AdditionalInfo;
