import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import "./style.css";
import Drawer from "./components/Drawer";
import FallbackPage from "./pages/FallbackPage";
import theme from "./theme";
import routes from "./constants/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<Drawer>{route.element}</Drawer>}
              />
            ))}
            <Route
              path="*"
              element={
                <Drawer>
                  <FallbackPage />
                </Drawer>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
