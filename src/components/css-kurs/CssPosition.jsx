import React from "react";
import { CssSidebar } from "./CssIntro";

function CssPosition({ onTryIt, onNavigate, activePage }) {
  return (
    <div className="course-container">
      <CssSidebar onNavigate={onNavigate} activePage={activePage} />
      <main className="course-content">
        <h1>CSS – Position</h1>
        <p>Die Eigenschaft <code>position</code> bestimmt, wie ein Element im Dokument platziert wird.</p>

        <h2>1. Relative & Absolute</h2>
        <p>Ein <b>absolutes</b> Element orientiert sich am nächsten <b>relativen</b> Vorfahren.</p>
        
        <div style={{
            position: 'relative', 
            width: '300px', 
            height: '200px', 
            border: '2px solid #333', 
            backgroundColor: '#eee',
            marginBottom: '20px'
        }}>
            <span style={{position: 'absolute', top: '10px', left: '10px'}}>Relative Box</span>
            
            <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                width: '100px',
                height: '100px',
                backgroundColor: '#646cff',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: '0.8rem'
            }}>
                Absolute (bottom: 10, right: 10)
            </div>
        </div>

        <h2>2. Fixed</h2>
        <p>Ein fixiertes Element bleibt beim Scrollen an der gleichen Stelle.</p>
        <div className="code-block">
            <pre><code>position: fixed; top: 0; right: 0;</code></pre>
        </div>

        <h2>3. Sticky</h2>
        <p>Ein klebriges Element verhält sich normal, bis man zu ihm scrollt, dann "klebt" es fest.</p>
        <div style={{height: '150px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px'}}>
            <p>Scroll mich nach unten...</p>
            <p>Weiter...</p>
            <div style={{position: 'sticky', top: '0', backgroundColor: 'yellow', padding: '5px', fontWeight: 'bold'}}>Ich bin Sticky!</div>
            <p>Inhalt...</p>
            <p>Viel Inhalt...</p>
            <p>Noch mehr Inhalt...</p>
            <p>Ende.</p>
        </div>

        <button className="btn btn-primary" onClick={onTryIt} style={{marginTop: '20px'}}>Try it!</button>

       
      </main>
    </div>
  );
}
export default CssPosition;