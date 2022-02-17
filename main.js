
const broadcast = (broadcastWeather) => {
  broadcastWeather()
}

const announceRain = () => {
  console.log("Grab an umbrella. It's going to rain today.")
}

const announceClear = () => {
  console.log("Grab your shades and sunscreen. It's going ot be sunny and hoto today.")
}

const weatherStation = (humidityReading) => {
  if (humidityReading > 95) {
    broadcast(announceRain)
  }
  else if (humidityReading <= 95) {
    broadcast(announceClear)
  }
}

weatherStation(98)
weatherStation(12)
weatherStation(95)