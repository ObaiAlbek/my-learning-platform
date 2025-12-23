import React, { useState } from "react";

function HtmlTables({ onTryIt, onNavigate, activePage }) {
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
        <h1>HTML – Tabellen</h1>

        <p>
          HTML-Tabellen ordnen Daten in <b>Zeilen</b> und <b>Spalten</b>. Eine Tabelle wird mit{" "}
          <b>&lt;table&gt;</b> erstellt, Zeilen mit <b>&lt;tr&gt;</b> und Zellen mit{" "}
          <b>&lt;td&gt;</b>.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">head</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">title</span>&gt;
              <span className="code-text">HTML Tabellen</span>
              &lt;/<span className="code-tag">title</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">head</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">table</span>{" "}
              <span className="code-text">border="1"</span>&gt;<br />
              {"      "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"        "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 1</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"        "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 2</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"      "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              {"      "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"        "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 2, Spalte 1</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"        "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 2, Spalte 2</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"      "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;/<span className="code-tag">table</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Dies führt zu folgendem Ergebnis:</p>
        <img
          src="/images/html_images/ausgabe-tabelle-1.png"
          alt="Ausgabe Tabelle"
          className="course-image"
        />

        <p>
          Der Rahmen wird hier über <b>border="1"</b> gesetzt. Ohne Rahmen kannst du{" "}
          <b>border="0"</b> verwenden.
        </p>

        <h2>Tabellenüberschrift (th)</h2>
        <p>
          Mit <b>&lt;th&gt;</b> definierst du Überschriften-Zellen. Diese werden standardmäßig
          <b> fett</b> und <b>zentriert</b> dargestellt.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">table</span>{" "}
              <span className="code-text">border="1"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">th</span>&gt;
              <span className="code-text">Name</span>
              &lt;/<span className="code-tag">th</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">th</span>&gt;
              <span className="code-text">Gehalt</span>
              &lt;/<span className="code-tag">th</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Herr Müller</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">5000€</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              &lt;/<span className="code-tag">table</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/ausgabe-tabelle-2.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />

        <h2>Cellpadding und Cellspacing</h2>
        <p>
          <b>cellpadding</b> ist der Abstand <b>im</b> Feld (Padding),
          <b>cellspacing</b> ist der Abstand <b>zwischen</b> den Zellen.
          (Hinweis: In modernem HTML macht man das meist mit CSS.)
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">table</span>{" "}
              <span className="code-text">border="1" cellpadding="10" cellspacing="5"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zelle 1</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zelle 2</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              &lt;/<span className="code-tag">table</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/ausgabe-tabelle-3.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />


        <h2>Breite und Höhe (width/height)</h2>
        <p>
          Du kannst Breite und Höhe setzen (Pixel oder Prozent).
          (Auch hier nutzt man modern meist CSS.)
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">table</span>{" "}
              <span className="code-text">border="1" width="400" height="150"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 1</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 2</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              &lt;/<span className="code-tag">table</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/ausgabe-tabelle-4.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />

        <h2>Tabellenüberschrift (caption)</h2>
        <p>
          <b>&lt;caption&gt;</b> ist der Titel der Tabelle. Er erscheint oberhalb der Tabelle.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">table</span>{" "}
              <span className="code-text">border="1" width="100%"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">caption</span>&gt;
              <span className="code-text">Das ist die Caption (Überschrift)</span>
              &lt;/<span className="code-tag">caption</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">tr</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 1</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">td</span>&gt;
              <span className="code-text">Zeile 1, Spalte 2</span>
              &lt;/<span className="code-tag">td</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">tr</span>&gt;<br />
              &lt;/<span className="code-tag">table</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/ausgabe-tabelle-5.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />

      </main>
    </div>
  );
}

export default HtmlTables;