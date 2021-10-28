// TODO: 中身の実装
export const postNameAndGetId = async () => {
  var l = 8
  var c = 'abcdefghijklmnopqrstuvwxyz0123456789'
  var cl = c.length
  var r = ''
  for (var i = 0; i < l; i++) {
    r += c[Math.floor(Math.random() * cl)]
  }
  console.log(r)
  return r
}

export const getFamiliars = async () => {
  // TODO: サーバーに取りに行く
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
