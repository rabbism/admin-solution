import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import "./main.css";
import "./fullcalendar.css";
import "./morris.css";
import RequireAuth from "./component/Auth/RequireAuth/RequireAuth";
import DashNav from "./component/Dashboard/DashNav/DashNav";
import Dashboard from "./Pages/Dashboard";
import ProductAdd from "./component/Dashboard/ProductAdd/ProductAdd";
import SliderImage from "./component/Dashboard/SliderImage/SliderImage";
import DiscountTime from "./component/Dashboard/ProductList/DiscountTime/DiscountTime";
import ProductList from "./component/Dashboard/ProductList/ProductList";
import Video from "./component/Dashboard/Video/Video";
import Profile from "./Pages/Profile";
import Login from "./component/Auth/Login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          {/* <Route path="/register" element={<Register></Register>}></Route> */}
          <Route
            path="/"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
          </Route>
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/add_product"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <ProductAdd></ProductAdd>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/slider_image"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <SliderImage></SliderImage>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/product_list"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <ProductList></ProductList>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/discount"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <DiscountTime></DiscountTime>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/watching_video"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <Video></Video>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/dashboard/settings"
            element={
              <RequireAuth>
                <DashNav></DashNav>
                <Profile></Profile>
              </RequireAuth>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
