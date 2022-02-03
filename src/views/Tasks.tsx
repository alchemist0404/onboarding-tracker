import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, FormGroup, FormControlLabel, Checkbox } from '@mui/material';

export default function Tasks({ data, changeData }: any) {

  const [tasks, setTasks] = useState([]);

  let { current_user } = useParams();

  const loadTasks = useCallback(() => {
    if (current_user) {
      let userTasks = data.filter((item: any) => item.userId === Number(current_user))
      setTasks(userTasks)
    }
  }, [current_user, data]);
  
  const handleCompleteTask = (task_id: string, isComplete: boolean) => {
    let newData = JSON.parse(JSON.stringify(data))
    for (let i in newData) {
      if (newData[i].id === task_id) {
        newData[i].completed = isComplete;
      }
    }
    changeData(newData);
  }
  
  useEffect(() => {
    loadTasks()
  }, [loadTasks, current_user, data]);


  return (
    <Box>
      <Typography variant='h5'>Tasks List</Typography>
      <FormGroup>
        {
          tasks.map((item: any, i: number) => (
            <FormControlLabel control={<Checkbox color='default' checked={item.completed} onChange={(e) => handleCompleteTask(item.id, e.target.checked)} />} label={item.title} key={i} />
          ))
        }
      </FormGroup>
    </Box>
  );
}
