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
        width: '100%'
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
            <Tab label="Кешбэк" {...a11yProps(1)} />
            <Tab label="Кредитный лимит" {...a11yProps(2)} />
            <Tab label="Рассрочка" {...a11yProps(3)} />
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
                    #картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChangePanel('panel2')}>
                <ExpansionPanelSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography>Могу ли я расплачиваться картой за границей?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Картой можно пользоваться по всему миру!
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
                    Пополняйте карту с другой карты или счета, банковским переводом из другого банка, наличными через банкоматы с функцией приема наличных, терминалы или кассу Банка. Пополнение карты - бесплатно!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChangePanel('panel4')}>
                <ExpansionPanelSummary aria-controls="panel4d-content" id="panel4d-header">
                  <Typography>Я нерезидент, я могу получить кредитный лимит по карте?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    На данный момент кредитный лимит устанавливается только резидентам РК, но Вы можете пользоваться картой за счет личных денег и получать кешбэк до 30%
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </TabPanel>


            <TabPanel value={value} index={1}>

              <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChangePanel('panel5')}>
                <ExpansionPanelSummary aria-controls="panel5d-content" id="panel5d-header">
                  <Typography>Что такое кешбэк?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Мы готовы платить Вам, чтобы Вы реже носили с собой кучу наличных и чаще расплачивались картой. Кешбэк за покупки по карте — это вознаграждение от Банка и наших партнеров за пользование картой в виде возврата определенной суммы за покупки. Совершайте покупки по #картакарта, накапливайте кешбэк, переводите кешбэк на #картакарта реальными деньгами
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChangePanel('panel6')}>
                <ExpansionPanelSummary aria-controls="panel6d-content" id="panel6d-header">
                  <Typography>Я получу приветственный бонус?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Да, за первую покупку по карте мы зачислим на Ваш кешбэк счет приветственный бонус - 10% от суммы покупки (макс 1 000 Т)
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChangePanel('panel7')}>
                <ExpansionPanelSummary aria-controls="panel7d-content" id="panel7d-header">
                  <Typography>Как заработать с #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Оплачивайте картой и зарабатывайте кешбэк до 30%!
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChangePanel('panel8')}>
                <ExpansionPanelSummary aria-controls="panel8d-content" id="panel8d-header">
                  <Typography>Как выбирать любимые категории с повышенным кешбэком?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В начале каждого месяца мы будем Вам предлагать новый набор категорий покупок с кешбэком до 10%. Выбор любимых категорий Вы сможете делать в мобильном приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

            </TabPanel>
            <TabPanel value={value} index={2}>


              <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChangePanel('panel9')}>
                <ExpansionPanelSummary aria-controls="panel9d-content" id="panel9d-header">
                  <Typography>Зачем мне нужен кредитный лимит по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Кредитный лимит - это Ваша личная заначка, когда личных денег на покупку оказалось недостаточно
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChangePanel('panel10')}>
                <ExpansionPanelSummary aria-controls="panel10d-content" id="panel10d-header">
                  <Typography>Как я узнаю,что мне установили кредитный лимит?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Вы получите СМС от Банка
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel11'} onChange={handleChangePanel('panel11')}>
                <ExpansionPanelSummary aria-controls="panel11d-content" id="panel11d-header">
                  <Typography>Как правильно пользоваться кредитным лимитом и не платить проценты</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    1 сентября вы совершаете покупку на сумму 5 000 тенге за счет кредитного лимита<br />
                    2.  Погасив 5 000 тенге до 25 октября, вы не платите никаких процентов за пользование кредитным лимитом
          </Typography>
                  <img src="credit_card_graph.svg" className={classes.graphPanel} />
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel12'} onChange={handleChangePanel('panel12')}>
                <ExpansionPanelSummary aria-controls="panel12d-content" id="panel12d-header">
                  <Typography>Как будут тратиться деньги, если у меня есть и личные деньги, и кредитный лимит на карте?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Сначала используются Ваши личные деньги, затем кредитный лимит
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel13'} onChange={handleChangePanel('panel13')}>
                <ExpansionPanelSummary aria-controls="panel13d-content" id="panel13d-header">
                  <Typography>Я могу погашать задолженность по карте досрочно?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Да. В любое время без штрафов и посещения Банка для формирования графиков
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel14'} onChange={handleChangePanel('panel14')}>
                <ExpansionPanelSummary aria-controls="panel14d-content" id="panel14d-header">
                  <Typography>Что если я получу карту с нулевым кредитным лимитом, что мне с ней делать, и дадут ли мне лимит в будущем?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    С #картакарта Вы зарабатываете деньги тогда, когда их тратите. Покупайте за счет личных денег, получайте кешбэк до 30%, и Банк пересмотрит размер лимита. Если Банком принято решение о нулевом кредитном лимите, у Вас есть возможность получить его позже.
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>


            </TabPanel>
            <TabPanel value={value} index={3}>


              <ExpansionPanel square expanded={expanded === 'panel15'} onChange={handleChangePanel('panel15')}>
                <ExpansionPanelSummary aria-controls="panel15d-content" id="panel15d-header">
                  <Typography>Что такое рассрочка по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В рассрочку покупать выгодно, особенно у партнеров Банка - без процентов и комиссий! Например, в январе Вы совершили покупку в рассрочку на 30 000 Т на срок 3 месяца. Сумма делится на 3 части. Каждый месяц (февраль, март, апрель) Вы возвращаете по 10 000 Т и не платите проценты. Плановый (ежемесячный) платеж по рассрочке 10 000 Т автоматически включается в сумму минимального платежа, выставляемого Банком для оплаты
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel square expanded={expanded === 'panel16'} onChange={handleChangePanel('panel16')}>
                <ExpansionPanelSummary aria-controls="panel16d-content" id="panel16d-header">
                  <Typography>Как включить режим рассрочки по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Вы сможете включать и отключать режими рассрочки онлайн в мобильном приложении StarBanking
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel17'} onChange={handleChangePanel('panel17')}>
                <ExpansionPanelSummary aria-controls="panel17d-content" id="panel17d-header">
                  <Typography>Какие сроки рассрочки предусмотрены по #картакарта?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    В сети партнеров Банка - 3, 6 или 12 месяцев в зависимости от нашей договоренности с партнером. Вне сети партнеров Банка - 3 месяца
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel18'} onChange={handleChangePanel('panel18')}>
                <ExpansionPanelSummary aria-controls="panel18d-content" id="panel18d-header">
                  <Typography>Есть ли комиссия за рассрочку?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Покупки у партнеров Банка без процентов и комиссий. Покупки вне сети партнеров Банка с комиссией 1% от суммы покупки за счет кредитного лимита. Комиссия начисляется каждый месяц в течение периода рассрочки
          </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel square expanded={expanded === 'panel19'} onChange={handleChangePanel('panel19')}>
                <ExpansionPanelSummary aria-controls="panel19d-content" id="panel19d-header">
                  <Typography>Я могу покупать в рассрочку за счет личных денег?</Typography>
                  <span className={classes.plusMinus}></span>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Покупки в рассрочку возможны за счет кредитного лимита
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
