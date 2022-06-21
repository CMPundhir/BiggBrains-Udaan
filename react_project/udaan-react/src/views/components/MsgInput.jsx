import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SplitButton from "react-bootstrap/SplitButton";

const MsgInput = () => {
  return (
    <div className="msg-input">
      <InputGroup className="mx-1" style={{ width: "90%" }}>
        <Form.Control aria-label="Text input with dropdown button" />
        <SplitButton
          variant="outline-secondary"
          title="Send"
          id="segmented-button-dropdown-2"
          alignRight
        >
          <Dropdown.Item href="#">Send</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </SplitButton>
      </InputGroup>
    </div>
  );
};

export default MsgInput;
