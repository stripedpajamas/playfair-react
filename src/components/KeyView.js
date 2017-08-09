import React from 'react';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Table, { TableBody, TableRow, TableCell } from 'material-ui/Table';

const styleSheet = createStyleSheet({
  root: {
    width: '284px'
  }
});

class KeyView extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    this.props.processKeyword('');
  }
  handleInput(e) {
    const keyword = e.target.value;
    this.props.processKeyword(keyword);
  }
  render() {
    return (
      <div>
        <TextField
          className={this.props.classes.root}
          label="Keyword"
          autoFocus={true}
          onChange={this.handleInput} />
        <Table style={{ width: '100px' }}>
          <TableBody>
            {this.props.grid.map((row, i) => (
              <TableRow key={i}>
                {row.map(letter => (
                  <TableCell compact={true} key={letter}>{letter}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styleSheet)(KeyView);