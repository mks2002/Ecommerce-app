import React, { useState } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  styled,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { Menu } from "@mui/icons-material";

const StyledHeader = styled(AppBar)({
  background: "#2874f0",
  height: "55px",
});

const Component = styled(Link)({
  marginLeft: "12%",
  lineHeight: 0,
  textDecoration: "none",
  color: "inherit",
});

const Subheading = styled(Typography)({
  fontSize: "10px",
  fontStyle: "italic",
});

const PlusImage = styled("img")({
  width: "13%",
  height: "10px",
  marginLeft: "2px",
});

const CustomButtonStyle = styled(Box)(({ theme }) => ({
  marginLeft: "35px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setopen] = useState(false);

  const list = () => (
    <Box style={{ width: 180 }} onClick={handleClose}>
      <List>
        <ListItem>
          <CustomButton />
        </ListItem>
      </List>
    </Box>
  );

  const handleOpen = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
  };

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: "55px" }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <img src={logoURL} alt="logo" style={{ width: "75px" }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "yellow" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="sublogo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonStyle>
          <CustomButton />
        </CustomButtonStyle>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
