import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import HeaderInfo from "./Pages/Shared/HeaderInfo/HeaderInfo";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./context/AuthProvider";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import DoctorDetails from "./Pages/DoctorDetails/DoctorDetails";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import DetailAbout from "./Pages/DetailAbout/DetailAbout";
import Doctors from "./Pages/Home/Doctors/Doctors";
import Teams from "./Pages/Home/Teams/Teams";


function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <HeaderInfo />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/servicedetails/:serviceId">
            <ServiceDetails/>
          </PrivateRoute>
          <PrivateRoute exact path="/doctordetails/:doctorId">
            <DoctorDetails></DoctorDetails>
          </PrivateRoute>
          <PrivateRoute exact path="/detailabout">
            <DetailAbout></DetailAbout>
          </PrivateRoute>
          <PrivateRoute exact path="/doctors">
            <Doctors></Doctors>
          </PrivateRoute>
          <PrivateRoute exact path="/team">
            <Teams></Teams>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
