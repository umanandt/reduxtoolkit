import React from "react";
import { Outlet } from "react-router-dom";
import NavBarr from "./NavBarr";
import store from "../store/store";
import { Provider } from "react-redux";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarr />
        <main>
          <Outlet />
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
