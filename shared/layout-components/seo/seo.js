import React from 'react'
import Head from "next/head";
import favicon from '../../../public/assets/images/brand-logos/favicon.ico';

const Seo = ({ title }) => {

  let i = `Evezon - ${title}`

  return (
    <Head>
      <title>{i}</title>
      <link href={favicon.src} rel="icon"></link>
      <meta name="description" content="Evezon India Private Limited" />
      <meta name="author" content="Evezon India Private Limited" />
      <meta name="keywords" content="tailwind nextjs, dashboard tailwind, tailwind admin, nextjs tailwind, tailwind in nextjs, admin dashboard tailwind, tailwind dashboards, tailwind template admin, tailwind and nextjs, admin panel, template dashboard, admin dashboard template, admin panel template"></meta>
    </Head>
  )
}

export default Seo