import React from 'react';
import Grid from 'material-ui/Grid';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ProcessContainer from '../containers/ProcessContainer';
import KeyContainer from '../containers/KeyContainer';

const styleSheet = createStyleSheet({
  root: {
    marginTop: '10px',
  }
});

class PlayfairApp extends React.Component {
  render() {
    return (
      <Grid container justify="center">
        <Grid item md={8} sm={10} xs={12}>
          <Card>
            <CardHeader title="Playfair" subheader="The Playfair cipher for busy people" />
            <CardContent>
              <Grid container>
                <Grid item xs>
                  <KeyContainer />
                </Grid>
                <Grid item xs>
                  <ProcessContainer />
                </Grid>
              </Grid>
              <Typography type="caption" align="center" className={this.props.classes.root}>
                {'Made with <3 by Peter Squicciarini '}
                <a href="https://github.com/stripedpajamas/playfair-react"
                   style={{ color: 'inherit', 'text-decoration': 'none' }}>(view source)</a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styleSheet)(PlayfairApp);
