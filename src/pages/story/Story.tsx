import poster from "./carito__blasito.jpg"
import videoUrl from "./../../assets/videos/blas-pino.mp4"

const Story = () => {
  return (
    <section className="bg-blue-50 w-full h-full">
        <div className="w-11 m-auto">
            <h2 className="text-center my-4">Cuento para caritoo</h2>
            <video 
                className="w-full h-20rem object-cover"
                src={videoUrl}
                controls
                poster={poster}
            />
        </div>
    </section>
  )
}

export default Story