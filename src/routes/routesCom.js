import React, { Component } from 'react';
import { Routes, Navigate, Route } from 'react-router-dom';
import LoginPage from 'components/loginPage/loginPage';
import ShoppingPage from 'components/shoppingPage/shoppingPage';
import ItemDetailPage from 'components/itemDetailPage/itemDetailPage';
import CheckoutPage from 'components/checkoutPage/checkoutPage';
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
            path="/ItemDetailPage/:id"
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
        <Route path="*" element={ <div className="container"><p>Not Found</p></div>}/>
     </Routes>
    );
  }
}
