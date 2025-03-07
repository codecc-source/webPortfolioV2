import Image from "next/image";
import Navbar from "./components/navBar";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-cover flex flex-col items-center justify-center px-6 bg-[url('/dark.svg')] pt-20 md:pt-20">
      
      <Navbar/>
      <div className="border-2 border-white px-6 py-3 rounded-lg">
        <h1 className="text-[3rem] font-custom font-bold text-center text-white">
          Carlito O. Tingson Jr
        </h1>
      </div>
      <div className="border-2 border-gray-400 px-6 py-4 mt-4 rounded-lg bg-[#0A192F]/80">
        <p className="text-lg font-custom text-gray-300 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec quam libero. Proin id mauris vitae nisi dignissim blandit. Aliquam feugiat, est dapibus maximus venenatis, justo neque commodo odio, eget tincidunt dui nulla in odio. Maecenas sollicitudin velit ac varius sodales. Aliquam sodales aliquam purus in placerat. Ut malesuada elit eget odio varius rhoncus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris pharetra arcu neque, eget semper neque finibus id. Nam posuere nisl viverra aliquam tristique.        
        </p>
      </div>
      <InteractiveGridPattern/> {/* Fix this lmao */}

    </div>
  );
}


//Use MAGIC UI for some stuff