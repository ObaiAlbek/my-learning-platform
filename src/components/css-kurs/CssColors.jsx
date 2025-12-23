import React from "react";
import { CssSidebar } from "./CssIntro"; // Sidebar wiederverwenden

function CssColors({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Farben</h1>
        <p>Farben können in CSS auf verschiedene Arten definiert werden:</p>
        
        <ul className="info-list">
            <li><b>Namen:</b> red, blue, green</li>
            <li><b>HEX:</b> #ff0000, #0000ff</li>
            <li><b>RGB:</b> rgb(255, 0, 0)</li>
            <li><b>RGBA:</b> rgba(255, 0, 0, 0.5) (mit Transparenz)</li>
        </ul>

        <h2>Beispiele</h2>
        <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px'}}>
            <div style={{background: 'red', color: 'white', padding: '15px', borderRadius: '5px'}}>red</div>
            <div style={{background: '#0000ff', color: 'white', padding: '15px', borderRadius: '5px'}}>#0000ff</div>
            <div style={{background: 'rgb(0, 128, 0)', color: 'white', padding: '15px', borderRadius: '5px'}}>rgb(0,128,0)</div>
            <div style={{background: 'rgba(255, 0, 0, 0.3)', color: 'black', padding: '15px', borderRadius: '5px', border:'1px solid red'}}>rgba(255,0,0,0.3)</div>
        </div>

        <h2>Verwendung</h2>
        
        <h3>1. Textfarbe (color)</h3>
        <div className="code-block">
            <pre><code>p &#123; color: blue; &#125;</code></pre>
        </div>
        <p style={{color: 'blue'}}>Dieser Text ist blau.</p>

        <h3>2. Hintergrundfarbe (background-color)</h3>
        <div className="code-block">
            <pre><code>div &#123; background-color: orange; &#125;</code></pre>
        </div>
        <div style={{backgroundColor: 'orange', padding: '10px', borderRadius: '5px'}}>Hintergrund ist Orange.</div>

        <button className="btn btn-primary" onClick={onTryIt} style={{marginTop: '20px'}}>Try it!</button>

       
      </main>
    </div>
  );
}
export default CssColors;