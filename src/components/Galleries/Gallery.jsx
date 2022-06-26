import Thumb from "../Thumb/Thumb";

const Gallery = (data) => {
  const results = data
 Object.keys(data.data).map( key => console.log(key))
  console.log('res', typeof results)
  console.log('resres', data.data)
  return(
    <>
    <div> galleery</div>
    {Object.keys(data.data).map(key => <Thumb data={data.data[key]}/>)}
    
   
</>
  )
}

export default Gallery;