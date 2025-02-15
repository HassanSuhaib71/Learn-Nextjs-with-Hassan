export default function Button({
  buttonText,
  className,
}: {
  buttonText: string;
  className?: string;
}) {
  return (
    <div>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded${className}`}
      >
        {buttonText}
      </button>
    </div>
  );
}
