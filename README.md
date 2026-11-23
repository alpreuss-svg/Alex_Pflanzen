# Alex Pflanzen

Pflanzen-App fürs Handy: Foto machen, Pflanze erkennen lassen, regelmäßig neue Fotos prüfen lassen und Tipps zu Wasser, Licht, Schädlingen und Pflege bekommen.

Reine Web-App ohne Build und ohne Server. Pflanzen und Fotos liegen nur im Browser (IndexedDB). Zur Auswertung gehen die verkleinerten Fotos (ohne Aufnahmeort) und die Angaben zur Pflanze an die Gemini-API von Google, mit eigenem Schlüssel.

## Einrichten

1. Auf GitHub: Settings → Pages → „Deploy from a branch“ → `main`, `/ (root)` → Save.
2. Nach etwa einer Minute am Handy <https://alpreuss-svg.github.io/Alex_Pflanzen/> öffnen.
3. Im Browser-Menü „App installieren“ bzw. „Zum Startbildschirm hinzufügen“. Auf dem iPhone erst installieren, dann in der installierten App einrichten.
4. Unter Einstellungen den Schlüssel von <https://aistudio.google.com/apikey> eintragen. **Den Schlüssel nie ins Repo schreiben.**

## Funktionen

- Pflanze per Foto anlegen (bis zu drei Vorschläge mit Sicherheit, oder Art selbst eintragen), bearbeiten, löschen
- Neue Fotos prüfen: Zustand, Wasser und Licht auf einer Skala, Auffälligkeiten, Prüfaufträge zum Abhaken. Gemini bekommt dazu das vorige Foto, das Gießprotokoll, den Standort und die Ergebnisse der Prüfaufträge
- Gießkontrolle mit Abstand je Pflanze; einen neuen Abstand schlägt die Prüfung vor
- Foto fällig nach eigenem Abstand (Standard 7 Tage), Erinnerung als Kalendertermin
- Sicherung als Datei speichern und laden
- Ohne Internet bleibt alles lesbar; Fotos lassen sich später auswerten

Die Tipps kommen von einer KI und können falsch sein, auch die Angaben zur Giftigkeit.

## Dateien

`app.js` (Programm; Modelle in `MODELLE`), `style.css`, `index.html`, `sw.js` (offline), `manifest.webmanifest`, `icons/`
