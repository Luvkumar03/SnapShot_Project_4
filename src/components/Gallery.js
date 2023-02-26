 import React from 'react'
 import NoImages from './NoImages'
 import Image from './Image'

 
function Gallery(props) {
    const result = props.data;

    let images, noImages;

    if(result.length>0){
        images = result.map(image=>{
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
      
            return (
            <Image url={url} key={id} alt={title} />)
          });
        
    }else {
        noImages = <NoImages />;
      }
      
   return (
     <div>
        <ul>
            {images}
        </ul>
        {noImages}
        
    </div>
   )
 }
 export default Gallery;
 