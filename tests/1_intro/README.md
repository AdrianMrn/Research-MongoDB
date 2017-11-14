# Test 1_intro #

Om databases gemakkelijk te kunnen navigeren en documenten te lezen en handmatig aan te passen, gebruik ik in plaats van de MongoDB shell de GUI tool [Robomongo](https://robomongo.org/), of Robo 3T, zoals het sinds kort heet na een overname en rebranding. Ik vergeet niet mijn database aan te zetten door het commando `mongod` in een terminal uit te voeren, en verbind er dan mee met Robomongo op het adres localhost:27017.

Ik creëer een nieuwe database `research_test_1_intro` en de collection `collectionTests`. Hierin creëer ik enkele documenten, uiteraard zonder een schema te volgen. Ze krijgen allemaal automatisch een _id toegewezen, wat de voornaamste identifier is die MongoDB gebruikt. Er wordt standaard geïndexeerd op dit veld door MongoDB.

Ik kan documenten filteren en opvragen dmv de ingebouwde query-schrijver. `db.getCollection('collectionTests').find({"bool":true})` geeft me alle documenten uit de collection *collectionTests* waar het veld *bool* op *true* staat.

Documenten kunnen gewijzigd worden door gebruik te maken van het update commando:
`db.getCollection('collectionTests').update({"bool":true}, {"naam":"top"});`
Hiermee verander ik de inhoud van het veld *naam* naar *top* bij alle documenten waar *bool == true*.