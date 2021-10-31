import axios from 'axios'
const baseUrl = 'https://a2111-mask.herokuapp.com/'

// TODO: 中身の実装
export const postNameAndGetId = async (value) => {
  console.log(value)
  const formData = new FormData()
  formData.append('name', value)

  try {
    const res = await axios.post(baseUrl + 'member', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(res)
    return res.data.uuid
  } catch (error) {
    alert(error.toString())
  }
}

export const getFamiliars = async (user_id) => {
  // TODO: サーバーに取りに行く
  try {
    const res = await axios.get(baseUrl + 'familiar', { params: { uuid: user_id } })
    return res.data
  } catch (error) {
    console.error(error.toString())
  }
  // INFO: サーバー側未実装
  const mockData = [
    {
      id: 'LMwCa80jqH2y2eGeEoos',
      name: '高橋',
      uuid: 'af5ad353-110d-4ccc-814a-9a907fc7fada'
    },
    {
      id: 'PT0AK8uJjrfWiqe8VTJD',
      name: '鈴木',
      uuid: '99001cd4-d017-4a06-a848-01d0e4d82274'
    }
  ]
  return mockData
}

export const getNameFromId = async (user_id) => {
  try {
    const res = await axios.get(baseUrl + 'member', { params: { uuid: user_id } })
    if (!res.data.data.length) {
      return null
    }
    return res.data.data[0].name
  } catch (error) {
    alert(error.toString())
  }
}

export const makeNewFamiliar = async (myId, targetId) => {
  const formData = new FormData()
  formData.append('start', myId)
  formData.append('end', targetId)

  try {
    const res = await axios.post(baseUrl + 'familiar', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    console.log(res)
  } catch (error) {
    alert(error.toString())
  }
}
