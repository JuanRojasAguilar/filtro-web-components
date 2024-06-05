import { useState } from "react";
import ImcForm from "./components/ImcForm";
import ImageGallery from "./components/ImageGallery";
import WebApi from "./components/WebApi";

const App = () => {
  const [page, setPage] = useState();
  const proyectos = [
    {
      title: "calcular IMC",
      page: <ImcForm />,
    },
    {
      title: "Galeria de imagenes",
      page: <ImageGallery />,
    },
    {
      title: "WebApi",
      page: <WebApi />,
    },
  ];

  const renderPage = (data) => {
    setPage(data.page);
  };
  return (
    <>
      <h1>Elige que proyecto ver: </h1>
      {proyectos.map((item) => {
        return (
          <button
            className="pageChooser"
            key={item.title}
            onClick={() => renderPage(item)}
          >
            {item.title}
          </button>
        );
      })}
      {page && page}
    </>
  );
};

export default App;
