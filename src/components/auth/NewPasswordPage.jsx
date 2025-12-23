import React, { useState } from "react";
import { supabase } from "../../supabaseClient";

function NewPasswordPage({ emailToReset, onBack, onLogin }) {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validierung
    if (!password || !confirm) {
      setMessage({ text: "Bitte fülle beide Felder aus.", type: "error" });
      return;
    }
    if (password.length < 8) {
      setMessage({ text: "Passwort muss min. 8 Zeichen haben.", type: "error" });
      return;
    }
    if (password !== confirm) {
      setMessage({ text: "Passwörter stimmen nicht überein.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      // Passwort in Supabase updaten
      const { error } = await supabase
        .from('registration')
        .update({ password: password })
        .eq('email', emailToReset);

      if (error) throw error;

      setMessage({ text: "Passwort erfolgreich geändert! Bitte einloggen.", type: "success" });
      
      // Nach 2 Sekunden zum Login wechseln
      setTimeout(() => {
        // URL Parameter entfernen (saubere URL)
        window.history.replaceState({}, document.title, "/"); 
        onLogin?.();
      }, 2000);

    } catch (error) {
      console.error(error);
      setMessage({ text: "Fehler beim Speichern.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Neues Passwort</h1>
        <p className="auth-subtitle">Für: {emailToReset}</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">
            Neues Passwort
            <input 
              className="auth-input" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="********" 
            />
          </label>
          
          <label className="auth-label">
            Wiederholen
            <input 
              className="auth-input" 
              type="password" 
              value={confirm} 
              onChange={(e) => setConfirm(e.target.value)} 
              placeholder="********" 
            />
          </label>

          <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>
            {loading ? "Speichert..." : "Passwort ändern"}
          </button>
        </form>

        {/* Nachricht Box */}
        {message.text && (
            <div style={{
                marginTop: '15px', 
                padding: '10px', 
                borderRadius: '8px', 
                textAlign: 'center',
                backgroundColor: message.type === 'error' ? '#ffe6e6' : '#e6fffa', 
                color: message.type === 'error' ? '#d93025' : '#00796b', 
                border: message.type === 'error' ? '1px solid #d93025' : '1px solid #00796b'
            }}>
                {message.text}
            </div>
        )}
        
        <button 
          className="btn btn-outline auth-back" 
          style={{marginTop: '10px', width: '100%'}} 
          onClick={onBack}
        >
          Abbrechen
        </button>
      </div>
    </div>
  );
}

export default NewPasswordPage;