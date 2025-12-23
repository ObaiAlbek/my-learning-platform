import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom"; 

import Navbar from "./components/homepage/Navbar";
import Hero from "./components/homepage/Hero";
import Footer from "./components/homepage/Footer";
import TopicCard from "./components/homepage/TopicCard";

// --- Kurs Importe ---
import HtmlIntro from "./components/html-kurs/HtmlIntro";
import HtmlBasicTags from "./components/html-kurs/HtmlBasicTags";
import HtmlMetaTags from "./components/html-kurs/HtmlMetaTags";
import HtmlKommentare from "./components/html-kurs/HtmlKommentare";
import HtmlTables from "./components/html-kurs/HtmlTables";
import HtmlLists from "./components/html-kurs/HtmlLists";
import HtmlTextLinks from "./components/html-kurs/HtmlTextLinks";
import HtmlTryIt from "./components/html-kurs/HtmlTryIt";
import HtmlQuizPage from "./components/html-kurs/HtmlQuizPage"; 

import CssIntro from "./components/css-kurs/CssIntro";
import CssColors from "./components/css-kurs/CssColors";
import CssMargin from "./components/css-kurs/CssMargin";
import CssBorder from "./components/css-kurs/CssBorder";
import CssPosition from "./components/css-kurs/CssPosition";
import CssDisplay from "./components/css-kurs/CssDisplay";
import CssFonts from "./components/css-kurs/CssFonts";
import CssQuizPage from "./components/css-kurs/CssQuizPage"; 

// --- Auth Importe ---
import LoginPage from "./components/auth/LoginPage";
import RegisterPage from "./components/auth/RegisterPage";
import ForgotPasswordPage from "./components/auth/ForgotPasswordPage";
import NewPasswordPage from "./components/auth/NewPasswordPage"; 

// --- USER Import ---
import ProfilePage from "./components/user/ProfilePage";

function App() {
  const navigate = useNavigate();
  const location = useLocation(); 
  const [resetEmail, setResetEmail] = useState("");

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("app_user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailParam = params.get("reset_email");
    if (emailParam) {
      setResetEmail(emailParam);
      navigate("/new-password");
    }
  }, [navigate]);

  const handleLoginSuccess = (email) => {
      const userData = { email: email };
      setUser(userData);
      localStorage.setItem("app_user", JSON.stringify(userData)); 
      navigate("/"); 
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("app_user");
    navigate("/login");
  };

  const handleLegacyNavigation = (target) => {
    const mapping = {
      "html_intro": "/html/intro",
      "html_basic": "/html/basic",
      "html_meta": "/html/meta",
      "html_comments": "/html/comments",
      "html_tables": "/html/tables",
      "html_lists": "/html/lists",
      "html_links": "/html/links",
      "html_test": "/html/quiz",
      "css_intro": "/css/intro",
      "css_colors": "/css/colors",
      "css_margin": "/css/margin",
      "css_border": "/css/border",
      "css_position": "/css/position",
      "css_display": "/css/display",
      "css_fonts": "/css/fonts",
      "css_test": "/css/quiz",
      "home": "/",
      "login": "/login",
      "profile": "/profile"
    };
    if (mapping[target]) navigate(mapping[target]);
  };

  const openTryIt = () => navigate("/tryit");

  return (
    <div className="container">
      <Navbar isLoggedIn={user !== null} currentPath={location.pathname} />

      <Routes>
        <Route path="/" element={
          <>
            <div className="content">
              <Hero onStartClick={() => navigate("/html/intro")} />
              {user && <p style={{textAlign: 'center', color: '#667eea', marginTop: '-20px', fontWeight: 'bold'}}>Willkommen zurück!</p>}
            </div>
            <div className="topics-grid">
              <div onClick={() => navigate("/html/intro")} style={{ cursor: "pointer" }}>
                <TopicCard title="HTML" description="Die Struktur..." icon="📄" />
              </div>
              <div onClick={() => navigate("/css/intro")} style={{ cursor: "pointer" }}>
                <TopicCard title="CSS" description="Das Styling..." icon="🎨" />
              </div>
            </div>
          </>
        } />

        <Route path="/html/intro" element={<HtmlIntro activePage="html_intro" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/basic" element={<HtmlBasicTags activePage="html_basic" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/meta" element={<HtmlMetaTags activePage="html_meta" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/comments" element={<HtmlKommentare activePage="html_comments" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/tables" element={<HtmlTables activePage="html_tables" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/lists" element={<HtmlLists activePage="html_lists" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/links" element={<HtmlTextLinks activePage="html_links" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/html/quiz" element={<HtmlQuizPage onBack={() => navigate("/html/intro")} onLoginRedirect={() => navigate("/login")} />} />

        <Route path="/css/intro" element={<CssIntro activePage="css_intro" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/colors" element={<CssColors activePage="css_colors" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/margin" element={<CssMargin activePage="css_margin" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/border" element={<CssBorder activePage="css_border" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/position" element={<CssPosition activePage="css_position" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/display" element={<CssDisplay activePage="css_display" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/fonts" element={<CssFonts activePage="css_fonts" onNavigate={handleLegacyNavigation} onTryIt={openTryIt} />} />
        <Route path="/css/quiz" element={<CssQuizPage onBack={() => navigate("/css/intro")} onLoginRedirect={() => navigate("/login")} />} />

        <Route path="/tryit" element={<HtmlTryIt onBack={() => navigate(-1)} />} />
        
        <Route path="/login" element={<LoginPage onBack={() => navigate("/")} onRegister={() => navigate("/register")} onForgot={() => navigate("/forgot")} onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/register" element={<RegisterPage onBack={() => navigate("/")} onLogin={() => navigate("/login")} onRegisterSuccess={() => navigate("/login")} />} />
        <Route path="/forgot" element={<ForgotPasswordPage onBack={() => navigate("/login")} onGoLogin={() => navigate("/login")} />} />
        <Route path="/new-password" element={<NewPasswordPage emailToReset={resetEmail} onBack={() => navigate("/login")} onLogin={() => navigate("/login")} />} />

        <Route path="/profile" element={user ? <ProfilePage onBack={() => navigate("/")} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;