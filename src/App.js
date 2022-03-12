import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css"; // css reset
import NewUser from "./pages/NewUser";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import AllUsers from "./pages/AllUsers";
import User from "./pages/User";

const initialUsers = [
  {
    id: 1,
    name: "spike",
    balance: 100,
  },
  {
    id: 2,
    name: "mel",
    balance: 200,
  },
];

const darkTheme = {
  sideBarBackground: "#222",
  textColor: "#fff",
  pageBackground: "#303030",
  boxBackground: "#80808073",
}

const lightTheme = {
  pageBackground: "#fff",
  textColor: "#222",
  pageBackground: "#ebeaf1",
  boxBackground: "#fff",
}

const themes = {
  dark: darkTheme,
  light: lightTheme
}

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider className="App" theme={themes[theme]} themes={themes}>
      <Routes>
        <Route path="/" element={<Layout theme={theme} setTheme={setTheme} themes={themes}/>}>
          <Route index element={<Home />} />
          <Route path="users" element={<AllUsers users={users} theme={themes[theme]} />} />
          <Route
            path="new"
            element={<NewUser users={users} setUsers={setUsers} />}
          />
          <Route path="users/:id" element={<User users={users} />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
