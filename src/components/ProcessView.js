import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import { FormControlLabel } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Switch from 'material-ui/Switch';

const styleSheet = createStyleSheet({
  root: {
  },
  display1: {
    'word-wrap': 'break-word'
  }
});

class ProcessView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      decrypt: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleInput(e) {
    this.setState({
      input: e.target.value
    });
    this.props.processInput({ input: e.target.value, decrypt: this.state.decrypt });
  }
  handleChange() {
    this.setState((prevState) => ({
      decrypt: !prevState.decrypt
    }), () => {
      this.props.processInput({ input: this.state.input, decrypt: this.state.decrypt });
    });
  }
  render() {
    return (
      <div>
        <FormControlLabel
          control={<Switch onChange={this.handleChange}/>}
          label="Decrypt?"
        />
        <TextField
          fullWidth={true}
          multiline={true}
          label="Enter text here"
          value={this.state.input}
          onChange={this.handleInput} />
        <div className={this.props.classes.root}>
          <Typography type="display1" className={this.props.classes.display1}>
            {this.props.output}
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styleSheet)(ProcessView);