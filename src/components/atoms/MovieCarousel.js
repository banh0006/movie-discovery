import React, { useState, useEffect } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'
import { POSTER_BASE_URL } from '../../asset/GlobalData'
import { connect } from 'react-redux'
import '../../css/MovieCarousel.css'

export function MovieCarousel(props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
      if (props.nowPlaying) {
        const newItems = []
        props.nowPlaying.map(movie => {
          // isImageDark(`${POSTER_BASE_URL}${movie.backdrop_path}`, index)
          newItems.push({
            src: `${POSTER_BASE_URL}${movie.backdrop_path}`,
            altText: movie.original_title,
            caption: movie.original_title,
            overview: movie.overview,
          })
          return null
        })
        setItems(newItems)
      }
    }, [props.nowPlaying])

    const next = () => {
        if (animating) return
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    const goToIndex = (newIndex) => {
        if (animating) return
        setActiveIndex(newIndex)
    }

    const slides = items.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
            <img src={item.src} alt={item.altText} />
            <CarouselCaption className={props.textColor} captionText={item.overview} captionHeader={item.caption} />
          </CarouselItem>
        )
    })

  //   const isImageDark = function(imageSrc, index) {
  //     var img = document.createElement("img")
  //     img.src = imageSrc
  //     img.setAttribute('crossOrigin', '')
  //     img.style.display = "none"
  //     document.body.appendChild(img)
  
  //     var fuzzy = 0.1

  //     img.onload = function() {
  //         var canvas = document.createElement("canvas")
  //         canvas.width = this.width
  //         canvas.height = this.height
  
  //         var ctx = canvas.getContext("2d")
  //         ctx.drawImage(this,0,0)
  
  //         var imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
  //         var data = imageData.data
  //         var r,g,b, max_rgb
  //           var light = 0, dark = 0
  
  //         for(var x = 0, len = data.length; x < len; x+=4) {
  //             r = data[x]
  //             g = data[x+1]
  //             b = data[x+2]
  
  //             max_rgb = Math.max(Math.max(r, g), b)
  //             if (max_rgb < 128)
  //                 dark++
  //             else
  //                 light++
  //         }

  //         var dl_diff = ((light - dark) / (this.width * this.height))
  //         if (dl_diff + fuzzy < 0) { //dark image
  //           const newTextColors = [...navbarTextColors, navbarTextColors[index] = 'light']
  //         } else { //light image
  //           const newTextColors = [...navbarTextColors, navbarTextColors[index] = 'dark']
  //         }
  //     }
  // }

  return (
      <Carousel 
              activeIndex={activeIndex}
              next={next}
              previous={previous}
          >

          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
              {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  )
}

function mapStateToProps(state) {
  return {
      nowPlaying: state.movies.nowPlaying.length === 0 
          ? [] 
          : state.movies.nowPlaying,
  }
}

export default connect(mapStateToProps)(MovieCarousel)