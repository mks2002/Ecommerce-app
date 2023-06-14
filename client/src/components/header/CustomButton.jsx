import { Button, Box, styled, Typography } from "@mui/material";
import React from "react";
import { ShoppingCart } from "@mui/icons-material";

const Wrapper = styled(Box)({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > div,& > p,& > button": {
    marginRight: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
});

const Loginbutton = styled(Button)({
  color: "#2874f0",
  background: "#ffffff",
  textTransform: "none",
  fontWeight: "600",
  boxShadow: "none",
  borderRadius: "2px",
  padding: "5px 40px",
  height: "32px",
});

const CustomButton = () => {
  return (
    <Wrapper>
      <Loginbutton variant="contained">Login</Loginbutton>
      <Typography style={{ width: 135, marginTop: 3 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Box style={{ display: "flex" }}>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
};

export default CustomButton;