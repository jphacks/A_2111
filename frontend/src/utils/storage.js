const DEFAULT_STORAGE_TYPE = 'localStorage'
const DEFAULT_KEY = 'GARIGARI_MASK_USER_ID_KEY'

export const storageAvailable = (type = DEFAULT_STORAGE_TYPE) => {
  var storage
  try {
    storage = window[type]
    var x = '__storage_test__'
    storage.setItem(x, x)
    storage.removeItem(x)
    return true
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    )
  }
}

export const setIdToLocalStorage = (id) => {
  if (!storageAvailable()) {
    throw new Error('there is no local storage')
  }
  window.localStorage.setItem(DEFAULT_KEY, id)
  return
}

export const getUserIdFromLocalStorage = (key = DEFAULT_KEY) => {
  if (!storageAvailable()) {
    throw new Error('there is no local storage')
  }
  const value = window.localStorage.getItem(key)
  return value
}
