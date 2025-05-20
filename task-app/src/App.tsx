import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CallbackPage from "./components/CallbackPage";
import AddTasks from './components/AddTasks';
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from './components/Dashboard'
import AuthenticationGuard from "./components/AuthenticationGuard";
import EditTask from "./components/EditTask";


const App: React.FC = () => {

  const {isLoading} = useAuth0();

  if(isLoading) return (<div>Loading...</div>)

  return (
    <Routes>
      <Route
       path="/" 
       element={<HomePage/>}
       />
       <Route
      path="/tasks"
      element={<AuthenticationGuard component={Dashboard}/>}
      />
      <Route
      path="/addtasks"
      element={<AuthenticationGuard component={AddTasks}/>}
      />
      <Route
      path="/edit/:id"
      element={<AuthenticationGuard component={EditTask}/>}
      />
      <Route
      path="/callback"
      element={<CallbackPage/>}
      />
    </Routes>
  );
};

export default App;

