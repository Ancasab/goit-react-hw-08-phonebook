import { useDispatch, useSelector } from 'react-redux';
import { setContactsFilter } from '../../redux/constacts/filterSlice';
import { selectContactsFilter } from '../../redux/constacts/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);

  const onChangeFilter = ({ currentTarget: { value } }) => {
   dispatch(setContactsFilter(value));
  };

  return (
    <Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter your contact name"
        value={filter}
        onChange={onChangeFilter}
      />
    </Label>
  );
};




