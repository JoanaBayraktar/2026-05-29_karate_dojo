# Website-Konzept Karate-Dojo Freising e.V.

Stand: 29.05.2026

## Leitidee

Die neue Website soll das Karate-Dojo Freising e.V. als traditionsreichen, lebendigen Verein zeigen: seit 1968 in Freising verwurzelt, offen fuer neue Mitglieder, aber nicht als reine Fitness- oder Kampfsport-Werbeflaeche. Der Kern ist Kampfkunst als gemeinsames Ueben, Begegnung und persoenliche Entwicklung.

Leitsatz fuer die Startseite:

> Vier Wege, ein Dojo: Wado-Ryu-Karate, Takamura ha Shindo Yoshin Ryu, Taiji & Qigong und Kickboxen im Karate-Dojo Freising seit 1968.

Erweiterter Selbstverstaendnis-Text:

> Seit 1968 ist das Karate-Dojo Freising ein Ort fuer Kampfkunst, Bewegung und Gemeinschaft. Bei uns trainieren Kinder, Jugendliche und Erwachsene in unterschiedlichen Sparten: vom traditionellen Wado-Ryu-Karate ueber Takamura ha Shindo Yoshin Ryu und Taiji & Qigong bis zum Kickboxen. Im Mittelpunkt stehen konzentriertes Ueben, respektvoller Umgang und die Freude daran, gemeinsam besser zu werden.

## Navigationsstruktur

Die Navigation bleibt links dauerhaft sichtbar. Auf Mobilgeraeten wird sie als klares Menue geoeffnet, bleibt aber in Reihenfolge und Begriffen identisch.

- Startseite
- Aktuelles
- Training
- Trainerinnen & Trainer
- Vorstand & Dojoleitung
- Kontakt
- Wado-Ryu-Karate
- Takamura ha Shindo Yoshin Ryu
- Taiji & Qigong
- Kickboxen
- Vereinsleben
- Vereinsgeschichte

Hinweise:

- "Trainingsorte" und "Trainingszeiten" werden unter "Training" zusammengefuehrt.
- "Vereinskultur" wird oeffentlich als "Vereinsleben" benannt.
- "TSYR" wird nicht alleinstehend im Menue verwendet. Die erste Nennung lautet immer "Takamura ha Shindo Yoshin Ryu"; danach kann "TSYR" in Klammern ergaenzt werden.
- "Karate" wird als "Wado-Ryu-Karate" ausgeschrieben.

## Startseite

### Ziel

Die Startseite soll ruhig, direkt und wiedererkennbar sein. Sie orientiert sich an der Skizze: links Navigation, rechts eine zentrale Flaeche mit Vereinsname und vier Sparten.

### Aufbau

1. Titelbereich
2. Vier klickbare Sparten mit Logos
3. Kurztext zum Verein
4. Schnellzugriffe
5. Aktuelles / naechste Termine
6. Optional: Besucherzaehler

### Titel

Karate-Dojo Freising e.V. seit 1968

Optional mit japanischer Schreibweise als dezentes Gestaltungselement, nicht als dominante Dekoration.

### Sparten-Kacheln

- Wado-Ryu-Karate
- Takamura ha Shindo Yoshin Ryu
- Taiji & Qigong
- Kickboxen

Jede Kachel fuehrt direkt auf die jeweilige Spartenseite.

### Startseitentext

> Das Karate-Dojo Freising e.V. verbindet seit 1968 Kampfkunst, Gesundheit und Vereinsleben. In unseren Trainingsgruppen ueben Kinder, Jugendliche und Erwachsene mit sehr unterschiedlichen Erfahrungen und Zielen. Manche suchen Bewegung und Fitness, andere Selbstverteidigung, traditionelle Kampfkunst, Gesundheitstraining oder einen ruhigen Ausgleich zum Alltag. Was alle Sparten verbindet, ist das gemeinsame Ueben mit Respekt, Konzentration und Freude an Entwicklung.

### Schnellzugriffe

- Probetraining
- Trainingszeiten
- Kontakt

### Besucherzaehler

Wenn ein sichtbarer Zaehler gewuenscht ist:

- heute online
- Besucher diesen Monat
- Besucher dieses Jahr
- Besucher seit Relaunch

Technisch sollte das nicht aus WordPress-Plugins oder externen Tracking-Skripten gebaut werden, sondern schlank ueber Cloudflare Web Analytics plus optionalen Cloudflare Worker fuer die oeffentliche Anzeige.

## Aktuelles

### Ziel

Diese Seite bleibt schlank und muss selten gepflegt werden. Kurzfristige Informationen laufen weiter ueber Training, Chatgruppen und persoenliche Ansagen.

### Textvorschlag

> Aktuelle Informationen zu Training, Lehrgaengen und besonderen Terminen werden im Training und in den jeweiligen Gruppen bekanntgegeben. Zusaetzlich sammeln wir hier Hinweise, die fuer Interessierte und Mitglieder wichtig sind.

### Inhalte

- Vereinsinterne Hinweise
- Lehrgaenge Wado-Ryu-Karate
- Lehrgaenge Takamura ha Shindo Yoshin Ryu
- besondere Termine
- Hinweise zu Ferien / Feiertagen

### Externe Lehrgangslinks

- Wado-Ryu-Karate: https://www.wado-karate.de/lehrgaenge/
- Takamura ha Shindo Yoshin Ryu: https://www.shinyokai.com/SeminarsList.php

## Training

### Ziel

Die Trainingsseite ist die wichtigste Nutzseite. Interessierte sollen schnell sehen, wann und wo sie einsteigen koennen.

### Einstiegstext

> Ein kostenloses Probetraining ist jederzeit moeglich. Fuer den Anfang reichen T-Shirt und lange Sporthose. Im Wado-Ryu-Karate und im Takamura ha Shindo Yoshin Ryu wird barfuss trainiert. Wenn du unsicher bist, welche Gruppe passt, melde dich ueber das Kontaktformular oder komm nach kurzer Ruecksprache direkt ins Training.

### Filter

Die Trainingsuebersicht sollte filterbar sein nach:

- Sparte
- Wochentag
- Ort
- Altersgruppe
- Niveau

### Filterwerte

Sparten:

- Wado-Ryu-Karate
- Takamura ha Shindo Yoshin Ryu
- Taiji & Qigong
- Kickboxen

Altersgruppen:

- Kinder
- Jugendliche
- Erwachsene
- Senioren

Niveau:

- Anfaenger
- Fortgeschrittene
- gemeinsam
- VHS-Kurs

Orte:

- JoHo Gymnasium
- Grundschule St. Korbinian

### Datenmodell fuer Trainingszeiten

Die Zeiten sollten als strukturierte Daten gepflegt werden, nicht als Bild oder PDF. Beispiel:

```json
[
  {
    "sparte": "Wado-Ryu-Karate",
    "tag": "Montag",
    "zeit": "20:00-22:00",
    "ort": "JoHo Gymnasium",
    "raum_hinweis": "Herrenumkleideseite",
    "altersgruppe": "Erwachsene",
    "niveau": "gemeinsam"
  },
  {
    "sparte": "Kickboxen",
    "tag": "Montag",
    "zeit": "20:00-22:00",
    "ort": "JoHo Gymnasium",
    "raum_hinweis": "Damenumkleideseite",
    "altersgruppe": "Erwachsene",
    "niveau": "gemeinsam"
  }
]
```

Legende:

- A = Anfaenger
- F = Fortgeschrittene
- K = Kinder
- J = Jugendliche
- E = Erwachsene
- S = Senioren
- VHS = Kurs der Volkshochschule

## Wado-Ryu-Karate

### Kurzpositionierung

Wado-Ryu-Karate ist die historische Mitte des Vereins. Die Seite soll Tradition, Gesundheit, Selbstverteidigung, Kindertraining und Erwachsenentraining zusammenbringen.

### Seitentitel

Wado-Ryu-Karate

### Introtext

> Wado-Ryu-Karate verbindet Karate mit Elementen traditioneller japanischer Kampfkunst. Im Training geht es um Technik, Koordination, Konzentration, Selbstdisziplin und einen respektvollen Umgang miteinander. Kinder, Jugendliche und Erwachsene koennen bei uns alters- und erfahrungsgerecht trainieren. Ein Einstieg ist auch ohne Vorkenntnisse moeglich.

### Vertiefung

> Das Karatetraining foerdert Selbstverteidigung, Reaktion, Koerperhaltung, Atmung, Ausgeglichenheit sowie physische und psychische Staerke. Typisch fuer Karate sind Kihon, Kata und Kumite: Grundtechniken, festgelegte Bewegungsformen und Partneruebungen. Dabei steht nicht Aggression im Vordergrund, sondern Kontrolle, Verantwortung und die Arbeit an sich selbst.

### Historischer Kontext

> Wado-Ryu wurde von Hironori Otsuka Sensei entwickelt. Im Unterschied zu manchen anderen Karatestilen verbindet Wado-Ryu das aus Okinawa stammende Karate mit japanischer Kampfkunst. Ausweichen, Koerpermechanik, Timing und das Vermeiden unnoetiger Kraft stehen dabei im Mittelpunkt.

### Inhalte auf der Seite

- Was ist Wado-Ryu-Karate?
- Training fuer Kinder
- Training fuer Jugendliche
- Training fuer Erwachsene
- Probetraining
- Trainerinnen und Trainer
- Trainingszeiten

## Takamura ha Shindo Yoshin Ryu

### Kurzpositionierung

Diese Sparte ist besonders und sollte nicht wie ein normales Breitensportangebot beworben werden. Sie ist klein, konzentriert und inhaltlich anspruchsvoll.

### Seitentitel

Takamura ha Shindo Yoshin Ryu

### Introtext

> Takamura ha Shindo Yoshin Ryu ist eine seltene traditionelle japanische Kampfkunst. In Freising wird sie in einer kleinen, konzentrierten Gruppe trainiert. Der Lehrplan ist umfangreich und umfasst waffenlose Techniken sowie Arbeit mit traditionellen Uebungswaffen. Im Mittelpunkt stehen praezise Koerpermechanik, natuerliche Bewegung und ein respektvolles gemeinsames Lernen.

### Vertiefung

> Shindo Yoshin Ryu wurde im 19. Jahrhundert begruendet und gehoert zu den klassischen japanischen Kampfkuensten. Die heute in Freising geuebte Linie, Takamura ha Shindo Yoshin Ryu, bewahrt einen umfassenden Lehrplan, der auch fuer die Entwicklung des Wado-Ryu-Karate von Bedeutung ist. Wegen des Umfangs und der Struktur des Trainings richtet sich das Angebot vor allem an Erwachsene. Jugendliche koennen nach Reife, Faehigkeit und Ruecksprache mit der Dojoleitung teilnehmen.

### Tonalitaet

Nicht:

> Lerne effektive Samurai-Selbstverteidigung.

Sondern:

> Eine traditionelle Kampfkunst mit besonderer Struktur und langem Lernweg.

### Inhalte auf der Seite

- Was ist Takamura ha Shindo Yoshin Ryu?
- Warum die Gruppe klein ist
- Lehrplan und Trainingsweise
- Einstieg und Voraussetzungen
- Trainerteam
- Trainingszeiten

## Taiji & Qigong

### Kurzpositionierung

Taiji & Qigong verbinden Gesundheit, innere Kampfkunst, Koerperwahrnehmung und lebenslanges Ueben.

### Seitentitel

Taiji & Qigong

### Introtext

> Taiji und Qigong umfassen Gesundheitsuebungen, Koerperwahrnehmung, meditative Praxis und Kampfkunst. Die langsamen, fliessenden Bewegungen helfen, Haltung, Koordination und Spannungsmuster bewusst wahrzunehmen und zu veraendern. Das Training kann an unterschiedliche Voraussetzungen, Altersgruppen und Ziele angepasst werden.

### Vertiefung

> Im Unterricht beziehen wir uns vor allem auf Chen Taiji. Dazu gehoeren Formen, Seidenfadenuebungen, Partneruebungen, Tuishou, Meditationsuebungen und theoretische Grundlagen. Manche Uebende suchen Entspannung und Gesundheit, andere interessieren sich fuer die Kampfkunstaspekte. Beides hat im Training Platz.

### Inhalte auf der Seite

- Was sind Taiji und Qigong?
- Chen Taiji
- Trainingsinhalte
- Gesundheit und Koerperwahrnehmung
- Anfaenger und Fortgeschrittene
- Trainerteam
- Trainingszeiten

## Kickboxen

### Kurzpositionierung

Kickboxen ist offen, erwachsen, technisch und fitnessorientiert, aber bewusst nicht wettkampforientiert.

### Seitentitel

Kickboxen

### Introtext

> Kickboxen im Karate-Dojo Freising verbindet Schlag- und Tritttechniken mit Fitness, Koordination und Partneruebungen. Unser Training richtet sich an Erwachsene und Jugendliche ab 16 Jahren, mit und ohne Kampfsporterfahrung. An Wettkaempfen nehmen wir bewusst nicht teil.

### Vertiefung

> Neben den Kick- und Boxtechniken trainieren wir Bewegungsablaeufe, Ausdauer, Koordination und die praktische Verbindung der Elemente im Sparring. Das Sparring findet kontrolliert im Leichtkontakt und mit angemessener Schutzausruestung statt. Ziel ist es, Kickboxen ueber viele Jahre mit Freude und Entwicklung zu ueben.

### Inhalte auf der Seite

- Was trainieren wir?
- Fuer wen ist das Training geeignet?
- Keine Wettkampfpflicht
- Ausruestung
- Probetraining
- Trainerteam
- Trainingszeiten

## Trainerinnen & Trainer

### Ziel

Die Trainerseite soll Kompetenz zeigen, aber nicht ueberladen wirken. Auf der Uebersicht erscheinen nur kurze Karten; Details sind aufklappbar oder auf eigenen Profilseiten.

### Uebersicht

Gruppierung nach Sparten:

Wado-Ryu-Karate:

- Friedemann Boehme
- Max Gleixner
- Luise Weber
- Karl Voithenleitner
- Peter Volkert
- Jens Hinrichs
- Raisa Hinrichs

Takamura ha Shindo Yoshin Ryu:

- Sven Gerstendoerfer
- Max Gleixner
- Melanie Burian
- Max Conradi

Taiji & Qigong:

- Richard Flaexl
- Friedemann Boehme
- Thomas Simianer
- Peter Mross
- Tino Schlauderer

Kickboxen:

- Christian Holst
- Michael Podolinsky

### Profilstruktur

Jedes Profil:

- Name
- Foto optional
- Sparte(n)
- Funktion
- Graduierung / Lizenz
- Kampfkunstweg
- Vereinsfunktion
- Wettkampferfolge optional

### Beispielprofil

#### Peter Volkert

Sparte: Wado-Ryu-Karate, Takamura ha Shindo Yoshin Ryu  
Funktion: Trainer Karate, 1. Vorstand

Graduierung und Lizenzen:

- 2. Dan Karate
- C-Trainerlizenz Breitensport
- C-Prueferlizenz Karate
- Kampfrichterlizenz

Kampfkunstweg:

- 1977-1979 Shotokan Karate im Karate-Dojo Cochem
- seit 2009 Wado-Ryu-Karate im Karate-Dojo Freising
- seit 2016 Takamura ha Shindo Yoshin Ryu im Karate-Dojo Freising

Vereinsfunktion:

- seit 2014 Trainer Karate
- 2014-2015 Schriftfuehrer
- 2016-2017 Kassier
- seit 2017 1. Vorstand

Hinweis: Vor Veroeffentlichung alle Profile fachlich pruefen und Freigabe der jeweiligen Personen einholen.

## Vorstand & Dojoleitung

### Ziel

Diese Seite entkoppelt Vereinsorganisation von Trainerbiografien.

### Inhalte

- Dojoleiter
- 1. Vorstand
- 2. Vorstand
- Kassier
- Schriftfuehrung, falls gewuenscht

### Textvorschlag

> Die Vereinsleitung organisiert den Trainingsbetrieb, die Vereinsarbeit und die Weiterentwicklung des Karate-Dojo Freising e.V. Fachliche und organisatorische Verantwortung greifen dabei ineinander: Das Dojo lebt vom regelmaessigen Training, von verlaesslicher Vereinsarbeit und vom Engagement vieler Mitglieder.

### Aktueller Stand aus dem Entwurf

- Sven Gerstendoerfer, Dojoleiter
- Peter Volkert, 1. Vorstand
- Max Gleixner, 2. Vorstand
- Friedemann Boehme, Kassier

E-Mail-Adressen sollten nicht offen im HTML stehen. Besser: Kontaktformular mit Auswahl "Vorstand / Vereinsleitung".

## Kontakt

### Ziel

Die Kontaktseite soll einfach sein und Spam reduzieren.

### Textvorschlag

> Du moechtest ein Probetraining machen oder hast Fragen zum Verein? Schreib uns kurz, fuer welche Sparte du dich interessierst. Wir melden uns mit den passenden Informationen.

### Formularfelder

- Name
- E-Mail
- Nachricht
- Interesse an:
  - Wado-Ryu-Karate
  - Kinder-Karate
  - Takamura ha Shindo Yoshin Ryu
  - Taiji & Qigong
  - Kickboxen
  - Vereinsleitung / Allgemeines

### Spam-Schutz

- Cloudflare Turnstile
- Honeypot-Feld
- Rate Limiting
- keine Klartext-Mailadressen
- serverseitige Validierung

### Alternative ohne dynamisches Backend

Wenn die Website streng statisch bleiben soll:

- Kontaktformular ueber Cloudflare Worker
- Mailversand ueber Resend, MailChannels oder bestehenden SMTP-Dienst
- Turnstile vor Absenden

## Vereinsleben

### Ziel

Diese Seite ist wichtig fuer die Seele des Vereins. Sie zeigt, dass das Dojo mehr ist als Trainingszeiten.

### Introtext

> Das Karate-Dojo Freising lebt nicht nur im Training. Lehrgaenge, Feste, gemeinsame Abende, Feiern und viele Begegnungen gehoeren seit Jahrzehnten zum Verein. Die Kampfkunst ist das Medium der Zusammenkunft; der Geist dahinter ist das gemeinsame Ueben, die Wuerdigung des Gegenuebers und das Vereinsleben ueber die Matte hinaus.

### Inhalte

- Lehrgaenge
- Sommerfest
- Weihnachtsfeier
- gemeinsames Zusammensitzen nach dem Training
- 50-Jahr-Feier
- Fotos und Impressionen
- Video der 50-Jahr-Feier

### Ton aus der Festschrift

Moeglicher Abschnitt:

> Wer trainiert, braucht auch Gemeinschaft. Seit vielen Jahren gehoeren gemeinsame Lehrgaenge, Feiern und das Zusammensitzen nach dem Training zum Dojo. Daraus entsteht das, was den Verein ueber Jahrzehnte getragen hat: eine Gemeinschaft, die sich veraendert und trotzdem zusammenhaelt.

## Vereinsgeschichte

### Ziel

Die Vereinsgeschichte soll fuer den Rollout gut, aber nicht maximal umfangreich sein. Details zu frueheren Dojoleitern und Vorstaenden koennen spaeter ergaenzt werden.

### Textvorschlag

> Im Oktober 1967 trafen sich im Tanzsaal beim Wirt von Suenzhausen zehn Interessenten, die die gemeinsame Leidenschaft fuer den Kampfsport verband. Bereits kurze Zeit spaeter, am 2. Januar 1968, wurde das Karate-Dojo Freising als eingetragener Verein gegruendet. Praegende Namen der Anfangszeit waren Karl Sirch, Josef Rattenhuber und Franz Kiening.

> Schon frueh folgten sportliche Erfolge auf bayerischer und deutscher Ebene. Zu den herausragenden Ergebnissen zaehlten der Bayerische Mannschaftsmeistertitel 1973, der deutsche Jugendmeistertitel 1974 von Edgar Heinrich und der internationale Deutsche Meistertitel 1976 von Helmut Stoppe.

> Aus dem Verein in Freising gingen wichtige Impulse fuer weitere Dojos und Karateabteilungen in der Region hervor, unter anderem in Erding, Neufahrn und Moosburg. Ueber die Jahrzehnte entwickelte sich das Karate-Dojo Freising weiter und wurde mit Wado-Ryu-Karate, Takamura ha Shindo Yoshin Ryu, Taiji & Qigong und Kickboxen zu einem besonderen Ort fuer Kampfkunst und Breitensport in Freising.

### Chronik-Abschnitte

- 1967: erste Treffen in Suenzhausen
- 1968: Vereinsgruendung
- 1970er: sportliche Erfolge
- spaetere Entwicklung: neue Sparten
- 2014: Kickboxen als Sparte im Karate-Dojo Freising
- 2018/2019: 50-Jahr-Feier und Festschrift
- heute: vier Sparten, ein Dojo

## Design-Richtung

### Grundhaltung

- ruhig
- klar
- traditionell, aber nicht altmodisch
- wenig Pflegeaufwand
- keine laute Kampfsport-Optik
- keine Fitnessstudio-Aesthetik

### Layout

- Desktop: feste linke Seitenleiste, Inhalt rechts
- Mobile: Menue als ausklappbare Navigation
- Startseite: zentrale Spartenanordnung nach Skizze
- Unterseiten: klare Leseseiten mit begrenzter Breite

### Typografie

Empfohlene Font-Stack:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", "Noto Sans JP", sans-serif;
```

Damit sind deutsche Texte und japanische Schriftzeichen gut abgedeckt.

### Farbwelt

- Hintergrund: warmes Weiss oder sehr helles Grau
- Text: Schwarz / sehr dunkles Grau
- Linien: dezentes Grau
- Akzent: sparsam Rot oder dunkles Blau, aber nicht dominant

### Bildsprache

- echte Trainingsfotos, wenn vorhanden
- Logos der Sparten auf der Startseite
- historische Bilder aus der Festschrift nur nach Rechtesichtung
- keine generischen Stockbilder

## Technische Umsetzung

### Empfehlung

Statische Website mit datengetriebenen Inhalten.

Geeignete Optionen:

- Astro
- Eleventy
- schlichtes HTML/CSS mit Daten-Dateien, wenn es sehr klein bleiben soll

Empfehlung: Astro, weil Markdown-Inhalte, strukturierte Daten und spaetere Erweiterungen gut zusammenpassen.

### Hosting

- Cloudflare Pages
- Cloudflare DNS
- HTTPS erzwingen
- Cloudflare Web Analytics
- Cloudflare Turnstile fuer Kontakt
- Bot-Schutz und Rate Limiting
- optional Cloudflare Worker fuer Formular und Besucherzaehler

### Inhaltsdateien

Moegliche Struktur:

```text
src/
  content/
    pages/
      startseite.md
      aktuelles.md
      vereinsleben.md
      vereinsgeschichte.md
    sparten/
      wado-ryu-karate.md
      takamura-ha-shindo-yoshin-ryu.md
      taiji-qigong.md
      kickboxen.md
    trainer/
      peter-volkert.md
      friedemann-boehme.md
      sven-gerstendoerfer.md
  data/
    trainingszeiten.json
    vorstand.json
```

## Rollout

### Phase 1: Relaunch

- neue Navigation
- Startseite
- vier Spartenseiten
- Training mit filterbarer Uebersicht
- Kontaktformular mit Spam-Schutz
- Traineruebersicht ohne vollstaendige Detailtiefe
- Vorstand & Dojoleitung
- Vereinsgeschichte in kompakter Form
- Cloudflare-Grundschutz

### Phase 2: Ausbau

- vollstaendige Trainerprofile mit Fotos
- Vereinsleben mit Bildergalerie
- Video der 50-Jahr-Feier
- ausfuehrlichere Chronik
- fruehere Dojoleiter und Vorstaende
- oeffentlicher Besucherzaehler
- bessere Terminverwaltung

## Offene Punkte vor Umsetzung

- finale Schreibweise: Karate-Dojo oder Karate-Dōjō?
- finale Schreibweise: Wado-Ryu oder Wadō Ryū?
- finale Schreibweise: Taiji oder Tai Chi?
- Freigabe der Trainerprofile
- Freigabe von Fotos aus Festschrift / Archiv
- aktuelle Trainingszeiten fachlich pruefen
- Kontakt-Empfaenger je Sparte festlegen
- Entscheidung: Astro oder sehr einfache statische Seite
- Entscheidung: sichtbarer Besucherzaehler ja/nein

## Wichtigste redaktionelle Regel

Die Seite soll nicht groesser wirken als der Verein sein will. Sie soll verlaesslich, ruhig und korrekt sein. Besonders Takamura ha Shindo Yoshin Ryu sollte nicht als grosses Einstiegsprodukt vermarktet werden, sondern als besondere Kampfkunstgruppe mit eigenem Anspruch und eigener Struktur.
