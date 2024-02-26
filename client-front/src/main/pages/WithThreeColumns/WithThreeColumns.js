import React, { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';

import Container from 'components/Container';
import { Topbar, Sidebar, Footer } from './components';
import AddFAQ from '../../components/addFAQ/AddFAQ';
import { useNavigate, Routes, Route } from 'react-router-dom';
import AddFAQDoc from 'main/components/addFAQDoc/AddFAQDoc';
import AddFAQURL from 'main/components/addFAQURL/AddFAQURL';
import AddDailyKT from 'main/components/addDailyKT/AddDailyKT';
import FindNews from 'main/components/findNews/FindNews';
import NewsResults from 'main/components/newsResults/NewsResults';
import StandardQuiz from 'main/components/standardQuiz/StandardQuiz';
import StatementQuiz from 'main/components/statementQuiz/StatementQuiz';
import QuizResults from 'main/components/quizResults/QuizResults';
import KeywordInfo from 'main/components/keywordInfo/KeywordInfo';
import FAQResults from 'main/components/faqResults/FAQResults';
import AddFAQImage from 'main/components/addFAQImage/AddFAQImage';
import TextBookSelect from 'main/components/textBookSelect/TextBookSelect';
import AddTextBook from 'main/components/addTextBook/AddTextBook';
import Quiz from 'main/components/startQuiz/Quiz/Quiz';
import Result from 'main/components/startQuiz/Result/ResultOld';
import PageSelection from 'main/components/textBookSelect/components/PageSelection';
import FAQHome from 'main/components/FAQHome';
import PageSelectionDoc from 'main/components/addFAQDoc/uploadedDoc/PageSelectionDoc';
import UserProfile from 'main/components/UserProfile/UserProfile';
import AddAssessment from 'main/components/addAssessment/AddAssessment';
import AssessmentSingleID from 'main/components/AssessmentSingleID';
import CopyAssessLink from 'main/components/addAssessment/CopyAssessLink/CopyAssessLink';
import ResultView from 'main/components/startQuiz/ResultView/ResultView';

// const ChildMock = () => {
//   const theme = useTheme();
//   return (
//     <Box
//       width={1}
//       height={1}
//       minHeight={{ xs: 400, md: 800 }}
//       borderRadius={2}
//       border={`2px solid ${theme.palette.divider}`}
//       sx={{
//         borderStyle: 'dashed',
//       }}
//     />
//   );
// };

const WithThreeColumns = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);
  const [selectedLink, setSelectedLink] = useState('');

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;
  const mock = [
    {
      title: 'Use Text',
      href: '#',
      link: '',
      component: <FAQHome {...{ setSelectedLink, link: '' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Use Text',
      href: '#',
      link: 'text',
      component: <AddFAQ {...{ setSelectedLink, link: 'text' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Use TextBook',
      href: '#',
      link: 'textbook',
      component: <TextBookSelect {...{ setSelectedLink, link: 'textbook' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Create using pdf document',
      href: '#',
      link: 'doc',
      component: <AddFAQDoc {...{ setSelectedLink, link: 'doc' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Create using Image',
      href: '#',
      link: 'image',
      component: <AddFAQImage {...{ setSelectedLink, link: 'image' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Create using URL',
      href: '#',
      link: 'url',
      component: <AddFAQURL {...{ setSelectedLink, link: 'url' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Find News',
      href: '#',
      link: 'news',
      component: <FindNews {...{ setSelectedLink, link: 'news' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'News Results',
      href: '#',
      link: 'explore',
      component: <NewsResults {...{ setSelectedLink, link: 'explore' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Quiz Results',
      href: '#',
      link: 'quiz-result',
      component: <QuizResults {...{ setSelectedLink, link: 'quiz-result' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Quiz Results',
      href: '#',
      link: 'faq-result',
      component: <FAQResults {...{ setSelectedLink, link: 'faq-result' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Keyword Results',
      href: '#',
      link: 'knowledge-result',
      component: (
        <KeywordInfo {...{ setSelectedLink, link: 'knowledge-result' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Standard Quiz',
      href: '#',
      link: 'standardquiz',
      component: (
        <StandardQuiz {...{ setSelectedLink, link: 'standardquiz' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Standard Quiz',
      href: '#',
      link: 'statementquiz',
      component: (
        <StatementQuiz {...{ setSelectedLink, link: 'statementquiz' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Use Text',
      href: '#',
      link: 'dailykt',
      component: <AddDailyKT {...{ setSelectedLink, link: 'dailykt' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Create Assessment',
      href: '#',
      link: 'assessment/:id',
      component: (
        <AddAssessment {...{ setSelectedLink, link: 'assessment/:id' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Get Assessment Id',
      href: '#',
      link: 'get/assessment/:id',
      component: (
        <CopyAssessLink {...{ setSelectedLink, link: 'get/assessment/:id' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Get Assessment',
      href: '#',
      link: 'shared/assessment/:faqId',
      component: (
        <AssessmentSingleID
          {...{ setSelectedLink, link: 'shared/assessment/:faqId' }}
        />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Add TextBook',
      href: '#',
      link: 'addtextbook',
      component: <AddTextBook {...{ setSelectedLink, link: 'addtextbook' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Select Page Number',
      href: '#',
      link: 'select-page',
      component: (
        <PageSelection {...{ setSelectedLink, link: 'select-page' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Select Page Number',
      href: '#',
      link: 'select-page-doc',
      component: (
        <PageSelectionDoc {...{ setSelectedLink, link: 'select-page-doc' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Start Quiz',
      href: '#',
      link: 'start-quiz/:type/:id',
      component: (
        <Quiz {...{ setSelectedLink, link: 'start-quiz/:type/:id' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Assessment Result',
      href: '#',
      link: 'assessmentResult/:id',
      component: (
        <ResultView {...{ setSelectedLink, link: 'assessmentResult/:id' }} />
      ),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'Start Quiz Result',
      href: '#',
      link: 'start-quiz-result',
      component: <Result {...{ setSelectedLink, link: 'start-quiz-result' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
    {
      title: 'User Profile',
      href: '#',
      link: 'user-profile',
      component: <UserProfile {...{ setSelectedLink, link: 'user-profile' }} />,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
    },
  ];

  return (
    <Box>
      <AppBar
        position={'fixed'}
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
        elevation={0}
      >
        <Container maxWidth={1} paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant={isMd ? 'permanent' : 'temporary'}
      />
      <main>
        <Box height={{ xs: 58, sm: 66, md: 71 }} />
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
          paddingLeft={{ md: '256px' }}
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto">
              <Box p={4}>
                <Routes>
                  {mock.map((item) => (
                    <Route
                      key={item.title}
                      path={item.link}
                      element={item.component}
                    />
                  ))}
                </Routes>
                {/* <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <ChildMock />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <ChildMock />
                  </Grid>
                </Grid> */}
              </Box>
              <Divider />
              <Container paddingY={4}>
                <Footer />
              </Container>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
};

export default WithThreeColumns;
