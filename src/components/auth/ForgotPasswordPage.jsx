import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import emailjs from '@emailjs/browser';

function ForgotPasswordPage({ onBack, onGoLogin }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
        setMessage({ text: "Bitte E-Mail eingeben", type: "error" });
        return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      // 1. Prüfen: Gibt es diese E-Mail überhaupt?
      const { data: user, error } = await supabase
        .from('registration').select('*').eq('email', email).single();

      if (error || !user) {
        // Aus Sicherheitsgründen sagen wir trotzdem "Falls E-Mail existiert..."
        // Aber für dich zum Testen:
        setMessage({ text: "E-Mail nicht gefunden.", type: "error" });
        setLoading(false);
        return;
      }

      // 2. Link generieren
      // window.location.origin ist z.B. "http://localhost:5173" oder deine echte URL
      const resetLink = `${window.location.origin}/?reset_email=${email}`;

      // 3. Email senden
      const emailParams = {
        to_email: email,
        to_name: user.firstname, // Name aus der DB holen
        link: resetLink          // Der Link für das Template
      };

      await emailjs.send(
        "service_51gkd5b",       // <--- DEINE ID
        "template_oyxo4bb", // <--- ID vom neuen "Reset Password" Template
        emailParams,
        "3Bnp_eOhW8v8dln30"         // <--- DEIN KEY
      );

      setMessage({ text: "Ein Link wurde an deine E-Mail gesendet!", type: "success" });

    } catch (error) {
      console.error(error);
      setMessage({ text: "Fehler beim Senden.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Passwort zurücksetzen</h1>
        <p className="auth-subtitle">Wir senden dir einen Link.</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="auth-label">E-Mail
            <input className="auth-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="name@email.com" />
          </label>

          <button className="btn btn-primary auth-submit" disabled={loading}>
            {loading ? "Sende..." : "Link senden"}
          </button>
        </form>

        {message.text && (
             <div style={{marginTop:'15px', padding:'10px', borderRadius:'8px', textAlign:'center',
             backgroundColor: message.type==='error'?'#ffe6e6':'#e6fffa', 
             color: message.type==='error'?'red':'green', border: message.type==='error'?'1px solid red':'1px solid green'}}>
             {message.text}
         </div>
        )}

        <button className="btn btn-outline auth-back" style={{marginTop:'10px', width:'100%'}} onClick={onBack}>
          ← Zurück
        </button>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;