import React from 'react'

const Images = props => {
  console.log("props: " + props.images.files);
  return props.images.files ? props.images.files.map((image, i) =>
      <div key={image.file_url}>
        <div
          onClick={() => props.removeImage(image.file_url)}
          className='delete'
        >
          X
        </div>
        <img
          src={image.file_url}
          alt={image.file.name}
          onError={(e) => console.log(e)}
        />
      </div>
  ): null;
}

export default Images;