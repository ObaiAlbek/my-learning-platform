import React from "react";
import { CssSidebar } from "./CssIntro";

function CssMargin({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Margin (Außenabstand)</h1>
        <p>Margin erzeugt Platz <b>um</b> Elemente herum, außerhalb der definierten Grenzen.</p>

        <div className="code-block">
            <pre><code>div &#123; margin: 50px; &#125;</code></pre>
        </div>

        <div style={{border: '2px dashed #ccc', padding: '0', backgroundColor: '#eee'}}>
            <div style={{backgroundColor: '#646cff', color: 'white', padding: '20px', margin: '50px'}}>
                Dieses Element hat 50px Margin zu allen Seiten.
            </div>
        </div>

        <h2>Spezifische Seiten</h2>
        <ul className="info-list">
            <li><code>margin-top</code></li>
            <li><code>margin-right</code></li>
            <li><code>margin-bottom</code></li>
            <li><code>margin-left</code></li>
        </ul>

        <h2>Kurzschreibweise</h2>
        <div className="code-block">
            <pre><code>
/* Oben | Rechts | Unten | Links */
margin: 10px 20px 30px 40px;

/* Oben/Unten | Links/Rechts */
margin: 10px 20px;
            </code></pre>
        </div>

        <button className="btn btn-primary" onClick={onTryIt}>Try it!</button>

      </main>
    </div>
  );
}
export default CssMargin;