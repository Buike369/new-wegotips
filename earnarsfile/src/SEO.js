import React from 'react'
import { Helmet } from 'react-helmet'

const SEO = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description}/>
          <meta name="Keywords" content={keywords} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charset="utf-8"/>
          <link rel="canonical" href={window.location.href} />
    </Helmet>
  )
}

export default SEO;