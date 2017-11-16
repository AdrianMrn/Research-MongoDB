
Web Research - New Technology - MongoDB
===================

> MongoDB (from humongous) is a free and open-source cross-platform
> document-oriented database program. Classified as a NoSQL database
> program, MongoDB uses JSON-like documents with schemas.
> 
>*Definitie van MongoDB op Wikipedia*

MongoDB is een NoSQL of een non-relationele database. Dit wilt zeggen dat niet altijd volgens strikte schema's moet werken, zoals relationele database-systemen. Zo heeft MySQL, een relationele database, voor elke rij exact dezelfde kolommen, ook al is (een deel van) deze informatie bij een andere rij afwezig. Bij MongoDB is dit geen vereiste. Elk document (equivalent van een rij) in eenzelfde database kan compleet van elkaar verschillen.

Zoals het *humongous* deel van de naam al doet denken, wordt MongoDB meer en meer in gebruik genomen waar men aan big data werkt. Ook real-time web applicaties maken er vaak gebruik van, door de simpele en effectieve implementatie van indexes. Deze indexes zorgen er voor dat je op veel verschillende manieren je data kan ordenen en snel kan ophalen. Deze ordening kan op vele verschillende manieren gebeuren: alfabetisch, numeriek, geografisch, etc.


# MongoDB 101 #
Ik heb bij mijn project [Coucher](https://github.com/adrianmrn/coucher) al MongoDB gebruikt. Dit omdat ik had gelezen over de gemakkelijke implementatie van indexering op basis van geolocatie, die we nodig hadden om o.a. couchsurfing plaatsen in een straal rond een punt weer te geven op een kaart.

Dit wil zeggen dat ik al een inleiding heb gehad in het systeem voordat ik een logboek begon bij te houden. Ik wilde de lessen van de [MongoDB University](https://university.mongodb.com) volgen, maar om hiermee nog maar op een *intermediate* niveau te geraken, moet je minstens 14 weken uitstrekken, waarbij er elke week een online van +/- 90 minuten beschikbaar komt en je tussentijdse testen en een eindexamen voorgeschoteld krijgt. Deze lessen zijn ook niet beschikbaar via een andere weg.

Daarom volgde ik in plaats daarvan de introductie in de [MongoDB docs](https://docs.mongodb.com/getting-started/shell/introduction/). Ik volg deze nu opnieuw en daarna ga ik redelijk snel overgaan op het maken van enkele demo's en tests. Ik ververs mijn kennis over schema's, de MongoDB shell en indexes en maak dan enkele zelf bedachte tests, oplopend in complexiteit.


# Tests/oefeningen #

Per test leg ik in een README.md uit wat ik doe.

* [1_intro](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/1_intro)
* [2_user](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/2_user)
* [3_recepten](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/3_recepten)
* [4_recepten_website](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/4_recepten_website)
* [5_geospatial](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/5_geospatial)

# Demo #

Kan niet echt *hello world* in MongoDB schrijven, dus applicatie volledig op voorhand schrijven en dan laten zien hoe "simpel" & straightforward het was om te maken? Via slides met highlights van code, ...?
test 5_geospatial gebruiken.

Presentatie: https://docs.google.com/presentation/d/1WjixvGuEMH0HDDh2fhjZA1qdypo8tLojlz0OJyXe8pA/

1. Wat is MongoDB (1 min)
2. Waarom MongoDB gekozen (30 sec)
3. Waarvoor wordt MongoDB gebruikt/wat is er mogelijk met MongoDB (3 min)
:   Tegen het einde over geospatial queries beginnen
4. Live Demo 
:   Uitleggen API
:   Uitleggen NodeJS en Google Maps API
:   Schema tonen & uitleggen
:   getData tonen & uitleggen
:   mapController tonen & uitleggen
:   Applicatie tonen in browser
5. Wat geleerd
:   MongoDB is niet altijd de beste manier om data op te slagen, in bepaalde applicaties zijn relaties heel belangrijk.