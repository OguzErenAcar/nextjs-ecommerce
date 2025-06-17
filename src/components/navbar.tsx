import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import styles from './../styles/components/navbar.module.scss'
import navbar from '@/components/navbar';
function Navbar() {

  const encpath = usePathname()||"";
  const decPath=decodeURIComponent(encpath);
  const outSider=["/auth","/login","/signin"]

  if(outSider.some(x=>x==decPath||x==decPath.slice(0,x.length)))
        return <></>


  //aktif link yap
  return (
    <div className={styles.navbar}>
      <Link href="/">  <span>QWE</span> </Link> 

      <Link href="/home">  <span className={styles.Logo}>Home</span> </Link> 
     <div>
      <Link href="/favorites">  <span>Favorites</span> </Link>

      <Link href="/cart">  <span>Cart</span> </Link>
      <Link href="/profile">  <span>Profile</span> </Link>
    
     </div>

    </div>
  )
}

export default Navbar
