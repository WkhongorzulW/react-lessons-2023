import { signIn, signOut, useSession } from "next-auth/react";
import style from "../styles/header.module.css";

export default function Header() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  function handleLogin(e: any) {
    e.preventDefault();
    signIn();
  }

  const handleLogout = (e: any) => {
    e.preventDefault();
    signOut();
  };
  return (
    <header>
      <noscript>
        <style>{`.nojs-show {opacity: 1; top: 0;}`}</style>
      </noscript>
      <div className={style.signedInStatus}>
        <div
          className={`nojs ${
            !session && loading ? style.loading : style.loaded
          }`}
        >
          <div>
            {!session && (
              <div>
                <span>You are not signed in</span>
                <br />
                <a href={`/api/auth/signin`} onClick={handleLogin}>
                  Sign In
                </a>
              </div>
            )}

            {session?.user && (
              <div>
                {session.user.image && (
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={style.avatar}
                  />
                )}
                <span className={style.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session.user.email || session.user.name}</strong>
                </span>
                <a
                  href={`api/auth/signout`}
                  className={style.button}
                  onClick={handleLogout}
                >
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
