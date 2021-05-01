import React from 'react';
import Song from "../song/Song"
import Table from "react-bootstrap/Table";
import Idol from '../images/bts-idol.jpg';
import Dynamite from '../images/bts-dynamite.png';
import Just from '../images/bm-just.jpg';

function Songs() {
  return (  
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th colSpan={3}>Songs</th>
            </tr>
          </thead>
          <tbody>
            <Song name="Idol" source={Idol} artist="BTS"/>
            <Song name="Dynamite" source={Dynamite} artist="BTS"/>
            <Song name="Just the way you are" source={Just} artist="Bruno Mars"/>         
          </tbody>
        </Table>  
  );
}

export default Songs;
