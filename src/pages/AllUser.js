import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import { Button, Container, Grid, Typography } from "@mui/material";
import { removeUsers, setUsers } from "./../redux/actions/userActions";
import User from "./../components/User";
import { setPosts } from "./../redux/actions/postActions";
import { Link } from "react-router-dom";

function AllUser() {
  const allUsers = useSelector((state) => state.allUsers.users);
  const allPosts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();

  const clearUsers = () => {
    dispatch(removeUsers());
  };
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3">
          List of User(fetch data from redux store)
        </Typography>
        <hr />
        {allUsers && (
          <Button onClick={clearUsers} variant="contained" color="secondary">
            {" "}
            click to clear user data
          </Button>
        )}

        <br />
        <br />
        <Grid container spacing={3}>
          {allUsers ? (
            allUsers.map((user) => <User user={user} key={user.id} />)
          ) : (
            <Typography variant="h6" color="secondary">
              Only the homepage stores user and post data. Go back to{" "}
              <Link to="/">Home Page</Link> to get data again.
            </Typography>
          )}
        </Grid>
      </Container>
      {/* <Typography variant="h5">
        Working Redux State management (post List in user page)
      </Typography> */}
      {/* <ul>
        {allPosts?.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul> */}
    </Box>
  );
}

export default AllUser;
