import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import axios from "axios";

axios.defaults.withCredentials = true;

interface IReduxToolkitProvider {
  children: ReactNode;
}
const ReduxToolkitProvider = ({ children }: IReduxToolkitProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxToolkitProvider;
