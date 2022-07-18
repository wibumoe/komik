import axios from "axios";
import { Content } from "components/content/content";
import { server } from "config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import styles from "../styles/Home.module.css";
export default function Komik() {
  const router = useRouter();
  // console.log("ini endpoint", endpoint);
  const { id } = router.query;
  // console.log("ini", data);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    komik_endpoint,
    title,
    description,
    type,
    author,
    status,
    released,
    total_chapter,
    update_on,
    thumb,
    synopsis,
    genre_list,
    chapter,
  } = data;
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await AxiosAPP(`/api/komik/${id}`);
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>KomikIDC</title>
        <meta name="komik" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col space-y-4 w-full">
        {/* <h1>Komik</h1> */}
        <div className="flex">
          <div className="img relative w-full h-full">
            <Image src={thumb} layout="fill" alt={title} objectFit="cover" />
          </div>
          <div className="info flex">
            <ul className="list-disc">
              <li>asas</li>
              <li>asas</li>
              <li>asas</li>
            </ul>
            <ul className="list-disc">
              <li>asas</li>
              <li>asas</li>
              <li>asas</li>
            </ul>
          </div>
        </div>
        <div className="synopsis">{synopsis}</div>
      </div>
      <div className="komik-chapter">
        <h1>{released}</h1>
        <ul>
          {loading
            ? "Loading..."
            : chapter?.map((d, i) => (
                <li key={i}>
                  <Link href={`/chapter/${d.chapter_endpoint}`}>
                    <a className="flex justify-between">
                      <h2>{d.chapter_title}</h2>
                      <h2>{d.chapter_time}</h2>
                    </a>
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   // const router = useRouter();
//   // console.log("ini endpoint", endpoint);
//   const { id } = context.query;
//   const res = await fetch(`${server}/api/komik/${id}`, {
//     method: "GET", // *GET, POST, PUT, DELETE, etc.
//     // mode: 'cors', // no-cors, *cors, same-origin
//     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     // redirect: "follow", // manual, *follow, error
//     // referrerPolicy: "no-referrer",
//   });
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     }, // will be passed to the page component as props
//   };
// }
