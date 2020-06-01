/*

ToDo: Replace the static categories with some fetching and storing to the API

*/
const categories = {
    "tablets": {
      "color": "grey",
      "accessories": {
        "keyboardCompatible": true,
        "trackpadComptatible": true,
      },
      "os": {
        "type": "iOS",
        "version": 13
      },
      "storage": {
        "unit": "Gb",
        "value": 256
      }
    },
  
    "cars": {
      "color": "grey",
      "motor": "electric",
      "constructor": "Tesla",
      "features": {
        "GPS": true,
        "self-driving": true
      }
    }
  };
  
  function getCategories(){
      return categories;
  }

  export default getCategories;