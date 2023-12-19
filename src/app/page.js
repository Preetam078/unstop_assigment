import Image from 'next/image'
import styles from './page.module.css'
import LeftBar from './_components/Leftbar/leftbar'
import Dashboard from './_components/Dashboard/dashboard'
import Form from './_components/Form/form'

export default function Home() {
  return (
    <>
     <div className={styles.app_container}>
      <LeftBar/>
      <Dashboard/>
      <Form/>
     </div>
    </>
  )
}
