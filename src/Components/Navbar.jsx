import React, { useState } from "react";
import {BrowserRouter as Router, Link } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navbarStyle = {
    position: "sticky",
    top: "0%",
    zIndex: 100,
    backdropFilter: "blur(10px)",
    margin: 0,
    overflowY: "hidden",
    zIndex: 4,
  };

    return (
        <Router>
    <nav className="navbar navbar-expand-lg p-2" style={navbarStyle}>
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{
              fontWeight: "bold",
              fontSize: "xx-large",
              fontFamily: "Quicksand",
            }}
            >
          <LocalMallIcon /> eBay
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <MenuIcon />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                Home
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/dashboard"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                Dashboard
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/list-product"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                List Product
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/order"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                Order
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/wish-list"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                WishList
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/category"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                Category
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/aboutus"
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                About Us
              </Link>
            </Button>
            <Button disableRipple variant="text">
              <Link
                className="nav-link active"
                to="/cart"
                style={{ fontFamily: "Quicksand" }}
                >
                <Badge color="secondary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </Link>
            </Button>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              >
              <AccountCircleOutlinedIcon
                fontSize="large"
                style={{ fontFamily: "Quicksand" }}
                />
            </IconButton>
            <Menu
              style={{ fontFamily: "Quicksand" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                >
              <MenuItem
                onClick={handleClose}
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                >
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </MenuItem>
              <MenuItem
                style={{ fontFamily: "Quicksand", fontWeight: "bold" }}
                onClick={handleClose}
                >
                Logout
              </MenuItem>
            </Menu>
          </ul>
        </div>
      </div>
    </nav>
                  </Router>
  );
}

export default Navbar;
