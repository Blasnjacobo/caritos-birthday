import { Galleria } from './../../components/Prime';
import { LoaderModal } from "./../../components/index"
import './memories.scss';
import { useMemories } from './../../hooks/useMemories';
import { CategoryGallery, ImageItem } from './../../services/PhotoService';

export default function Memories() {
    const { galleries, isLoading } = useMemories();

    const itemTemplate = (item: ImageItem) => (
        <div className="gallery-item">
            <section className='flex justify-content-center'>
                <img 
                    src={item.itemImageSrc} 
                    alt={item.alt} 
                    className="h-16rem rounded-lg shadow-lg"
                />
            </section>
            <div className="gallery-item-info w-10 m-auto">
                <h3 className="text-xl font-semibold text-center">{item.title}</h3>
                <p className="text-gray-600">{item.alt}</p>
                {item.date && (
                    <span className="text-sm text-gray-500">
                        {new Date(item.date).toLocaleDateString()}
                    </span>
                )}
            </div>
        </div>
    );

    const thumbnailTemplate = (item: ImageItem) => (
        <div className="grid grid-nogutter justify-content-center">
            <img 
                src={item.thumbnailImageSrc} 
                alt={item.alt} 
                className="w-3rem h-3rem object-fill rounded-md"
            />
        </div>
    );

    return (
        <div className="memories-container w-11 m-auto">
            {isLoading ? (
                <LoaderModal 
                    title="Espera unos segunditos amor"
                    text="En lo que se cargan las fotos deja decirte lo bella, bonita, hermosa que eres mi amor"
                />
            ) : (
                <div className="space-y-12">
                    {galleries.map((gallery: CategoryGallery) => (
                        <section 
                            key={gallery.category}
                            className="gallery-section mb-6"
                        >
                            <div className="gallery-header mb-6">
                                <h2 className="text-3xl font-bold mb-2 text-center">
                                    {gallery.title}
                                </h2>
                                <p className="text-gray-600 text-center">
                                    {gallery.description}
                                </p>
                            </div>

                            <Galleria 
                                value={gallery.images}
                                showThumbnails
                                showItemNavigators
                                showItemNavigatorsOnHover
                                numVisible={5}
                                circular
                                autoPlay
                                transitionInterval={3000}
                                item={itemTemplate}
                                thumbnail={thumbnailTemplate}
                                className="rounded-xl overflow-hidden shadow-2xl"
                            />
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}