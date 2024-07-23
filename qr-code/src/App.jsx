import { useState } from "react";
import qrcode from "./assets/qrcode.png";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-slate-300 grid place-items-center">
      <div className="h-[499px] w-[320px] bg-white rounded-[20px] p-4">
        <img
          className="rounded-[10px] mb-6"
          src={qrcode}
          alt="qr code"
          height={288}
          width={288}
        />
        <div className="text-wrap px-4">
          <p className="text-slate-900 font-bold text-[22px] text-center">
            Improve your front-end skills by building projects
          </p>

          <p className="mt-4 text-slate-400 text-[15px] text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
