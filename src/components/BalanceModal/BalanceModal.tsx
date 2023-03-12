import React, { FC } from 'react';
import { Box, IconButton, Modal, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { LoadingButton as Button } from '@mui/lab';
import Input from '../Input';
import Translate from '../Translate';

const BalanceModal: FC<{
  handleClose: () => void;
  handleSubmit: (value: { amount: number }) => void;
  modalOpened: boolean;
  loading: boolean;
}> = ({ handleClose, handleSubmit, modalOpened, loading }) => (
  <Modal
    open={modalOpened}
    onClose={handleClose}
    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
  >
    <Box
      sx={{
        p: 4,
        width: 400,
        backgroundColor: 'white',
        position: 'relative',
      }}
    >
      <IconButton onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px' }}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" component="h2" sx={{ pb: 3 }}>
        <Translate t="dashboard.balanceModal.title" />
      </Typography>
      <Formik
        initialValues={{ amount: 0 }}
        onSubmit={handleSubmit}
        validationSchema={yup.object().shape({
          amount: yup.number().min(1).required(),
        })}
      >
        <Form>
          <Stack spacing={2}>
            <Input name="amount" type="number" label="Amount" />
            <Button type="submit" variant="contained" loading={loading}>
              <Translate t="dashboard.balanceModal.submit" />
            </Button>
          </Stack>
        </Form>
      </Formik>
    </Box>
  </Modal>
);

export default BalanceModal;
