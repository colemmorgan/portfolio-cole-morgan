export default function Gridlines() {
  return (
    <div className="absolute inset-0 z-10 grid md:grid-cols-6 px-6 sm:px-8">
      <div className="hidden md:block border-background-secondary h-full border-l" />
      <div className="hidden md:block border-background-secondary h-full border-l" />
      <div className="hidden md:block border-background-secondary h-full border-l" />
      <div className="hidden md:block border-background-secondary h-full border-l" />
      <div className="hidden md:block border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-x" />
    </div>
  );
}
