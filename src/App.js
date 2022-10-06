
import {BrowserRouter, Routes,Route} from "react-router-dom";
import './App.css';
import Main from './pages/Main';
import { store } from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (

   <BrowserRouter>
    <Provider store={store}>
   <Routes>
    <Route path="/" index element={<Main/>}/>
    <Route path="/:tab" index element={<Main/>}/>
   </Routes>
   </Provider>
   
   </BrowserRouter>
  
  );
}

export default App;
