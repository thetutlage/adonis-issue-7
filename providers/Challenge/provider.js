'use strict'

const ServiceProvider = require('adonis-fold').ServiceProvider
const Challenge = require('./Challenge')

class ChallengeProvider extends ServiceProvider {

    * register() {

        this.app.bind('Challenge/Challenge', function() {
            return new Challenge()
        })

    }

}

module.exports = ChallengeProvider