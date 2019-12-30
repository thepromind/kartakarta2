import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { EmojiObjects } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.down("sm")]: {
      container: {
        marginTop: 10
      },
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 14,
        color: "#141414"
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 12,
        color: "#5B5B5B"
      },
      graphImg: {
        marginTop: 16,
        maxWidth: "100%"
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "24px 16px 0px 16px",
        marginTop: 16
      },
      noteIcons: {
        fontSize: 11,
        color: "#B9B9B9",
        marginRight: 5
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 10,
        marginBottom: 10,
        color: "#5B5B5B"
      }
    },
    [theme.breakpoints.between("sm", "xl")]: {
      container: {
        marginTop: 10
      },
      subTitle: {
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 28,
        color: "#141414"
      },
      subTitleDesc: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 18,
        color: "#5B5B5B"
      },
      graphImg: {
        marginTop: 32,
        maxWidth: "100%"
      },
      noteBlock: {
        background: "white",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
        borderRadius: 4,
        padding: "24px 16px 0px 16px",
        marginTop: 32
      },
      noteIcons: {
        fontSize: 20,
        color: "#B9B9B9",
        verticalAlign: "middle",
        marginRight: 24
      },
      note: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 16,
        marginBottom: 24,
        color: "#5B5B5B"
      }
    }
  })
);

const CreditCard = () => {
  const classes = useStyles({});

  return (
    <Grid container>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.container}
      >
        <Typography className={classes.subTitle}>
          Как правильно пользоваться кредитным лимитом и не платить проценты
        </Typography>
        <Typography className={classes.subTitleDesc}>
          Управление в StarBanking 24/7
        </Typography>
      </Grid>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Grid container>
          <img
            src="credit_card_graph.svg"
            alt="credit_card_graph"
            className={classes.graphImg}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xl={12}
        lg={12}
        md={12}
        sm={12}
        xs={12}
        className={classes.noteBlock}
      >
        <Grid container direction="row">
          <Grid item sm={false} xs={false}>
            <Grid container alignItems="flex-start">
              <EmojiObjects className={classes.noteIcons} />
            </Grid>
          </Grid>
          <Grid item sm={true} xs={true}>
            <Grid container alignItems="flex-start">
              <Typography className={classes.note}>
                <b>1.</b>&nbsp; 1 сентября вы совершаете покупку на сумму 5 000
                тенге за счет кредитного лимита
              </Typography>
              <Typography className={classes.note}>
                <b>2.</b>&nbsp; Погасив 5 000 тенге до 25 октября, вы не платите
                никаких процентов за пользование кредитным лимитом
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;
