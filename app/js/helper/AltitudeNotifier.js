define(function (require) {
    'use strict';

    var CosmonautsNotifier = require('./CosmonautsNotifier'),
        AltitudeNotifier = function (speed, airResistance, container) {
            this.cosmonauts = [];
            this.speed = speed;
            this.airResistance = airResistance;
            this.altitude = 0;
            this.currentAltitude = 0;

            this.STATUS_UPDATE_INTERVAL_MS = 500;
            this.STEP_TO_NOTIFY = 500;

            this.step = this.speed / this.airResistance;

            this.start = function () {
                var self = this;
                setInterval(function () {
                    self.altitude += self.step;
                    self.currentAltitude += self.step;
                    self.updateView();

                    if (self.currentAltitude > self.STEP_TO_NOTIFY) {
                        self.currentAltitude = 0;
                        console.log('---------------------------------------------------');
                        self.notify(self.altitude);
                        console.log('---------------------------------------------------\n');

                    }
                }, self.STATUS_UPDATE_INTERVAL_MS);
            };

            this.updateView = function () {
                document.querySelector(container).style.left = this.altitude + 'px';
            };
        };

    AltitudeNotifier.prototype = new CosmonautsNotifier();

    return AltitudeNotifier;
});
