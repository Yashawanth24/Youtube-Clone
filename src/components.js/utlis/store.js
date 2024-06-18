import{configureStore} from "@reduxjs/toolkit"
import appSclice from "./appSclice";
const store = configureStore({
reducer:{
    app:appSclice,
}
});
export default store;