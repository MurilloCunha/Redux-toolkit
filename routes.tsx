import {Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./src/layouts/BaseLayout";
import { Homepage } from "./src/pages/Home";
import { NotFound } from "./src/pages/NotFound";

  const routes =
      <Route element={<BaseLayout />} errorElement={<NotFound />}>
        <Route path={'/'} element={<Homepage />} />
      </Route>


const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;