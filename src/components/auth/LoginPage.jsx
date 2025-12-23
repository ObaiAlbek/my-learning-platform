import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

function LoginPage({ onBack, onRegister, onForgot, onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", type: "" });

    if (!email || !password) {
      setMessage({ text: "Bitte E-Mail und Passwort ausfüllen.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      const { data: user, error } = await supabase
        .from('registration')
        .select('*')
        .eq('email', email)
        .single();

      if (error || !user) {
        setMessage({ text: "E-Mail oder Passwort falsch.", type: "error" });
        setLoading(false);
        return;
      }

      if (user.verified !== true) {
        setMessage({ text: "Bitte bestätige erst deine E-Mail-Adresse.", type: "error" });
        setLoading(false);
        return;
      }

      if (user.password !== password) {
        setMessage({ text: "E-Mail oder Passwort falsch.", type: "error" });
        setLoading(false);
        return;
      }

      onLoginSuccess?.(email);

    } catch (err) {
      console.error(err);
      setMessage({ text: "Ein Fehler ist aufgetreten.", type: "error" });
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Anmelden</h1>
        <p className="auth-subtitle">Willkommen zurück!</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            E-Mail
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@email.com"
              autoComplete="email"
            />
          </label>

          <label className="auth-label">
            Passwort
            <input
              className="auth-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </label>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button type="button" className="auth-link" onClick={onForgot}>
              Passwort vergessen?
            </button>
          </div>

          <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>
            {loading ? "Lade..." : "Login"}
          </button>
        </form>

        {message.text && (
          <div style={{
            marginTop: '15px', padding: '10px', borderRadius: '8px', textAlign: 'center',
            backgroundColor: message.type === 'error' ? '#ffe6e6' : '#e6fffa',
            color: message.type === 'error' ? '#d93025' : '#00796b',
            border: message.type === 'error' ? '1px solid #d93025' : '1px solid #00796b',
            fontSize: '0.9rem'
          }}>
            {message.text}
          </div>
        )}

        <div className="auth-footer">
          <span>Noch kein Konto?</span>
          <button type="button" className="auth-link" onClick={onRegister}>
            Registrieren
          </button>
        </div>

        {/* Hier keine Inline-Styles mehr! CSS übernimmt die Breite. */}
        <button className="btn btn-outline auth-back" type="button" onClick={onBack}>
          ← Zurück
        </button>
      </div>
    </div>
  );
}

export default LoginPage;