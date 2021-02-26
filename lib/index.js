import fetch from 'node-fetch'

export default class Clubs {
  #url
  #data
  #load = async () => {
    if (this.#data) {
      return this.#data
    }

    const doc = await fetch(this.#url)
    const json = await doc.json()

    this.#data = {}
    for (const feature of json.features) {
      if (feature.properties.identifier in this.#data) {
        this.#data[feature.properties.identifier].coordinates.push(feature.geometry.coordinates)
      } else {
        this.#data[feature.properties.identifier] = feature.properties
        this.#data[feature.properties.identifier].coordinates = [feature.geometry.coordinates]
      }
    }

    return this.#data
  }

  constructor (url = 'https://schach.in/deutschland.geojson') {
    this.#url = url
  }

  async get (identifier) {
    await this.#load()
    return this.#data[identifier]
  }

  static async get (identifier) {
    const clubs = new Clubs()
    return await clubs.get(identifier)
  }
}
