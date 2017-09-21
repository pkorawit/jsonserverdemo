var faker = require('faker')

function generatePins () {
  var pins = []

  for (var id = 0; id < 50; id++) {

    pins.push({
      "id": id,
      "username": faker.internet.userName(),
      "Name": faker.name.firstName() + " " + faker.name.lastName(),
      "avatar" : faker.internet.avatar(),
      "photo": faker.image.imageUrl(),
      "lat": faker.address.latitude(),
      "lng" : faker.address.longitude(),
      "title" : faker.lorem.sentence(),
      "description" : faker.lorem.paragraph(),
      "likes" : faker.random.number()
    })
  }

  return { "pins": pins }
}

module.exports = generatePins