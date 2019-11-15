# booking
This project is A simple API Nodejs to manage service bookings in a company, for example, a hairdress. The entities that compose this API are:
- Service (For example, kind of haircut)
- Room (For example, hairdressers)
- Time (Times of each day)
- Booking (One of each others)

This API have been coding with the ORM sequelize and packages mysql, express and body-parser.
You need to use this commant to up server:
> node index.js
This project have been testing with mocha chai and supertest to do it.
> npm test

# database
It is necessary configure database file, in this case, you need to add a mysql database:
_database/db.js

# routes:
## service
Get all services
GET http://localhost:3000/service/all

Add service
POST http://localhost:3000/service/new
Body:
    {"name": "service_test", "description": "service_test_description", "unit": 3}

Update service
POST http://localhost:3000/service/edit
Body:
    {"id": id,"name": "service_test", "description": "service_test_description", "unit": 4}

Remove service
POST http://localhost:3000/service/delete
Body:
    {"id": id}

## room
Get all rooms
GET http://localhost:3000/room/all

Add room
POST http://localhost:3000/room/new
Body:
    {"name": "cabina_test", "description": "cabina_test_description"}

Update room
POST http://localhost:3000/room/edit
Body:
    {"id": id,"name": "cabina_test2", "description": "cabina_test_description2"}

Remove room
POST http://localhost:3000/room/delete
Body:
    {"id": id}

## time
Get all times
GET http://localhost:3000/time/all

Add time
POST http://localhost:3000/time/new
Body:
    {"nametime": "9:00", "description": "hola"}

Update time
POST http://localhost:3000/time/edit
Body:
    {"id": id,"nametime": "21:00", "description": "hola"}

Remove time
POST http://localhost:3000/time/delete
Body:
    {"id": id}

## booking
Get all booking between 2 dates
GET http://localhost:3000/booking/all/2019-04-09/2019-04-11

Add booking
POST http://localhost:3000/booking/new
Body:
    {"idstarttime": 1, "idservice": 1, "idroom": 1,
    "date": "2019-04-10",
    "clientname": "cliente_test", "clientsurname": "cliente_test", 
    "clienttelephone": "123456789", "clientmail": "aaa@aaa.com"}

Update booking
POST http://localhost:3000/booking/edit
Body:
    {"id": id, "idstarttime": idtime, "idservice": idservice, "idroom": idroom,
    "date": "2019-04-10",
    "clientname": "cliente_test2", "clientsurname": "cliente_test2", 
    "clienttelephone": "123456780", "clientmail": "aaa@aaa.com"}

Remove booking
POST http://localhost:3000/booking/delete
Body:
    {"id": id}