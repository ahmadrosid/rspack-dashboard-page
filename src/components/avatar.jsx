export function Avatar({ src }) {
  return (
    <div className="p-1.5 rounded-full bg-blue-400">
      <img
        src={src}
        className="w-12 h-12 rounded-full ring ring-white"
        alt="avatar"
      />
    </div>
  );
}
