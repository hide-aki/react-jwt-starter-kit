import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  paper: {
    width: '50%',
    margin: '0 auto',
    minWidth: 300,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
});

class Dashboard extends Component {
  render() {
    const { classes} = this.props;
    return (
      <div>
        <Header menu="ログアウト" onClick={this.props.logout}/>
        <Paper className={classes.paper} elevation={1}>
          <Typography variant="headline" component="h3">
            <strong>田中太郎</strong>さん、ダッシュボードへようこそ！
          </Typography>
          <Typography component="p">
            さあ、JWT認証をマスターしたらSPAアプリケーションを今すぐ開発しましょう！
          </Typography>
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(Dashboard);
