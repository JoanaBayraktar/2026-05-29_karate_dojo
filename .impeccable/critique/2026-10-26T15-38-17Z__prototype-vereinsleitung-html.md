---
target: Vereinsleitung
total_score: 22
max_score: 32
na_heuristics: 7,9
p0_count: 0
p1_count: 2
target_identity: "file:/Users/joanabayraktar/Documents/Dojo/prototype/vereinsleitung.html"
target_fingerprint: "sha256:cc10adc237f779cc159afe78141c2277a5bbd2bfae70ea1dcd165953236c4d05"
target_path: /Users/joanabayraktar/Documents/Dojo/prototype/vereinsleitung.html
timestamp: 2026-10-26T15-38-17Z
slug: prototype-vereinsleitung-html
---
Methode: zwei unabhängige Prüfungen (A: /root/design_review · B: /root/technical_review).

Die Vereinsleitung wirkt wie ein ordentliches, aber austauschbares Personenverzeichnis. Echte Porträts und ruhige Typografie passen zum Verein. Es fehlen eine erkennbare Organisationsstruktur und ein sinnvoller nächster Schritt nach der Personenauswahl. Desktop und Mobilansicht (390×844) zeigen keinen offensichtlichen Überlauf oder abgeschnittenen Dialog.

| Heuristik | Wert | Befund |
|---|---:|---|
| Systemstatus | 3 | Aktive Navigation und Fokuswechsel vorhanden |
| Sprache / Wirklichkeit | 3 | Rollen verständlich, Einstieg bürokratisch |
| Kontrolle | 3 | Escape und Fokusrückgabe funktionieren; Fokusbegrenzung fehlt |
| Konsistenz | 3 | Rollenprofil öffnet Trainerbiografie |
| Fehlervermeidung | 3 | Native Buttons, Klickzweck bleibt unklar |
| Wiedererkennung | 3 | Personen erkennbar, Organisation kaum gegliedert |
| Effizienz | n/a | Passive Informationsseite |
| Ästhetik / Minimalismus | 2 | Monotone Liste, redundanter Einstieg |
| Fehlerbehebung | n/a | Keine Eingabe- oder Fehlerzustände |
| Hilfe | 2 | Kontakt nur über globale Navigation |
| Gesamt | 22/32 | 69 Prozent, ausbaufähig |

Stärken: echte Gesichter; lesbare Typografie; lange Biografien bleiben aus der Übersicht heraus.

Prioritäten:
1. P1: Tastatur verlässt das geöffnete Profil. Browserbestätigung: Fokus von Schließen über body zum Hintergrundlink der Marke, während aria-modal aktiv bleibt. Native dialog-Lösung oder vollständige Fokusführung samt inertem Hintergrund. Empfohlen: harden.
2. P1: Kontaktweg fehlt am erwarteten Ort. Peter wird für Aufnahmeanfragen genannt, sein Profil liefert aber sportlichen Lebenslauf ohne Kontaktaktion. Zuständigkeit und passenden Kontaktweg zuerst zeigen. Empfohlen: clarify / shape.
3. P2: Redundanter Einstieg. Mobil beginnt die erste Person etwa bei y493, die zweite bei y652. Einleitung verdichten und Personen früher zeigen. Empfohlen: distill / layout.
4. P2: Dōjōleitung und Vorstand sind visuell kaum getrennt. Sichtbare Gruppenüberschriften und klare Hierarchie schaffen. Empfohlen: layout.
5. P2: Gleichförmige Personenzeilen lassen den Verein unpersönlich wirken. Porträts bewusster gewichten, konsistente Ausschnitte und klar gegliederte Personenansicht einsetzen. Empfohlen: bolder.

Kognitive Belastung: moderat. Die Namen sind deutlich, Zuständigkeiten und Organisationsstruktur untergeordnet. 13 Navigationslinks sind durch Gruppen etwas entlastet. Keine Gedächtnisaufgabe nötig.

Emotionaler Verlauf: bürokratischer Einstieg, Nähe durch Gesichter, ausführlicher sportlicher Lebenslauf, fehlender nächster Schritt.

Personas: Neue Interessierte finden Peter, aber keine direkte Kontaktaktion. Mobile Besucher sehen erst nach rund einem halben Bildschirm die erste Person. Tastaturnutzende können hinter den aktiven Dialog geraten.

Nebenbefunde: Max Conradi wird mit Initialen statt Foto dargestellt; das ist kein technischer Defekt. Lizenzangaben laufen im Desktopdialog schwer lesbar als lose rote Textstücke nebeneinander. Der Pfeil verrät den Dialogzweck nicht. Eine mechanische Warnung betrifft die max-height-Animation des gemeinsamen Mobilmenüs (styles.css:2793), nicht einen spezifischen Defekt dieser Seite.

Fragen: Soll die Seite Menschen und Zuständigkeiten gleich stark zeigen oder Zuständigkeiten priorisieren? Soll die Überarbeitung Struktur und Bedienung umfassen oder zusätzlich die Porträtdarstellung deutlich stärken?
