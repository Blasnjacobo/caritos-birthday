import { Button, Dialog } from "./../../components/Prime";
import caritoImage from "./../../assets/images/carito-main.jpg";
import saludos from "./../../assets/files/saludosDashboard.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const hideModal = () => setIsModalVisible(false);
  const navigate = useNavigate()

  const handleEndedVideo = () => {
    navigate("./felicitaciones")
  }
  
  return (
    <main className="flex flex-column h-full">
      <Button label="Click aquí para ver a Blasito" className="border-noround" onClick={() => setIsModalVisible(!isModalVisible)}/>
      <section className="flex flex-column gap-2 h-full md:flex-row">
        <img src={caritoImage} alt="Poster de felicitaciones para carito" />
        <section className="flex flex-column justify-content-start align-items-center p-5 mb-5">
          {saludos.sentences.map((sentence, index) => (
            <p
              key={index}
              className={index === 0 ? "h__sm m-0 md:text-left md:text-3xl" : "p__xl m-0 my-3"}
            >
              {sentence}
            </p>
          ))}
        </section>
      </section>
      <Dialog visible={isModalVisible} onHide={hideModal} dismissableMask header="Hola, felices 26 amor...">
      <video
          src='https://ik.imagekit.io/ikmedia/example_video.mp4'
          controls
          autoPlay
          className="w-full"
          onEnded={() => handleEndedVideo()}
      />
      </Dialog>
    </main>
  );
};

export default Dashboard;
