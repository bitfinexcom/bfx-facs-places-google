'use strict'

const Base = require('bfx-facs-base')
const axios = require('axios').default
const _ = require('lodash')

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
    if (!(args && args.input)) throw new Error('Input is required')
    const path = 'queryautocomplete'
    const keys = [
      'input', 'sessiontoken', 'offset', 'origin', 'location', 'radius',
      'language', 'types', 'components', 'strictbounds'
    ]
    return this._req(
      path,
      _.pick(args, keys)
    )
  }

  details (args) {
    if (!(args && args.place_id)) throw new Error('place_id is required')
    const path = 'details'
    const keys = [
      'place_id', 'language', 'region', 'sessiontoken', 'fields'
    ]
    return this._req(
      path,
      _.pick(args, keys)
    )
  }

  _req (path, args) {
    const key = this.conf.google.key
    const output = 'json'
    const query = new URLSearchParams({ ...args, key }).toString()
    const url = this.authority + path + '/' + output + '?' + query
    return axios.get(url)
  }
}

module.exports = GooglePlaces
