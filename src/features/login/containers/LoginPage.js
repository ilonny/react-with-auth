import React, { Component } from "react";

export class LoginPage extends Component {
  state = {
    formShowed: 0
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        formShowed: 1
      });
    }, 300);
  }
  render() {
    const { formShowed } = this.state;
    return (
      <div className="login-container">
        <form
          className={
            formShowed
              ? "login-container-form"
              : "login-container-form login-container-form--fade-in"
          }
        >
          <div className="login-container-form-content">
            <div className="login-container-form-content-top">
              <a href="/">Зарегистрироваться</a>
              <div style={{ textAlign: "center" }}>
                <img
                  className="login-form-logo"
                  src="https://front.sngi.ru/template/auth/img/logo.png"
                  alt="СО СНГ"
                />
              </div>
              <h2 className="login-form-logo-h2">Войдите, чтобы продолжить</h2>
            </div>
            <div className="login-container-form-content-center">
              <input
                type="text"
                className="login-form-input"
                placeholder="Введите логин"
                style={{ marginBottom: "30px" }}
                required
              />
              <input
                type="password"
                className="login-form-input"
                placeholder="Введите пароль"
                required
              />
            </div>
            <div style={{ textAlign: "center", margin: '30px' }}>
              <button className="login-page-submit">Войти</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
