import Home from './Home';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div 
        style={{
          width: "400px",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "25px", color: "#333" }}>Sign up now</h2>

        <input
          type="text"
          placeholder="First name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#2575fc"}
          onBlur={(e) => e.target.style.borderColor = "#ddd"}
        />

        <input
          type="text"
          placeholder="Last name"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#2575fc"}
          onBlur={(e) => e.target.style.borderColor = "#ddd"}
        />

        <input
          type="email"
          placeholder="Email address"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#2575fc"}
          onBlur={(e) => e.target.style.borderColor = "#ddd"}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            outline: "none",
            transition: "0.3s",
          }}
          onFocus={(e) => e.target.style.borderColor = "#2575fc"}
          onBlur={(e) => e.target.style.borderColor = "#ddd"}
        />

        <button
          onClick={() => navigate('/home')}
          style={{
            width: "100%",
            padding: "14px",
            background: "linear-gradient(135deg, #2575fc, #6a11cb)",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            transition: "0.3s",
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
