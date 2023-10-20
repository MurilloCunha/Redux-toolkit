import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./src/Layouts";
import { CharactersPage, EpisodePage, LocationPage } from "./src/Pages";

  const routes =
      <Route path='/' element={<BaseLayout />}>  
        <Route path="Episode" element={<EpisodePage />} />
        <Route path="Location" element={<LocationPage />} />
        <Route path="Character" element={<CharactersPage />} />
      </Route>

const router = createBrowserRouter(createRoutesFromElements(routes));

export default router;