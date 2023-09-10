import React, { useState, useEffect } from 'react';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: '',
    }));
  }, [formData.email]);

  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = {};

    // Email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email.match(emailRegex)) {
      newErrors.email = 'Invalid email address';
    }

    // Password validation (you can add more rules)
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send data to the server)
      alert('Login successful');
    }
  };

  const { email, password } = formData;

  return (
    <div className="container">
      <div className="centered-container">
        <div className="square-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
                className={`form-control ${errors.email && 'is-invalid'}`}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
                className={`form-control ${errors.password && 'is-invalid'}`}
              />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>
            <p>
              Forgot your password? <a href="#">Forgot Password</a>
            </p>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
          <div className="signup-forgot">
            <p>
              Don't have an account? <a href="/Signup">Sign Up</a>
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
