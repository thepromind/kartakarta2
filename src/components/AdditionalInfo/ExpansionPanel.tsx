import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      root: {
        width: "100%",
        marginTop: 10
      },
      item: {
        marginBottom: 10,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(10),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(10),
        color: "#5B5B5B"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      root: {
        width: "100%",
        marginTop: 15
      },
      item: {
        marginBottom: 15,
        backgroundColor: "#FAFAFA",
        borderRadius: 4,
        borderColor: "transparent",
        "&:before": {
          height: 0
        }
      },
      summary: {
        fontSize: theme.typography.pxToRem(16),
        color: "#141414"
      },
      details: {
        fontSize: theme.typography.pxToRem(16),
        color: "#5B5B5B"
      }
    }
  })
);

const ControlledExpansionPanels = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const arrays = [
    {
      question: "Что такое #картакарта?",
      answer:
        "#картакарта - это универсальная карта с кредитным лимитом. С #картакарта можно оплачивать покупки и не платить проценты в льготный период, покупать в рассрочку без переплат у партнеров Банка, зарабатывать на классном кешбэке. Управление режимом рассрочки и кешбэком - онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Я получу приветственный бонус?",
      answer:
        "Да, за первую покупку по карте мы зачислим на Ваш кешбэк счет приветственный бонус - 10% от суммы покупки (макс 1 000 Т)"
    },
    {
      question: "Как заработать с #картакарта?",
      answer: "Оплачивайте картой и зарабатывайте кешбэк до 30%!"
    },
    {
      question: "Что такое кешбэк?",
      answer:
        "Мы готовы платить Вам, чтобы Вы реже носили с собой кучу наличных и чаще расплачивались картой. Кешбэк за покупки по карте — это вознаграждение от Банка и наших партнеров за пользование картой в виде возврата определенной суммы за покупки. Совершайте покупки по #картакарта, накапливайте кешбэк, переводите кешбэк на #картакарта реальными деньгами"
    },
    {
      question: "Как выбирать любимые категории с повышенным кешбэком?",
      answer:
        "В начале каждого месяца мы будем Вам предлагать новый набор категорий покупок с кешбэком до 10%. Выбор любимых категорий Вы сможете делать в мобильном приложении StarBanking"
    },
    {
      question: "Могу ли я расплачиваться картой за границей?",
      answer: "Картой можно пользоваться по всему миру!"
    },
    {
      question: "Как пополнять карту?",
      answer:
        "Пополняйте карту с другой карты или счета, банковским переводом из другого банка, наличными через банкоматы с функцией приема наличных, терминалы или кассу Банка. Пополнение карты - бесплатно!"
    },
    {
      question:
        "Что если я получу карту с нулевым кредитным лимитом, что мне с ней делать, и дадут ли мне лимит в будущем?",
      answer:
        "С #картакарта Вы зарабатываете деньги тогда, когда их тратите. Покупайте за счет личных денег, получайте кешбэк до 30%, и Банк пересмотрит размер лимита. Если Банком принято решение о нулевом кредитном лимите, у Вас есть возможность получить его позже."
    },
    {
      question: "Зачем мне нужен кредитный лимит по #картакарта?",
      answer:
        "Кредитный лимит - это Ваша личная заначка, когда личных денег на покупку оказалось недостаточно"
    },
    {
      question: "Как я узнаю,что мне установили кредитный лимит?",
      answer: "Вы получите СМС от Банка"
    },
    {
      question:
        "Как будут тратиться деньги, если у меня есть и личные деньги, и кредитный лимит на карте?",
      answer: "Сначала используются Ваши личные деньги, затем кредитный лимит"
    },
    {
      question: "Что такое рассрочка по #картакарта?",
      answer: `В рассрочку покупать выгодно, особенно у партнеров Банка - без процентов и комиссий!
      Например, в январе Вы совершили покупку в рассрочку на 30 000 Т на срок 3 месяца. Сумма делится на 3 части. Каждый месяц (февраль, март, апрель) Вы возвращаете по 10 000 Т и не платите проценты.
      Плановый (ежемесячный) платеж по рассрочке 10 000 Т автоматически включается в сумму минимального платежа, выставляемого Банком для оплаты`
    },
    {
      question: "Как включить режим рассрочки по #картакарта?",
      answer:
        "Вы сможете включать и отключать режими рассрочки онлайн в мобильном приложении StarBanking"
    },
    {
      question: "Есть ли комиссия за рассрочку?",
      answer: `Покупки у партнеров Банка без процентов и комиссий.
      Покупки вне сети партнеров Банка с комиссией 1% от суммы покупки за счет кредитного лимита. Комиссия начисляется каждый месяц в течение периода рассрочки`
    },
    {
      question: "Я могу покупать в рассрочку за счет личных денег?",
      answer: "Покупки в рассрочку возможны за счет кредитного лимита"
    },
    {
      question: "Я могу погашать задолженность по карте досрочно?",
      answer:
        "Да. В любое время без штрафов и посещения Банка для формирования графиков"
    },
    {
      question: "Я нерезидент, я могу получить кредитный лимит по карте?",
      answer:
        "На данный момент кредитный лимит устанавливается только резидентам РК, но Вы можете пользоваться картой за счет личных денег и получать кешбэк до 30%"
    }
  ];

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {arrays.map((m, i) => (
        <ExpansionPanel
          elevation={0}
          className={classes.item}
          expanded={expanded === `${i}`}
          onChange={handleChange(`${i}`)}
          key={i}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.summary}>{m.question}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography className={classes.details}>{m.answer}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

export default ControlledExpansionPanels;
