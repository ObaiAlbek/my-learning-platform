import React, { useState } from "react";

function HtmlMetaTags({ onTryIt, onNavigate, activePage }) {
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
        <h1>HTML – Meta Tags</h1>

        <h2>Was sind Meta-Tags?</h2>
        <p>
          Meta-Tags liefern <b>Metadaten</b> (zusätzliche Informationen) über ein Dokument,
          z. B. Autor, Beschreibung, Schlüsselwörter oder Refresh/Weiterleitung.
          Das <b>&lt;meta&gt;</b>-Tag ist ein <b>leeres Element</b> und hat deshalb kein
          schließendes Tag.
        </p>

        <h2>Meta-Tags im Dokument einfügen</h2>
        <p>
          Meta-Tags gehören in den <b>&lt;head&gt;</b>-Bereich (zwischen{" "}
          <b>&lt;head&gt;</b> und <b>&lt;/head&gt;</b>).
        </p>

        <h2>Wichtige Attribute</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Attribut</th>
              <th>Bedeutung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><b>name</b></td>
              <td>Name der Eigenschaft (z. B. keywords, description, author).</td>
            </tr>
            <tr>
              <td><b>content</b></td>
              <td>Wert der Eigenschaft.</td>
            </tr>
            <tr>
              <td><b>http-equiv</b></td>
              <td>HTTP-Header ähnliche Angaben (z. B. refresh).</td>
            </tr>
            <tr>
              <td><b>charset</b></td>
              <td>Zeichencodierung (z. B. UTF-8).</td>
            </tr>
          </tbody>
        </table>

        {/* 1) Keywords */}
        <h2>Bestimmte Schlüsselwörter (keywords)</h2>
        <p>
          Mit <b>keywords</b> kannst du Begriffe angeben, die den Inhalt beschreiben.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">head</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">title</span>&gt;
              <span className="code-text">Meta - Tags Beispiel</span>
              &lt;/<span className="code-tag">title</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">meta</span>{" "}
              <span className="code-text">name="keywords" content="HTML, Meta Tags, Metadaten"</span> /&gt;<br />
              {"  "}&lt;/<span className="code-tag">head</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Hallo HTML</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        {/* 2) Description */}
        <h2>Dokumentbeschreibung (description)</h2>
        <p>
          Mit <b>description</b> gibst du eine kurze Zusammenfassung der Seite an.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">head</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">meta</span>{" "}
              <span className="code-text">name="description" content="Lernen Sie Meta-Tags."</span> /&gt;<br />
              {"  "}&lt;/<span className="code-tag">head</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        {/* 3) Refresh */}
        <h2>Dokumentaktualisierung (refresh)</h2>
        <p>
          Du kannst die Seite automatisch nach einer bestimmten Zeit aktualisieren.
          Beispiel: alle 5 Sekunden.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">meta</span>{" "}
              <span className="code-text">http-equiv="refresh" content="5"</span> /&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        {/* 4) Redirect */}
        <h2>Seitenumleitung (redirect)</h2>
        <p>
          Du kannst nach X Sekunden auf eine andere URL weiterleiten.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">meta</span>{" "}
              <span className="code-text">
                http-equiv="refresh" content="5; url=https://www.google.com"
              </span>{" "}
              /&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        {/* 5) Author */}
        <h2>Autorenname (author)</h2>
        <p>
          Du kannst den Namen des Autors definieren.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">meta</span>{" "}
              <span className="code-text">name="author" content="Obai Albek"</span> /&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

      </main>
    </div>
  );
}

export default HtmlMetaTags;