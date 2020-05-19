# bfx-facs-places-google

## Configuration

* Create a Project in https://console.cloud.google.com/home

* Active places-api for that project in https://console.cloud.google.com/google/maps-apis/api-list

* Get credentials from https://console.cloud.google.com/google/maps-apis/credentials and add the api key to the configuration file

_Remember to add restrictions to the credential as to block connections from other urls, ips, etc._

### Example configuration

```
{
  "p0": {
    "google" : {
      "key": "xxxXXxxxXXXXxxxXXXXXxx_XXxxxXXXXxxxXXXXX"
  }
}
```

## Google documentation links

### Details
https://developers.google.com/places/web-service/details

### Autocomplete
https://developers.google.com/places/web-service/autocomplete
