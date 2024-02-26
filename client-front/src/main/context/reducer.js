const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_LOGIN':
      return { ...state, openLogin: true };
    case 'CLOSE_LOGIN':
      return { ...state, openLogin: false };
    case 'START_LOADING':
      return { ...state, loading: true };
    case 'END_LOADING':
      return { ...state, loading: false };
    case 'UPDATE_ALERT':
      return { ...state, alert: action.payload };
    case 'UPDATE_PROFILE':
      return { ...state, profile: action.payload };
    case 'UPDATE_USER':
      localStorage.setItem('currentUser', JSON.stringify(action.payload));
      return { ...state, currentUser: action.payload };
    case 'UPDATE_IMAGES':
      return { ...state, images: [...state.images, action.payload] };
    case 'UPDATE_PAPERS':
      return { ...state, papers: [...state.papers, action.payload] };
    case 'UPDATE_DAILYKTDOCS':
      return { ...state, dailyKTdocs: [...state.dailyKTdocs, action.payload] };
    case 'UPDATE_STARTQUIZID':
      return {
        ...state,
        startQuizId: action.payload,
      };
    case 'UPDATE_TEXTBOOKDOCS':
      return {
        ...state,
        textBookdocs: [...state.textBookdocs, action.payload],
      };
    case 'DELETE_IMAGE':
      return {
        ...state,
        images: state.images.filter((image) => image !== action.payload),
      };
    case 'DELETE_PAPER':
      return {
        ...state,
        papers: state.papers.filter((paper) => paper.url !== action.payload),
      };
    case 'DELETE_DAILYKTDOC':
      return {
        ...state,
        dailyKTdocs: state.dailyKTdocs.filter(
          (dailyKTdoc) => dailyKTdoc.url !== action.payload,
        ),
      };
    case 'DELETE_TEXTBOOKDOC':
      return {
        ...state,
        textBookdocs: state.textBookdocs.filter(
          (textBookdoc) => textBookdoc.url !== action.payload,
        ),
      };
    case 'UPDATE_DETAILS':
      return { ...state, details: { ...state.details, ...action.payload } };
    case 'UPDATE_DETAILSP':
      return { ...state, detailsP: { ...state.detailsP, ...action.payload } };
    case 'UPDATE_PRODUCTDETAILS':
      return {
        ...state,
        detailsProducts: { ...state.detailsProducts, ...action.payload },
      };
    case 'UPDATE_NEWSQUIZDETAILS':
      return {
        ...state,
        detailsNewsQuiz: { ...state.detailsNewsQuiz, ...action.payload },
      };

    case 'UPDATE_DETAILSDAILYKT':
      return {
        ...state,
        detailsDailyKT: { ...state.detailsDailyKT, ...action.payload },
      };
    case 'UPDATE_DETAILSTEXTBOOK':
      return {
        ...state,
        detailsTextBook: { ...state.detailsTextBook, ...action.payload },
      };
    case 'UPDATE_LOCATION':
      return { ...state, location: action.payload };
    case 'RESET_ROOM':
      return {
        ...state,
        images: [],
        details: { title: '', description: '', price: 0 },
        location: { lng: 0, lat: 0 },
      };
    case 'RESET_SUMMARY':
      return {
        ...state,
        papers: [],
        detailsP: { title: '' },
      };
    case 'RESET_PRODUCT':
      return {
        ...state,
        detailsProducts: { name: '', category: '', criteria: '' },
      };
    case 'RESET_STARTQUIZID':
      return {
        ...state,
        startQuizId: '',
      };
    case 'RESET_NEWSQUIZ':
      return {
        ...state,
        detailsNewsQuiz: { name: '' },
      };
    case 'RESET_KEYWORDINFO':
      return {
        ...state,
        keywordInfo: null,
      };
    case 'RESET_PAPERS':
      return {
        ...state,
        papers: [],
      };
    case 'RESET_TEXTBOOKDOCS':
      return {
        ...state,
        textBookdocs: [],
      };
    case 'RESET_RESULTAI':
      return {
        ...state,
        product: { ...state.product, resultAI: '' },
      };
    case 'RESET_DAILYKT':
      return {
        ...state,
        detailsDailyKT: {
          title: '',
          paragraph: '',
          url: '',
          result: '',
          source: '',
        },
      };
    case 'RESET_TEXTBOOK':
      return {
        ...state,
        detailsTextBook: {
          className: '',
          subjectName: '',
          bookName: '',
          chapterName: '',
          url: '',
          source: '',
        },
      };
    case 'UPDATE_ROOMS':
      return {
        ...state,
        rooms: action.payload,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: action.payload,
      };
    case 'UPDATE_SUMMARIES':
      return {
        ...state,
        summaries: action.payload,
        filteredSummaries: action.payload,
      };
    case 'UPDATE_PRODUCTS':
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case 'UPDATE_DAILYKTS':
      return {
        ...state,
        dailyKTs: action.payload,
        filtereddailyKTs: action.payload,
      };

    case 'UPDATE_TEXTBOOKS':
      return {
        ...state,
        textBooks: action.payload,
        // filteredTextBooks: action.payload,
      };
    case 'UPDATE_FILTEREDTEXTBOOKS':
      return {
        ...state,
        filteredTextBooks: action.payload,
      };
    case 'UPDATE_SELECTEDTEXTBOOKS':
      return {
        ...state,
        selectedTextBooks: action.payload,
      };
    case 'UPDATE_TESTQUESTIONS':
      return {
        ...state,
        testQuestions: action.payload,
      };
    case 'RESET_TESTQUESTIONS':
      return {
        ...state,
        testQuestions: [],
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: action.payload,
      };
    case 'RESET_SCORE':
      return {
        ...state,
        score: null,
      };
    case 'UPDATE_PAGENUMBERS':
      return {
        ...state,
        pageNumbers: action.payload,
      };
    case 'UPDATE_PAGENUMBER':
      return {
        ...state,
        pageNumber: action.payload,
      };
    case 'RESET_PAGENUMBERS':
      return {
        ...state,
        pageNumbers: null,
      };
    case 'CLEAR_ADDRESS':
      return {
        ...state,
        addressFilter: null,
        priceFilter: 50,
        filteredRooms: state.rooms,
      };
    case 'UPDATE_ROOM':
      return { ...state, room: action.payload };
    case 'UPDATE_SUMMARY':
      return { ...state, summary: action.payload };
    case 'UPDATE_PRODUCT':
      return { ...state, product: action.payload };
    case 'UPDATE_NEWSPRODUCT':
      return { ...state, newsProduct: action.payload };
    case 'UPDATE_KEYWORDINFO':
      return { ...state, keywordInfo: action.payload };
    case 'UPDATE_DAILYKT':
      return { ...state, dailyKT: action.payload };
    case 'UPDATE_TEXTBOOK':
      return { ...state, textBook: action.payload };
    case 'UPDATE_USERS':
      return {
        ...state,
        users: action.payload,
      };
    default:
      throw new Error('No matched Action');
  }
};

export default reducer;
