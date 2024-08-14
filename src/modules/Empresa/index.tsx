import EmpresaCard from "./Components/EmpresaCard";
import EmpresaCardInverted from "./Components/EmpresaCardInverted";
import EmpresaTitle from "./Components/EmpresaTitle";
import { QuienesSomos } from "./Components/QuienesSomos";
import SliderTrabajos from "./Components/SliderTrabajos";

export default function EmpresaModule() {
  return (
    <div className="w-full">
      <EmpresaTitle/>
      <EmpresaCard />
      <div className="block lg:hidden flex-grow border-t border-[#5f92cc] mx-4 mt-12"></div>
      <EmpresaCardInverted />
      <QuienesSomos />
      <SliderTrabajos/>
    </div>
  );
}
