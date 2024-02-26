import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { SidebarNav } from './components';
import { useValue } from '../../../../context/ContextProvider';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { Logout } from '@mui/icons-material';

const Sidebar = ({ open, variant, onClose }) => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: 'UPDATE_USER', payload: null });
    navigate('/');
  };
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 256,
          top: { xs: 0, md: 71 },
          height: { xs: '100%', md: 'calc(100% - 71px)' },
          background: theme.palette.alternate.main,
        },
      }}
    >
      <SidebarNav />
      <Divider />
      <Box sx={{ mx: 'auto', mt: 3, mb: 1 }}>
        <Tooltip title={currentUser?.name || ''}>
          <Avatar
            src={currentUser?.photoURL}
            {...{ sx: { width: 100, height: 100 } }}
          />
        </Tooltip>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        {/* {open && <Typography> {currentUser?.name}</Typography>}
        {open && <Typography variant="body2"> {currentUser?.email}</Typography>} */}
        <Typography> {currentUser?.name}</Typography>
        <Typography variant="body2"> {currentUser?.email}</Typography>
        <Tooltip title="Logout" sx={{ mt: 1 }}>
          <IconButton onClick={handleLogout}>
            <Logout />
          </IconButton>
        </Tooltip>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default Sidebar;
