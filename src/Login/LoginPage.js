import "./LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login">
      <input className="userName" placeHolder="Gmail" />
      <input className="Password" placeHolder="Password" />
      <button className="loginBtn">Login</button>
    </div>
  );
}
