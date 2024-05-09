import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProductList from "./Pages/ProductList";
import { Provider } from "react-redux"; //리덕스
import store from "./store"; //store파일 import
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductDetail from "./Pages/ProductDetail";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productlist" element={<ProductList />} />

          {/* 내가 작성한 부분 ////////////////////////// */}
          {/* 로그인화면*/}
          <Route path="/LoginPage" element={<LoginPage />}/>
          {/* 회원가입화면*/}
          <Route path="/RegisterPage" element={<RegisterPage />}/>
          {/* 캠핑장 상세페이지 */}
          <Route path="/ProductDetail" element={<ProductDetail />}/>
          {/* /////////////////////////////////////////// */}

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
