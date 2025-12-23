import React, { useMemo, useState } from "react";

export default function HtmlTryIt({ onBack }) {
  // Startet leer (ohne Vorlage)
  const [html, setHtml] = useState("");

  const srcDoc = useMemo(() => html, [html]);

  return (
    <div className="tryit-page">
      {/* Header: Zurück links, Titel in der Mitte */}
      <div className="tryit-header">
        <button className="btn btn-outline" type="button" onClick={onBack}>
          Zurück
        </button>

        <h1 className="tryit-title">HTML Live Editor</h1>

        {/* Platzhalter rechts, damit der Titel wirklich mittig bleibt */}
        <div className="tryit-spacer" />
      </div>

      <div className="tryit-grid">
        <div>
          <h3>Editor</h3>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="tryit-textarea"
            placeholder="Schreibe hier dein HTML..."
          />
        </div>

        <div>
          <h3>Ausgabe</h3>
          <iframe
            title="preview"
            srcDoc={srcDoc}
            sandbox="allow-scripts"
            className="tryit-iframe"
          />
        </div>
      </div>
    </div>
  );
}
