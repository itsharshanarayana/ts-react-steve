import styles from './post-card.module.css';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {Post} from "@itsharshanarayana/redux-thunk-types";
import React from "react";

/* eslint-disable-next-line */
export interface PostCardProps {
  post: Post
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
  return (
      <Card sx={{marginBottom: '10px', border: '1px solid lightblue'}}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {post.body}
          </Typography>
        </CardContent>
      </Card>
  );
}

export default PostCard;
