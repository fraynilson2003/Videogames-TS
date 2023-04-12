import { useState, useEffect } from "react";

export const useLoginStorage = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const localStorage = window.localStorage.getItem("userStorage");
  console.log(JSON.parse(localStorage));
  useEffect(() => {
    if (localStorage) {
      setUserInfo(JSON.parse(localStorage));
      setIsLogin(true);
    }
  }, [localStorage]);

  return [userInfo, isLogin];
};
