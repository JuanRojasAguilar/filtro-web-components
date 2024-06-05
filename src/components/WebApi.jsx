import { useEffect, useState } from "react";
import "../styles/WebApi.css";

const WebApi = () => {
  const [peopleInfo, setPeopleInfo] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const getFromApi = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    setPeopleInfo(response);
  };

  const listInfo = (data) => {
    setSelectedPerson(data);
  };

  return (
    <div className="webapi">
      <h1>webapi</h1>
      <button className="actualizar" onClick={getFromApi}>
        Actualizar
      </button>
      <div className="peopleInfoContainer">
        {peopleInfo.map((item) => (
          <button
            key={item.id}
            className="peopleName"
            onClick={() => listInfo(item)}
          >
            {item.name}
          </button>
        ))}
      </div>
      <hr />
      <div className="infoDisplay">
        {selectedPerson && (
          <div className="selectedInfo">
            <h3 className="selectedName">{selectedPerson.name}</h3>
            <p className="selectedEmail">
              <b>Email: </b>
              {selectedPerson?.email}
            </p>
            <p>
              <b>Phone: </b>
              {selectedPerson?.phone}
            </p>
            <p>
              <b>Website: </b>
              {selectedPerson?.website}
            </p>
            <p>
              <b>Company: </b>
              {selectedPerson?.company.name}
            </p>
            <p>
              <b>Address: </b>
              {selectedPerson.address?.street},{selectedPerson.address?.city}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebApi;
