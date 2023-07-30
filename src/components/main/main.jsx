import React from "react";
import * as M from './main.style';
import logo from "../../asset/img/logo.svg";

function Main() {
  return (
    <>
      <M.mainLayout>
        <M.header>
          <M.logo src={logo}></M.logo>
          <M.search>
            
          </M.search>
        </M.header>
      </M.mainLayout>
    </>
  );
}
export default Main;
