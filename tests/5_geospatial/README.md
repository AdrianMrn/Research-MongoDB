# Test 5_geospatial #

Bij deze test ga ik gebruik maken van echte data om de geospatial queries van MongoDB uit te testen.

Ik gebruik de [Express application generator](https://expressjs.com/en/starter/generator.html) met het commando `express --view=ejs` om snel een applicatie-skelet te bouwen met de templating engine ejs reeds geïntegreerd.

Ik voeg *mongoose*, [request](https://www.npmjs.com/package/request) en [async](https://www.npmjs.com/package/async) toe aan de dependencies. Deze laatste ga ik gebruiken om callback-gewijs veel data te kunnen toevoegen. de *request* library gebruik ik om GET-requests te sturen naar een API.

Ik maak gebruik van een API van [Antwerpen OpenData](http://opendata.antwerpen.be/) waar er met coördinaten wordt gewerkt en een groot aantal entries zijn: een dataset van 4207 [papiermanden in Antwerpen](http://datasets.antwerpen.be/v4/gis/papiermand.json).