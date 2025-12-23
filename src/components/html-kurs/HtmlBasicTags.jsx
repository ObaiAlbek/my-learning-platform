import React, { useState } from "react";

function HtmlBasicTags({ onTryIt, onNavigate, activePage }) {
  // Zustand für Sidebar
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
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_intro" ? "active" : ""}`} onClick={() => handleNav("html_intro")}>Einführung</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_basic" ? "active" : ""}`} onClick={() => handleNav("html_basic")}>Basis Tags</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_meta" ? "active" : ""}`} onClick={() => handleNav("html_meta")}>Meta Tags</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_comments" ? "active" : ""}`} onClick={() => handleNav("html_comments")}>Kommentare</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_tables" ? "active" : ""}`} onClick={() => handleNav("html_tables")}>Tabellen</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_lists" ? "active" : ""}`} onClick={() => handleNav("html_lists")}>Listen</button>
          </li>
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_links" ? "active" : ""}`} onClick={() => handleNav("html_links")}>Text Links</button>
          </li>
          <hr style={{ margin: "15px 0", border: "0", borderTop: "1px solid #e0e0e0" }} />
          <li>
            <button type="button" className={`sidebar-link ${activePage === "html_test" ? "active" : ""}`} onClick={() => handleNav("html_test")} style={{ fontWeight: "bold", color: "#667eea" }}>📝 Abschluss-Test</button>
          </li>
        </ul>
      </aside>

      {/* Content */}
      <main className="course-content">
        <h1>HTML – Basis Tags</h1>

        {/* 1) Überschriften */}
        <h2>Überschriften-Tags</h2>
        <p>
          HTML hat sechs Ebenen von Überschriften:
          <b> &lt;h1&gt;</b>, <b>&lt;h2&gt;</b>, <b>&lt;h3&gt;</b>, <b>&lt;h4&gt;</b>,{" "}
          <b>&lt;h5&gt;</b> und <b>&lt;h6&gt;</b>. Der Browser setzt automatisch Abstand
          vor und nach einer Überschrift.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">head</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">title</span>&gt;
              <span className="code-text">Überschriften Beispiele</span>
              &lt;/<span className="code-tag">title</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">head</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h1</span>&gt;
              <span className="code-text">Das ist Überschrift 1.</span>
              &lt;/<span className="code-tag">h1</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h2</span>&gt;
              <span className="code-text">Das ist Überschrift 2.</span>
              &lt;/<span className="code-tag">h2</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h3</span>&gt;
              <span className="code-text">Das ist Überschrift 3.</span>
              &lt;/<span className="code-tag">h3</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h4</span>&gt;
              <span className="code-text">Das ist Überschrift 4.</span>
              &lt;/<span className="code-tag">h4</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h5</span>&gt;
              <span className="code-text">Das ist Überschrift 5.</span>
              &lt;/<span className="code-tag">h5</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">h6</span>&gt;
              <span className="code-text">Das ist Überschrift 6.</span>
              &lt;/<span className="code-tag">h6</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>
          <b>Ergebnis:</b>
        </p>
        <img
          src="/images/html_images/html-headings-preview.png"
          alt="HTML Überschriften Vorschau"
          className="course-image"
        />

        {/* 2) Absatz */}
        <h2>Absatz-Tag</h2>
        <p>
          Das <b>&lt;p&gt;</b>-Tag strukturiert Text in Absätze. Jeder Absatz steht
          zwischen <b>&lt;p&gt;</b> und <b>&lt;/p&gt;</b>.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Hier ist ein erster Absatz des Textes.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Hier ist ein zweiter Absatz des Textes.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Hier ist ein dritter Absatz des Textes.</span>
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
          <b>Ergebnis:</b>
        </p>
        <img
          src="/images/html_images/html-paragraphs-preview.png"
          alt="HTML Absätze Vorschau"
          className="course-image"
        />

        {/* 3) Zeilenumbruch */}
        <h2>Zeilenumbruch-Tag</h2>
        <p>
          Das <b>&lt;br&gt;</b>-Tag erzeugt einen Zeilenumbruch. Es ist ein „leeres Element“,
          daher gibt es kein <b>&lt;/br&gt;</b>.
        </p>

        <p><b>Beispiel</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Hallo</span>
              &lt;<span className="code-tag">br</span>&gt;<br />
              {"    "}<span className="code-text">Sie haben Ihren Auftrag pünktlich geliefert.</span>
              &lt;<span className="code-tag">br</span>&gt;<br />
              {"    "}<span className="code-text">Danke</span>
              &lt;<span className="code-tag">br</span>&gt;<br />
              {"    "}<span className="code-text">Herr Müller.</span>
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
          <b>Ergebnis:</b>
        </p>
        <img
          src="/images/html_images/html-line-break-preview.png"
          alt="HTML Zeilenumbruch Vorschau"
          className="course-image"
        />

        {/* 4) Center (optional) */}
        <h2>Inhalt zentrieren</h2>
        <p>
          Das Tag <b>&lt;center&gt;</b> ist veraltet. Heute zentriert man mit CSS
          (z. B. <code>text-align: center;</code>).
        </p>

        <p><b>Beispiel (veraltet)</b></p>
        <div className="code-block">
          <pre>
            <code>
              &lt;<span className="code-tag">!DOCTYPE html</span>&gt;<br />
              &lt;<span className="code-tag">html</span>&gt;<br />
              {"  "}&lt;<span className="code-tag">body</span>&gt;<br />
              {"    "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Dieser Text steht nicht in der Mitte.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              <br />
              {"    "}&lt;<span className="code-tag">center</span>&gt;<br />
              {"      "}&lt;<span className="code-tag">p</span>&gt;
              <span className="code-text">Dieser Text steht in der Mitte.</span>
              &lt;/<span className="code-tag">p</span>&gt;<br />
              {"    "}&lt;/<span className="code-tag">center</span>&gt;<br />
              {"  "}&lt;/<span className="code-tag">body</span>&gt;<br />
              &lt;/<span className="code-tag">html</span>&gt;
            </code>
          </pre>
        </div>

        <button className="btn btn-primary" type="button" onClick={onTryIt}>
          Try it!
        </button>

        <p style={{ marginTop: 15 }}>
          <b>Ergebnis:</b>
        </p>
        <img
          src="/images/html_images/html-center-tag-preview.png"
          alt="HTML Zentrieren Vorschau"
          className="course-image"
        />
      </main>
    </div>
  );
}

export default HtmlBasicTags;