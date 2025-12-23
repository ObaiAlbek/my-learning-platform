import React, { useState } from "react";

function HtmlIntro({ onTryIt, onNavigate, activePage }) {
  // Zustand für das mobile Sidebar-Menü
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Funktion 1: Menü umschalten (Auf / Zu)
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Funktion 2: Navigieren und Menü schließen (wenn man einen Link klickt)
  const handleNav = (page) => {
    onNavigate(page);
    setIsSidebarOpen(false);
  };

  return (
    <div className="course-container">
      
      {/* --- SIDEBAR --- */}
      <aside className="course-sidebar">
        
        {/* Header mit Toggle-Funktion */}
        <div className="sidebar-header" onClick={toggleSidebar}>
          <h3>HTML Kurs</h3>
          {/* Der Pfeil bekommt die Klasse "open" für die CSS-Drehung, statt das Zeichen zu ändern */}
          <span className={`sidebar-arrow ${isSidebarOpen ? "open" : ""}`}>
            ▼
          </span>
        </div>

        {/* Die Liste: Zeigt sich nur, wenn isSidebarOpen true ist */}
        <ul className={`sidebar-list ${isSidebarOpen ? "show" : ""}`}>
          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_intro" ? "active" : ""}`}
              onClick={() => handleNav("html_intro")}
            >
              Einführung
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_basic" ? "active" : ""}`}
              onClick={() => handleNav("html_basic")}
            >
              Basis Tags
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_meta" ? "active" : ""}`}
              onClick={() => handleNav("html_meta")}
            >
              Meta Tags
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_comments" ? "active" : ""}`}
              onClick={() => handleNav("html_comments")}
            >
              Kommentare
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_tables" ? "active" : ""}`}
              onClick={() => handleNav("html_tables")}
            >
              Tabellen
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_lists" ? "active" : ""}`}
              onClick={() => handleNav("html_lists")}
            >
              Listen
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_links" ? "active" : ""}`}
              onClick={() => handleNav("html_links")}
            >
              Text Links
            </button>
          </li>

          {/* --- TRENNSTRICH & TEST --- */}
          <hr style={{ margin: "15px 0", border: "0", borderTop: "1px solid #e0e0e0" }} />

          <li>
            <button
              type="button"
              className={`sidebar-link ${activePage === "html_test" ? "active" : ""}`}
              onClick={() => handleNav("html_test")}
              style={{ fontWeight: "bold", color: "#667eea" }}
            >
              📝 Abschluss-Test
            </button>
          </li>
        </ul>
      </aside>


      {/* --- CONTENT (Bleibt gleich) --- */}
      <main className="course-content">
        <h1>HTML Einführung</h1>

        <p>
          <b>HTML</b> steht für <b>Hyper Text Markup Language</b>. Es ist die
          wichtigste Sprache im Web, um Webseiten zu strukturieren.
        </p>

        <img
          src="/images/html_images/html-element-structure.jpg"
          alt="HTML Struktur"
          className="course-image"
        />

        <h2>Warum HTML lernen?</h2>
        <ul className="info-list">
          <li>🚀 <b>Webseiten erstellen:</b> Ohne HTML gibt es keine Webseite.</li>
          <li>🎨 <b>Basis für Design:</b> CSS funktioniert nur, wenn das HTML stimmt.</li>
        </ul>

        <h2>Dein erstes „Hallo Welt“</h2>
        <p>Kopiere diesen Code, um deine erste Seite zu bauen:</p>

        <div className="centered-section">
          <div className="code-block centered-block">
            <pre>
              <code>
                &lt;<span className="code-tag">!DOCTYPE html</span>&gt; <br/>
                &lt;<span className="code-tag">html</span>&gt; <br/>
                &lt;<span className="code-tag">body</span>&gt; <br/>
                &lt;<span className="code-tag">h1</span>&gt; <span className="code-text">Das ist eine Überschrift</span>&lt;/<span className="code-tag">h1</span>&gt; <br/>
                &lt;<span className="code-tag">p</span>&gt;<span className="code-text">Hallo Welt!</span>&lt;/<span className="code-tag">p</span>&gt; <br/>
                &lt;/<span className="code-tag">body</span>&gt; <br/> &lt;/<span className="code-tag">html</span>&gt;
              </code>
            </pre>
          </div>

          <button className="btn btn-primary" type="button" onClick={onTryIt}>
            Try it!
          </button>

          <h3 style={{ marginTop: "30px", marginBottom: "15px" }}>
            Die Ausgabe im Browserfenster:
          </h3>

          <img
            src="/images/html_images/browser-preview.png"
            alt="Browser Vorschau"
            className="browser-preview-img centered-block"
          />
        </div>

        <h2>Wichtige HTML Tags</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Tag</th>
              <th>Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>&lt;!DOCTYPE&gt;</code></td>
              <td>Definiert den Dokumenttyp und die verwendete HTML-Version.</td>
            </tr>
            <tr>
              <td><code>&lt;html&gt;</code></td>
              <td>Wurzelelement eines HTML-Dokuments.</td>
            </tr>
            <tr>
              <td><code>&lt;head&gt;</code></td>
              <td>Enthält Metadaten und Ressourcen des Dokuments.</td>
            </tr>
            <tr>
              <td><code>&lt;title&gt;</code></td>
              <td>Legt den Titel des Dokuments fest.</td>
            </tr>
            <tr>
              <td><code>&lt;body&gt;</code></td>
              <td>Enthält den sichtbaren Inhalt der Webseite.</td>
            </tr>
            <tr>
              <td><code>&lt;h1&gt;</code></td>
              <td>Überschrift erster Ordnung.</td>
            </tr>
            <tr>
              <td><code>&lt;p&gt;</code></td>
              <td>Ein Textabsatz (Paragraph).</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default HtmlIntro;