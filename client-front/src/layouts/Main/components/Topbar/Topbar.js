import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

import { NavItem } from './components';
import ThemeModeToggler from '../../../../components/ThemeModeToggler';
import Protected from '../../../../main/components/protected/Protected';
import UserIcons from '../../../../main/components/user/UserIcons';
import { useValue } from '../../../../main/context/ContextProvider';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const {
    state: { currentUser },
    // dispatch,
  } = useValue();

  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    Home: landingPages,
    // secondary: secondaryPages,
    // List: companyPages,
    // account: accountPages,
    // portfolio: portfolioPages,
    // blog: blogPages,
  } = pages;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="TestKnow"
        width={{ xs: 150, md: 200 }}
      >
        <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? '/assets/TestKnowBeta.svg'
              : '/assets/TestKnowDarkBeta.svg'
          }
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Home'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'List'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {/* <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/daily"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Examples
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/about"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            About Us
          </Link>
        </Box>
        <Box marginLeft={4}>
          <Link
            underline="none"
            component="a"
            href="/pricing"
            color={colorInvert ? 'common.white' : 'text.primary'}
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            Pricing
          </Link>
        </Box>

        <Box marginLeft={4}>
          <ThemeModeToggler />
        </Box>
        <Box marginLeft={4}>
          {!currentUser ? (
            <Button
              variant="contained"
              color="primary"
              component="a"
              // target="blank"
              size="large"
              href="/faq"
            >
              Login
            </Button>
          ) : (
            // <Button
            //   variant="contained"
            //   color="primary"
            //   component="a"
            //   // target="blank"
            //   size="large"
            //   onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
            // >
            //   Login
            // </Button>
            <UserIcons />
          )}
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
