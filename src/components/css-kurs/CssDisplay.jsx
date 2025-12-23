import React from "react";
import { CssSidebar } from "./CssIntro";

function CssDisplay({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Display</h1>
        <p>Steuert das Verhalten von Boxen.</p>

        <h2>Block vs. Inline</h2>
        <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '20px'}}>
            <span style={{backgroundColor: 'aquamarine', display: 'block', marginBottom: '5px', padding: '5px'}}>display: block (Nimmt ganze Breite)</span>
            <span style={{backgroundColor: 'aquamarine', display: 'block', padding: '5px'}}>display: block (Neue Zeile)</span>
        </div>

        <div style={{border: '1px solid #ccc', padding: '10px', marginBottom: '20px'}}>
            <span style={{backgroundColor: 'orange', padding: '5px'}}>display: inline</span>
            <span style={{backgroundColor: 'orange', padding: '5px'}}>display: inline (nebeneinander)</span>
        </div>

        <h2>Flexbox (Modernes Layout)</h2>
        <div className="code-block"><pre><code>display: flex; gap: 10px;</code></pre></div>
        <div style={{display: 'flex', gap: '10px', padding: '10px', backgroundColor: '#eee'}}>
            <div style={{background: '#646cff', color: 'white', padding: '20px', flex: 1}}>1</div>
            <div style={{background: '#646cff', color: 'white', padding: '20px', flex: 1}}>2</div>
            <div style={{background: '#646cff', color: 'white', padding: '20px', flex: 1}}>3</div>
        </div>

        <h2>Grid (Gitter)</h2>
        <div className="code-block"><pre><code>display: grid; grid-template-columns: 1fr 1fr;</code></pre></div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', padding: '10px', backgroundColor: '#eee'}}>
            <div style={{background: '#646cff', color: 'white', padding: '20px'}}>1</div>
            <div style={{background: '#646cff', color: 'white', padding: '20px'}}>2</div>
            <div style={{background: '#646cff', color: 'white', padding: '20px'}}>3</div>
            <div style={{background: '#646cff', color: 'white', padding: '20px'}}>4</div>
        </div>

        <button className="btn btn-primary" onClick={onTryIt} style={{marginTop: '20px'}}>Try it!</button>
      </main>
    </div>
  );
}
export default CssDisplay;