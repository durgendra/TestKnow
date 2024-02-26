import { useValue } from '../../context/ContextProvider';
import { TextBookSelection, SelectTextBook } from './components';
// import {SelectTextBook} from './components/SelectTextBook';

const TextBookSelect = ({ setSelectedLink, link }) => {
  const {
    state: { currentUser, product },
    dispatch,
  } = useValue();

  return (
    <>
      {/* <TextBookSelection /> */}
      <SelectTextBook />
    </>
  );
};
export default TextBookSelect;
