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
  serialize = form => {
    // Setup our serialized data
    var serialized = [];

    // Loop through each field in the form
    for (var i = 0; i < form.elements.length; i++) {
      var field = form.elements[i];

      // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
      if (
        !field.name ||
        field.disabled ||
        field.type === "file" ||
        field.type === "reset" ||
        field.type === "submit" ||
        field.type === "button"
      )
        continue;

      // If a multi-select, get all selections
      if (field.type === "select-multiple") {
        for (var n = 0; n < field.options.length; n++) {
          if (!field.options[n].selected) continue;
          serialized.push(
            encodeURIComponent(field.name) +
              "=" +
              encodeURIComponent(field.options[n].value)
          );
        }
      }

      // Convert field data to a query string
      else if (
        (field.type !== "checkbox" && field.type !== "radio") ||
        field.checked
      ) {
        serialized.push(
          encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value)
        );
      }
    }

    return serialized.join("&");
  };
  submit = e => {
    e.preventDefault();
    const parsedFormData = JSON.parse(
      '{"' +
        decodeURI(this.serialize(e.target))
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
    console.log(parsedFormData);
  };
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
          onSubmit={e => this.submit(e)}
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
                name="login"
                type="text"
                className="login-form-input"
                placeholder="Введите логин"
                style={{ marginBottom: "30px" }}
                required
              />
              <input
                name="password"
                type="password"
                className="login-form-input"
                placeholder="Введите пароль"
                required
              />
            </div>
            <div style={{ textAlign: "center", margin: "30px" }}>
              <button className="login-page-submit">Войти</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
