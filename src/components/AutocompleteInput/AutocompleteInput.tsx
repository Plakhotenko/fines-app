import React, { FC, SyntheticEvent } from 'react';
import { Autocomplete, AutocompleteInputChangeReason, Box, TextField } from '@mui/material';
import { useField } from 'formik';
import { IUser } from '../../models';

const AutocompleteInput: FC<{
  options: IUser[];
  onInputChange: (
    event: SyntheticEvent<Element, Event>,
    value: string,
    reason: AutocompleteInputChangeReason
  ) => void;
}> = ({ options, onInputChange }) => {
  const [{ value }, { touched, error }, { setValue }] = useField('userId');
  const isErrorShown = touched && !!error;

  return (
    <>
      <Autocomplete
        isOptionEqualToValue={(option, value) => value.id === option.id}
        disablePortal
        options={options}
        renderOption={(props, option) => (
          <Box component="li" {...props} key={option.id}>
            {option.name}
          </Box>
        )}
        onChange={(event, value) => setValue(value?.id || '')}
        onInputChange={onInputChange}
        getOptionLabel={({ name }) => name}
        renderInput={(props) => (
          <TextField
            {...props}
            label="User"
            helperText={isErrorShown && error}
            error={isErrorShown}
          />
        )}
      />
      <input type="hidden" name="userId" value={value} />
    </>
  );
};

export default AutocompleteInput;
