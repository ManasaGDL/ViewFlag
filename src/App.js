import logo from './logo.svg';
import './App.css';
import DropDownComponent from './DropDownComponent';
import {BrowserRouter ,Routes,Route,Switch} from "react-router-dom"
import ViewCountry from './ViewCountry';
import Test from "./Test"

function App() {
  return (
    <> 
   
    <div className="App"> 
       <Routes>
       <Route path="/country/:countryname" element={<ViewCountry/>}/>
       <Route index element={<DropDownComponent/>}/>
       </Routes>    
    </div>
    
    </>
   
  );
}

export default App;
