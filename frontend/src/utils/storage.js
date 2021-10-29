const DEFAULT_STORAGE_TYPE = 'localStorage'
const DEFAULT_KEY = 'GARIGARI_MASK_USER_ID_KEY'
const DEFAULT_NAME_KEY = 'GARIGARI_MASK_USER_NAME_KEY'
const DEFAULT_BT_STATUS_KEY = 'GARIGARI_MASK_BT_STATUS_CHECKED'
const DEMO_MODE_KEY = 'GARIGARI_MASK_DEMO_MODE'

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

export const setIdToLocalStorage = (id, value) => {
  if (!storageAvailable()) {
    throw new Error('there is no local storage')
  }
  window.localStorage.setItem(DEFAULT_KEY, id)
  window.localStorage.setItem(DEFAULT_NAME_KEY, value)
  return
}

export const getUserIdFromLocalStorage = (key = DEFAULT_KEY) => {
  if (!storageAvailable()) {
    throw new Error('there is no local storage')
  }
  const value = window.localStorage.getItem(key)
  return value
}

export const getBTStatusFromStorage = () => {
  const value = window.localStorage.getItem(DEFAULT_BT_STATUS_KEY)
  return value
}

export const setBTInitializeStatusChecked = () => {
  window.localStorage.setItem(DEFAULT_BT_STATUS_KEY, Date.now())
}

export const resetBTStatusStorage = () => {
  window.localStorage.removeItem(DEFAULT_BT_STATUS_KEY)
}

export const getDemoModeFromStorage = () => {
  const value = window.localStorage.getItem(DEMO_MODE_KEY)
  if (value) {
    return value
  }
  return false
}

export const setDemoModeToStorage = (demo) => {
  if (demo) {
    window.localStorage.setItem(DEMO_MODE_KEY, Date.now())
  } else {
    window.localStorage.removeItem(DEMO_MODE_KEY)
  }
}

export const resetLocalStorage = () => {
  window.localStorage.removeItem(DEFAULT_KEY)
  resetBTStatusStorage()
}
