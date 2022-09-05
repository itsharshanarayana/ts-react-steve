import styles from './repositories-list.module.css';
import {Box, Button, FormControl, Input, InputLabel, Stack} from "@mui/material";
import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {actionCreators} from "@itsharshanarayana/ts-redux-store";
import {useTypedSelector} from "@itsharshanarayana/ts-redux-store";
import {useActions} from "@itsharshanarayana/ts-redux-store";
import RepoCard from "../repo-card/repo-card";

/* eslint-disable-next-line */
export interface RepositoriesListProps {
}

export function RepositoriesList(props: RepositoriesListProps) {
  const [term, setTerm] = useState('');
  //const {data, loading, error} = useTypedSelector((state) => state.repositories);
  const {data, loading, error} = useTypedSelector((state) => state.repositoriesData);
  const dispatch = useDispatch();
  const {searchRepositories} = useActions();

  const onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    searchRepositories(term);
  }

  const renderedRepositories = data?.map((d, i) =>{
    return (
      <RepoCard repo={d} key={i}/>
    );
  });

  return (
    <div className={styles['container']}>
      <Stack spacing={2} direction="column">
        {/*<Box sx={{display: 'flex', flexWrap: 'wrap'}}>*/}
        <Box sx={{ marginRight: '15px'}}>
          <Stack spacing={2} direction="column" sx={{marginLeft: '15px', minWidth: '90%'}}>
            <FormControl fullWidth sx={{m: 1}} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Search for an npm Package</InputLabel>
              <Input
                sx={{ marginRight: '15px' }}
                id="standard-adornment-amount"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
            </FormControl>
            <Button variant="contained"
                    color={'success'}
                    onClick={onButtonClick}
            >
              Search
            </Button>
          </Stack>
        </Box>
      </Stack>
      <Stack spacing={2} direction="column" sx={{marginLeft: '15px', minWidth: '90%', marginBottom: '15px', marginTop: '15px'}}>
        {error && <h3>{error}</h3>}
        {loading && <h3>loading ...</h3>}
        {!error && !loading && renderedRepositories}
      </Stack>
    </div>
  );
}

export default RepositoriesList;
