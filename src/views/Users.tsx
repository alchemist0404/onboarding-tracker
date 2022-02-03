import React from 'react';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';
import { makeStyles, styled } from '@mui/styles';
import { useNavigate, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  item: {
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5
  }
}));

const UserItem = styled(ListItemButton)<{ component?: React.ElementType }>({
  '&': {
    backgroundColor: "white",
    borderRadius: 5
  }
});

export default function Users({ data }: any) {

  const classes = useStyles();
  const navigate = useNavigate();

  let { current_user } = useParams();

  const selectUser = (id: string) => {
    navigate(`users/${id}`)
  }

  return (
    <Box>
      <Typography variant='h5'>Users</Typography>
      <List>
        {
          data.map((item: any, i: number) => (
            <ListItem
              className={classes.item}
              key={i}
              onClick={() => selectUser(item.id)}
              secondaryAction={
                Number(current_user) === item.id ? <ChevronRight /> : null
              }
              disablePadding
            >
              <UserItem>
                <ListItemText primary={item.name} />
              </UserItem>
            </ListItem>
          ))
        }
      </List>
    </Box>
  );
}
