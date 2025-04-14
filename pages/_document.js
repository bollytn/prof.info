import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        {/* Title should be defined at the page level using <Head> from next/head */}
          <link rel="icon" href="/assets/icon.ico" />
          <link rel="shortcut icon" href="/assets/icon.ico" />
          <link rel="apple-touch-icon" href="/assets/icon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preload" href="/assets/photo.png" as="image" type="image/png" />
          
          <link
            rel="preload"
            href="/assets/photo.png"
            as="image"
            type="image/png"
          />

{/* meta description     */}
<meta name="description" content="Découvrez le portfolio de Mahjoubi Bilel, enseignant en informatique. Explorez ses projets éducatifs, ses services et ses ressources pédagogiques ,programmtion algorithme creation des jeux scratch ,creation des histoire scratch,creation des animation scratch." />
<meta name="keywords" content="Mahjoubi Bilel, portfolio, enseignant informatique, scratch, AppInventor, Microbit, projets éducatifs" />
<meta name="author" content="Mahjoubi Bilel" />
<meta name="robots" content="index,follow" />
<meta name="googlebot" content="index,follow" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument