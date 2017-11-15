/* Dependencies inladen */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var request = require('request');
var async = require('async');

/* Schema inladen */
var papiermandSchema = require('../schemas/papiermandSchema').papiermand;

/* API URL declareren */
var apiUrl = "http://datasets.antwerpen.be/v4/gis/papiermand.json?page=";

function getData(page) {
    /* Pagina ophalen en de body omzetten naar JSON, als er zich geen errors voordoen. */
    console.log('Begin aan pagina', page);
    request(apiUrl+page, function (error, response, body) {
        if (!response.statusCode == 200 || error) {
            console.log(error);
        } else {
            data = JSON.parse(body);
            papiermanden = data.data;
            /* alle papiermanden doorlopen, 20 tegelijk, en deze toevoegen aan de database.
                Elke keer er een is toegevoegd, roepen we de callback functie op. */
            async.eachLimit(papiermanden, 20, function(papiermand, callback) {
                /* findOneAndUpdate met upsert:true ipv new & save voor het geval de papiermand id al bestaat;
                    deze moet uiteraard geen tweede keer worden toegevoegd.
                    Zo kan het script ook op een cronjob worden uitgevoerd en ververst het de db. */
                papiermandSchema.findOneAndUpdate({opendata_id:papiermand.id}, {
                    opendata_id: papiermand.id,
                    location: [papiermand.point_lng,papiermand.point_lat],
                    straatnaam: papiermand.straatnaam,
                    huisnummer: papiermand.huisnummer,
                    postcode: papiermand.postcode,
                    opmerking: papiermand.opmerking,
                    uniek_nummer_papiermand: papiermand.uniek_nummer_papiermand
                }, {upsert:true}, function(err, response){
                    if (err) console.log(err);
                    callback();
                });
            }, function(err) {
                if( err ) {
                    console.log(err);
                } else {
                    console.log('\nPagina', page, 'klaar\n');
                    if (data.paging.pageNext) {
                        /* Als pageNext bestaat, voer getData() opnieuw uit op die pagina */
                        getData(data.paging.pageNext);
                    } else {
                        console.log('Data ophalen klaar');
                    }
                }
            });
        }
    });
}

/* getData() voor het eerst oproepen, We beginnen op pagina 1.
    Na elke batch gaan we naar de volgende pagina, indien deze bestaat.
    (pageNext in het "paging" gedeelte van de API) */
getData(1);