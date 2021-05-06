import React from 'react';
import Song from "../song/Song"
import Table from "react-bootstrap/Table";
import SongModel from '../song/SongModel';

class Songs extends React.Component<{}, { songs: Array<SongModel> }> {

  constructor(props: any) {
    super(props);
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/song/all")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            songs: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log("Error occurred while fetching songs");
        }
      )
  }

  render()  {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan={3}>Songs</th>
          </tr>
        </thead>
        <tbody>
          {this.state.songs.map(song => (
            <Song key={song.id} name={song.name} source={song.image} artist={song.artists.join(', ')}/>
          ))}         
        </tbody>
      </Table> 
    ); 
  }
}

export default Songs;
