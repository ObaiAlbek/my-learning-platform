import React, { useState } from "react";
import { supabase } from "../../supabaseClient";
import emailjs from '@emailjs/browser';

function RegisterPage({ onBack, onLogin, onRegisterSuccess }) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", gender: "m", email: "", 
    password: "", confirm: "", number: "", land: "", geburt: ""
  });

  const [userCode, setUserCode] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (message.text) setMessage({ text: "", type: "" });
  };

  const generateCode = () => Math.floor(100000 + Math.random() * 900000).toString();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, gender, email, password, confirm, number, land, geburt } = formData;

    if (!firstName || !lastName || !email || !password || !confirm || !number || !land || !geburt) {
      setMessage({ text: "Bitte füllen Sie alle Felder aus.", type: "error" });
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
    setMessage({ text: "Verarbeite Daten...", type: "success" });

    try {
      const { data: existingUser } = await supabase.from('registration').select('email').eq('email', email).single();
      if (existingUser) {
        setMessage({ text: "E-Mail bereits vergeben.", type: "error" });
        setLoading(false);
        return;
      }

      const newCode = generateCode();

      const { error: regError } = await supabase.from('registration').insert([{
          firstname: firstName, lastname: lastName, gender: gender, email: email, 
          password: password, number: number, land: land, geburt: geburt, verified: false 
      }]);
      if (regError) throw regError;

      await supabase.from('verify_code').delete().eq('email', email);
      const { error: codeError } = await supabase.from('verify_code').insert([{ email: email, code: newCode }]);
      if (codeError) throw codeError;

      const emailParams = { to_email: email, to_name: firstName, code: newCode };
      await emailjs.send("service_51gkd5b", "template_o4wrfhj", emailParams, "3Bnp_eOhW8v8dln30");

      setMessage({ text: "Code gesendet!", type: "success" });
      setStep(2);

    } catch (error) {
      console.error(error);
      setMessage({ text: "Fehler: " + (error.message), type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const { data: dbCodeEntry } = await supabase.from('verify_code').select('code').eq('email', formData.email).single();

      if (!dbCodeEntry || dbCodeEntry.code !== userCode) {
        setMessage({ text: "Falscher Code!", type: "error" });
        setLoading(false);
        return;
      }

      const { error: updateError } = await supabase.from('registration').update({ verified: true }).eq('email', formData.email);
      if (updateError) throw updateError;

      await supabase.from('verify_code').delete().eq('email', formData.email);
      setMessage({ text: "Erfolgreich! Login...", type: "success" });
      setTimeout(() => { onRegisterSuccess?.(); }, 1500);

    } catch (error) {
      console.error(error);
      setMessage({ text: "Verifizierungsfehler.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '600px' }}> {/* Etwas breiter für Register */}
        
        <h1 className="auth-title">{step === 1 ? "Registrieren" : "Code eingeben"}</h1>
        <p className="auth-subtitle">
            {step === 1 ? "Erstelle dein kostenloses Konto." : `Wir haben einen Code an ${formData.email} gesendet.`}
        </p>

        {step === 1 && (
          <form onSubmit={handleSubmit} className="auth-form">
            
            {/* REIHE 1: Vorname & Nachname */}
            <div className="auth-row">
              <label className="auth-label">Vorname
                <input className="auth-input" type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Max" />
              </label>
              <label className="auth-label">Nachname
                <input className="auth-input" type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Mustermann" />
              </label>
            </div>

            {/* REIHE 2: Geschlecht & Geburtstag */}
            <div className="auth-row">
                <label className="auth-label">Geschlecht
                <select className="auth-input" name="gender" value={formData.gender} onChange={handleChange}>
                    <option value="m">Männlich</option>
                    <option value="f">Weiblich</option>
                    <option value="o">Divers</option>
                </select>
                </label>
                <label className="auth-label">Geburtsdatum
                <input className="auth-input" type="date" name="geburt" value={formData.geburt} onChange={handleChange} />
                </label>
            </div>
            
            <label className="auth-label">E-Mail Adresse
              <input className="auth-input" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="name@beispiel.de" />
            </label>
            
            {/* REIHE 3: Telefon & Land */}
             <div className="auth-row">
                <label className="auth-label">Telefon
                <input className="auth-input" type="number" name="number" value={formData.number} onChange={handleChange} placeholder="0176..." />
                </label>
                <label className="auth-label">Land
                <input className="auth-input" type="text" name="land" value={formData.land} onChange={handleChange} placeholder="Deutschland" />
                </label>
            </div>

            <label className="auth-label">Passwort (min. 8 Zeichen)
              <input className="auth-input" type="password" name="password" value={formData.password} onChange={handleChange} placeholder="********" />
            </label>

            <label className="auth-label">Passwort wiederholen
              <input className="auth-input" type="password" name="confirm" value={formData.confirm} onChange={handleChange} placeholder="********" />
            </label>

            <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>
              {loading ? "Warte..." : "Konto erstellen"}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerify} className="auth-form">
            <label className="auth-label">Code
              <input className="auth-input" type="text" value={userCode} onChange={(e) => setUserCode(e.target.value)} placeholder="123456" maxLength="6" style={{textAlign: 'center', fontSize: '24px', letterSpacing: '5px'}} />
            </label>
            <button className="btn btn-primary auth-submit" type="submit" disabled={loading}>
              {loading ? "Prüfe..." : "Bestätigen"}
            </button>
            <p style={{textAlign: 'center', color: '#666', cursor: 'pointer', marginTop: '10px'}} onClick={() => setStep(1)}>
                E-Mail falsch? Zurück.
            </p>
          </form>
        )}

        {message.text && (
            <div style={{
                marginTop: '20px', padding: '10px', borderRadius: '8px', textAlign: 'center',
                backgroundColor: message.type === 'error' ? '#ffe6e6' : '#e6fffa',
                color: message.type === 'error' ? '#d93025' : '#00796b',
                border: message.type === 'error' ? '1px solid #d93025' : '1px solid #00796b'
            }}>
                {message.text}
            </div>
        )}

        {step === 1 && (
            <div className="auth-footer">
            <span>Schon ein Konto?</span>
            <button type="button" className="auth-link" onClick={onLogin}>Einloggen</button>
            </div>
        )}

        {step === 1 && (
          <button className="btn btn-outline auth-back" type="button" onClick={onBack}>
            ← Zurück
          </button>
        )}
      </div>
    </div>
  );
}

export default RegisterPage;