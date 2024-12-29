import { data } from "../../assets/files/felicitaciones";
import { Person } from "../../assets/files/felicitaciones";
import { useState } from "react";
import "./Felicitaciones.scss"
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";

// Props interfaces for components
interface VideoCardProps extends Person {}

interface CategorySectionProps {
  title: string;
  items: Person[];
}

const VideoCard: React.FC<VideoCardProps> = ({ name, videoUrl, poster, gender }) => {
  const pt = {
    body: { className: 'p-0' },
    content: { className: 'p-0' }
  };

  // Define the name color based on gender
  const nameColorClass = gender === 'female' ? 'text-pink-500' : gender === 'male' ? 'text-blue-500' : 'text-black-500';

  return (
    <Card className="overflow-hidden col-12 p-0 my-5 md:col-4 md:my-2" pt={pt}>
      <video 
        className="w-full h-20rem object-cover"
        src={videoUrl}
        controls
        poster={poster}
      />
      <div className="p-3 flex flex-column gap-3">
        <h3 className={`font-bold m-0 underline ${nameColorClass}`}>{name}</h3>
      </div>
    </Card>
  );
};

const CategorySection: React.FC<CategorySectionProps> = ({ title, items }) => (
  <div className="mt-4 p-0">
    <h2 className="capitalize m-2 text-center">
      {title}
    </h2>
    <div className="grid">
      {items.map((item, index) => (
        <VideoCard
          key={index}
          {...item}
        />
      ))}
    </div>
  </div>
);

const Felicitaciones: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const hideModal = () => setIsModalVisible(false);
  return (
    <div className="surface-100 Felicitaciones">
      <div className="w-11 mx-auto">
        {Object.entries(data).map(([category, items]) => (
          <CategorySection 
            key={category}
            title={category}
            items={items}
          />
        ))}
      </div>
      <Dialog visible={isModalVisible} onHide={hideModal} dismissableMask header="Muchas personitas quisieron pasar a saludarte...">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Este mensaje viene de todos tus amigos
        </h1>
        <p className="m-auto md:w-8">
          Amor, aqui se encuentran muchas felicitaciones de gente bonita que te desean el mejor cumpleaños, siempre m eha asombrado la cantidad de personas que genuinamente te quieren mucho. Eso demuestra que has sido buena con cada uno de ellos, y que has sabido regar la plantita.
        </p>
      </Dialog>
    </div>
  );
};

export default Felicitaciones;