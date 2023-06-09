import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from './Users';
import Product from './Product';
import CreateUser from './CreateUser';
import Portal from './Portal';
import Login from './Login';
import Userview from './Userview';
import Edit from './Edit';
function App() {
  return (
    <BrowserRouter>
     
    
       
<Routes>
<Route path="/" element={< Login/>}/>
<Route path="/portal" element={< Portal/>}>
<Route path="dashboard" element={< Dashboard/>}/>
<Route path="users" element={< Users/>}/>
<Route path="users/:id" element={< Userview/>}/>
<Route path="user/edit/:id" element={< Edit/>}/>




<Route path="product" element={< Product/>}/>
<Route path="create-user" element={< CreateUser/>}/>
</Route>

</Routes>


</BrowserRouter>)
}
 export default App;