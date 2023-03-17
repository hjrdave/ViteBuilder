import React from "react";
import { Route, Outlet, Routes as RRRoutes } from "react-router-dom";
import Home from "./scenes/Home";
import widgetMap from "./route-map";

export default function Routes() {
  return (
    <>
      <RRRoutes>
        <Route path={"/"} element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path={"widgets"} element={<Outlet/>}>
            {
              widgetMap.map((widget, index) => {
                const Scene = () => (<>{widget.scene()}</>);
                return( 
                  <React.Fragment key={index}>
                    <Route path={widget.route} element={<Scene/>} />
                  </React.Fragment>
                )
              })
            }
          </Route>
        </Route>
      </RRRoutes>
    </>
  );
}
