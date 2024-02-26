import { useValue } from '../../context/ContextProvider';
import { NewsResultsArticles } from './components';

const NewsResults = ({ setSelectedLink, link }) => {
  const {
    state: { currentUser, product },
    dispatch,
  } = useValue();

  return (
    <>
      <NewsResultsArticles />
    </>
  );
};
export default NewsResults;
