import './LoginPage.css';
import { Header } from '../components/Header';

export function LoginPage() {
  return (
    <>
    <Header />
    <div className="login-page">
      <form>
        <div className="con">
          <header className="head-form">
            <h2>Log In</h2>
            <p>login here using your username and password</p>
          </header>
          <br />
          <div className="field-set">
            <span className="input-item">
              <i className="fa fa-user-circle" />
            </span>
            <input className="form-input" id="txt-input" type="text" placeholder="@UserName" required />
            <br />
            <span className="input-item">
              <i className="fa fa-key>" />
            </span>
            <input className="form-input" type="password" placeholder="Password" id="pwd" name="password" required />
            <span>
              <i className="fa fa-eye" aria-hidden="true" type="button" id="eye" />
            </span>
            <br />
            <button className="log-in"> Log In </button>
          </div>
          <div className="other">

            <button className="btn submits frgt-pass">Forgot Password</button>

            <button className="btn submits sign-up">Sign Up

              <i className="fa fa-user-plus" aria-hidden="true" />
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}