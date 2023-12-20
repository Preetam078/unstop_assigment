"use client"
import styles from './page.module.css'
import LeftBar from './_components/Leftbar/leftbar'
import Dashboard from './_components/Dashboard/dashboard'
import Form from './_components/Form/form'
import { useState } from 'react'

export default function Home() {
  const [openForm,setOpenForm]=useState(false)
  console.log(openForm)
  return (
    <>
     <div className={styles.app_container}>
      <LeftBar/>
      <Dashboard setOpenForm={setOpenForm}/>
      {
        openForm && <div className={styles.form_main_container}><Form  setOpenForm={setOpenForm}/></div>
      }
     
     </div>
    </>
  )
}
