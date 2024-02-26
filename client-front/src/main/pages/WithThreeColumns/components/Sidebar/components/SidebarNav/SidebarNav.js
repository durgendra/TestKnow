import React, { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, Routes, Route } from 'react-router-dom';
// import Users from '../../../../../pages/dashboard/users/Users';
import Chats from '../../../../../dashboard/chats/Chats';
import AddFAQ from '../../../../../../components/addFAQ/AddFAQ';
import AddFAQDoc from '../../../../../../components/addFAQDoc/AddFAQDoc';
import AddFAQURL from '../../../../../../components/addFAQURL/AddFAQURL';
import AddChatDoc from '../../../../../../components/addChatDoc/AddChatDoc';
import ChatDocs from '../../../../../../components/chatsDoc/ChatDocs';
import FindOptions from 'main/components/findNews/FindNews';
import AddFAQImage from 'main/components/addFAQImage/AddFAQImage';
import TextBookSelect from 'main/components/textBookSelect/TextBookSelect';
import FAQHome from 'main/components/FAQHome';
import { Tooltip } from '@mui/material';

const SidebarNav = () => {
  const [selectedLink, setSelectedLink] = useState('');
  const mock = useMemo(
    () => [
      {
        groupTitle: 'Select one option to generate questions',
        id: 'faq',
        pages: [
          {
            title: 'Use your content',
            href: '',
            link: '/faq',
            tooltip: 'Use texts, document, Image or URL to generate questions',
            component: <FAQHome {...{ setSelectedLink, link: '/faq' }} />,
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
            href: '',
            link: '/faq/textbook',
            tooltip: 'Choose a textbook from dropdown to generate questions',
            component: (
              <TextBookSelect {...{ setSelectedLink, link: '/faq/textbook' }} />
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
          // {
          //   title: 'From document',
          //   href: '',
          //   link: '/faq/doc',
          //   component: <AddFAQDoc {...{ setSelectedLink, link: '/faq/doc' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          // {
          //   title: 'From image',
          //   href: '',
          //   link: '/faq/image',
          //   component: (
          //     <AddFAQImage {...{ setSelectedLink, link: '/faq/image' }} />
          //   ),
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          // {
          //   title: 'From text',
          //   href: '',
          //   link: '/faq',
          //   component: <AddFAQ {...{ setSelectedLink, link: '' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          // {
          //   title: 'From url',
          //   href: '',
          //   link: '/faq/url',
          //   component: <AddFAQURL {...{ setSelectedLink, link: '/faq/url' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          // // {
          //   title: 'FAQ list',
          //   href: '#',
          //   link: 'chats',
          //   component: <Chats {...{ setSelectedLink, link: 'chats' }} />,
          //   icon: (
          //     <svg
          //       xmlns="http://www.w3.org/2000/svg"
          //       fill="none"
          //       width={24}
          //       height={24}
          //       viewBox="0 0 24 24"
          //       stroke="currentColor"
          //     >
          //       <path
          //         strokeLinecap="round"
          //         strokeLinejoin="round"
          //         strokeWidth={2}
          //         d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          //       />
          //     </svg>
          //   ),
          // },
          {
            title: 'Search latest News ',
            href: '#',
            link: '/faq/news',
            tooltip:
              'Search recent news article and use it to generate questions',
            component: (
              <FindOptions {...{ setSelectedLink, link: '/faq/news' }} />
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
        ],
      },
      // {
      //   groupTitle: 'News based Knowledge Test',
      //   id: 'news',
      //   pages: [
      //     {
      //       title: 'Search news ',
      //       href: '#',
      //       link: '/faq/news',
      //       component: (
      //         <FindOptions {...{ setSelectedLink, link: '/faq/news' }} />
      //       ),
      //       icon: (
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           width={24}
      //           height={24}
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth={2}
      //             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //           />
      //         </svg>
      //       ),
      //     },
      //         {
      //           title: 'Chat with document',
      //           href: '#',
      //           link: '/faq/chat',
      //           component: <ChatDocs {...{ setSelectedLink, link: '/faq/chat' }} />,
      //           icon: (
      //             <svg
      //               xmlns="http://www.w3.org/2000/svg"
      //               fill="none"
      //               width={24}
      //               height={24}
      //               viewBox="0 0 24 24"
      //               stroke="currentColor"
      //             >
      //               <path
      //                 strokeLinecap="round"
      //                 strokeLinejoin="round"
      //                 strokeWidth={2}
      //                 d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //               />
      //             </svg>
      //           ),
      //         },
      //     {
      //       title: 'FAQ list',
      //       href: '#',
      //       link: 'chats',
      //       component: <Chats {...{ setSelectedLink, link: 'chats' }} />,
      //       icon: (
      //         <svg
      //           xmlns="http://www.w3.org/2000/svg"
      //           fill="none"
      //           width={24}
      //           height={24}
      //           viewBox="0 0 24 24"
      //           stroke="currentColor"
      //         >
      //           <path
      //             strokeLinecap="round"
      //             strokeLinejoin="round"
      //             strokeWidth={2}
      //             d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
      //           />
      //         </svg>
      //       ),
      //     },
      //   ],
      // },
    ],
    [],
  );

  const navigate = useNavigate();

  return (
    <Box padding={2}>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={3}>
          <Typography
            variant="caption"
            color={'text.secondary'}
            sx={{
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 1,
              display: 'block',
            }}
          >
            {item.groupTitle}
          </Typography>
          <Box>
            {item.pages.map((p, i) => (
              <Box marginBottom={1 / 2} key={i}>
                <Tooltip title={p.tooltip} placement="right">
                  <Button
                    component={'a'}
                    // href={p.href}
                    onClick={() => navigate(p.link)}
                    selected={selectedLink === p.link}
                    fullWidth
                    sx={{
                      justifyContent: 'flex-start',
                      color: 'text.primary',
                    }}
                    startIcon={p.icon || null}
                  >
                    {p.title}
                  </Button>
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default SidebarNav;
