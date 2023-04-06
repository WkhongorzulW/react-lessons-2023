import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function NavigationBar(): JSX.Element {
  return (
    <div>
      <div className={styles.nav}>
        <img
          src="https://images.fandango.com/cms/assets/2d5a3340-be84-11ed-9d20-83ee649e98bd--rt25-logo-mainnav-161x50.svg"
          alt="logo"
          className="logo"
        />
        <input
          type="text"
          placeholder="🔍 Search movies, TV, actors, more..."
          className={styles.search}
        />
        <div>
          <div className={styles.about}>
            <Link href={""}>What's the Tomatometer®?</Link>
            <Link href={""}>Critics</Link>
            <Link href={""}>LOGIN/SIGNUP</Link>
          </div>
          <div className={styles.contents}>
            <Link href={""}>MOVIES</Link>
            <Link href={""}>TV SHOWS</Link>
            <Link href={""}>MOVIE TRIVIA</Link>
            <Link href={""}>NEWS</Link>
            <Link href={""}>SHOWTIMES</Link>
          </div>
        </div>
      </div>
      <div className={styles.trending}>
        {" "}
        <span>TRENDING ON RT</span> Everything We Know About Guardians Of The
        Galaxy Vol. 3{" "}
      </div>
    </div>
  );
}
