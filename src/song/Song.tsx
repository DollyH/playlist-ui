import React from 'react';
import SongMenu from '../songmenu/SongMenu';
import Image from "react-bootstrap/Image";

function Song(props:any) {
  return (
    <tr>
      <td className="ten"><Image src={`data:image/jpg;base64,${props.source}`} roundedCircle className="imgDimensions" /></td>
      <td>{props.name}<br/>{props.artist}</td>
      <td className="ten"><SongMenu/></td>
    </tr>
  );
}

export default Song;
