import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from 'pages/loginPage/loginPage';
import ShoppingPage from 'pages/shoppingPage/shoppingPage';
import ItemDetailPage from 'pages/itemDetailPage/itemDetailPage';
import CheckoutPage from 'pages/checkoutPage/checkoutPage';
import RequireAuth from 'routes/requireAuth';


export default class RoutesCom extends Component {
  render() {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
            <Route
            path="/"
            element={
              <RequireAuth>
                <ShoppingPage />
              </RequireAuth>
            }
          />
           <Route
            path="/ShoppingPage"
            element={
              <RequireAuth>
                <ShoppingPage />
              </RequireAuth>
            }
          />
           <Route
            path="/product/:id"
            element={
              <RequireAuth>
                <ItemDetailPage />
              </RequireAuth>
            }
          />
          <Route
           path="/CheckoutPage"
           element={
             <RequireAuth>
               <CheckoutPage />
             </RequireAuth>
           }
         />
        <Route path="*" element={ <LoginPage />}/>
     </Routes>
    );
  }
}
