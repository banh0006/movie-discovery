import React from 'react'
import MovieCard from '../atoms/MovieCard'
import Swiper from 'react-id-swiper'
import 'swiper/swiper.scss'

export default function SwiperMovies({ movies }) {
    const movieCards = movies.map(movie => (
      <div>
          <MovieCard key={movie.id} movie={movie} changeId={true} />
      </div>
    ))

    const params = {
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        },
        spaceBetween: 100,
        breakpoints: {
          1350: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        freeMode: true,
    }

    return (
        <Swiper {...params} shouldSwiperUpdate >
            { movieCards}
        </Swiper>
    )
}
