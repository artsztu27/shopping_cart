import productdata from 'jsonData/product.json';
import tokendata from 'jsonData/token.json';
import userInfodata from 'jsonData/userInfo.json';

export const login = (username, password) => {
  return tokendata;
  /*return fetch(`${process.env.REACT_APP_API_BASEURL}/getToken`).then((res) => res.json());
   {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  } */
};

// 身分驗證
export const getMe = () => {
  return userInfodata;
  // 從 localStorage 拿取 token
  /*const token = localStorage.getItem("token");
  return fetch(`${process.env.REACT_APP_API_BASEURL}/getUserInfo`)
    .then((res) => res.json())
     , {
      headers: {
        authorization: `Bearer ${token}`,
      },
    } */
};

export const getProduct = () => {
  return productdata
  /* return fetch(`${process.env.REACT_APP_API_BASEURL}/getProduct`)
    .then((res) => res.json()) */
};