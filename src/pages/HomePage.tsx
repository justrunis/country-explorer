import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-blue-300 p-16 rounded-lg shadow-lg m-10">
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">Home Page</h1>

      {/* Background Gif Section */}

      <div className="flex flex-col bg-white p-4 rounded-lg shadow-lg text-center gap-4 my-5">
        <h3 className="text-lg text-gray-600">
          Welcome to this awesome website!
        </h3>
        <img
          src="https://i.pinimg.com/originals/45/71/9e/45719ed0533eaed76ede0f844781e962.gif"
          alt="Background GIF"
          className="rounded-lg"
        />
      </div>

      {/* GIFs inside content */}
      <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 className="font-semibold text-xl mb-2">Fun and Animations</h3>
          <img
            src="https://media2.giphy.com/media/YTzh3zw4mj1XpjjiIb/200w.gif?cid=6c09b952x3rzy1of59o5qkh48qhxn38q48yzbwh883qsygt2&ep=v1_gifs_search&rid=200w.gif&ct=g"
            alt="Fun Animation"
            className="rounded-lg"
          />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg text-center">
          <h3 className="font-semibold text-xl mb-2">Explore with Us!</h3>
          <img
            src="https://i.pinimg.com/originals/67/08/1e/67081e931b10b0c94949cd1c8901ae01.gif"
            alt="Explore GIF"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
