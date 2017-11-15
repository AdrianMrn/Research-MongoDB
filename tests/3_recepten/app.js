var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var recept = require('./schemas/receptSchema').recept;

var newrecept = new recept({
    name: "Pasta Bolognese",
    createdBy: "Adriaan M",
    minutesToPrepare: 45,
    accessories: ["Grote kookpot", "Pastalepel", "middelgrote kookpot"],
    ingredients: [
        {
            name: "zout",
            amount: 1,
            unit: "snuifje",
        },
        {
            name: "peper",
            amount: 1,
            unit: "snuifje",
        },
        {
            name: "tomaten",
            amount: 5,
            unit: "eenheden",
        },
        {
            name: "pasta",
            amount: 350,
            unit: "gram",
        },
        {
            name: "gehakt",
            amount: 200,
            unit: "gram",
        },
        {
            name: "geraspte kaas",
            amount: 50,
            unit: "gram",
        }
    ],
    steps: [
        {
            title: "De pasta koken",
            body: "lorem ipsum",
        },
        {
            title: "De saus maken",
            body: "dolor sit amet",
        },
        {
            title: "Serveren",
            body: "consecutur",
        }
    ],
    softdelete: false,
});

newrecept.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow');
    }
});