
import React, { useState, useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/auth.service";
import Home from "./Home";
import Profile2 from "./prfile2";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert text-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
        // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (
    <div>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center"></div>
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div
                  className="img"
                  style={{
                    backgroundImage:
                      "url(https://www.la-mariee.fr/wp-content/uploads/photographe-mariage-oriental-strasbourg-8.jpg)",
                  }}
                ></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Se connecter</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook"  />
                        </a>
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter" color="blue" />
                        </a>
                      </p>
                    </div>
                  </div>
                  <Form
                    onSubmit={handleLogin}
                    ref={form}
                    className="signin-form"
                  >
                    <div className="form-group mb-3">
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Votre email"
                        name="username"
                         value={username}
                        onChange={onChangeUsername}
                        validations={[required]}
                        required
                      />
                    </div>
                  <div className="form-group mb-3">
                      <Input
                        type="password"
                        className="form-control"
                        placeholder="votre mot de passe"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className=" btn btn-danger rounded submit px-3 col-12"
                        disabled={loading}
                      >
                         {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
                        <span>Accédez</span>
                        
                      </button>
                    </div>
                  
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
           
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-md-right">
          <a href="#">mot de passe oublié</a>
                   </div> 
                    </div>   
                  </Form> 
                  <p className="text-center">
                    Vous n'avez pas de compte ?
                    <a data-toggle="tab" href="#signup">
                      Insciption
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    
    </div>
  );
}
export default Login;
