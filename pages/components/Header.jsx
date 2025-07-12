import { useAuth } from './AuthContext'; // Adjust the path as needed
import Image from 'next/image';
import Link from 'next/link';
import css from '../../styles/Header.module.css';

export default function Header() {
  const { isLoggedIn, logout } = useAuth(); 

  return (
    <div className={css.header}>
      <div className={css.logo}>
        <div className={css.casaContainer}>
          <Image src="/logoF.png" className={css.logoF} alt="Logo" width={150} height={60} />
        </div>
      </div>

      <ul className={css.menu}>
        <li><Link href='./'> Home </Link></li>
        <li><Link href='./about'> About Us</Link></li>
        <li><Link href="./galerie">Galerie</Link></li>
      </ul>

      <div className={css.rightside}>
        <input type="text" className={css.searchBar} placeholder="Recherche" />
        <div className={css.cart}>
          <Link href='./Pannier'><Image src="/shopping.png" alt="shopping" width={28} height={20} /></Link>
          <div className={css.badge}>2</div>
        </div>
        <ul>
          {!isLoggedIn ? (
            <>
              <li><Link href='./compte'>Login</Link></li>
              <li><Link href='./compte'>Sign Up</Link></li>
            </>
          ) : (
            <li><button onClick={logout}>Logout</button></li>
          )}
        </ul>
      </div>
    </div>
  );
}