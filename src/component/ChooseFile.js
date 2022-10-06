import React from 'react'

export default function ChooseFile({item}) {
    console.log(item,"itemmm")
    const handleChange = (e)=>{
        console.log(e,"egfuygeyf")

    }
  return (
    <>
         <div className="column">
                <div className="col">
                  <img src={item.image} alt="combined-shape" />
                  <p>{item.text}</p>
                </div>
                <label for="file-upload" class="custom-file-upload" accept="image/png, image/jpeg">
                 Choose File
                </label>
                <input id="file-upload" type="file" onChange={(e)=>handleChange(e)} />
              </div>
    </>
  )
}
