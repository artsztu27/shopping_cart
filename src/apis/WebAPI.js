export const login = (username, password) => {
  return fetch('jsonData/token.json' ).then((res) => res.json());
  /* {
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
  // 從 localStorage 拿取 token
  const token = localStorage.getItem("token");
  return fetch('jsonData/userInfo.json')
    .then((res) => res.json())
    /* , {
      headers: {
        authorization: `Bearer ${token}`,
      },
    } */
};