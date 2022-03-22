import React from "react";
import { Helmet } from "react-helmet";
import initialState from "../initialState";
import { Products } from "../components/Products"

function Home () {
  return(
    <>
      <Helmet>
        <title>React Shop</title>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content="@Psicodev"/>
        <meta name="twitter:creator" content="@Psicodev"/>
        <meta name="twitter:title" content="React Shop"/>
        <meta name="twitter:description" content="React Shop"/>
        <meta
          name="twitter:image"
          content=""
        />
        <meta property="og:title" content="React Shop"/>
        <meta property="og:description" content="React Shop"/>
        <meta
          property="og:image"
          content=""
        />
        <meta property="og:url" content="react-shop-4c025.web.app/" />
        <meta property="og:site_name" content="React Shop" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Products Products={initialState.products} />
    </>
    )
}

export { Home }