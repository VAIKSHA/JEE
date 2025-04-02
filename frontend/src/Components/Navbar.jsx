import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeLink, setActiveLink] = useState("Home"); // Track the active link
    const [drawerOpen, setDrawerOpen] = useState(false); // State for the hamburger menu
    const navigate = useNavigate();

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLoginClick = () => {
        handleMenuClose();
        navigate('/login');
    };

    const handleSignupClick = () => {
        handleMenuClose();
        navigate('/signup');
    };

    const handleLinkClick = (link, path) => {
        setActiveLink(link); // Set the active link
        navigate(path); // Navigate to the corresponding path
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <nav
            style={{
                backgroundColor: "#007BFF",
                color: "white",
                padding: "10px 20px",
                position: "fixed",
                top: 0,
                width: "100%",
                zIndex: 1000,
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    maxWidth: "1200px",
                    margin: "0 auto",
                }}
            >
                <a
                    style={{
                        display: "flex",
                        alignItems: "center",
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    <img
                        src={logo}
                        alt="JEE Path Finder Logo"
                        style={{ height: "40px", marginRight: "10px" }}
                    />
                    <span
                        style={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            fontStyle: "italic",
                            cursor: "pointer",
                        }}
                    >
                        JEE PathFinder
                    </span>
                </a>

                {/* Desktop Links */}
                <div
                    className="desktop-links"
                    style={{
                        display: "flex",
                        gap: "30px",
                    }}
                >
                    {[
                        { name: "Home", path: "/" },
                        { name: "Courses", path: "/study-material" },
                        { name: "Rank Calculator", path: "/cut-off" },
                        { name: "Book Your Slot", path: "/book-slot" },
                        { name: "Contact Us", path: "/contact" },
                        { name: "About Us", path: "/about" },
                    ].map((link) => (
                        <a
                            key={link.name}
                            onClick={() => handleLinkClick(link.name, link.path)}
                            style={{
                                textDecoration: "none",
                                color: activeLink === link.name ? "#FFD700" : "white", // Highlight active link
                                fontSize: "1rem",
                                fontWeight: 500,
                                transition: "color 0.3s ease",
                                cursor: "pointer",
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Hamburger Menu */}
                <div
                    className="hamburger-menu"
                    style={{
                        display: "none",
                    }}
                >
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        style={{
                            color: "white",
                            marginLeft: "10px",
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>

                <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <List style={{ width: "250px" }}>
                        {[
                            { name: "Home", path: "/" },
                            { name: "Courses", path: "/study-material" },
                            { name: "Cut-Off", path: "/cut-off" },
                            { name: "Book Your Slot", path: "/book-slot" },
                            { name: "Contact Us", path: "/contact" },
                            { name: "About Us", path: "/about" },
                        ].map((link) => (
                            <ListItem
                                button
                                key={link.name}
                                onClick={() => {
                                    handleLinkClick(link.name, link.path);
                                    setDrawerOpen(false);
                                }}
                            >
                                <ListItemText
                                    primary={link.name}
                                    style={{
                                        color: activeLink === link.name ? "#FFD700" : "#007BFF",
                                        fontWeight: activeLink === link.name ? "bold" : "normal",
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>

                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="profile"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    style={{
                        marginLeft: "20px",
                        marginBottom: "5px",
                        marginRight: "20px",
                        color: "white",
                        fontSize: "2.5rem",
                        cursor: "pointer",
                        backgroundColor: "#0056b3",
                        borderRadius: "50%",
                        padding: "10px",
                        transition: "transform 0.3s ease, background-color 0.3s ease",
                    }}
                >
                    <AccountCircleIcon style={{ fontSize: "2rem" }} />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    PaperProps={{
                        style: {
                            backgroundColor: "#007BFF",
                            color: "white",
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            borderRadius: "8px",
                        },
                    }}
                >
                    <MenuItem
                        onClick={handleLoginClick}
                        style={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "white",
                            padding: "10px 20px",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                    >
                        Login
                    </MenuItem>
                    <MenuItem
                        onClick={handleSignupClick}
                        style={{
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "white",
                            padding: "10px 20px",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                        onMouseOut={(e) => (e.target.style.backgroundColor = "transparent")}
                    >
                        Signup
                    </MenuItem>
                </Menu>
            </div>

            {/* Inline CSS for Responsive Behavior */}
            <style>
                {`
                    @media (max-width: 768px) {
                        .desktop-links {
                            display: none;
                        }
                        .hamburger-menu {
                            display: flex;
                        }
                    }
                `}
            </style>
        </nav>
    );
}