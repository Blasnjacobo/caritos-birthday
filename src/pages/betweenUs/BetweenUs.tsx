import { Button } from "primereact/button"
import "./betweenUs.scss"
import { useNavigate } from "react-router-dom"

const BetweenUs = () => {
    const navigate = useNavigate()
    const handleHunting = () => {
        navigate("./huntingTreasure")
    }

    const handleStory = () => {
        navigate("./story")
    }

  return (
    <main className="flex flex-column gap-2 w-full h-full md:flex-row betweenUs">
        <Button label="Carito's hunting treasure" className="w-full h-full" severity="success" onClick={()=> handleHunting()}/>
        <Button label="Story to my little girl" className="w-full h-full" severity="info" onClick={() => handleStory()} />
    </main>
  )
}

export default BetweenUs