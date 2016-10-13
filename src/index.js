import React from 'react'

import axios from 'axios'

let images = document.getElementsByTagName('img')

for (let i=0;i<images.length;i++) {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris')
      .then((response) => {
        images[i].src = response.data.data.image_original_url
      })
      .catch((err) => {
        console.log(err)
      })
}
