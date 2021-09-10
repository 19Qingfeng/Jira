import { useEffect, useState } from 'react'
import { List } from './list'
import { SearchPanel } from './search-panel'
import { stringify } from 'qs'
import { cleanObj } from 'pages/utils'

const baseUrl = process.env.REACT_APP_API_URL

const ProjectListScreen = () => {
  const [params, setParams] = useState({
    name: '',
    personId: '',
  })

  const [list, setLists] = useState([])
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch(`${baseUrl}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      }
    })
  }, [])

  useEffect(() => {
    fetch(`${baseUrl}/projects?${stringify(cleanObj(params))}`).then(async res => {
      if (res.ok) {
        setLists(await res.json())
      }
    })
  }, [params])

  return <div>
    <List list={list} users={users}></List>
    <SearchPanel params={params} users={users} setParams={setParams}></SearchPanel>
  </div>
}

export { ProjectListScreen }