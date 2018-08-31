import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Add from '../components/Add';
import * as DiaryActions from '../actions/diary';

function mapStateToProps(state) {
  return {
    diaries: state.diaries,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DiaryActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Add);
