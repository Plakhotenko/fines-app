import React, { FC } from 'react';
import { useField } from 'formik';
import { DatePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';

const DatePickerControl: FC<{ name: string; label: string }> = ({ name, label }) => {
  const [{ value }, { touched, error }, { setValue }] = useField(name);
  const isErrorShown = touched && !!error;

  return (
    <DatePicker
      label={label}
      value={value}
      onChange={(value: string | null) => setValue(value || '')}
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ width: '100%' }}
          error={isErrorShown}
          helperText={isErrorShown && error}
        />
      )}
    />
  );
};

export default DatePickerControl;
