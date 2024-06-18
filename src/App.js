import Head from "./components.js/Head";
import Body from "./components.js/Body";
import "./App.css"
import store from "./components.js/utlis/store";
import { Provider } from "react-redux";
import{RouterProvider, createBrowserRouter} from "react-router-dom"
import MainContainer from "./components.js/MainContainer";
import WatchPage from "./components.js/WatchPage";

const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
 path:"/",
 element:<MainContainer/>
 },
 {
 path:"/watch",
 element:<WatchPage/> 
}]
}])

function App() {
  return (
    <Provider store={store}>
    <div >
    <Head/>
  
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
