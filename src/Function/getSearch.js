import getUrl from './getUrl'
import getbytype from './getbytype'

export default async (value, url) => {
  const list = await getUrl(url)
  let data = []
  if(isNaN(value)){
    data = list.filter(el => el.name.indexOf(value) > -1) // ! поиск по имени
  } else{                                                 // ! Поиск по id
    data = list.filter(el => {
      const id = el.url.split('/')
      if (id[6].indexOf(value) > -1)
        return el
    })
  }
  return data
}

/*
    temp.forEach(j => {
      if (!data.find(i => i.name === j.name)) {
        data.push(j)
      }
*/