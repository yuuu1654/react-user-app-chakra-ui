import './App.css';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          {/* <Link to="/">Home</Link><br />
          <Link to="/login">Login</Link><br />
          <Link to="/setting">Setting</Link><br />
          <Link to="/user-mng">UserManagement</Link><br /> */}

          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
