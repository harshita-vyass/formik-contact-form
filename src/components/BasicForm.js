import React from "react";
import { useFormik } from "formik";
import { firstSchema } from "../schema/index";

const onSubmit = (resetForm) => {
  alert("You have been registered successfully!")
  resetForm();
};

const BasicForm = () => {
  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        checkFlag: false,
        option: "",
      },
      validationSchema: firstSchema,
      onSubmit: () => onSubmit(resetForm),
    });
  return (
    <main className="form-background">
      <section className="section">
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="inline-group">
            <div className="form-group">
              <label>
                First Name<span> *</span>
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input ${
                  errors.firstName && touched.firstName && "error"
                }`}
              />

              {errors.firstName && touched.firstName && (
                <p className="error-msg">{errors.firstName}</p>
              )}
            </div>
            <div className="form-group">
              <label>
                Last Name<span> *</span>
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input ${
                  errors.lastName && touched.lastName && "error"
                }`}
              />

              {errors.lastName && touched.lastName && (
                <p className="error-msg">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="form-group">
            <label>
              Email<span> *</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input ${errors.email && touched.email && "error"}`}
            />

            {errors.email && touched.email && (
              <p className="error-msg">{errors.email}</p>
            )}
          </div>

          <div className="form-group">
            <label>
              Password<span> *</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input ${
                errors.password && touched.password && "error"
              }`}
            />
            {errors.password && touched.password && (
              <p className="error-msg">{errors.password}</p>
            )}
          </div>

          <div className="form-group">
            <label>
              Confirm Password<span> *</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your Password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`input ${
                errors.confirmPassword && touched.confirmPassword && "error"
              }`}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error-msg">{errors.confirmPassword}</p>
            )}
          </div>

          <div className="form-group">
            <label>
              Subscription Type<span> *</span>
            </label>
            <div className="inline-group">
              <label className="radio">
                <input
                  type="radio"
                  name="option"
                  value="option1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.option === "option1"}
                />
                Basic
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="option"
                  value="option2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  checked={values.option === "option2"}
                />
                Premium
              </label>
            </div>
            {touched.option && errors.option && (
              <p className="error-msg margin-top">{errors.option}</p>
            )}
          </div>
          <div>
            <div className="checkbox">
              <input
                id="checkFlag"
                type="checkbox"
                checked={values.checkFlag}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <label>
                I agree to the terms & conditions<span> *</span>
              </label>
            </div>
            {touched.checkFlag && errors.checkFlag && (
              <p className="error-msg margin-top">{errors.checkFlag}</p>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};

export default BasicForm;
