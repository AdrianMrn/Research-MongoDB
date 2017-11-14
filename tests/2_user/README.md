# Test 2_user #

Om het ontwikkelen overzichtelijker en reproduceerbaar te maken, ga ik gebruik maken van de Javascript run-time environment [Node.js](https://nodejs.org/en/). Om met de database te verbinden in Node.js zal ik gebruik maken van de tool [Mongoose](https://www.npmjs.com/package/mongoose).

Ik maak een nieuwe directory *tests/1_intro/* aan in de root van mijn GitHub project, en run daar het commando `npm init` om een node omgeving te initialiseren en het installeren van node packages via [npm](https://www.npmjs.com/) mogelijk te maken. Ik accepteer alle default waarden, er is nu een file *package.json* aangemaakt waarin gegevens over mijn applicatie worden opgeslagen, zoals welke dependencies het heeft.

Hierna installeer ik de mongoose library via `npm install --save mongoose`. Ik creëer ook een file app.js waarin ik mijn code zal schrijven en maak nog een folder *schemas* aan om mijn MongoDB schemas in op te slagen. Verder installeer ik de [async](https://www.npmjs.com/package/async) library om snel veel documenten te kunnen toevoegen aan mijn database en gemakkelijk met de asynchrone en callback-oriented werking van Node.js te werken.

Ik schrijf een simpel [schema](https://github.com/AdrianMrn/Research-MongoDB/blob/master/tests/2_user/schemas/userSchema.js) userSchema met de velden *name*, *email* en *password* en laadt dit in app.js in via `var user = require('./schemas/userSchema').user`.

Helemaal bovenaan de app.js file laadt ik mongoose in door de volgende code:
`var mongoose = require('mongoose');
mongoose.Promise = global.Promise;`

Ook laad ik het nieuwe schema in:
`var user = require('./schemas/userSchema').user;`

Ik creëer een nieuwe variabele *user* en geef deze, volgens het schema, enkele waarden mee.
`var newuser = new user({
    name: "Adriaan",
    email: "adriaanmarain300@gmail.com",
    password: "hunter112",
});`

En om het op te slagen:
`newuser.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});`

Ik zie in mijn database nu een nieuw document met de ingevulde velden.