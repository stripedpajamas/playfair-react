import { connect } from 'react-redux';
import { updateOutput } from '../store/actions';
import ProcessView from '../components/ProcessView';

const mapStateToProps = state => {
  return {
    output: state.output,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processInput({ input, decrypt }) {
      dispatch(updateOutput({ input, decrypt }));
    }
  }
};

const ProcessContainer = connect(mapStateToProps, mapDispatchToProps)(ProcessView);

export default ProcessContainer;