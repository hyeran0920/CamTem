

function LoginPage() {
    return(
      <div className="loginform">
        <h4>로그인</h4>
  
        <form action="/login" method="post">
          <input name="username" placeholder="아이디"></input>
          <input name="password" type="password" placeholder="비밀번호"></input>
          <button type="submit">로그인</button>
        </form>
  
      </div>
    );
  }
  
  export default LoginPage;