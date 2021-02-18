import axios from 'axios'

export default async url => {
    let data = []
    data = await axios
      .get(url)
      .then(res => res.data.results)
    return data
  }