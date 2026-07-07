export default function Card({ children, className = "" }) {
  return (
    <div
      className={`w-full bg-white rounded-xl border border-gray-200 shadow-sm p-6 ${className}`}
    >
      {children}
    </div>
  );
}