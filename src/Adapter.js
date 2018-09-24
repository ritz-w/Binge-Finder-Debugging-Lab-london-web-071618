class Adapter {
  static getShows = (loadNum) => {
    return fetch(`http://api.tvmaze.com/shows?page=${loadNum}`)
    .then(res => res.json())
  }

  static getShowEpisodes (showID){
    return fetch(`http://api.tvmaze.com/shows/${showID}/episodes`)
    .then(res => res.json())
  }
}

export {Adapter as default}
