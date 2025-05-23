import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0Provider";
import { TaskProvider } from './context/TaskContext'
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Auth0ProviderWithNavigate>
      <TaskProvider>
        <App/>
      </TaskProvider>
    </Auth0ProviderWithNavigate>
  </BrowserRouter>
)
