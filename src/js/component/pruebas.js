import { Context } from "../store/appContext";
import React, { useContext } from "react";




const { store } = useContext(Context);
const peoples = store.peoples
getRandomChar: (peoples) => {
    // const { peoples } = getStore();
    const peoples = store.peoples;
    for (let i = 0; i < 4; i++) {
        let random = Math.floor(Math.random() * peoples?.lenght) + 1;
          text += random + "<br>";
   }
}
// JavaScript For Loop
// 3
// 1
// 3
// 9
// resultado