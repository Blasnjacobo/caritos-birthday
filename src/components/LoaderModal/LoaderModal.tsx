import { Loader } from "./../../components/index";
import "./LoaderModal.scss";

interface ILoaderModal {
  title: string;
  text: string
}

export const LoaderModal = ({ text, title }: ILoaderModal) => {
  return (
    <div className="PwaLoaderModal">
      <div className="PwaLoaderModal__content flex flex-column justify-content-center align-items-center">
        <Loader color="purple" size={200}/>
        <h2 className="h__md text-white">{title}</h2>
        <p className="p__lg text-white text-center">{text}</p>
      </div>
    </div>
  );
};
