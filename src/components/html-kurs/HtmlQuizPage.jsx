import React, { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import Certificate from "../common/Certificate";

function HtmlQuizPage({ onBack, onLoginRedirect }) { // <--- Neue Prop: onLoginRedirect
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  
  // Neuer State: Ist der User eingeloggt?
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // 1. ZUERST PRÜFEN: Ist User eingeloggt?
    const user = localStorage.getItem("app_user");
    if (!user) {
        setLoading(false);
        setIsLoggedIn(false);
        return; // Abbrechen, keine Fragen laden
    }
    
    setIsLoggedIn(true);

    // 2. Wenn eingeloggt, Fragen laden
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select(`id, text, answers ( id, text, is_correct )`)
        .eq('topic', 'html');

      if (error) throw error;
      setQuestions(data);
    } catch (error) {
      console.error("Fehler:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  // --- FALL 1: NICHT EINGELOGGT ---
  if (!loading && !isLoggedIn) {
      return (
        <div style={styles.container}>
            <div style={styles.card}>
                <div style={{textAlign: 'center', padding: '20px'}}>
                    <h2 style={{color: '#e53e3e'}}>🔒 Zugriff verweigert</h2>
                    <p style={{fontSize: '1.1rem', color: '#555', margin: '20px 0'}}>
                        Du musst dich <strong>anmelden</strong>, um am Abschluss-Test teilzunehmen und dein Zertifikat zu erhalten.
                    </p>
                    <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <button onClick={onLoginRedirect} style={styles.btnPrimary}>Jetzt einloggen</button>
                        <button onClick={onBack} style={styles.btnOutline}>Zurück</button>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  if (loading) return <div style={styles.center}>Lade Fragen...</div>;
  if (questions.length === 0) return <div style={styles.center}>Keine Fragen gefunden.</div>;

  // --- FALL 2: ERGEBNIS ANZEIGEN ---
  if (showResult) {
    if (score > 8) {
        return (
            <Certificate 
                score={score} 
                totalQuestions={questions.length} 
                onRetry={resetQuiz} 
                onBack={onBack}
                courseName="HTML Grundlagen"
            />
        );
    } else {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <div style={{textAlign: 'center'}}>
                        <h2 style={{fontSize: '2rem', marginBottom: '10px', color: '#e53e3e'}}>Leider nicht bestanden. 😕</h2>
                        <p style={{fontSize: '1.2rem', color: '#555'}}>
                          Du hast <strong>{score}</strong> von <strong>{questions.length}</strong> Punkten.
                          <br/>Du brauchst mindestens 9 Punkte für das Zertifikat.
                        </p>
                        <div style={{marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center'}}>
                            <button onClick={resetQuiz} style={styles.btnPrimary}>Nochmal versuchen</button>
                            <button onClick={onBack} style={styles.btnOutline}>Zurück zum Kurs</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  }

  // --- FALL 3: QUIZ ANZEIGEN ---
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.badge}>Frage {currentQuestion + 1} / {questions.length}</span>
          <button onClick={onBack} style={styles.closeBtn}>✕</button>
        </div>

        <h3 style={styles.questionText}>{questions[currentQuestion].text}</h3>

        <div style={styles.answersGrid}>
          {questions[currentQuestion].answers.map((answer) => (
            <button
              key={answer.id}
              onClick={() => handleAnswerClick(answer.is_correct)}
              style={styles.answerBtn}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { padding: '40px 20px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '80vh', backgroundColor: '#f4f7fe' },
  center: { textAlign: 'center', marginTop: '50px', fontSize: '1.2rem', color: '#667eea' },
  card: { backgroundColor: 'white', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '600px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  badge: { backgroundColor: '#e0e7ff', color: '#667eea', padding: '5px 12px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem' },
  closeBtn: { background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer', color: '#999' },
  questionText: { fontSize: '1.4rem', color: '#333', marginBottom: '30px', lineHeight: '1.4' },
  answersGrid: { display: 'flex', flexDirection: 'column', gap: '15px' },
  answerBtn: { padding: '15px 20px', border: '2px solid #eef2f6', borderRadius: '12px', backgroundColor: 'white', fontSize: '1rem', color: '#444', cursor: 'pointer', textAlign: 'left', transition: '0.2s' },
  btnPrimary: { padding: '12px 24px', backgroundColor: '#667eea', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' },
  btnOutline: { padding: '12px 24px', backgroundColor: 'transparent', color: '#667eea', border: '1px solid #667eea', borderRadius: '8px', cursor: 'pointer', fontSize: '1rem' }
};

export default HtmlQuizPage;