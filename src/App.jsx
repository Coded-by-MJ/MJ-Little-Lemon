
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";




import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from "./layouts/MainLayout";
import { DataProvider } from "./components/FormObjContext";
import HomePage from "./pages/HomePage";
import MenuPage from './pages/MenuPage';
import NotFoundPage from "./pages/NotFoundPage";
import ReservationPage from "./pages/ReservationPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {


    const router = createBrowserRouter(
      createRoutesFromElements(
       <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />}/>
            <Route path="/menu" element={<MenuPage />}  />
           <Route path="/reservations" element={<ReservationPage />} /> 
           <Route path="/about" element={<AboutPage />} /> 
           <Route path="/contact" element={<ContactPage />} />
           
           <Route path="*" element={<NotFoundPage />} />
        </Route>

    )
    );
              
    return  (

        <DataProvider>
         <RouterProvider router={router} />
        </DataProvider>

    
    )
  
}

export default App
