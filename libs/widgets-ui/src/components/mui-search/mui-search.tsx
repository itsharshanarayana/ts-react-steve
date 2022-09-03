import styles from './mui-search.module.css';

import React, {useEffect, useState} from "react";

import {Box, FormControl, Input, InputLabel, Typography} from "@mui/material";
import {getWikiResults} from "../../../../api-services/src/lib/wikipedia";
import {WIKIPEDIA_BASE_URL, WikiSearch} from "@itsharshanarayana/widgets-types";
import MuiCard from "../mui-card/mui-card";

/* eslint-disable-next-line */
export interface MuiSearchProps {
}

export const MuiSearch: React.FC<MuiSearchProps> = (props) => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState<WikiSearch[]>([]);

  useEffect(() => {
    if (term) {
      const wikiResults = getWikiResults(term);
      wikiResults
        .then((r: WikiSearch[]) => setResults(r))
        .catch(err => console.log('Exception caught:', err.message))
    }
  }, [term]);

  const renderedResults = results?.map(i => {
    const pageURL = `${WIKIPEDIA_BASE_URL}?curid=${i.pageid}`;
    return (
      <MuiCard key={i.pageid} title={i.title} snippet={i.snippet} pageUrl={pageURL} pageId={i.pageid}/>
    );
  });

  // Methods
  // Set state with the value entered in the form field.
  const onInputFieldChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setTerm(event.target.value);
  };

  return (
    <div className={styles['container']}>
      <Typography variant={'h4'}>Welcome to Wikipedia Search</Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {m: 1, width: '25ch'},
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <FormControl fullWidth sx={{m: 1}} variant="outlined">
            <InputLabel htmlFor="standard-adornment-amount">Enter Search Term</InputLabel>
            <Input
              id="standard-adornment-amount"
              value={term}
              onChange={onInputFieldChange}
            />
          </FormControl>
        </div>
      </Box>
      {renderedResults}
    </div>
  );
}

export default MuiSearch;
