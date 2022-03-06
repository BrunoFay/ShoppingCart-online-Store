export const addLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

export const removeLocalStorage = (key) => localStorage.removeItem(key)

export const loadCartArrayLocalStorage = (key) => {
  const cartLocalStorage = loadLocalStorage(key);
  if (cartLocalStorage) {
    const arrIds = cartLocalStorage.map((element) => element.id);
    const arrayWithoutDuplicateItems = [...new Set(arrIds)];
    const arrObj = arrayWithoutDuplicateItems
      .map((id) => cartLocalStorage.find((item) => item.id === id));
    const arrArr = arrayWithoutDuplicateItems
      .map((id) => cartLocalStorage.filter((item) => item.id === id));
    const answer = arrObj
      .map((obj, indice) => ({ item: obj, count: arrArr[indice].length }))
    return answer
  }
}