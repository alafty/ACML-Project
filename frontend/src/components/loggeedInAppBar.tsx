import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import "../Styling/mainLayout.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../App";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "30ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

export default function LoggedInBar(props) {
  const [image, setImage] = React.useState(props.page);
  const navigation = useNavigate();
  const [state, dispatch] = useGlobalState();
  const [searchTerm, setSearchTerm] = React.useState("");

  const onChangeText = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchTerm(e.target.value);
  };

  const redirectToSearch = () => {
    if (searchTerm.length != 0) navigation(`/searchCourse=${searchTerm}`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          style={{
            display: "flex",
            flexDirection: "row",
            height: "80px",
            justifyContent: "space-between",
            background: "#293237",
          }}
        >
          <Link to={props.default}>
            <img
              src={require("../assets/Logo-White.png")}
              height={70}
              width={220}
            />
          </Link>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Courses or Instructors.."
                inputProps={{ "aria-label": "search" }}
                onChange={onChangeText}
              />
            </Search>
            <Button variant="contained" id="small-button-primary" onClick={redirectToSearch}>
              Search
            </Button>
          </div>
          <Avatar
            className="avatar"
            sx={{ bgcolor: "#4b96a9" }}
            onClick={() => {
              // state.loggedInUser = {};
              navigation("/traineeProfile");
            }}
          >
            {state.loggedInUser.Username[0]}
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
