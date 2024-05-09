import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProductList from "./Pages/ProductList";
import { Provider } from "react-redux"; //리덕스
import store from "./store"; //store파일 import
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
