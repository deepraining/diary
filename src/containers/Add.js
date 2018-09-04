import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Add from '../components/Add';
import * as actions from '../actions/input';

function mapStateToProps(state) {
  return {
    input: state.input,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
