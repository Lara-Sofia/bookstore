import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Registered = () => {
  const navigation = useNavigate();

  const goBackHandler = () => {
    navigation("/login");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h2>Registered User!</h2>
      <Button className="w-25" onClick={goBackHandler} variant="primary">
        Go Back
      </Button>
    </div>
  );
};

export default Registered;