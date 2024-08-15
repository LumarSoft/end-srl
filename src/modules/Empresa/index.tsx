import EmpresaCard from "./Components/EmpresaCard";
import EmpresaCardInverted from "./Components/EmpresaCardInverted";
import EmpresaTitle from "./Components/EmpresaTitle";
import { QuienesSomos } from "./Components/QuienesSomos";
import SliderTrabajos from "./Components/SliderTrabajos";

export default function EmpresaModule() {
  return (
    <div>
      <EmpresaTitle/>
      <EmpresaCard />
      <EmpresaCardInverted />
      <SliderTrabajos/>
      <QuienesSomos />
    </div>
  );
}
