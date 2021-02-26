# node.js Wrapper für die GeoJSON-Schnittstelle von schach.in

Package für node.js, das die Vereinsdaten aus der GeoJSON-Schnittstelle unter https://schach.in/deutschland.geojson lädt.

## Installation

```
npm install @schach.in/clubs
```

## Nutzung

```js
import Clubs from '@schach.in/clubs'
const data = await Clubs.get('sc-weilerbach')
console.log(data)
```

Das Package bietet daneben ein einfaches Kommandozeilentool, um die Daten eines Vereins abzufragen:

```sh
> schach-data karlsruher-sf-1853
```

## Beispielergebnis

Die Daten des JavaScript-Moduls und Kommandozeilentools haben die gleiche Form und folgen der GeoJSON-Schnittstelle. Einzig mehrere Koordinaten sind im Feld `coordinates` als Array zusammengefasst:

```json
{
  "org": "Karlsruher SF 1853",
  "identifier": "karlsruher-sf-1853",
  "category": "verein",
  "awards": 5,
  "members": 200,
  "u25": 112,
  "female": 53,
  "avg_age": 33,
  "avg_rating": 1571,
  "coordinates": [
    [ 8.380872, 48.98837 ],
    [ 8.414175, 49.002422 ],
    [ 8.39314, 49.01481 ],
    [ 8.37892, 48.99875 ]
  ]
}
```
