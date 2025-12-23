import React, { useState } from "react";

function HtmlKommentare({ onTryIt, onNavigate, activePage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNav = (page) => {
    onNavigate(page);
    setIsSidebarOpen(false);
  };

  return (
    <div className="course-container">
      {/* Sidebar mit Accordion-Logik */}
      <aside className="course-sidebar">
        <div className="sidebar-header" onClick={toggleSidebar}>
          <h3>HTML Kurs</h3>
          <span className={`sidebar-arrow ${isSidebarOpen ? "open" : ""}`}>▼</span>
        </div>

        <ul className={`sidebar-list ${isSidebarOpen ? "show" : ""}`}>
          <li><button type="button" className={`sidebar-link ${activePage === "html_intro" ? "active" : ""}`} onClick={() => handleNav("html_intro")}>Einführung</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_basic" ? "active" : ""}`} onClick={() => handleNav("html_basic")}>Basis Tags</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_meta" ? "active" : ""}`} onClick={() => handleNav("html_meta")}>Meta Tags</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_comments" ? "active" : ""}`} onClick={() => handleNav("html_comments")}>Kommentare</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_tables" ? "active" : ""}`} onClick={() => handleNav("html_tables")}>Tabellen</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_lists" ? "active" : ""}`} onClick={() => handleNav("html_lists")}>Listen</button></li>
          <li><button type="button" className={`sidebar-link ${activePage === "html_links" ? "active" : ""}`} onClick={() => handleNav("html_links")}>Text Links</button></li>
          <hr style={{ margin: "15px 0", border: "0", borderTop: "1px solid #e0e0e0" }} />
          <li><button type="button" className={`sidebar-link ${activePage === "html_test" ? "active" : ""}`} onClick={() => handleNav("html_test")} style={{ fontWeight: "bold", color: "#667eea" }}>📝 Abschluss-Test</button></li>
        </ul>
      </aside>

      {/* Content */}
      <main className="course-content">
        <h1>HTML – Kommentare</h1>

        <h2>Was ist ein Kommentar?</h2>
        <p>
          Ein Kommentar ist Code, der vom Browser ignoriert wird. Kommentare helfen dir,
          deinen HTML-Code übersichtlicher zu machen und Abschnitte zu erklären.
          HTML-Kommentare stehen zwischen{" "}
          <b>&lt;!-- ... --&gt;</b>.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">head</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">!--</span>{" "}
              <span className="code-text">Dokumentkopf beginnt</span>{" "}
              <span className="code-tag">--&gt;</span><br />
              {"    "}&lt;<span className="code-tag">title</span>&gt;
              <span className="code-text">Dies ist der Titel des Dokuments</span>
              &lt;/<span className="code-tag">title</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">!--</span>{" "}
              <span className="code-text">Dokumentkopf endet</span>{" "}
              <span className="code-tag">--&gt;</span><br />
              {"  "}&lt;/<span className="code-tag">head</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">!--</span>{" "}
              <span className="code-text">Ich bin heading</span>{" "}
              <span className="code-tag">--&gt;</span><br />
              {"    "}&lt;<span className="code-tag">h1</span>&gt;
              <span className="code-text">Kommentare</span>
              &lt;/<span className="code-tag">h1</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">!--</span>{" "}
              <span className="code-text">Ich bin ein Absatz</span>{" "}
              <span className="code-tag">--&gt;</span><br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Ich mag Kommentare.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>
          Dies führt zu einem Ergebnis, ohne den Kommentar-Inhalt anzuzeigen.
        </p>
        <img
          src="/images/html_images/html-comments-basic-preview.png"
          alt="Ausgabe Kommentare"
          className="course-image"
        />

        <h2>Gültige vs. ungültige Kommentare</h2>
        <p>
          Kommentare können nicht verschachtelt werden. Außerdem darf die Zeichenfolge{" "}
          <b>--</b> nicht innerhalb eines Kommentars vorkommen (außer beim Ende <b>--&gt;</b>).
          Wichtig: Zwischen <b>&lt;</b> und <b>!</b> darf kein Leerzeichen stehen.
        </p>

        <p><b>Gültiges Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!--</span>{" "}
              <span className="code-text">Dies ist ein gültiger Kommentar</span>{" "}
              <span className="code-tag">--&gt;</span><br />
              &lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Dokumenteninhalt gehört hier...</span>
              &lt;/<span className="code-tag">p</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}><b>Ergebnis:</b></p>
        <img
          src="/images/html_images/html-comment-valid-preview.png"
          alt="Ausgabe gültiger Kommentar"
          className="course-image"
        />

        <p style={{ marginTop: 20 }}>
          <b>Ungültiges Beispiel:</b> Hier ist ein Leerzeichen zwischen <b>&lt;</b> und <b>!</b>,
          deshalb wird der Text nicht als Kommentar erkannt.
        </p>

        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-text">  !-- Dies ist ein ungültiger Kommentar -- </span>&gt;<br />
              &lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Dokumenteninhalt gehört hier...</span>
              &lt;/<span className="code-tag">p</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}><b>Ergebnis:</b></p>
        <img
          src="/images/html_images/html-comment-invalid-preview.png"
          alt="Ausgabe ungültiger Kommentar"
          className="course-image"
        />

        <h2>Mehrzeilige Kommentare</h2>
        <p>
          Für mehrere Zeilen setzt du <b>&lt;!--</b> vor die erste Zeile und <b>--&gt;</b> nach
          die letzte Zeile.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!--</span><br />
              {"  "}<span className="code-text">
                Dies ist ein mehrzeiliger Kommentar, der beliebig viele
              </span><br />
              {"  "}<span className="code-text">Zeilen umfassen kann.</span><br />
              <span className="code-tag">--&gt;</span><br />
              &lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Dokumenteninhalt gehört hier...</span>
              &lt;/<span className="code-tag">p</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}><b>Ergebnis:</b></p>
        <img
          src="/images/html_images/html-comment-multiline-preview.png"
          alt="Ausgabe mehrzeilige Kommentare"
          className="course-image"
        />
      </main>
    </div>
  );
}

export default HtmlKommentare;