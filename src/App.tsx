import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy } from "react";
import MainPage from "./pages/MainPage";

const ListEvents = lazy(() => import("./Components/ListEvents/ListEvents"));
const FormEventPage = lazy(() => import("./pages/FormEventPage"));
const DetailsEventPage = lazy(() => import("./pages/DetailsEventPage"));
const EditEventPage = lazy(() => import("./pages/EditEventPage"));
const ErrorElement = lazy(() => import("./Components/Error/ErrorElement"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<MainPage />}
      errorElement={<ErrorElement titleError="404 Page not found" />}
    >
      <Route path="/" element={<ListEvents />} />
      <Route path="create-event" element={<FormEventPage />} />
      <Route path=":id" element={<DetailsEventPage />} />
      <Route path=":id/edit-event" element={<EditEventPage />} />
      <Route path="*" element={<ErrorElement titleError="Doesn't exist" />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} fallbackElement={"Loading...."} />;
}

export default App;
