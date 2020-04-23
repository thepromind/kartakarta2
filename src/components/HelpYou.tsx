import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, withStyles, createStyles, Theme } from "@material-ui/core/styles";
import { paddingDownSm } from "./helper/DefaultStyle";
import { useTranslation } from 'react-i18next';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const ExpansionPanel = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    borderTop: '1px solid rgba(0, 0, 0, .125)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
      borderBottom: '1px solid rgba(0, 0, 0, 0)',
      transition: '.3s',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& p': {
      fontWeight: 'bold'
    },
    '& span': {
      position: 'relative',
      display: 'block',
      width: 18,
      transition: '.3s',
      '&:before': {
        content: "''",
        position: 'absolute',
        borderRight: '2px solid',
        borderRadius: 5,
        height: 18,
        left: 8,
        top: -8,
        transition: '.3s',
        transform: 'rotate(0deg)'
      },
      '&:after': {
        content: "''",
        borderBottom: '2px solid;',
        width: 18,
        position: 'absolute',
        borderRadius: 5,
        top: 0
      }
    },
    '&$expanded': {
      margin: '12px 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& span': {
        position: 'relative',
        display: 'block',
        width: 18,
        transition: '.3s',
        '&:before': {
          content: "''",
          position: 'absolute',
          borderRight: '2px solid',
          borderRadius: 5,
          height: 18,
          left: 8,
          top: -8,
          transition: '.3s',
          transform: 'rotate(90deg)'
        },
        '&:after': {
          content: "''",
          borderBottom: '2px solid;',
          width: 18,
          position: 'absolute',
          borderRadius: 5,
          top: 0
        }
      }
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    flexWrap: 'wrap',
  },
}))(MuiExpansionPanelDetails);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        padding: paddingDownSm,
        backgroundColor: "#FAFAFA"
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
      graphNew: {
        width: '100%',
        marginTop: 16
      },
      imgStick: {
        marginRight: 16,
        marginTop: 16,
        width: 70
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 20,
        color: "#141414"
      },
      paper: {
        backgroundColor: "white",
        borderRadius: 8,
      },
      graphPanel: {
        width: '100%',
        marginTop: 16
      },
      tabs: {
        width: '100%',
        border: "1px solid #E8E8E8",
        borderRadius: 4,
        background: '#FBFBFB',
        borderRight: `1px solid ${theme.palette.divider}`,
        '& span': {
          alignItems: 'flex-start',
        },
        '& .MuiTabs-flexContainer': {
          flexWrap: 'nowrap'
        },
        '& button': {
          padding: 24,
          maxWidth: 'unset',
          minWidth: 'unset'
        },
        '& .MuiTabs-indicator': {
          background: 'transparent',
          zIndex: 0
        },
        '& .Mui-selected': {
          padding: 24,
          background: 'black',
          borderRadius: 4,
          color: 'white',
          zIndex: 1
        }
      },
      tabsInner: {
        marginTop: 12,
        width: '100%',
        '& > div > div': {
          padding: 0
        }
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      mainRoot: {

      },
      graphPanel: {
        width: '100%',
        marginTop: 16
      },
      graphNew: {
        width: '100%',
        marginTop: 16
      },
      imgStick: {
        marginTop: 16,
        marginRight: 16
      },
      root: {
        padding: "72px 52px 72px 52px",
        maxWidth: 1280,
        margin: "auto"
      },
      title: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 56,
        color: "#141414",
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 128,
      },
      helpYou: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 40,
        color: "#141414"
      },
      paper: {
        backgroundColor: "white",
        borderRadius: 8,
        display: "flex",
        alignItems: "flex-start"
      },
      tabs: {
        width: '25%',
        border: "1px solid #E8E8E8",
        borderRadius: 4,
        background: '#FBFBFB',
        borderRight: `1px solid ${theme.palette.divider}`,
        '& span': {
          alignItems: 'flex-start',
        },
        '& button': {
          padding: 24,
          width: '100%',
          maxWidth: 'unset',
          minWidth: 'unset'
        },
        '& .MuiTabs-indicator': {
          background: '#141414',
          width: '100%',
          zIndex: 0
        },
        '& .Mui-selected': {
          padding: 24,
          width: '100%',
          borderRadius: 4,
          color: 'white',
          zIndex: 1
        }
      },
      tabsInner: {
        marginLeft: 24,
        width: '75%',
        '& > div > div': {
          padding: 0
        }
      }

    }
  })
);


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}
function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const HelpYou = () => {
  const classes = useStyles({});
  const { t } = useTranslation();
  const [value, setValue] = React.useState(0);
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChangePanel = (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };


  return (
    <Grid container className={classes.mainRoot}>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.title}>Часто задаваемые вопросы</Typography>
      </Grid>
      <Grid container className={classes.root} >

        <Grid xl={12} lg={12} md={12} sm={12} xs={12} className={classes.paper}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
          >
            <Tab label="О #картакарта" {...a11yProps(0)} />
            <Tab label="Кэшбэк" {...a11yProps(1)} />
            <Tab label="Как не платить проценты" {...a11yProps(2)} />
            <Tab label="Кредитный лимит" {...a11yProps(3)} />
            <Tab label="Рассрочка" {...a11yProps(4)} />
          </Tabs>
          <Grid className={classes.tabsInner}>
            <TabPanel value={value} index={0}>

              <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChangePanel('panel1')}>
                <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography>Что такое #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    #картакарта - по нашему мнению, лучшая кредитная карта в Казахстане.<br />
                    Картой можно:<br />
                    - оплачивать покупки и не платить проценты в льготный период<br />
                    - покупать в рассрочку без переплат<br />
                    - зарабатывать супер кэшбэки<br />
                    При этом Вы сами управляете режимом рассрочки и кэшбэком онлайн в приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChangePanel('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Как заработать с #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Выбирайте любимые категории в приложении StarBanking и зарабатывайте кэшбэки до 10% за покупки по всему миру!<br />
                  Каждый месяц - новые категории!<br />

                  кэшбэки при покупках у партнеров до 30%!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChangePanel('panel3')}>
                <ExpansionPanelSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography>Как пополнять карту?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Пополняйте карту бесплатно:<br />
                  - переводом с другой карты/счета, открытых в Банке, через StarBanking<br />
                  - переводом с карт других банков через StarBanking или приложения этих банков<br />
                  - наличными в банкоматах (с функцией приема наличных) и кассах Банка<br />
                  - в информационно-платежных терминалах Банка
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>


            </TabPanel>


            <TabPanel value={value} index={1}>

              <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChangePanel('panel5')}>
                <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
                  <Typography>Что такое кэшбэк?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Кэшбэк — это возврат части денег при покупке.<br />
                    Совершайте покупки по карте, накапливайте кэшбэк, переводите кэшбэк на карту реальными деньгами
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChangePanel('panel6')}>
                <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
                  <Typography>Как заработать с #картакарта на кэшбэке?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Заработать на кэшбэках очень легко, ведь у нас самые крутые кэшбэки!<br />

                  Расплачивайтесь только нашей картой, и Вы получите больше кэшбэка:<br />
                  1% за покупку<br />
                  +1% за покупку, если хотите больше кэшбэка, откройте вклад Рахмет/Рахмет+ с остатком от 1 млн Т<br />
                  до 10% в любимых категориях<br />
                  до 30% за покупки у партнеров Банка
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChangePanel('panel7')}>
                <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
                  <Typography>Где посмотреть список партнеров Банка, предоставляющих кэшбэк?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Со списком партнеров можно ознакомиться на странице с <a href="https://www.bcc.kz/partners/">партнерами</a>. Совсем скоро партнеры появятся и в приложении StarBanking!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChangePanel('panel8')}>
                <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
                  <Typography>Как я узнаю, что данный магазин является партнером?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Наших партнеров Вы сможете определить по наклейке с указанием #картакарта и словом "кэшбэк"
          </Typography>
                  <img src="nakleika-cashback.svg" />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel60'} onChange={handleChangePanel('panel60')}>
                <ExpansionPanelSummary aria-controls="panel60d-content" id="panel60-header">
                  <Typography>Как выбирать любимые категории с повышенным кэшбэком?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В начале каждого месяца мы будем Вам предлагать новый набор категорий покупок с кэшбэком до 10%. Выбор любимых категорий Вы сможете делать в мобильном приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel61'} onChange={handleChangePanel('panel61')}>
                <ExpansionPanelSummary aria-controls="panel61d-content" id="panel61-header">
                  <Typography>Я получу кэшбэк за покупки за границей?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Да, расплачивайтесь картой везде!<br />
Мы выплачиваем кэшбэки за покупки в Казахстане и за рубежом
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel62'} onChange={handleChangePanel('panel62')}>
                <ExpansionPanelSummary aria-controls="panel62d-content" id="panel62-header">
                  <Typography>Какой минимальный кэшбэк в месяц?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Мин сумма кэшбэка - 500 тенге в месяц.<br />
Совершайте покупки, накапливайте мин сумму в течение месяца и зарабатывайте кэшбэк. С нашим кэшбэком выполнить это условие очень легко!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel63'} onChange={handleChangePanel('panel63')}>
                <ExpansionPanelSummary aria-controls="panel63d-content" id="panel63-header">
                  <Typography>Какой максимальный кэшбэк в месяц?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Максимальная сумма кэшбэка в месяц от Банка установлена в 20 000 тенге
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel64'} onChange={handleChangePanel('panel64')}>
                <ExpansionPanelSummary aria-controls="panel64d-content" id="panel64-header">
                  <Typography>Куда зачисляется кэшбэк?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Кэшбэк зачисляется автоматически на Ваш кэшбэк счет. Все зачисления на кэшбэк счет Вы можете контролировать в приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel65'} onChange={handleChangePanel('panel65')}>
                <ExpansionPanelSummary aria-controls="panel65d-content" id="panel65-header">
                  <Typography>Когда зачисляется мой кэшбэк?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Кэшбэк на Ваш кэшбэк счет зачисляется при списании суммы покупки с Вашей #картакарта. Обычно в течение 1-3 дней
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel66'} onChange={handleChangePanel('panel66')}>
                <ExpansionPanelSummary aria-controls="panel66d-content" id="panel66-header">
                  <Typography>Как я могу переводить накопленный кэшбэк на карту?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Накопленный кэшбэк можно переводить на #картакарта в любое время в приложении StarBanking. При остатке на кэшбэк счете от 2 000 Т кнопка "Перевести" становится доступной
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel67'} onChange={handleChangePanel('panel67')}>
                <ExpansionPanelSummary aria-controls="panel67d-content" id="panel67-header">
                  <Typography>В какие сроки я могу перевести кэшбэк на карту?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Срок действия кэшбэка - 1 год с момента его зачисления на кэшбэк счет. Накапливайте кэшбэк и переводите реальными деньгами на #картакарта
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel68'} onChange={handleChangePanel('panel68')}>
                <ExpansionPanelSummary aria-controls="panel68d-content" id="panel68-header">
                  <Typography>Будут ли по #картакарта новые акции и предложения?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Да, конечно, мы будем радовать Вас новыми кэшбэками и супер акциями!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </TabPanel>
            <TabPanel value={value} index={2}>


              <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChangePanel('panel9')}>
                <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
                  <Typography>Как пользоваться кредитным лимитом бесплатно?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Пользоваться кредитным лимитом бесплатно проще простого:<br />
                    1. Вы совершаете покупки картой в течение месяца (для примера, в марте).<br />
                    2. 1-ого числа следующего месяца мы рассчитываем по Вашей карте сумму ""Льготного платежа"" (в нашем примере, 1 апреля)<br />
                    3. Вы возвращаете сумму ""Льготного платежа"" на карту до 25-ого числа (в нашем примере, до 25 апреля).<br />
                    Мы не начисляем проценты за покупки, сделанные в марте.<br />
                    Внимание! Для получения льготных условий всегда вносите оплату своевременно без опозданий
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChangePanel('panel10')}>
                <ExpansionPanelSummary aria-controls="panel10d-content" id="panel10d-header">
                  <Typography>Что такое льготный период?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Льготный период - это срок, в течение которого Вы пользуетесь кредитным лимитом и не платите проценты.<br />

                    Он действует с момента использования лимита и до 25-ого числа следующего месяца (даты платежа), при условии погашения суммы Льготного платежа до данной даты.<br />

                    Например, в марте Вы купили товар без рассрочки на 20 000 Т, а в рассрочку на 30 000 Т у нашего партнера (сроком на 3 мес). Если до 25 апреля Вы внесете на #картакарта 30 000 Т (долг без рассрочки 20 000 Т + ежемесячный платеж по рассрочке 10 000 Т), то проценты не начислятся.
          </Typography>

                  <img src="credit_card_graph.svg" className={classes.graphPanel} />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel11'} onChange={handleChangePanel('panel11')}>
                <ExpansionPanelSummary aria-controls="panel11d-content" id="panel11d-header">
                  <Typography>Что такое льготный платеж?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Льготный платеж - сумма, при оплате которой использование кредитного лимита за прошедший месяц будет бесплатным.<br />

Рассчитывается = 100% долга без рассрочки + плановый платеж по рассрочкам.
          </Typography>
                  <img src="credit_card_graph.svg" className={classes.graphPanel} />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel12'} onChange={handleChangePanel('panel12')}>
                <ExpansionPanelSummary aria-controls="panel12d-content" id="panel12d-header">
                  <Typography>Сколько длится льготный период?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    до 55 дней
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>




            </TabPanel>


            <TabPanel value={value} index={3}>


              <ExpansionPanel square expanded={expanded === 'panel15'} onChange={handleChangePanel('panel15')}>
                <ExpansionPanelSummary aria-controls="panel15d-content" id="panel15d-header">
                  <Typography>Что если я получу карту с нулевым кредитным лимитом, что мне с ней делать, и дадут ли мне лимит в будущем?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Если Вы получили карту с нулевым кредитным лимитом, не расстраивайтесь.<br />
Расплачивайтесь за покупки личными деньгами и получайте кэшбэк до 30%!<br />
При активном использовании карты мы увидим Вашу платежную историю и сможем пересмотреть размер лимита.
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel16'} onChange={handleChangePanel('panel16')}>
                <ExpansionPanelSummary aria-controls="panel16d-content" id="panel16d-header">
                  <Typography>Зачем мне нужен кредитный лимит по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Кредитный лимит - это лимит средств, который Банк может предоставить Вам в долг.<br />
Очень удобно, если вдруг личных денег на покупку не хватает. Из нашего личного опыта, ведь мы тоже пользуемся #картакарта :)
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel17'} onChange={handleChangePanel('panel17')}>
                <ExpansionPanelSummary aria-controls="panel17d-content" id="panel17d-header">
                  <Typography>Как я узнаю,что мне установили кредитный лимит?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Вы получите СМС от Банка
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel18'} onChange={handleChangePanel('panel18')}>
                <ExpansionPanelSummary aria-controls="panel18d-content" id="panel18d-header">
                  <Typography>Как будут тратиться деньги, если у меня есть и личные деньги, и кредитный лимит на карте?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Сначала используются Ваши личные деньги, затем кредитный лимит
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel19'} onChange={handleChangePanel('panel19')}>
                <ExpansionPanelSummary aria-controls="panel19d-content" id="panel19d-header">
                  <Typography>Я могу погашать задолженность по карте досрочно?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Да. В любое время без штрафов и посещения Банка для формирования графиков
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel20'} onChange={handleChangePanel('panel20')}>
                <ExpansionPanelSummary aria-controls="panel20d-content" id="panel20d-header">
                  <Typography>Что такое минимальный платеж?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Минимальный платеж - это сумма, которая состоит из 5% долга без рассрочки + плановый платеж по рассрочке.<br />
Вы оплачиваете его до 25-ого числа месяца, чтобы не выйти на просрочку
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel21'} onChange={handleChangePanel('panel21')}>
                <ExpansionPanelSummary aria-controls="panel21d-content" id="panel21d-header">
                  <Typography>Как я могу узнать сумму минимального платежа по карте?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    1-ого числа каждого месяца Вы получаете СМС с суммой минимального платежа и сроком оплаты.<br />
                    Вы также можете посмотреть ее в StarBanking, выбрав карта из списка доступных счетов.
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel22'} onChange={handleChangePanel('panel22')}>
                <ExpansionPanelSummary aria-controls="panel22d-content" id="panel22d-header">
                  <Typography>Когда я должен погашать сумму минимального платежа?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Сумма минимального платежа выставляется к оплате 1-ого числа каждого месяца. Срок оплаты - до 25-ого числа.<br />
Например, Вы использовали кредитный лимит в марте. 1 апреля Банк выставляет сумму минимального платежа. Срок оплаты - до 25 апреля
          </Typography>
                  <img src="graphNew.svg" className={classes.graphNew} />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel23'} onChange={handleChangePanel('panel23')}>
                <ExpansionPanelSummary aria-controls="panel23d-content" id="panel23d-header">
                  <Typography>Если я не оплачу сумму минимального платежа вовремя?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Если Вы забыли внести сумму минимального платежа вовремя, и мы не смогли автоматически погасить сумму с других Ваших счетов в Банке, Вы получите СМС о необходимости срочно внести платеж.<br />
Чтобы не допустить просрочку, влияющую на Вашу кредитную историю, и избежать начисления неустойки, рекомендуем оплачивать вовремя
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel24'} onChange={handleChangePanel('panel24')}>
                <ExpansionPanelSummary aria-controls="panel24d-content" id="panel24d-header">
                  <Typography>Можно ли увеличить кредитный лимит?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Сейчас мы работаем над этим
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel25'} onChange={handleChangePanel('panel25')}>
                <ExpansionPanelSummary aria-controls="panel25d-content" id="panel25d-header">
                  <Typography>Я нерезидент, я могу получить кредитный лимит по карте?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    На данный момент кредитный лимит устанавливается только резидентам РК, но Вы можете пользоваться картой за счет личных денег и получать кэшбэк до 30%
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>



            </TabPanel>

            <TabPanel value={value} index={4}>


              <ExpansionPanel square expanded={expanded === 'panel80'} onChange={handleChangePanel('panel80')}>
                <ExpansionPanelSummary aria-controls="panel80d-content" id="panel80d-header">
                  <Typography>Что такое рассрочка по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В рассрочку покупать выгодно, особенно у партнеров Банка - без процентов и комиссий!<br />
Например, в марте Вы совершили покупку в рассрочку на 30 000 Т на срок 3 месяца. Сумма делится на 3 части. Каждый месяц (апрель, май, июнь) Вы возвращаете по 10 000 Т и не платите проценты.<br />
Плановый (ежемесячный) платеж по рассрочке 10 000 Т автоматически включается в сумму минимального платежа, выставляемого Банком для оплаты 1-ого числа каждого месяца
          </Typography>

                  <img src="graphNew.svg" className={classes.graphNew} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel81'} onChange={handleChangePanel('panel81')}>
                <ExpansionPanelSummary aria-controls="panel81d-content" id="panel81d-header">
                  <Typography>Как включить режим рассрочки по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Вы сможете управлять режимом рассрочки онлайн в мобильном приложении StarBanking.<br />
Включите режим рассрочки, проведите покупку и выключите режим, если пока не планируете покупать в рассрочку
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel82'} onChange={handleChangePanel('panel82')}>
                <ExpansionPanelSummary aria-controls="panel82d-content" id="panel82d-header">
                  <Typography>Какие сроки рассрочки предусмотрены по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В сети партнеров Банка - 3, 6 или 12 месяцев в зависимости от нашей договоренности с партнером.<br />
Вне сети партнеров Банка - 3 месяца
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel83'} onChange={handleChangePanel('panel83')}>
                <ExpansionPanelSummary aria-controls="panel83d-content" id="panel83d-header">
                  <Typography>Где я могу посмотреть список партнеров Банка?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Со списком партнеров можно ознакомиться в приложении StarBanking, а также на странице <a href="https://www.bcc.kz/partners/"> с партнерами</a>
                  </Typography>


                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel84'} onChange={handleChangePanel('panel84')}>
                <ExpansionPanelSummary aria-controls="panel84d-content" id="panel84d-header">
                  <Typography>Как я узнаю, что данный магазин является партнером?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Наших партнеров Вы сможете определить по наклейке с указанием #картакарта и сроком рассрочки
          </Typography>

                  <img src="nakleika-3.svg" className={classes.imgStick} />

                  <img src="nakleika-6.svg" className={classes.imgStick} />

                  <img src="nakleika-12.svg" className={classes.imgStick} />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel85'} onChange={handleChangePanel('panel85')}>
                <ExpansionPanelSummary aria-controls="panel85d-content" id="panel85d-header">
                  <Typography>Есть ли комиссия за рассрочку?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Покупки у партнеров Банка без процентов и комиссий.<br />
Покупки вне сети партнеров Банка с комиссией 1% от суммы покупки за счет кредитного лимита.<br />
 Комиссия начисляется каждый месяц в течение периода рассрочки
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel86'} onChange={handleChangePanel('panel86')}>
                <ExpansionPanelSummary aria-controls="panel86d-content" id="panel86d-header">
                  <Typography>Я могу покупать в рассрочку за счет личных денег?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Покупки в рассрочку возможны только за счет кредитного лимита
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel87'} onChange={handleChangePanel('panel87')}>
                <ExpansionPanelSummary aria-controls="panel87d-content" id="panel87d-header">
                  <Typography>Какая минимальная сумма покупки в рассрочку?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Минимальная сумма покупки в рассрочку - 5 000 Т (за счет кредитного лимита)
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </TabPanel>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

export default HelpYou;
