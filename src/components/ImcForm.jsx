import { set, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import "../styles/ImcForm.css";

const ImcForm = () => {
  const [imc, setImc] = useState();
  const [categoria, setCategoria] = useState("");
  const [imgPostion, setImgPosition] = useState(false);
  const useCalularImc = (data) => {
    const calAltura = (data.altura / 100) ** 2;
    const calculo = data.peso / calAltura;
    setImc(calculo.toFixed(2));
  };

  const normal = 18.5 <= imc && imc <= 24.9;
  const sobrepeso = 25 <= imc && imc <= 29.9;
  const obesidadPrimero = 30 <= imc && imc <= 34.9;
  const obesidadSegundo = 35 <= imc && imc <= 39.9;
  const obesidadTercero = 40 <= imc;

  const onSubmit = (data) => {
    useCalularImc(data);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (normal) {
      setCategoria("NORMAL");
      setImgPosition(0);
    } else if (sobrepeso) {
      setCategoria("SOBREPESO");
      setImgPosition(-80);
    } else if (obesidadPrimero) {
      setCategoria("OBESIDAD I");
      setImgPosition(-150);
    } else if (obesidadSegundo) {
      setCategoria("OBESIDAD II");
      setImgPosition(-222);
    } else if (obesidadTercero) {
      setCategoria("OBESIDAD III");
      setImgPosition(-295);
    } else if (imc < 18.5) {
      setCategoria("Por favor consulta al medico");
    }
  }, [imc]);

  return (
    <>
      <div className="titleContainer">
        <h1 className="formTitle">
          Bienvenido a la calculardora de Indice de Masa Corporal (IMC)!
        </h1>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="fieldContainer">
            <fieldset className="fieldSet">
              <label className="label" htmlFor="peso">
                Peso en KG:{" "}
              </label>
              <input
                type="number"
                min={0}
                max={300}
                name="peso"
                id="peso"
                {...register("peso", {
                  required: "Por favor ingresa un peso",
                })}
              />
              {errors.peso && errors.peso.message}
            </fieldset>
            <fieldset className="fieldSet">
              <label className="label" htmlFor="altura">
                {" "}
                Altura en CM:{" "}
              </label>
              <input
                type="number"
                min={1}
                max={300}
                name="altura"
                id="altura"
                {...register("altura", {
                  required: "Por favor ingresa una altura",
                })}
              />
              {errors.altura && errors.altura.message}
            </fieldset>
          </div>

          <button type="submit">Calcular</button>
          {!!imc && (
            <>
              <p className="resultado">
                Tu Imc se calcula en {imc} - {categoria}
              </p>
              <div
                className="imageContainer"
                style={{ backgroundPosition: imgPostion }}
              ></div>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default ImcForm;
