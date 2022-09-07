import styles from './search.module.css';
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchRepositories, useTypedSelector} from "@itsharshanarayana/redux-ts-v01-store";
import ResultTable from "../result-table/result-table";

/* eslint-disable-next-line */
export interface SearchProps {
}

export const Search: React.FC<SearchProps> = (props) => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const {data, loading, error} = useTypedSelector(state => state.repositories);

  const fetchRepos = bindActionCreators(fetchRepositories, dispatch);
  const onButtonClick = () => {
    console.log('BUTTON CLICKED!');
    fetchRepos(term);
  };

  const renderButton = () => {
    if (!term) {
      return (
        <Button variant="contained"
                fullWidth
                disabled>
          Search (Please enter text & click me)
        </Button>
      );
    }
    return (
      <Button variant="contained"
              fullWidth
              onClick={onButtonClick}>
        Search (Click me to get results)
      </Button>
    );
  }

  return (
    <div className={styles['container']}>
      <Box sx={{maxWidth: '100%'}}>
        <Stack direction={'column'} spacing={2}>
          <Typography variant={'h5'}>Search for an NPM Package!</Typography>
          <TextField fullWidth
                     label="Search for an npm package"
                     id="fullWidth"
                     value={term}
                     onChange={(e) => setTerm(e.target.value)}/>

          {renderButton()}

        </Stack>
      </Box>
      <br/>
      {/*{term && !loading && !error && <ResultTable results={data}/>}*/}
      <ResultTable results={data}/>
    </div>
  );
}

export default Search;
