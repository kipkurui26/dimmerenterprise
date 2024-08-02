import { Helmet } from 'react-helmet'

const MetaTags = ({title, metaTags, canonicalUrl}) => {
  return (
    <Helmet>
        <title>{title}</title>
        {metaTags.map((tag, index)=>(
          <meta key={index} name={tag.metaName} content={tag.metaContent} />
        ))}
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  )
}

export default MetaTags