import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';


const Paginations = () => {
  const id= 3435
    return (
        <Stack spacing={2} width='100%'>
          <Pagination
            count={10}
            page={1}
            variant="outlined"
            color='primary'
            renderItem={(item) => (
              <PaginationItem
              component={Link} to={`/post/${id}`}
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      );
}

export default Paginations