import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function SongMenu() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className="noCaret">…</Dropdown.Toggle>
      <Dropdown.Menu>
        <DropdownButton key="left" id="dropdown-button-drop-left" drop="left" variant="secondary" title="Add to Playlist">
          <Dropdown.Item eventKey="1" className="dropdownStyle">New Playlist</Dropdown.Item>
          <Dropdown.Item eventKey="2" className="dropdownStyle">BTS</Dropdown.Item>
          <Dropdown.Item eventKey="3" className="dropdownStyle">Love</Dropdown.Item>
          <Dropdown.Item eventKey="4" className="dropdownStyle">Slow</Dropdown.Item>
        </DropdownButton>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default SongMenu;
