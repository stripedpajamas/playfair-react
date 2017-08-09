import { connect } from 'react-redux';
import { setGrid } from '../store/actions';
import KeyView from '../components/KeyView';

const mapStateToProps = state => {
  return {
    grid: state.grid
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processKeyword: keyword => {
      dispatch(setGrid(keyword));
    }
  }
} ;

const KeyContainer = connect(mapStateToProps, mapDispatchToProps)(KeyView);

export default KeyContainer;