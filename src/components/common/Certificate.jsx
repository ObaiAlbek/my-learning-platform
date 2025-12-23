import React, { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient"; 

function Certificate({ score, totalQuestions, onRetry, onBack, courseName }) {
  const [userName, setUserName] = useState("Teilnehmer");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem("app_user"));
        if (storedUser && storedUser.email) {
          const { data } = await supabase
            .from("registration")
            .select("firstname, lastname")
            .eq("email", storedUser.email)
            .single();
          
          if (data) {
            setUserName(`${data.firstname} ${data.lastname}`);
          }
        }
      } catch (error) {
        console.error("Fehler beim Laden des Namens:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserName();
  }, []);

  // WICHTIG: Diese Funktion öffnet den Druck-Dialog
  const handlePrint = () => {
    window.print();
  };

  if (loading) return <div style={{textAlign: "center", padding: "20px"}}>Generiere Zertifikat...</div>;

  return (
    <div className="cert-container">
      
      {/* Das Zertifikat-Papier */}
      <div className="cert-paper printable-certificate">
        <div className="cert-border-outer">
          <div className="cert-border-inner">
            
            <div className="cert-header">
              <h1 className="cert-title">ZERTIFIKAT</h1>
              <p className="cert-subtitle">FÜR ERFOLGREICHE TEILNAHME</p>
            </div>

            <div className="cert-body">
              <p className="cert-text">Hiermit wird bestätigt, dass</p>
              
              <h2 className="cert-name">{userName}</h2>
              
              <p className="cert-text">
                den Kurs<br/>
                <strong style={{ color: "#d4af37", fontSize: "1.1em" }}>
                  {courseName || "HTML Grundlagen"}
                </strong><br/>
                auf DevBase erfolgreich abgeschlossen hat.
              </p>

              <div className="cert-score-box">
                Erreichte Punktzahl: {score} / {totalQuestions}
              </div>

              <p className="cert-date">
                Datum: {new Date().toLocaleDateString("de-DE")}
              </p>
            </div>

            <div className="cert-footer">
              <div className="cert-signature-block">
                <div className="cert-signature-line">DevBase Team</div>
                <div style={{ fontSize: "0.8rem", color: "#888" }}>Aussteller</div>
              </div>
              
              <div className="cert-seal">🏆</div>
            </div>

          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="cert-controls no-print">
        <h3 className="cert-success-msg">Herzlichen Glückwunsch!</h3>
        <p style={{marginBottom: "20px", color: "#666"}}>
          Du kannst dein Zertifikat jetzt herunterladen oder ausdrucken.
        </p>
        
        <div className="cert-buttons">
            <button onClick={handlePrint} className="btn-print">
              🖨️ Drucken / PDF speichern
            </button>
            
            <button onClick={onBack} className="btn-back">
              Zurück zur Übersicht
            </button>
        </div>
      </div>
    </div>
  );
}

export default Certificate;