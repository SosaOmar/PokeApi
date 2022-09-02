import { configureStore } from "@reduxjs/toolkit";
import trainerName from "./slices/nameTrainerInput"

export default configureStore({
    reducer:{
        trainerName
    }
})
