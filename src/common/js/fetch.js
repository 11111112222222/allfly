import axios from 'axios'

function fetch (url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(res => {
      // let status = res.data.status
      resolve(res)
    }).catch(error => {
      reject(error)
    })
  })
}

export default fetch
