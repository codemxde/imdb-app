import Showcase from "./Showcase";

export default function Banner() {
  return (
    <div>
      {/* Title */}
      <h1 className="mt-32 sm:mt-36 md:mt-36 lg:mt-40 xl:mt-44 mb-14 sm:mb-16 md:mb-20 w-full text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl big-shoulders-stencil-ogs text-center">
        The Greatest Movies Of All Time...
      </h1>

      {/* Infinite Sroll Posters*/}
      <Showcase />
    </div>
  );
}
