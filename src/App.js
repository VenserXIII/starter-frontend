import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get("/projects").then(({ data }) => setProjects(data))
  }, [])

  async function handleAddProject() {
    const { data } = await api.post("/projects", {
      title: `Project ${Math.floor(Math.random() * 1000000)}`,
      owner: "Daniel Sausen"
    })
    setProjects([...projects, data])
  }

  return (
    <>
      <h1>Hello world!</h1>
      <pre>{JSON.stringify(projects, null, 4)}</pre>
      <button onClick={handleAddProject}>Add project</button>
    </>
  )
}

export default App