import { nameComparator } from '../comparators';
import { text } from '../../util/constants/text';

export const addToFavorites = (
  data,
  index,
  favList,
  othersList,
  setFavList,
  setOthersList,
) => {
  const othersArr = othersList.data;
  othersArr.splice(index, 1);
  const favArr = favList.data;
  data.isFavorite = true;
  favArr.push(data);
  favArr.sort(nameComparator);
  setFavList({ title: text.favContacts, data: favArr });
  setOthersList({ title: text.otherContacts, data: othersArr });
  return favArr.indexOf(data);
};

export const removeFromFavorites = (
  data,
  index,
  favList,
  othersList,
  setFavList,
  setOthersList,
) => {
  const favArr = favList.data;
  favArr.splice(index, 1);
  const othersArr = othersList.data;
  data.isFavorite = false;
  othersArr.push(data);
  othersArr.sort(nameComparator);
  setFavList({ title: text.favContacts, data: favArr });
  setOthersList({ title: text.otherContacts, data: othersArr });
  return othersArr.indexOf(data);
};
