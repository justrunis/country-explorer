import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-col bg-blue-300 p-16 rounded-lg shadow-lg items-center mt-10">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Home Page</h1>
      <p className="text-lg text-gray-600">Welcome to this awesome website!</p>
    </div>
  );
}
