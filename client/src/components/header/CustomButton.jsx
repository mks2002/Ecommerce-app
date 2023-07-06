import { Button, Box, styled, Typography } from "@mui/material";
import { React, useState, useContext } from "react";
import { ShoppingCart } from "@mui/icons-material";
import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3% 0 auto",
  "& > *": {
    marginRight: "40px",
    fontSize: "16px",
    alignItems: "center",
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

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
  const [open, setopen] = useState(false);
  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setopen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Loginbutton onClick={() => openDialog()} variant="contained">
          Login
        </Loginbutton>
      )}

      <Typography style={{ width: 135, marginTop: 3 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Box style={{ display: "flex" }}>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Box>
      <LoginDialog open={open} setopen={setopen} />
    </Wrapper>
  );
};

export default CustomButton;
