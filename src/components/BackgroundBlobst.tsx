export default function BackgroundBlobs() {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[70%] rounded-full bg-purple-900/10 blur-[120px]" />
      <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
    </div>
  );
}
