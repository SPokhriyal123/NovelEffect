import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import NovelsPage from "./NovelsPage";
import { Route, Switch } from "react-router-dom";
import ManageNovels from "./ManageNovels";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        {" "}
        <Route path="/" exact component={HomePage} />
        <Route path="/novels" component={NovelsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/manageNovels/:slug" component={ManageNovels} />
        <Route path="/manageNovels" component={ManageNovels} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
