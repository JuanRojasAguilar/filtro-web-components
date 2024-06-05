import { useMemo } from "react";

const useCalularImc = (data) => {
  const altura = (data.altura/100)**2
  const imc = data.peso / data.altura**2
  console.log(imc)
}

export default useCalularImc;
