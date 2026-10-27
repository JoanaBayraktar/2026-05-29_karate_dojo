---
target: Trainingsorte
total_score: 22
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 1
target_identity: "file:/Users/joanabayraktar/Documents/Dojo/prototype/trainingsorte.html"
target_fingerprint: "sha256:3fd4c5f1e48c46bd1756c675bb9841d293fc4e3a9c819145db76483e6e711799"
target_path: /Users/joanabayraktar/Documents/Dojo/prototype/trainingsorte.html
timestamp: 2026-10-21T19-04-51Z
slug: prototype-trainingsorte-html
---
Method: dual-agent (A: 01a15fd5-3fe5-7002-a761-2982b84333b0 · B: 01a15fd5-40cc-7c12-9176-1498d3b5c39b)

Die Trainingsorte wirken wie ein eingebundenes Infoblatt mit angehängten Standortmodulen. Die Informationen sind vorhanden, aber die Seite führt Besucher noch nicht gut vom Hallennamen bis zum Eingang.

Designspezifität: Die lokalen Lagehinweise sind vereinseigen und wertvoll. Ihre Darstellung als Screenshot passt jedoch nicht zum offenen, typografisch geführten Webdesign.

Heuristische Bewertung, jeweils 0–4:
| Kriterium | Wert | Befund |
|---|---:|---|
| Systemstatus | 3 | Navigation markiert den Standort; Menüstatus funktioniert. |
| Reale Welt | 3 | Konkrete Adressen, aber schwer lesbare Zugangshinweise. |
| Kontrolle | 3 | Direkte externe Links lassen die Website erreichbar. |
| Konsistenz | 3 | Gleiche Standortmodule, jedoch wechselnde Reihenfolge. |
| Fehlervermeidung | 2 | Gebäudeposition und Halleneingang nicht sauber unterschieden. |
| Wiedererkennen | 2 | Bildhinweise müssen späteren Adressen zugeordnet werden. |
| Effizienz | 2 | Maps-Aktionen stehen weit unten. |
| Visuelle Reduktion | 2 | Screenshot und Live-Karten konkurrieren; Titel sind zu groß. |
| Fehlerbehebung | n/a | Kein eigener lokaler Fehlerzustand geprüft. |
| Hilfestellung | 2 | Praktische Hinweise nicht als zugänglicher HTML-Text. |
| Gesamt | 22/36 | Deutlicher Verbesserungsbedarf. |

Was funktioniert: Adressen, echte QR-Bilder und Maps-Links sind vorhanden. Die Karten laden beim Scrollen; die Website hat keinen horizontalen Overflow. Weiß, Outfit und Rot passen zur Vereinsidentität. Die CSS-Klasse card ist kein Nachweis für sichtbare Karten: Die Standortabschnitte sind bereits transparent und ungerundet.

Prioritäten:
1. P1 – Eingang und Parken sind nur im Rasterbild erklärt. Die 1424×782-Grafik schrumpft mobil auf ca. 332×182 Pixel. Sie ist kaum lesbar und ihr Alttext enthält die Details nicht. Hinweise als HTML-Text beim jeweiligen Ort; die Lagegrafik nur ergänzend und vergrößerbar. Passend: impeccable adapt / clarify.
2. P2 – Falsche Hierarchie: Die Gesamtgrafik dominiert, die Standorttitel beginnen am Desktop erst bei ca. y=849; die Maps-Aktionen noch später. Hallenname, Adresse und Routenlink zuerst; Titel 28–32 px statt dreizeiligem Großformat. Passend: impeccable layout / typeset.
3. P2 – Wechselnde Reihenfolge: Die Übersicht beginnt mit Korbinian, die Standortliste mit JoHo. Ein vollständiger offener Abschnitt pro Halle beseitigt die erneute Zuordnung. Passend: impeccable layout.
4. P2 – Karte, Lageplan und QR haben keine klare Aufgabenverteilung. Routenlink als primäre mobile Aktion, QR auf Desktop als Transfer aufs Handy, konkrete Eingangs-/Parkhinweise daneben. Derzeit führen die Links zur Adresssuche; Eingangsgenauigkeit und QR-Payload wurden nicht unabhängig geprüft. Passend: impeccable distill / clarify.
5. P2 – Veralteter Metatext: QR-Codes können ergänzt werden widerspricht den bereits eingebundenen QR-Codes. Durch konkrete Ankunftsinformationen ersetzen. Echte Eingangsfotos wären nützlich; die vorhandenen Bildassets sind Lagepläne, keine Gebäudefotos. Passend: impeccable clarify.

Nutzerperspektiven: Erstbesucher müssen einen kleinen Plan entziffern, bevor sie sicher den Eingang finden. Menschen unterwegs brauchen den direkten Routenlink vor dem Infoblatt. Screenreader-Nutzern fehlen die ausführlichen Bildtexte. Drei Schwächen bei Hierarchie, Erinnerungsaufwand und Informationsstaffelung verursachen moderate zusätzliche Denkarbeit. Der Verlauf ist ruhiger Einstieg, Entzifferungsaufwand, anschließend Entlastung durch Maps, aber Restunsicherheit beim Eingang.

Technische Evidenz: Ein Detector-Hinweis layout-transition betrifft die max-height-Animation des mobilen Menüs (styles.css:2760), nicht das Hauptproblem der Seite. Die CLI ordnet ihn irreführend trainingsorte.html:0 zu. Browser-Overlay intern ausgeführt; keine dauerhaft sichtbare Nutzer-Ansicht. Kein gemessenes Ruckeln. Maps sichtbar geladen, QR-Bilder unverzerrt. Physisches Scannen und geografische Zielgenauigkeit nicht geprüft.

Empfohlene Richtung: Zwei offene Standortabschnitte untereinander. Jeweils Hallenname, Adresse, Routenlink, Eingang/Parken als Text, anschließend Karte und optional QR. Gesamtgrafik nicht mehr als dominanter Einstieg. Fragen: offene Abschnitte oder kompakte Ortsauswahl? Vollständiger Umbau oder nur mobile Lesbarkeit und Reihenfolge?
