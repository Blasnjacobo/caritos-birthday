import poster from "./carito__blasito.jpg"

const Story = () => {
  return (
    <section className="bg-blue-50 w-full h-full">
        <div className="w-11 m-auto">
            <h2 className="text-center my-4">Caritoo...</h2>
            <video 
                className="w-full h-20rem object-cover"
                src="https://github.com/Blasnjacobo/loteria-personalizada/raw/refs/heads/main/src/data/story__video.MOV"
                controls
                poster={poster}
            />
        </div>
    </section>
  )
}

export default Story