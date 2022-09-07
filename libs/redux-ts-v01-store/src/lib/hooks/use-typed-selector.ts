import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from '../reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
