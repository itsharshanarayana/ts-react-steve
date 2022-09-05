import { useSelector, TypedUseSelectorHook } from "react-redux";
import {RootState} from "@itsharshanarayana/ts-redux-store";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
