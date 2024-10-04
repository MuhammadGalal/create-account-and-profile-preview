import { useState } from "react";
import AlertIcon from "../assets/aleart";
import EyeIcon from "../assets/eyeIcon";

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    office: "",
    address: "",
    day: "",
    month: "",
    year: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    return password.length >= minLength && hasUppercase && hasLowercase;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePassword(formData.password)) {
      setError("كلمة السر يجب أن تحتوي على 8 أحرف على الأقل، مع وجود حرف كبير وحرف صغير.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("كلمة السر وتأكيد كلمة السر غير متطابقتين.");
      return;
    }

    setError("");

    await fetch("http://localhost:3000/accounts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
  };

  return (
    <>
      <div className="section">
        <header>
          <h1>انشاء حساب جديد</h1>
          <AlertIcon />
        </header>
        {error && <div className="error">{error}</div>}
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div>
                <label htmlFor="name">
                  الاسم<span>*</span>
                </label>
                <input type="text" id="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="date">
                  موعد الالتحاق بالمدرسة<span>*</span>
                </label>
                <input type="text" id="date" value={formData.date} onChange={handleChange} required />
              </div>
            </div>
            <div className="row">
              <div>
                <label htmlFor="office">
                  المكتب التابع له<span>*</span>
                </label>
                <input type="text" id="office" value={formData.office} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="address">
                  العنوان<span>*</span>
                </label>
                <input type="text" id="address" value={formData.address} onChange={handleChange} required />
              </div>
            </div>
            <div className="row" id="dates">
              <div>
                <label htmlFor="day">
                  تاريخ الميلاد<span>*</span>
                </label>
                <input type="text" id="day" value={formData.day} onChange={handleChange} placeholder="يوم" required />
              </div>
              <div>
                <input
                  className="sameline"
                  type="text"
                  id="month"
                  placeholder="شهر"
                  value={formData.month}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <input
                  className="sameline"
                  type="text"
                  id="year"
                  placeholder="سنه"
                  value={formData.year}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <label htmlFor="password">
                  كلمة السر<span>*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="eye" onClick={togglePassword}>
                  <EyeIcon />
                </span>
              </div>
              <div className="input-container">
                <label htmlFor="confirmPassword">
                  تاكيد كلمة السر<span>*</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
                <span className="eye" onClick={togglePassword}>
                  <EyeIcon />
                </span>
              </div>
            </div>
            <input id="btn" type="submit" value="الدخول" />
          </form>
        </div>
      </div>
    </>
  );
}

