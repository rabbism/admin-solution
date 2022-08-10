import React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading//Loading";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/dashboard";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let displayError;
  if (error) {
    displayError = (
      <h5 className="text-danger text-center ">{error?.message}</h5>
      
    );
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error?.message,
      footer: "Please, try again",
    });
  }
  
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);
    Swal.fire({
      icon: "success",
      title: "Good job...",
      text: "Your Login Successfully",
    
    });
    event.target.reset();

    // console.log(email, password)
  };

  return (
    <section className="signin-section">
      <div className="container-fluid">
        {/* ========== title-wrapper start ========== */}
      
        {/* ========== title-wrapper end ========== */}
        <div className="row g-0 auth-row">
          <div className="col-lg-6">
            <div className="auth-cover-wrapper bg-primary-100">
              <div className="auth-cover">
                <div className="title text-center">
                  <h1 className="text-primary mb-10">Welcome Back</h1>
                  <p className="text-medium">
                    Sign in to your Existing account to continue
                  </p>
                </div>
                <div className="cover-image">
                  <img src="assets/images/auth/signin-image.svg" alt="" />
                </div>
                <div className="shape-image">
                  <img src="assets/images/auth/shape.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
          <div className="col-lg-6">
            <div className="signin-wrapper">
              <div className="form-wrapper">
                <h6 className="mb-15">Sign In Form</h6>
                {displayError}
                
                <form action="#" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Email</label>
                        <input type="email" placeholder="Email" name='email' />
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <div className="input-style-1">
                        <label>Password</label>
                        <input type="password" placeholder="Password" name='password' />
                      </div>
                    </div>
                    {/* end col */}

                    {/* end col */}
                    <div className="col-xxl-6 col-lg-12 col-md-6">
                      <div
                        className="
                    text-start text-md-end text-lg-start text-xxl-end
                    mb-30
                  "
                      >
                        <a href="#0" className="hover-underline">
                          Forgot Password?
                        </a>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-12">
                      <div
                        className="
                    button-group
                    d-flex
                    justify-content-center
                    flex-wrap
                  "
                      >
                        <button
                         type="submit"
                          className="
                      main-btn
                      primary-btn
                      btn-hover
                      w-100
                      text-center
                    "
                        >
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                </form>
                <div className="singin-option pt-40">
                  <p className="text-sm text-medium text-center text-gray">
                    Easy Sign In With
                  </p>
                  <div
                    className="
                button-group
                pt-40
                pb-40
                d-flex
                justify-content-center
                flex-wrap
              "
                  >
                    <button className="main-btn primary-btn-outline m-2">
                      <i className="lni lni-facebook-filled mr-10" />
                      Facebook
                    </button>
                    <button className="main-btn danger-btn-outline m-2">
                      <i className="lni lni-google mr-10" />
                      Google
                    </button>
                  </div>
                  <p className="text-sm text-medium text-dark text-center">
                    Don’t have any account yet?
                    <Link to="/register">Create an account</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end col */}
        </div>
        {/* end row */}
      </div>
    </section>
  );
};

export default Login;
