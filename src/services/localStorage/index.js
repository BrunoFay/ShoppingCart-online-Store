export const addLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const removeLocalStorage = (key) => localStorage.removeItem(key)


const removeDuplicatesIntoArray = (arr) => {
  const arrIds = arr.map((element) => element.id);
  const uniqueIds = [...new Set(arrIds)]

  return makeObjectiItemWhithCount(uniqueIds,arr)
}
const makeObjectiItemWhithCount = (uniqueArr,LocalStorageArr) => {
  const result = uniqueArr
    .map(item => ({
      item: LocalStorageArr.filter(({ id }) => id === item)[0],
      count: LocalStorageArr.filter(({ id }) => id === item).length
    }))
  return result
}

export const loadCartArrayLocalStorage = (key) => {
  const cartLocalStorage = loadLocalStorage(key);
  if (cartLocalStorage) {
    const answer = removeDuplicatesIntoArray(cartLocalStorage)

    return answer
  }
}