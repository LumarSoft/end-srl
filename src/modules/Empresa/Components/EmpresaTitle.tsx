import { FramerComponent } from "@/shared/Framer/FramerComponent";

export default function EmpresaTitle() {
  return (
    <div className="mt-20 lg:pb-10 flex flex-col lg:flex-row gap-6 xl:gap-20 justify-center items-center">
      <FramerComponent
        style="w-full rounded-md lg:max-w-xl p-6"
        animationInitial={{ x: 200, opacity: 0 }}
        animationAnimate={{ x: 0, opacity: 1 }}
        animationViewPort={{ once: true, offset: 0.4 }}
      >
        <div className="flex items-center justify-center w-full">
          <div className="flex-grow border-t border-[#5f92cc] mx-4"></div>
          <h1 className="text-[#5f92cc] text-2xl font-bold">NUESTRA EMPRESA</h1>
          <div className="flex-grow border-t border-[#5f92cc] mx-4"></div>
        </div>
      </FramerComponent>
    </div>
  );
}
