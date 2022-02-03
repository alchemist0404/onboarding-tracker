import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Users from './Users';
import Tasks from './Tasks';
import { fetchs } from '../utils/service';

export default function Home() {

  const [users, setUsers] = useState([]);
  const [allTasks, setAllTasks] = useState<object[]>([]);

  const load = async () => {
    const users = await fetchs({ url: "https://jsonplaceholder.typicode.com/users", method: "GET" });
    if (users) {
      setUsers(users)
    }

    const tasks = await fetchs({ url: "https://jsonplaceholder.typicode.com/todos", method: "GET" });
    if (tasks) {
      setAllTasks(tasks)
    }
  }

  useEffect(() => {
    load()
  }, []);

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant='h2' textAlign="center">Onboarding Tracker</Typography>
      <Grid container sx={{ mt: 2 }} columnSpacing={2}>
        <Grid item xs={6}>
          <Users data={users} />
        </Grid>
        <Grid item xs={6}>
          <Tasks data={allTasks} changeData={setAllTasks} />
        </Grid>
      </Grid>
    </Box>
  );
}
