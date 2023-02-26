import React from"react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter,Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Items";
import NotFound from "./components/NotFound"
 

function App(){
  return(
    <PhotoContextProvider>
      <HashRouter>
        <div className="container">
          <Header/>
          
          <Routes >
          <Route
              exact
              path="/"
              element={<Navigate to="/mountain" replace />}
            />
            <Route
              exact
              path="/mountain"
              element={<Item searchTerm="mountain" />}
            />
            <Route exact path="/beach" element={<Item searchTerm="beach" />} />
            <Route exact path="/bird" element={<Item searchTerm="bird" />} />
            <Route exact path="/food" element={<Item searchTerm="food" />} />
            <Route path="/search/:searchInput" element={<Item />} />
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </HashRouter>
    </PhotoContextProvider>
  )
}
export default App;

