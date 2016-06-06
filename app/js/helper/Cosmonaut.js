define(function (require) {
    'use strict';

    var ISubscriber = require('./iSubscriber'),
        Cosmonaut = function (name, surname) {
            this.name = name;
            this.surname = surname;
            this.update = function (data) {
                console.log(this.name + ' ' + this.surname + ' ' + ' is on : ' + data + ' altitude.');
            };
        };

    Cosmonaut.prototype = new ISubscriber();

    return Cosmonaut;
});
