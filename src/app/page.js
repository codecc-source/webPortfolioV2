import Image from "next/image";
import Navbar from "./components/navBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover flex flex-col items-center justify-center px-6 bg-[url('/Sprinkle.svg')]">
      <Navbar/>
       <h1 className="text-5xl font-custom font-bold mb-4 text-center pt-20">
        Portfolio V2
      </h1>
      <p className="text-lg font-custom text-gray-300 mb-6 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
      </p>

    </div>
  );
}


//add some sort of dots/texture type to background?