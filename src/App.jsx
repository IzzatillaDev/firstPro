import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Table from "./components/Table"


function App() {
  const headers = [
    { title: "Name", value: "name" },
    { title: "Description", value: "description" },
    { title: "Phone", value: "phone" },
    { title: "Age", value: "age" },
    // {title: "Actions", value: "actions"},
  ]

  const body = [
    { name: "Ali", description: "hello world", phone: "345678", age: "11" },
    { name: "Ali", description: "hello world", phone: "345678", age: "11" },
    { name: "Ali", description: "hello world", phone: "345678", age: "11" },
    { name: "Ali", description: "hello world", phone: "345678", age: "11" },
  ]

  return (
    <>
      <Table headers={headers} body={body} /> 
    </>
  )
}

export default App
