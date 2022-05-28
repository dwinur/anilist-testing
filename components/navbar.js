import { AL } from "./logos";
import Link from "next/link";

const Navbar = () => (
  <>
    <header className="navbar">
      <div className="navbar__centered">
        <Link href="/" scroll={false}>
          <a className="logo">
            <AL header />
          </a>
        </Link>
      </div>
    </header>
    <style jsx>{`
      .navbar {
        background-color: #292b3f;
        height: 4.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 5;
      }

      a {
        color: #b2b4d0;
      }

      .logo {
        cursor: pointer;
      }

      .navbar__centered {
        width: 68rem;
        height: 4.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .navbar__centered a {
        margin-right: 2rem;
      }
      
      @media screen and (max-width: 1160px) {
        .navbar {
          display: none;
        }
      }
    `}</style>
  </>
);

export default Navbar;
