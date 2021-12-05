import { Button, Card, Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "./../redux/actions/userActions";
import { setPosts } from "./../redux/actions/postActions";
import axios from "axios";

function Home() {
  const allUsers = useSelector((state) => state.allUsers.users);
  const allPosts = useSelector((state) => state.allPosts.posts);
  const dispatch = useDispatch();

  // Fetch User data
  const fetchUsers = async () => {
    const allUserData = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((error) => console.log("NO POST FOUND", error));
    console.log(allUserData.data);
    dispatch(setUsers(allUserData.data));
  };

  // Fetch post data
  const fetchPost = async () => {
    const allPostData = await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .catch((error) => console.log("NO POST FOUND", error));
    dispatch(setPosts(allPostData.data));
  };

  useEffect(() => {
    fetchPost();
    fetchUsers();
  }, []);
  return (
    <div>
      <Typography
        variant="h4"
        style={{ textAlign: "center", margin: "50px 0px" }}
      >
        Home Page
      </Typography>
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  All Posts
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/posts">
                  <Button size="small" variant="contained">
                    All Post
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card sx={{ minWidth: 275, textAlign: "center" }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Users
                </Typography>
              </CardContent>
              <CardActions
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Link to="/users">
                  <Button size="small" variant="contained">
                    All Users
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <ul>
          <Typography variant="h6">
            List of User(First redux call and fetch data from store)
          </Typography>
          <hr />
          {allUsers?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Home;
