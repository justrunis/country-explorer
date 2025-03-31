import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">Home Page</h1>
        <p className="text-lg text-gray-600">Welcome to our awesome website!</p>
      </div>
    </div>
  );
}
