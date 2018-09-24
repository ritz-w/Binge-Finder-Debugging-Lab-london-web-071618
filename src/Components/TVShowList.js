import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = (s) => {
    if (this.props.searchTerm !== ""){
      const foundList = this.props.shows.filter(s => s.name.toLowerCase().includes(this.props.searchTerm))
      console.log(foundList)
      return foundList.map((s) => <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
    } else {
      console.log("bye")
      return this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
    }
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
