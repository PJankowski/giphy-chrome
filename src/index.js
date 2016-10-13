import React from 'react'

import axios from 'axios'

let images = document.getElementsByTagName('img')

for (let i=0;i<images.length;i++) {
    axios.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris')
      .then((response) => {
        let source = response.data.data.image_original_url

        if (window.location.protocol == "https:") {
          let newSource = source.replace('http:', 'https:')
          images[i].src = newSource
        } else {
          images[i].src = source
        }
      })
      .catch((err) => {
        console.log(err)
      })
}

images.map((image) => {
  axios.get('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=chuck+norris')
    .then((response) => {
      let source = response.data.data.image_original_url

      if (window.location.protocol == "https:") {
        let newSource = source.replace('http:', 'https:')
        image.src = newSource
      } else {
        image.src = source
      }
    })
    .catch((err) => {
      console.log(err)
    })
})
