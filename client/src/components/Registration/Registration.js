import React, { useRef } from "react";
import {  useNavigate } from "react-router-dom";
import {
  ErrorToast,
  IsEmail,
  IsEmpty,
  IsMobile,
} from "../../helper/FormHelper";
import { RegistrationRequest } from "../../APIRequest/APIRequest";
import { ToastContainer } from "react-toastify";

const Registration = () => {
  let emailRef,
    firstNameRef,
    lastNameRef,
    mobileRef,
    passwordRef = useRef();

  let navigate = useNavigate();

  const onRegistration = () => {
    let email = emailRef.value;
    let fastName = firstNameRef.value;
    let lastName = lastNameRef.value;
    let mobile = mobileRef.value;
    let password = passwordRef.value;
    let photo ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/4QBqRXhpZgAASUkqAAgAAAABAA4BAgBIAAAAGgAAAAAAAABVc2VyIGljb24uIFBlb3BsZSBpY29uIGlzb2xhdGVkIG9uIHdoaXRlIGJhY2tncm91bmQuIFZlY3RvciBpbGx1c3RyYXRpb27/4QVsaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj4KCTxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CgkJPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczpJcHRjNHhtcENvcmU9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBDb3JlLzEuMC94bWxucy8iICAgeG1sbnM6R2V0dHlJbWFnZXNHSUZUPSJodHRwOi8veG1wLmdldHR5aW1hZ2VzLmNvbS9naWZ0LzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIgIHhtbG5zOmlwdGNFeHQ9Imh0dHA6Ly9pcHRjLm9yZy9zdGQvSXB0YzR4bXBFeHQvMjAwOC0wMi0yOS8iIHhtbG5zOnhtcFJpZ2h0cz0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3JpZ2h0cy8iIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjEyMTA5Mzk3MTIiIHhtcFJpZ2h0czpXZWJTdGF0ZW1lbnQ9Imh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9sZWdhbC9saWNlbnNlLWFncmVlbWVudD91dG1fbWVkaXVtPW9yZ2FuaWMmYW1wO3V0bV9zb3VyY2U9Z29vZ2xlJmFtcDt1dG1fY2FtcGFpZ249aXB0Y3VybCIgPgo8ZGM6Y3JlYXRvcj48cmRmOlNlcT48cmRmOmxpPmFsYW5vIGRlc2lnbjwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+VXNlciBpY29uLiBQZW9wbGUgaWNvbiBpc29sYXRlZCBvbiB3aGl0ZSBiYWNrZ3JvdW5kLiBWZWN0b3IgaWxsdXN0cmF0aW9uPC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmlzdG9ja3Bob3RvLmNvbS9waG90by9saWNlbnNlLWdtMTIxMDkzOTcxMi0/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmw8L3BsdXM6TGljZW5zb3JVUkw+PC9yZGY6bGk+PC9yZGY6U2VxPjwvcGx1czpMaWNlbnNvcj4KCQk8L3JkZjpEZXNjcmlwdGlvbj4KCTwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InciPz4K/+0AmFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAB7HAJQAAxhbGFubyBkZXNpZ24cAngASFVzZXIgaWNvbi4gUGVvcGxlIGljb24gaXNvbGF0ZWQgb24gd2hpdGUgYmFja2dyb3VuZC4gVmVjdG9yIGlsbHVzdHJhdGlvbhwCbgAYR2V0dHkgSW1hZ2VzL2lTdG9ja3Bob3RvAP/bAEMACgcHCAcGCggICAsKCgsOGBAODQ0OHRUWERgjHyUkIh8iISYrNy8mKTQpISIwQTE0OTs+Pj4lLkRJQzxINz0+O//bAEMBCgsLDg0OHBAQHDsoIig7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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AAAAAAAAAAAAAAAAAACbQAAAAZJJJJAAAAABQAAAAAAAAAAAAAAAAAAAARAAAAARJJJJLQAAAAJAAAAAAAAAAAAAAAAAAAABIAAAADJJJJJKAAAABIAAAAAAAAAAAAAAAAAAACJQAAAAZJJJJJQAAAARQAAAAAAAAAAAAAAAAAAARQAAAADJJJJJKAAAACLAAAAAAAAAAAAAAAAAAAAIAAAAARJJJJJQAAAATKAAAAAAAAAAAAAAAAAAAZAAAAACJJJJJAAAAAAJQAAAAAAAAAAAAAAAAAADIAAAAACJJJJCAAAAAAKAAAAAAAAAAAAAAAAAAAJQAAAACAZJJAQAAAAABAAAAAAAAAAAAAAAAAAADIAAAAAZaSQCZQAAAAAKAAAAAAAAAAAAAAAAAAAJAAAAAZJJIZJJaAAAAJAAAAAAAAAAAAAAAAAAACKAAAAJJJJJJJJKAAADIAAAAAAAAAAAAAAAAAAABAAAAJJJJJJJJJQAACZQAAAAAAAAAAAAAAAAAAAJAAAZJJJJJJJJJQAABAAAAAAAAAAAAAAAAAAAATKAABJJJJJJJJJJAADIAAAAAAAAAAAAAAAAAAAABAACJJJJJJJJJJKAAJAAAAAAAAAAAAAAAAAAAACbAAJJJJJJJJJJJAARAAAAAAAAAAAAAAAAAAAAACIADJJJJJJJJJJIATaAAAAAAAAAAAAAAAAAAAAABKCJJJJJJJJJJJQBKAAAAAAAAAAAAAAAAAAAAAABYBJJJJJJJJJJIAJQAAAAAAAAAAAAAAAAAAAAACRaJJJJJJJJJJJAJQAAAAAAAAAAAAAAAAAAAAAAAJZJJJJJJJJJJJJQAAAAAAAAAAAAAAAAAAAAAAAAZJJJJJJJJJJJJQAAAAAAAAAAAAAAAAAAAAAAAACRJJJJJJJJJJLAAAAAAAAAAAAAAAAAAAAAAAAAAATJJJJJJJJJKQAAAAAAAAAAAAAAAAAAAAAAAAAAACJJJJJJJJIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARJJJJJISAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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";

    if (IsEmail(email)) {
      ErrorToast("Valid Email Address Required !");
    } else if (IsEmpty(fastName)) {
      ErrorToast("First Name Required !");
    } else if (IsEmpty(lastName)) {
      ErrorToast("Last Name Required !");
    } else if (!IsMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !");
    } else if (IsEmpty(password)) {
      ErrorToast("Password Required !");
    } else {
      RegistrationRequest(
        email,
        fastName,
        lastName,
        mobile,
        password,
        photo
      ).then((result) => {
        if (result === true) {
          navigate("/login");
        } else {
          navigate("/registration");
        }
      });
    }
  };

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-10 col-lg-10 center-screen">
          <div className="card animated fadeIn w-100 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <ToastContainer />
              <hr />
              <div className="container-fluid m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-md-4 p-2">
                    <label>Email Address</label>
                    <input
                      ref={(input) => (emailRef = input)}
                      placeholder="User Email"
                      className="form-control animated fadeInUp"
                      type="email"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>First Name</label>
                    <input
                      ref={(input) => (firstNameRef = input)}
                      placeholder="First Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Last Name</label>
                    <input
                      ref={(input) => (lastNameRef = input)}
                      placeholder="Last Name"
                      className="form-control animated fadeInUp"
                      type="text"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Mobile Number</label>
                    <input
                      ref={(input) => (mobileRef = input)}
                      placeholder="Mobile"
                      className="form-control animated fadeInUp"
                      type="mobile"
                    />
                  </div>
                  <div className="col-md-4 p-2">
                    <label>Password</label>
                    <input
                      ref={(input) => (passwordRef = input)}
                      placeholder="User Password"
                      className="form-control animated fadeInUp"
                      type="password"
                    />
                  </div>
                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-md-4 p-2">
                    <button
                      onClick={onRegistration}
                      className="btn mt-3 w-100 float-end btn-primary animated fadeInUp"
                    >
                      Complete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;
