export default function Gridlines() {
  return (
    <div className="absolute inset-0 z-10 grid grid-cols-6 px-8">
      <div className="border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-l" />
      <div className="border-background-secondary h-full border-x" />
    </div>
  );
}
