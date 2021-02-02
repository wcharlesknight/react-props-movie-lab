import React, { Component } from 'react';
import CardFront from './card-components/CardFront.js';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX
    return movieData.map((mData, i) => <MovieCard 
            key={i}
            title={mData.title}
            IMDBRating={mData.IMDBRating}
            genres={mData.genres}
            poster={mData.poster} 
           />)


    
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
