import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import SingIn from "./pages/SingIn/SingIn";
import HomeAdmin from './pages/Home/HomeAdmin';
import Home from './pages/Home/Home';
import NewUser from "./pages/Home/Users/NewUser";
import Users from './pages/Home/Users/Users'
import Commerce from "./pages/Commerce/Commerce";
import NewCommerce from "./pages/Commerce/NewCommerce";
import Cesta from "./pages/Cesta Básica/Cesta";
import NewItem from './pages/Cesta Básica/NewItem'
import MonthlyQuote from "./pages/MonthlyQuote/MonthlyQuote";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={SingIn} />
      <Route path="/newUser" component={NewUser} />
      <Route path='/homeAdmin' component={HomeAdmin} />
      <Route path='/home' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/commerces' component={Commerce} />
      <Route path='/newCommerce' component={NewCommerce} />
      <Route path='/cesta' component={Cesta} />
      <Route path='/newItem' component={NewItem} />
      <Route path='/monthlyQuote' component={MonthlyQuote} />

    </BrowserRouter>
  );
}
