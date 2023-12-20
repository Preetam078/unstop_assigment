"use client"
import styles from './page.module.css'
import LeftBar from './_components/Leftbar/leftbar'
import Dashboard from './_components/Dashboard/dashboard'
import Form from './_components/Form/form'
import { useState } from 'react'
import PlusIcon from './_components/PlusIcon/plusIcon'
import { useMediaQuery } from './_components/customHook/useMediaQuery'

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 650px)");
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
      {
        isMobile && <PlusIcon setOpenForm={setOpenForm}/>
      }
     </div>
    </>
  )
}
