'use strict'

/*
|--------------------------------------------------------------------------
|   Routes
|--------------------------------------------------------------------------
|
|   Here we register application routes and bind controller methods or
|   Closures to them. Keep this file for defining routes only and do
|   not pollute it by writing application specific code.
|
*/

const Route = use('Route')

Route.get('/', function * (request,response) {

  const challenge = use('Challenge/Challenge')
  const time = yield challenge.getTime()
  response.send(time)
  
})
