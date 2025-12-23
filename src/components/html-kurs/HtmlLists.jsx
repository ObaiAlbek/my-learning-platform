import React, { useState } from "react";

function HtmlLists({ onTryIt, onNavigate, activePage }) {
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
        <h1>HTML – Listen</h1>

        <h2>Was sind Listen in HTML?</h2>
        <p>
          HTML bietet drei Arten von Listen. Alle Listen bestehen aus Listenelementen.
        </p>

        <ul className="info-list">
          <li>
            <b>&lt;ul&gt;</b>: Ungeordnete Liste (Aufzählungspunkte)
          </li>
          <li>
            <b>&lt;ol&gt;</b>: Geordnete Liste (Nummerierung/Buchstaben)
          </li>
          <li>
            <b>&lt;dl&gt;</b>: Definitionsliste (wie im Wörterbuch)
          </li>
        </ul>

        <h2>Ungeordnete Liste (ul)</h2>
        <p>
          Eine ungeordnete Liste wird mit <b>&lt;ul&gt;</b> erstellt, und jedes Element ist ein{" "}
          <b>&lt;li&gt;</b>.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">ul</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Beetroot</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Ginger</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Potato</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Radish</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              &lt;/<span className="code-tag">ul</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-list-1.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />
        <h2>ul – type Attribut</h2>
        <p>
          Du kannst bei <b>&lt;ul&gt;</b> den Aufzählungsstil mit <b>type</b> ändern.
          (Hinweis: In modernem HTML/CSS macht man das meistens mit CSS, aber so klappt es auch.)
        </p>

        <ul className="info-list">
          <li><code>&lt;ul type="square"&gt;</code> – Quadrate</li>
          <li><code>&lt;ul type="disc"&gt;</code> – Disc (Standard)</li>
          <li><code>&lt;ul type="circle"&gt;</code> – Kreise</li>
        </ul>

        <p><b>Beispiel: square</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">ul</span>{" "}
              <span className="code-text">type="square"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">HTML</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">CSS</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">JavaScript</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              &lt;/<span className="code-tag">ul</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-list-2.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />
        <h2>Geordnete Liste (ol)</h2>
        <p>
          Eine geordnete Liste wird mit <b>&lt;ol&gt;</b> erstellt. Die Elemente sind wieder{" "}
          <b>&lt;li&gt;</b>. Standard ist 1,2,3…
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">ol</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">HTML</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">CSS</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">JavaScript</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              &lt;/<span className="code-tag">ol</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-list-3.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />

        <h2>ol – type Attribut</h2>
        <p>Mit <b>type</b> kannst du das Nummerierungsformat ändern:</p>

        <ul className="info-list">
          <li><code>&lt;ol type="1"&gt;</code> – 1, 2, 3</li>
          <li><code>&lt;ol type="A"&gt;</code> – A, B, C</li>
          <li><code>&lt;ol type="a"&gt;</code> – a, b, c</li>
          <li><code>&lt;ol type="I"&gt;</code> – I, II, III</li>
          <li><code>&lt;ol type="i"&gt;</code> – i, ii, iii</li>
        </ul>

        <p><b>Beispiel: type="A"</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">ol</span>{" "}
              <span className="code-text">type="A"</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Pfirsich</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Aprikose</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">li</span>&gt;<span className="code-text">Banane</span>&lt;/<span className="code-tag">li</span>&gt;<br />
              &lt;/<span className="code-tag">ol</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-list-4.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />
        <h2>Definitionsliste (dl)</h2>
        <p>
          Eine Definitionsliste besteht aus:
          <b> &lt;dl&gt;</b> (Liste), <b>&lt;dt&gt;</b> (Begriff) und{" "}
          <b>&lt;dd&gt;</b> (Beschreibung).
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">dl</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">dt</span>&gt;<span className="code-text">HTML</span>&lt;/<span className="code-tag">dt</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">dd</span>&gt;<span className="code-text">Struktur einer Webseite</span>&lt;/<span className="code-tag">dd</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">dt</span>&gt;<span className="code-text">CSS</span>&lt;/<span className="code-tag">dt</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">dd</span>&gt;<span className="code-text">Design &amp; Layout</span>&lt;/<span className="code-tag">dd</span>&gt;<br />
              &lt;/<span className="code-tag">dl</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>
        <p style={{ marginTop: 15 }}>Ergebnis:</p>
        <img
          src="/images/html_images/html-list-5.png"
          alt="Ausgabe Tabelle mit Kopfzeile"
          className="course-image"
        />

      </main>
    </div>
  );
}

export default HtmlLists;