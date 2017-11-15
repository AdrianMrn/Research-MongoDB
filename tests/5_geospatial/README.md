# Test 5_geospatial #

Bij deze test ga ik gebruik maken van echte data om de [geospatial queries](https://docs.mongodb.com/manual/geospatial-queries/) van MongoDB uit te testen. Ik wil enkele punten op een Google Maps kaart laten zien mbhv de [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript).

Ik gebruik de [Express application generator](https://expressjs.com/en/starter/generator.html) met het commando `express --view=ejs` om snel een applicatie-skelet te bouwen met de templating engine ejs reeds geïntegreerd.

Ik voeg *mongoose*, [request](https://www.npmjs.com/package/request) en [async](https://www.npmjs.com/package/async) toe aan de dependencies. Deze laatste ga ik gebruiken om callback-gewijs veel data te kunnen toevoegen. De *request* library gebruik ik om GET-requests te sturen naar een API. Ten laatste maak ik ook gebruik van de [dotenv library](https://www.npmjs.com/package/dotenv), zodat ik op een veilige manier mijn Google Maps API kan opslagen.

Ik maak gebruik van een API van [Antwerpen OpenData](http://opendata.antwerpen.be/) waar er met coördinaten wordt gewerkt en een groot aantal entries zijn: een dataset van 4207 [papiermanden in Antwerpen](http://datasets.antwerpen.be/v4/gis/papiermand.json).

Dan maak ik een [schema]() aan dat de informatie overneemt die we nodig hebben van de API. Ik implementeer de mogelijkheid om geospatial queries te gebruiken door een veld `location: { type: [Number], index: '2dsphere' },` aan te maken, waarin ik de lengte- en breedtegraad zal steken, in die volgorde. Dit gaat in tegen de normale manier waarop coordinaten worden weergegegeven (breedtegraad, lengtegraad), maar MongoDB doet dit omgekeerd.

Ik maak een directory */controllers* aan en schrijf hier een script [getData.js]() dat de data van de [API](http://datasets.antwerpen.be/v4/gis/papiermand.json) ophaalt en in de lokale database opslaagt. In dat script schrijf ik verder comments over wat er gebeurt.

