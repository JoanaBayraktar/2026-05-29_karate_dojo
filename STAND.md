# Karate-Dōjō Freising e.V. — Prototyp-Stand

## Übersicht

Statischer HTML/CSS/JS-Prototyp zur Abstimmung von Design und Struktur.  
Kein Build-Prozess, keine Dependencies — alle Dateien liegen flach im Ordner.

**Lokal starten:** beliebiger lokaler Server auf Port 4321, z. B. `npx serve .`  
**Passwort:** `karate`

---

## Seiten

| Datei | Titel | Status |
|---|---|---|
| `index.html` | Startseite | ✅ fertig |
| `wado-ryu-karate.html` | Wadō Ryū Karate | ✅ fertig |
| `takamura-ha-shindo-yoshin-ryu.html` | Takamura ha Shindō Yōshin Ryū | ✅ fertig |
| `taiji.html` | Taiji | ✅ fertig |
| `kickboxen.html` | Kickboxen | ✅ fertig |
| `trainingsorte.html` | Trainingsorte | ✅ fertig |
| `trainingszeiten.html` | Trainingszeiten | ✅ fertig |
| `trainerschaft.html` | Trainerschaft | ✅ fertig |
| `vereinsleitung.html` | Vereinsleitung | ✅ fertig |
| `vereinsgeschichte.html` | Vereinsgeschichte | ✅ fertig |
| `vereinskultur.html` | Vereinskultur | ✅ fertig |
| `aktuelles.html` | Aktuelles | ✅ fertig |
| `kontakt.html` | Kontakt | ✅ fertig |

---

## Design-Entscheidungen

### Typografie
- **Überschriften (h1–h6):** Outfit (600–700) — clean, modern, sans-serif
- **Fließtext / UI:** DM Sans (300–500) — gut lesbar, freundlich
- Geladen via `@import` in `styles.css` (Google Fonts)

### Farben
```
--paper:      #fffdf8   (Seitenhintergrund)
--bg:         #f4efe6   (leicht wärmer)
--ink:        #201c18   (fast schwarz)
--muted:      #756d62   (grau-braun)
--line:       #ddd2c2   (Trennlinien)
--accent:     #b83232   (Rot, Akzente)
--gold:       #d2a542   (Goldton)
--nav:        #fff8eb   (Sidebar-Hintergrund)
```
Hintergrundfarbverlauf: subtiler roter Schimmer links + goldener Radialverlauf oben rechts.

### Layout
- Sidebar-Navigation: fest links, 276 px breit
- Hauptinhalt: `margin-left: 276px`, max `900px` Breite
- Mobile (≤ 720 px): Sidebar ausgeblendet, Hamburger-Menü

### Sidebar-Gruppen (visuelle Trennung per `margin-top`)
| Gruppe | Links |
|---|---|
| Allgemeines | Startseite, Aktuelles, Vereinsleitung, Kontakt |
| Sparten | Wadō Ryū Karate, Takamura ha Shindō Yōshin Ryū, Taiji, Kickboxen |
| Training | Trainingsorte, Trainingszeiten, Trainerschaft |
| Verein | Vereinsgeschichte, Vereinskultur |

---

## Startseite

- Horizontales Karten-Karussell (scroll-snap) mit den vier Sparten
- **Desktop:** Karten füllen den Viewport bis ganz unten, kein unterer Verlauf
- **Mobil:** 80 vw breite Karten, Swipe-Dots mit aktivem Indikator
- Logos mit `mix-blend-mode: multiply` (weiße JPEG-Hintergründe werden transparent)
- Überschrift in Outfit, zentriert (Desktop) / linksbündig (Mobil)

---

## Spartendetailseiten (Karate, Takamura, Taiji, Kickboxen)

- Hero: großes Bild rechts, Titel links — Bildübergang per `mask-image` (kein weißer Verlauf)
- Story-Blocks: abwechselnd Bild links / rechts / ganze Breite / nur Text
- Scroll-Reveal: Blocks blenden beim Einrollen ein (`IntersectionObserver`)
- Am Ende: `page-links` zu Trainingszeiten, Trainerschaft, Kontakt

---

## Trainingszeiten

- Kalender-Ansicht nach Wochentagen (Mo–Fr)
- Filtert nach Disziplin, Gruppe, Trainingsort
- Daten hardcoded in `script.js` → `trainingData[]`

---

## Trainerschaft

- Trainer-Karten mit Foto-Slot, Name, Rolle
- Klick öffnet Modal mit Biografie (Foto, Titel, Rolle, Fließtext)
- Daten per `data-*`-Attributen direkt im HTML
- Fokusverwaltung: Escape schließt, Fokus kehrt zum Auslöser zurück

---

## Vereinsgeschichte

- Scrollbasierte Zeitachse
- Schwebende Jahreszahl aktualisiert sich per `scroll`-Event

---

## Passwort-Gate

- Zeigt sich beim ersten Besuch über allem (`position: fixed`, `z-index: 9999`)
- Passwort: **karate**
- Nach Eingabe: Fade-out + `sessionStorage`-Flag → bleibt innerhalb der Session entsperrt
- Nur für den Prototyp, kein echter Schutz

---

## Noch offen / nächste Schritte

- [ ] Echte Fotos einsetzen (aktuell Platzhalter-Webps)
- [ ] Echte Trainer-Biografien und -Fotos
- [ ] Kontaktformular (Empfänger-Auswahl, kein offenes E-Mail)
- [ ] Aktuelles-Seite mit Inhalten befüllen
- [ ] PNG-Logos mit transparentem Hintergrund (statt JPEG + multiply)
- [ ] Accessibility-Audit (Kontraste, Fokus-Styles)
- [ ] Entscheidung: statisch bleiben oder CMS anbinden?
