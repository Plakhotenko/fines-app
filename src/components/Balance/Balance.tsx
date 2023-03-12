import React, { FC, useEffect, useState } from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { LoadingButton as Button } from '@mui/lab';
import Translate from '../Translate';
import { balance } from '../../services';
import BalanceModal from '../BalanceModal/BalanceModal';

const useBalance = () => {
  const [loading, setLoading] = useState(false);
  const [currentBalance, setCurrentBalance] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    balance
      .getBalance()
      .then(({ data: { balance } }) => setCurrentBalance(balance))
      .finally(() => setLoading(false));
  }, []);

  const [modalOpened, setModalOpened] = useState(false);
  const handleOpen = () => setModalOpened(true);
  const handleClose = () => setModalOpened(false);

  const handleSubmit = ({ amount }: { amount: number }) => {
    setLoading(true);
    balance
      .topUpBalance(amount)
      .then(() => {
        setCurrentBalance((current) => current + amount);
      })
      .then(handleClose)
      .finally(() => setLoading(false));
  };

  return { currentBalance, handleOpen, handleClose, handleSubmit, modalOpened, loading };
};

const Balance: FC = () => {
  const {
    currentBalance,
    modalOpened,
    handleOpen,
    handleClose,
    handleSubmit,
    loading,
  } = useBalance();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography variant="h6" component="h1" mb={2}>
            <Translate t="dashboard.title" />
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body2" component="h1" mb={2} sx={{ textAlign: 'center' }}>
            {currentBalance} $
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}
        >
          <Button variant="contained" onClick={handleOpen} loading={loading}>
            <Translate t="dashboard.button" />
          </Button>
        </Grid>
      </Grid>
      <BalanceModal
        modalOpened={modalOpened}
        handleClose={handleClose}
        handleSubmit={handleSubmit}
        loading={loading}
      />
    </Container>
  );
};

export default Balance;
