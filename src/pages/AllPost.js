import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Post from "../components/Post";
import { setPosts } from "../redux/actions/postActions";
import { Container, Grid, Typography } from "@mui/material";

function AllPost() {
  const allPosts = useSelector((state) => state.allPosts.posts);
  const allUsers = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  console.log(allPosts);
  return (
    <Box>
      <Container maxWidth="lg">
        <Typography variant="h3">
          List of Post(fetch data from redux store)
        </Typography>
        <hr />
        <Grid container spacing={3}>
          {allPosts?.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Grid>
        <Typography variant="h5">
          Working Redux State management (user List in post page)
        </Typography>
        <ul>
          {allUsers?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Container>
    </Box>
  );
}

export default AllPost;
