import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '@/components/Navbar/Navbar'

export default function AddBlog() {
  return (
    <main>
      <Navbar/>
      <h1>Add Blog page</h1>
    </main>
  )
}