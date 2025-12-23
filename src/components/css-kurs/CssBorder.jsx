import React from "react";
import { CssSidebar } from "./CssIntro";

function CssBorder({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Border (Rahmen)</h1>
        <p>Mit der <code>border</code> Eigenschaft kannst du Rahmen um Elemente legen.</p>

        <h2>Rahmen-Stile (border-style)</h2>
        <div style={{display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'}}>
            <div style={{border: '3px solid #646cff', padding: '10px'}}>solid</div>
            <div style={{border: '3px dotted #646cff', padding: '10px'}}>dotted</div>
            <div style={{border: '3px dashed #646cff', padding: '10px'}}>dashed</div>
            <div style={{border: '6px double #646cff', padding: '10px'}}>double</div>
        </div>

        <h2>Kurzschreibweise</h2>
        <div className="code-block">
            <pre><code>
/* Breite | Stil | Farbe */
border: 5px solid red;
            </code></pre>
        </div>

        <h2>Runde Ecken (border-radius)</h2>
        <div className="code-block">
            <pre><code>border-radius: 15px;</code></pre>
        </div>
        <div style={{border: '2px solid #646cff', borderRadius: '15px', padding: '20px', backgroundColor: '#efeffd'}}>
            Ich habe runde Ecken!
        </div>

        <button className="btn btn-primary" onClick={onTryIt} style={{marginTop: '20px'}}>Try it!</button>

      </main>
    </div>
  );
}
export default CssBorder;