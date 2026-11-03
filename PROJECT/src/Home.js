import React from 'react';

function Home() {
  return (
    <div 
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
        textAlign: "center"
      }}
    >
      <div 
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          maxWidth: "600px"
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
           Welcome to Home Page
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          You have successfully signed up.  
          Explore your new journey with us!
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "12px 25px",
            background: "linear-gradient(135deg, #ff512f, #dd2476)",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "0.3s"
          }}
          onMouseOver={(e) => e.target.style.opacity = "0.9"}
          onMouseOut={(e) => e.target.style.opacity = "1"}
        >
          Get Started 
        </button>
      </div>
    </div>
  );
}

export default Home;
