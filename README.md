# livestream-learning
Livestream E-Learning Prototyp für den wirvsvirus Hackathon

Ich habe eben sehr hacky und schmutzig einen node-media-server aufgesetzt und eine whiteboard library genommen um ein kleines beispiel zu implementieren. Dabei kann man mit OBS streamen,

![Beispiel](Screenshot2.png?raw=true "Beispiel")


Nutzung und Installation:

Vorraussetzung: Node.js 

1. Projekt als zip oder per git runterladen.

2. Die dependencies installieren:

npm install

3. OBS installieren über deren webseite

https://obsproject.com/

4. Im Projekt-Ordner: 
  4.1 ins Verzeichnis /media-server wechseln und dann auf der Konsole ausführen: node index.js 
  4.2 ins Verzeichnis /client/whiteboard/whiteboard wechseln und dort auf der Konsole ausführen: node server.js
  
5. OBS starten und einen Stream starten mit folgender config:

  ![OBSBeispiel](Screenshot3.png?raw=true "OBS Beispiel")
  
6. Dann per Browser auf localhost:8080 
