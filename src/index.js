import React from "react";
import { Provider } from "react-redux";
import AppNavigator from './navigation';
import store from "./reducers";

const App = () => (
    <Provider store={store}>
        <AppNavigator />
    </Provider>
)
export default App;