import React, { useState } from "react";

function CssIntro({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      {/* Die Sidebar ist jetzt smart und kümmert sich selbst um das Auf/Zuklappen */}
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      
      <main className="course-content">
        <h1>CSS – Einführung</h1>
        
        <h2>Was ist CSS?</h2>
        <p>
          <b>CSS</b> (Cascading Style Sheets) ist eine Sprache, die verwendet wird, um das Design
          und Layout von Webseiten zu gestalten. Während HTML die Struktur vorgibt, kümmert sich
          CSS um das Aussehen (Farben, Schriften, Abstände).
        </p>

        <h2>Wie implementiert man CSS?</h2>
        <p>Es gibt drei Möglichkeiten, CSS einzubinden:</p>

        <h3>1. Im &lt;head&gt; (Internal CSS)</h3>
        <div className="code-block">
          <pre>
            <code>
&lt;<span className="code-tag">head</span>&gt;<br/>
{"  "}&lt;<span className="code-tag">style</span>&gt;<br/>
{"    "}<span className="code-text">body</span> &#123;<br/>
{"      "}<span className="code-text">background-color</span>: <span className="code-text">#f2f2f2</span>;<br/>
{"    "}&#125;<br/>
{"    "}<span className="code-text">h1</span> &#123;<br/>
{"      "}<span className="code-text">color</span>: <span className="code-text">blue</span>;<br/>
{"    "}&#125;<br/>
{"  "}&lt;/<span className="code-tag">style</span>&gt;<br/>
&lt;/<span className="code-tag">head</span>&gt;
            </code>
          </pre>
        </div>

        <h3>2. Externe Datei (External CSS) - Empfohlen!</h3>
        <div className="code-block">
          <pre>
            <code>
&lt;<span className="code-tag">head</span>&gt;<br/>
{"  "}&lt;<span className="code-tag">link</span> <span className="code-text">rel="stylesheet" href="style.css"</span> /&gt;<br/>
&lt;/<span className="code-tag">head</span>&gt;
            </code>
          </pre>
        </div>

    
        <h2>Selektoren Beispiele</h2>
        
        <div className="example-box">
          <h3>Element Selektor (p)</h3>
          <p>Wählt alle <code>&lt;p&gt;</code> Tags aus.</p>
          <div className="code-block">
            <pre><code>p &#123; color: blue; font-size: 20px; &#125;</code></pre>
          </div>
          <div style={{border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}}>
             <p style={{color: 'blue', fontSize: '20px', margin: 0}}>Das ist ein blauer Absatz.</p>
          </div>
        </div>

        <div className="example-box" style={{marginTop: '30px'}}>
          <h3>Klassen Selektor (.meine-klasse)</h3>
          <p>Wählt alle Elemente mit <code>class="meine-klasse"</code> aus.</p>
          <div className="code-block">
            <pre><code>.meine-klasse &#123; color: red; &#125;</code></pre>
          </div>
          <div style={{border: '1px solid #ccc', padding: '10px', borderRadius: '5px'}}>
             <p style={{color: 'red', margin: 0}}>Text mit class="meine-klasse"</p>
          </div>
        </div>

        <button style={{ marginTop: 10 }} className="btn btn-primary" onClick={onTryIt}>Try it!</button>

       
      </main>
    </div>
  );
}

// --- HIER IST DIE ANGEPASSTE SIDEBAR ---
export const CssSidebar = ({ onNavigate, activePage }) => {
  // Zustand für das mobile Menü
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Funktion
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Navigieren und schließen
  const handleNav = (page) => {
    onNavigate(page);
    setIsSidebarOpen(false);
  };

  return (
    <aside className="course-sidebar">
      {/* Header mit Klick-Event */}
      <div className="sidebar-header" onClick={toggleSidebar}>
        <h3>CSS Kurs</h3>
        <span className={`sidebar-arrow ${isSidebarOpen ? "open" : ""}`}>▼</span>
      </div>

      {/* Liste mit Klassen für Animation */}
      <ul className={`sidebar-list ${isSidebarOpen ? "show" : ""}`}>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_intro" ? "active" : ""}`}
            onClick={() => handleNav("css_intro")}
          >
            Einführung
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_colors" ? "active" : ""}`}
            onClick={() => handleNav("css_colors")}
          >
            Farben
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_margin" ? "active" : ""}`}
            onClick={() => handleNav("css_margin")}
          >
            Margin
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_border" ? "active" : ""}`}
            onClick={() => handleNav("css_border")}
          >
            Border
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_position" ? "active" : ""}`}
            onClick={() => handleNav("css_position")}
          >
            Position
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_display" ? "active" : ""}`}
            onClick={() => handleNav("css_display")}
          >
            Display
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_fonts" ? "active" : ""}`}
            onClick={() => handleNav("css_fonts")}
          >
            Font
          </button>
        </li>

        {/* --- TRENNSTRICH & CSS TEST --- */}
        <hr style={{ margin: "15px 0", border: "0", borderTop: "1px solid #e0e0e0" }} />

        <li>
          <button
            type="button"
            className={`sidebar-link ${activePage === "css_test" ? "active" : ""}`}
            onClick={() => handleNav("css_test")}
            style={{ fontWeight: "bold", color: "#667eea" }}
          >
            📝 Abschluss-Test
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default CssIntro;