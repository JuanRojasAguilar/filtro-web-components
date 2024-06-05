import { useState } from "react";
import ImcForm from "./components/ImcForm";
import ImageGallery from "./components/ImageGallery";

const App = () => {
  const [page, setPage] = useState();
  const proyectos = [
    {
      title: "calcular IMC",
      page: <ImcForm />,
    },
    {
      title: "Galeria de imagenes",
      page: <ImageGallery />
    }
  ];

  const renderPage = (data) => {
    setPage(data.page);
  };
  return (
    <div>
      <h1>Elige que proyecto ver: </h1>
      {proyectos.map((item) => {
        return <button key={item.title} onClick={() => renderPage(item)}>{item.title}</button>;
      })}
      {page && page}
    </div>
  );
};

export default App;
