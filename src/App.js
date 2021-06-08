import {ThemeProvider} from "styled-components"
import './App.css';
import {theme,GlobalStyle} from "./styles"
import Home from "./Components/Home"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Home/>
  </ThemeProvider>
    
    
  )
  }
export default App;
