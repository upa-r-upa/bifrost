import { Outlet } from "react-router-dom";

import pixelArt from "@/assets/pixel-art.png";

function App() {
  return (
    <div className="relative w-full bg-background h-screen pt-5">
      <div className="flex justify-center">
        <div className="w-full max-w-screen-md">
          <div className="aspect-video border-2 border-selection-background rounded-md shadow-lg overflow-hidden">
            {/* 터미널 헤더 */}
            <div className="flex items-center p-2 bg-selection-background text-foreground rounded-t-md">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red"></div>
                <div className="w-3 h-3 rounded-full bg-yellow"></div>
                <div className="w-3 h-3 rounded-full bg-cyan"></div>
              </div>

              <div className="mx-auto text-md font-sans text-foreground flex">
                <img className="w-5 mr-2" src={pixelArt} />
                <span>Bifrost</span>
              </div>
            </div>

            <div className="p-3 text-white">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
