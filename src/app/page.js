import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
       <h1 className="text-5xl font-bold mb-4 text-center">
        Portfolio V2
      </h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
      </p>
      <a
        href="https://github.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300"
      >
        View My GitHub
      </a>
    </div>
  );
}
