import Image from 'next/image'
import mountains from '../../public/images/club-ff.jpg'
 
export default function Responsive() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Image
        alt="Mountains"
        width={1000}
        height={1000}
        // Importing an image will
        // automatically set the width and height
        src={mountains}
        sizes="50vw"
        // Make the image display full width
        style={{
          width: '40%',
          height: 'auto',
          position:'relative',
          justifyContent:'center'
        }}
      />
    </div>
  )
}