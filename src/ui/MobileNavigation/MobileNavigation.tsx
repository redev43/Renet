import styles from "@/ui/MobileNavigation/MobileNavigation.module.scss"
import Link from "next/link";

const MobileNavigation = () => {
  return <nav className={styles.mobile}>
    <ul>
      <Link href={"/"}>
        <li>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12V28H26V12L16 4L6 12Z" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.6667 19.3334V28H19.3334V19.3334H12.6667Z" stroke="#AAAAAA" strokeWidth="2" strokeLinejoin="round" />
            <path d="M6 28H26" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </li>
      </Link>
      <Link href={"/"}>
        <li>
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 25.3333V12C7 6.84529 11.1787 2.66663 16.3333 2.66663C21.488 2.66663 25.6667 6.84529 25.6667 12V25.3333M3 25.3333H29.6667" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16.3333 29.3334C18.1743 29.3334 19.6667 27.841 19.6667 26V25.3334H13V26C13 27.841 14.4924 29.3334 16.3333 29.3334Z" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </Link>
      <Link href={"/profile"}>
        <li>
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.6668 13.3334C19.6123 13.3334 22.0002 10.9456 22.0002 8.00008C22.0002 5.05456 19.6123 2.66675 16.6668 2.66675C13.7213 2.66675 11.3335 5.05456 11.3335 8.00008C11.3335 10.9456 13.7213 13.3334 16.6668 13.3334Z" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M28.6667 29.3333C28.6667 22.7059 23.2941 17.3333 16.6667 17.3333C10.0393 17.3333 4.66675 22.7059 4.66675 29.3333" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </Link>
      <Link href={"/menu"}>
        <li>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.2998 7.96643H26.6331" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.2998 15.9664H26.6331" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.2998 23.9664H26.6331" stroke="#AAAAAA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </li>
      </Link>
    </ul>
  </nav>
}

export default MobileNavigation;