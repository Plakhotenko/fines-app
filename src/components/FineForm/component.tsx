import React, { FC, useEffect, useState } from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Box } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import debounce from 'lodash/debounce';
import AutocompleteInput from '../AutocompleteInput';
import DatePickerControl from '../DatePickerControl';
import Input from '../Input';
import { admin } from '../../services';
import { IUser } from '../../models';
import useValidationSchema from './validation-schema';
import Translate from '../Translate';

interface IFormValue {
  userId: IUser['id'];
  description: string;
  amount: number;
  deadline: string;
}

const useFineForm = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const validationSchema = useValidationSchema();

  useEffect(() => {
    admin
      .users()
      .then(({ data: users }) => setUsers(users))
      .catch(() => setUsers([]));
  }, []);

  const onUserInputChange = debounce((event: any, value: string) => {
    admin
      .users(value)
      .then(({ data: users }) => setUsers(users))
      .catch(() => setUsers([]));
  }, 1000);

  const handleSubmit = (value: IFormValue, helpers: FormikHelpers<IFormValue>) => {
    setButtonLoading(true);
    admin
      .fine(value)
      .then(() => {
        helpers.resetForm();
      })
      .finally(() => {
        setButtonLoading(false);
      });
  };

  return { users, onUserInputChange, handleSubmit, buttonLoading, validationSchema };
};

const FineForm: FC = () => {
  const { users, onUserInputChange, handleSubmit, buttonLoading, validationSchema } = useFineForm();

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        userId: NaN,
        description: '',
        amount: 0,
        deadline: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
          <AutocompleteInput options={users} onInputChange={onUserInputChange} />
          <Input name="description" label="Description" multiline />
          <Input name="amount" label="Amount" type="number" />
          <DatePickerControl name="deadline" label="Deadline" />
          <Button
            sx={{ gridColumn: '1/3' }}
            variant="contained"
            type="submit"
            loading={buttonLoading}
          >
            <Translate t="fineForm.submit" />
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default FineForm;
