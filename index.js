'use strict'

const Base = require('bfx-facs-base')
const axios = require('axios')

class GooglePlaces extends Base {
  constructor (caller, opts, ctx) {
    super(caller, opts, ctx)

    this.name = 'places-google'
    this._hasConf = true
    this.authority = 'https://maps.googleapis.com/maps/api/place/'

    this.init()

    if (opts.conf) this.conf = opts.conf
  }

  queryAutoComplete (args) {
    const input = args && args.input
    if (!input) throw new Error('Input is required')
    const path = 'queryautocomplete/'
    return this._req(path, { input })
  }

  details (args) {
    const placeId = args && args.place_id
    if (!placeId) throw new Error('place_id is required')
    const path = 'details/'
    return this._req(path, { place_id: placeId })
  }

  _req (path, args) {
    const key = this.conf.google.key
    const output = 'json'
    const query = '?' + new URLSearchParams({ ...args, key }).toString()
    const url = this.authority + path + output + query
    return axios.get(url)
  }
}

module.exports = GooglePlaces
