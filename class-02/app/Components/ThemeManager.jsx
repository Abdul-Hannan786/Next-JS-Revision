"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/features/themeSlice";

const ThemeManager = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();
  const [initialized,setInitialized] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDark");
    console.log(savedTheme);
    if (savedTheme !== null) {
      dispatch(setTheme(savedTheme === "true"));
    }

    setInitialized(true)
  }, [dispatch]);

  useEffect(() => {
    if(!initialized) return
    localStorage.setItem("isDark", isDark);
    // console.log(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return null;
};

export default ThemeManager;
