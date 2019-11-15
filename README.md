# booking
This project is A simple API Nodejs to manage service bookings in a company, for example, a hairdress. The entities that compose this API are:
- Service (For example, kind of haircut)
- Room (For example, hairdressers)
- Time (Times of each day)
- Booking (One of each others)

This API have been coding with the ORM sequelize and packages mysql, express and body-parser.
You need to use this commant to up server: <br />
> node index.js <br />

This project have been testing with mocha chai and supertest to do it. <br />

> npm test <br />

# database
It is necessary configure database file, in this case, you need to add a mysql database:
_database/db.js

# routes
## service <br />
Get all services <br />
GET http://localhost:3000/service/all <br />

Add service <br />
POST http://localhost:3000/service/new <br />
Body: <br />
    {"name": "service_test", "description": "service_test_description", "unit": 3} <br />

Update service <br />
POST http://localhost:3000/service/edit <br />
Body: <br />
    {"id": id,"name": "service_test", "description": "service_test_description", "unit": 4} <br />

Remove service <br />
POST http://localhost:3000/service/delete <br />
Body: <br />
    {"id": id} <br />

## room <br />
Get all rooms <br />
GET http://localhost:3000/room/all <br />

Add room <br />
POST http://localhost:3000/room/new <br />
Body: <br />
    {"name": "cabina_test", "description": "cabina_test_description"} <br />

Update room <br />
POST http://localhost:3000/room/edit <br />
Body: <br />
    {"id": id,"name": "cabina_test2", "description": "cabina_test_description2"} <br />

Remove room <br />
POST http://localhost:3000/room/delete <br />
Body: <br />
    {"id": id} <br />

## time <br />
Get all times <br />
GET http://localhost:3000/time/all <br />

Add time <br />
POST http://localhost:3000/time/new <br />
Body: <br />
    {"nametime": "9:00", "description": "hola"} <br />

Update time <br />
POST http://localhost:3000/time/edit <br />
Body: <br />
    {"id": id,"nametime": "21:00", "description": "hola"} <br />

Remove time <br />
POST http://localhost:3000/time/delete <br />
Body: <br />
    {"id": id} <br />

## booking <br />
Get all booking between 2 dates <br />
GET http://localhost:3000/booking/all/2019-04-09/2019-04-11 <br />

Add booking <br />
POST http://localhost:3000/booking/new <br />
Body: <br />
    {"idstarttime": 1, "idservice": 1, "idroom": 1,
    "date": "2019-04-10",
    "clientname": "cliente_test", "clientsurname": "cliente_test", 
    "clienttelephone": "123456789", "clientmail": "aaa@aaa.com"} <br />

Update booking <br />
POST http://localhost:3000/booking/edit <br />
Body: <br />
    {"id": id, "idstarttime": idtime, "idservice": idservice, "idroom": idroom,
    "date": "2019-04-10",
    "clientname": "cliente_test2", "clientsurname": "cliente_test2", 
    "clienttelephone": "123456780", "clientmail": "aaa@aaa.com"} <br />

Remove booking <br />
POST http://localhost:3000/booking/delete <br />
Body: <br />
    {"id": id} <br />
