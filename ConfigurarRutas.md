### Configurar rutas

1) Importar react-router dom (npm i react-router-dom)
2) Editar App.js:
3) Importar Routers y Route desde react-router-dom
import{
  Routes,
  Route,
  Link
} from "react-router-dom";
4) borrar todo el return y añadir las rutas
return(
    <Routes>
        <Route ...>
    </Routes>

)
5) Modificar index.js para incluir react-router-dom
    import {BrowserRouter} from "react-router-dom"
    root.render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>
    );