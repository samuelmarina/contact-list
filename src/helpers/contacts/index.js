import { nameComparator } from '../comparators';
import { text } from '../../util/constants/text';

export const addToFavorites = async (
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
  await setFavList({ title: text.favContacts, data: favArr });
  await setOthersList({ title: text.otherContacts, data: othersArr });
  return favArr.indexOf(data);
};

export const removeFromFavorites = async (
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
  await setFavList({ title: text.favContacts, data: favArr });
  await setOthersList({ title: text.otherContacts, data: othersArr });
  return othersArr.indexOf(data);
};
