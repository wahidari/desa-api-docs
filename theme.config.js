export default {
  github: 'https://github.com/wahidari/desa-api-docs',
  docsRepositoryBase: 'https://github.com/wahidari/desa-api-docs/blob/main',
  titleSuffix: ' – Desa Digital API Docs',
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <>{new Date().getFullYear()} © Desa Digital API Docs.</>,
  logo: (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <div>
        <span className="ml-2 text-lg md:text-xl font-semibold mb-0">
          Desa {" "}
          <span className="hidden md:inline">Digital </span>
          {" "}API Docs
        </span>
        {/* <div className="my-0 ml-2 text-sm md:hidden">API Docs</div> */}
      </div>
      {/* <span className="text-gray-600 ml-2 font-normal hidden md:inline">
        API Docs
      </span> */}
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Desa Digital API Docs" />
      <meta name="og:description" content="Desa Digital API Docs" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://desa-api-docs.vercel.app/og.png" />
      <meta name="twitter:site:domain" content="desa-api-docs.vercel.app" />
      <meta name="twitter:url" content="https://desa-api-docs.vercel.app" />
      <meta name="og:title" content="Desa Digital API Docs" />
      <meta name="og:image" content="https://desa-api-docs.vercel.app/og.png" />
      <meta name="apple-mobile-web-app-title" content="Desa Digital API Docs" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
    </>
  )
}
