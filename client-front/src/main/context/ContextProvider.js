import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useRef,
} from 'react';
import reducer from './reducer';

const initialState = {
  currentUser: null,
  openLogin: false,
  loading: false,
  alert: { open: false, severity: 'info', message: '' },
  profile: { open: false, file: null, photoURL: '' },
  images: [],
  papers: [],
  dailyKTdocs: [],
  textBookdocs: [],
  details: { title: '', description: '', price: 0 },
  detailsDailyKT: {
    title: '',
    paragraph: '',
    url: '',
    result: '',
    quizAnswer: '',
    source: '',
  },
  detailsP: { title: 'Papers Summary' },
  location: { lng: 0, lat: 0 },
  rooms: [],
  dailyKTs: [],
  summaries: [],
  priceFilter: 50,
  addressFilter: null,
  filteredRooms: [],
  filteredSummaries: [],
  filtereddailyKTs: [],
  room: null,
  dailyKT: null,
  summary: null,
  users: [],
  detailsProducts: { name: '', category: '', url: '', criteria: '' },
  detailsTextBook: {
    className: '',
    subjectName: '',
    bookName: '',
    chapterNumber: '',
    chapterName: '',
    totalPageNumber: '',
    url: '',
    source: '',
  },
  detailsNewsQuiz: { name: '' },
  filteredProducts: [],
  filteredTextBooks: [],
  selectedTextBooks: [],
  testQuestions: [{}],
  startQuizId: '',
  testScore: null,
  textBooks: [],
  textBook: null,
  products: [],
  newsProduct: null,
  product: null,
  messages: [],
  keywordInfo: null,
  pageNumbers: null,
};
const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      dispatch({ type: 'UPDATE_USER', payload: currentUser });
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
