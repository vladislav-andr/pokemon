import React, { useState, useEffect } from 'react'
// ? Компоненты
import Header from './Components/Header/Header'
import SideBar from './Components/Sidebar/SideBar'
import Content from './Components/Content/Content'
// ? Функции
import getUrl from './Function/getUrl'
import getbytype from './Function/getbytype'
import getSearch from './Function/getSearch'

export default () => {
  const pokeurl = 'https://pokeapi.co/api/v2/pokemon?limit=9999'
  const [loading, setLoading] = useState(true)
  // const [error, setError] = useState(false)
  const [listURL, setListURL] = useState([])          // тут будут хранится ссылки помемонов для дальнейшей обработки
  // ? sidebar
  const [typefilter, setTypefilter] = useState([])
  // ? header
  const [showfilter, setShowfilter] = useState(0)
  const [search, setSearch] = useState('')
  const [menuStatus, setMenuStatus] = useState(false)
  const [status, setStatus] = useState('')
  // ? search
  const getsearch = async (value) => setListURL(await getSearch(value, pokeurl))
  // ! app
  const getList = async () => setListURL(await getUrl(pokeurl))
  // * sidebar
  const getFilter = async () => setListURL(await getbytype(typefilter))
  const getMenuStatus = (value) => setMenuStatus(value) // * sidebar & header

  useEffect(() => { // эффект инициализации компонента
    if (!status) {
      setLoading(true)
      getList()
      console.log('загрузка ')
    }
  }, [status])

  useEffect(() => {
    setLoading(true)
    if (typefilter.length) {
      setStatus(true)
      setSearch('')
      getFilter()
    }
    else if(!search.length) setStatus(false)
    console.log('загрузка типа')
  }, [typefilter])

  useEffect(() => {
    setLoading(true)
    if (search.length) {
      setStatus(true)
      setTypefilter([])
      getsearch(search)
    } else if(!typefilter.length) setStatus(false)
    console.log('загрузка поиска')
  }, [search])

  //   useEffect(() => {
  //  if(!search.length && !typefilter.length) {
  //       getList()
  //       console.log('popal')
  //     }
  //     console.log('загружаем покемонов')
  //   }, [search, typefilter])

  // useEffect(() => {
  //   setLoading(true)
  //   if(search.length){
  //     if(typefilter.length) 
  //     setTypefilter([])
  //     getsearch(search)
  //     console.log('poisk poisk poisk')
  //   }
  //   else if(typefilter.length){
  //     if(search.length) setSearch('')
  //     getFilter()
  //     console.log('type type type')
  //   }
  //   else {
  //     getList()
  //     console.log('obnulit')
  //   } 
  //   console.log
  // }, [search, typefilter])

  return (
    <div>
      <Header
        getMenuStatus={getMenuStatus}
        getFiltershow={setShowfilter}
        getupdateSearch={setSearch}
      />
      <SideBar
        menuStatus={menuStatus}
        getMenuStatus={getMenuStatus}
        typefilter={typefilter}
        setTypefilter={setTypefilter}
      />
      <Content
        listURL={listURL}
        showfilter={showfilter}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  )
}