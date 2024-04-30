import './App.css';
import { useRoutes } from "react-router-dom";
import { ROUTES } from './Routes/routes';

function App() {
    return useRoutes(ROUTES);
}
export default App;