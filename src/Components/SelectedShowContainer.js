import React, { Component } from 'react';
import Episode from './Episode';

class SelectedShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSeason: 1,
    }
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map((e)=> e.season).unique()
      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  mapEpisodes = () => {
    let episodeList = this.props.allEpisodes.filter(e => e.season === this.state.selectedSeason)
    return episodeList.map((e)=>{
      return (e.season === this.state.selectedSeason) ?
        (<Episode eachEpisode={e} key={e.id}/>) : null
      })
  }

  handleSelectionChange = (e) => {
    const seasonSelection = parseInt(e.target.value)
    this.setState({ selectedSeason: seasonSelection })
  }


  render() {
    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={this.handleSelectionChange}>
          {this.mapSeasons()}
        </select>
        {this.mapEpisodes()}
      </div>
    );
  }

}

export default SelectedShowContainer

Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
