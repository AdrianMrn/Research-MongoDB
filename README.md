
Web Research - New Technology - MongoDB
===================

> MongoDB (from humongous) is a free and open-source cross-platform
> document-oriented database program. Classified as a NoSQL database
> program, MongoDB uses JSON-like documents with schemas.
> 
>*Definitie van MongoDB op Wikipedia*

MongoDB is een NoSQL of een non-relationele database. Dit wilt zeggen dat niet altijd volgens strikte schema's moet werken, zoals relationele database-systemen. Zo heeft MySQL, een relationele database, voor elke rij exact dezelfde kolommen, ook al is (een deel van) deze informatie bij een andere rij afwezig. Bij MongoDB is dit geen vereiste. Elk document (equivalent van een rij) in eenzelfde database kan compleet van elkaar verschillen.

Zoals het *humongous* deel van de naam al doet denken, wordt MongoDB meer en meer in gebruik genomen waar men aan big data werkt. Ook real-time web applicaties maken er vaak gebruik van, door de simpele en effectieve implementatie van indexes. Deze indexes zorgen er voor dat je op veel verschillende manieren je data kan ordenen en snel kan ophalen. Deze ordening kan op vele verschillende manieren gebeuren: alfabetisch, numeriek, geografisch, etc.

----------

# Logboek #

## MongoDB leren gebruiken ##
Ik heb bij mijn project [Coucher](https://github.com/adrianmrn/coucher) al MongoDB gebruikt. Dit omdat ik had gelezen over de gemakkelijke implementatie van indexering op basis van geolocatie, die we nodig hadden om o.a. couchsurfing plaatsen in een straal rond een punt weer te geven op een kaart.

Dit wil zeggen dat ik al een inleiding heb gehad in het systeem voordat ik een logboek begon bij te houden. Ik wilde de lessen van de [MongoDB University](https://university.mongodb.com) volgen, maar om hiermee nog maar op een *intermediate* niveau te geraken, moet je minstens 14 weken uitstrekken, waarbij er elke week een online van +/- 90 minuten beschikbaar komt en je *assessments* en een *final exam* voorgeschoteld krijgt.

Daarom volg ik in plaats daarvan de introductie in de [MongoDB docs](https://docs.mongodb.com/getting-started/shell/introduction/) nog eens en ga ik hierna redelijk snel overgaan op het maken van enkele demo's en tests. Ik ververs mijn kennis over schema's, de MongoDB shell en indexes.

## Tests/oefeningen ##

* [1_intro](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/1_intro)
* [2_user](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/2_user)
* [3_recepten](https://github.com/AdrianMrn/Research-MongoDB/tree/master/tests/3_recepten)


----------

> README.md Written with [StackEdit](https://stackedit.io/).