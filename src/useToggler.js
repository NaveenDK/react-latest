import {useState} from "react"

function useToggler(defaultOnValue){
    //Ceate the state
    const [isToggledOn, setIsToggledOn] = useState(defaultOnValue)

    function toggle(){
        setIsToggledOn(prev=>!prev)
    }

  return [isToggledOn,toggle];

}

export default useToggler