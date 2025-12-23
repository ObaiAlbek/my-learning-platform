import React from "react";
import { CssSidebar } from "./CssIntro";

function CssFonts({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Fonts (Schriftarten)</h1>
        
        <h2>Font-Family</h2>
        <div className="code-block">
            <pre><code>font-family: 'Arial', sans-serif;</code></pre>
        </div>
        <p style={{fontFamily: 'Arial, sans-serif', fontSize: '1.2rem'}}>Das ist Arial Text.</p>
        <p style={{fontFamily: 'Times New Roman, serif', fontSize: '1.2rem'}}>Das ist Times New Roman Text.</p>
        <p style={{fontFamily: 'Courier New, monospace', fontSize: '1.2rem'}}>Das ist Courier New (Code) Text.</p>

        <h2>Font-Size & Weight</h2>
        <div className="code-block">
            <pre><code>font-size: 24px; font-weight: bold;</code></pre>
        </div>
        <p style={{fontSize: '24px'}}>Großer Text (24px)</p>
        <p style={{fontWeight: 'bold'}}>Fetter Text (Bold)</p>
        <p style={{fontStyle: 'italic'}}>Kursiver Text (Italic)</p>
        <p style={{textDecoration: 'underline'}}>Unterstrichener Text</p>

        <button className="btn btn-primary" onClick={onTryIt} style={{marginTop: '20px'}}>Try it!</button>
      </main>
    </div>
  );
}
export default CssFonts;