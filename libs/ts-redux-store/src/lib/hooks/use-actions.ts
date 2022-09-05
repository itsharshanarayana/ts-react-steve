import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from '@itsharshanarayana/ts-redux-store';

export const useActions = (): any => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
  //console.log('bound action creators:', acs);
  // return acs;
};
