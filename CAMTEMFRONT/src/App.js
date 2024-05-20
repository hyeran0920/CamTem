import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import ProductList from "./Pages/ProductList";
import { Provider } from "react-redux"; //리덕스
import store from "./store"; //store파일 import
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductDetail from "./Pages/ProductDetail";
import OAuth2Redirect from "./Pages/OAuth2Redirect";
import { AuthProvider } from "./Components/AuthContext";
function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/productlist" element={<ProductList />} />

            {/* 로그인화면버튼: 로그인 한 후에는 마이페이지 버튼으로 바뀌게 하고 싶음*/}
            <Route path="/LoginPage" element={<LoginPage />} />

            {/* 회원가입화면버튼: 로그인 한 후에는 로그아웃 버튼으로 바뀌게 하고 싶음*/}
            <Route path="/RegisterPage" element={<RegisterPage />} />

            {/* 캠핑장 상세페이지 */}
            {/* 실제로 사용될 캠핑장의 contentId */}
            <Route path="/ProductDetail/:contentId" element={<ProductDetail />} />
            <Route path="/oauth2/kakao" element={<OAuth2Redirect />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
