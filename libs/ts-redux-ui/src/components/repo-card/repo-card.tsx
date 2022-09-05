import styles from './repo-card.module.css';
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Repository} from "@itsharshanarayana/ts-redux-store";
import React from "react";

/* eslint-disable-next-line */
export interface RepoCardProps {
  repo: Repository;
}

const RepoCard: React.FC<RepoCardProps> = ({repo}) => {

  return (
    <div className={styles['container']}>
      <Card sx={{marginRight: '15px', border: '1px solid lightblue'}}>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            <b>{repo.name}</b>
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {repo.description}
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            <b>Author:</b>&nbsp;{repo.publisher.username}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <b>Email:</b>&nbsp;{repo.publisher.email}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={repo.links.npm}>npm</Button>
          <Button size="small" href={repo.links.homepage}>home</Button>
          <Button size="small" href={repo.links.repository}>repository</Button>
          <Button size="small" href={repo.links.bugs}>bugs</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default RepoCard;
