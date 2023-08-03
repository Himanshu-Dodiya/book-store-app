import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const BookList = () => {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <div>This is Books Page</div>
      <Button variant="contained" color="info" onClick={handleButtonClick}>Click Me!!</Button>
    </>
  );
};

export default BookList;
