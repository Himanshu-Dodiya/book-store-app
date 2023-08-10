import "./App.css";
import BookList from "./components/BookList";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Form from "./components/Form";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider,createTheme } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const theme = createTheme({
    components:{
      MuiButton:{
        styleOverrides:{
          root:{
            backgroundColor:"green",
          }
        }
      }
    }
});
  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer/>
        <div style={{...GlobalStyles.navbar}}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/form">Form</NavLink>

        </div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/books" element={<BookList />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route path="/form" element={<Form />}></Route>

        </Routes>
      </BrowserRouter>
      </ThemeProvider>
      
    </div>
  );
}

export default App;
