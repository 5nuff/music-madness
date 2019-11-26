import React from 'react'

import data from './data/artist-info.json'

const Artists = props => {
  const bandName = data.categories.filter(item => {
    return item.category === props.match.params.category
  })[0]
  console.log(bandName)
  return (
    <div className={props.match.params.category}>
      {/* <h1>{bandName.details}</h1> */}
      <ul>
        {bandName.details.map(detail => {
          return (
            <section>
              <header>{detail.name}</header>
              <img src={detail.image} />
              <h1>Genres: {detail.genre}</h1>
              <h2>Best Albums: {detail.bestAlbums}</h2>
              <h3>Newest Album: {detail.newestAlbum}</h3>
            </section>
          )
        })}
      </ul>
    </div>
  )
}

export default Artists
