import Showcase from "./Showcase";

export default function Banner() {
  return (
    <div>
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl big-shoulders-stencil-ogs text-center my-[6%]">
        The Greatest Movies Of All Time...
      </h1>

      {/* Infinite Sroll Posters*/}
      <Showcase />
    </div>
  );
}
