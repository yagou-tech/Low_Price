import React from "react";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import NavigationApp from "./app/components/NavigationApp";

export default function App() {

  return (
    <Provider store={store}>
      <NavigationApp />
    </Provider>
  );
}

