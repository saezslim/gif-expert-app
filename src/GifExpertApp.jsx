import { useState } from "react"
import { GifGrid, FixedHeader } from "./components"

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])
  
  const onAddCategory = (category) => {
    setCategories([category,...categories])
  }
  return(
    <>
      <FixedHeader
        onNewCategory={onAddCategory}
      />
      
        {
          categories.map((category) => (// Si le agregamos el id, renderiza por completo todo
            <GifGrid key={category}
             category={category} 
             />
          ))
        }
    </>
  )
}