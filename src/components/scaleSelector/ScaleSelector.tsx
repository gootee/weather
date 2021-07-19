import { MouseEvent } from 'react'

interface ScaleSelectorProps {
  scale: string,
  setScale: Function
}

const ScaleSelector = (props: ScaleSelectorProps) => {
  const onScaleClick = (event: MouseEvent<HTMLInputElement>) => {
    const id = event.currentTarget.id
    if (id !== props.scale) {
      props.setScale(id)
    }
  }
  
  if (props.scale === "F") {
    return <input 
      type="button" 
      value="Celsius"
      id="C"
      onClick={onScaleClick}>
    </input>    
  } else {
    return <input 
      type="button" 
      value="Farenheit"
      id="F"
      onClick={onScaleClick}>
    </input>
  }
}

export default ScaleSelector