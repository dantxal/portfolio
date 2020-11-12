type Props = {
  alt?: string
  src?: string
  title?: string
}

const ImageRenderer = ({ alt, src, title }: Props, maxWidth) => {
  const imageSrc = src.startsWith('http') ? src : `/assets/${src}`

  return (
    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
      <img
        alt={alt}
        src={`../images/${src}`}
        title={title}
        style={{ maxWidth, maxHeight: '50vh' }}
      />
    </div>
  )
}

export default ImageRenderer
