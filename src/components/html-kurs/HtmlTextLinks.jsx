import React, { useState } from "react";

function HtmlTextLinks({ onTryIt, onNavigate, activePage }) {
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
        <h1>HTML – Text Links</h1>

        <p>
          Links (Hyperlinks) verbinden Seiten miteinander. In HTML werden Links mit dem{" "}
          <b>&lt;a&gt;</b>-Tag (Anchor) erstellt. Alles zwischen{" "}
          <b>&lt;a&gt;</b> und <b>&lt;/a&gt;</b> ist klickbar.
        </p>

        <h2>Dokumente verlinken</h2>
        <p>
          Die wichtigste Eigenschaft ist <b>href</b> (Ziel-URL).
        </p>

        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">a</span>{" "}
              <span className="code-text">href="URL"</span>&gt;
              <span className="code-text">Text Link</span>
              &lt;/<span className="code-tag">a</span>&gt;
            </code>
          </pre>
        </div>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Klicken Sie auf den folgenden Link.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">a</span>{" "}
              <span className="code-text">href="https://www.google.com"</span>&gt;
              <span className="code-text">Google</span>
              &lt;/<span className="code-tag">a</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-link-basic-preview.png"
          alt="Einfacher Link Vorschau"
          className="course-image"
        />

        <h2>Das target-Attribut</h2>
        <p>
          Mit <b>target</b> bestimmst du, wo der Link geöffnet wird.
        </p>

        <table className="course-table">
          <thead>
            <tr>
              <th>Option</th>
              <th>Bedeutung</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>_blank</code></td>
              <td>Öffnet den Link in neuem Tab/Fenster.</td>
            </tr>
            <tr>
              <td><code>_self</code></td>
              <td>Öffnet den Link im gleichen Tab (Standard).</td>
            </tr>
            <tr>
              <td><code>_parent</code></td>
              <td>Öffnet im übergeordneten Frame.</td>
            </tr>
            <tr>
              <td><code>_top</code></td>
              <td>Öffnet im ganzen Fenster (ohne Frames).</td>
            </tr>
            <tr>
              <td><code>name</code></td>
              <td>Öffnet im benannten Frame/Fenster.</td>
            </tr>
          </tbody>
        </table>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">a</span>{" "}
              <span className="code-text">href="https://www.google.com"</span>{" "}
              <span className="code-text">target="_blank"</span>&gt;
              <span className="code-text">Google (neu)</span>
              &lt;/<span className="code-tag">a</span>&gt;<br />
              &lt;<span className="code-tag">a</span>{" "}
              <span className="code-text">href="https://www.google.com"</span>{" "}
              <span className="code-text">target="_self"</span>&gt;
              <span className="code-text">Google (gleich)</span>
              &lt;/<span className="code-tag">a</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Ergebnis (verschiedene Targets)</p>

        <h2>Download Links</h2>
        <p>
          Mit dem Attribut <b>download</b> kann ein Link eine Datei herunterladen (wenn der Browser
          das erlaubt).
        </p>

        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">a</span>{" "}
              <span className="code-text">href="/files/beispiel.pdf"</span>{" "}
              <span className="code-text">download</span>&gt;
              <span className="code-text">Download PDF</span>
              &lt;/<span className="code-tag">a</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        {/* Navigation weiter */}
        <div style={{ marginTop: 40 }}>
          <button
            className="btn btn-outline"
            type="button"
            onClick={() => onNavigate("home")}
          >
            Zurück zur Startseite
          </button>
        </div>
      </main>
    </div>
  );
}

export default HtmlTextLinks;