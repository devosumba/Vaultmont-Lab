import React from "react";

interface PaymentPopupProps {
  onClose: () => void;
}

const PaymentPopup: React.FC<PaymentPopupProps> = ({ onClose }) => (
  <div className="absolute inset-0 flex items-center justify-center z-20">
    <div className="bg-[#181818] rounded-xl shadow-lg p-6 w-full max-w-xs border border-[#232323] relative">
      <div className="bg-gradient-to-br from-[#13db7a] to-[#181818] rounded-lg p-4 mb-4 flex items-center justify-between">
        <span className="text-white text-lg font-bold">Choose Your Payment</span>
        <button onClick={onClose} className="text-white text-xl font-bold ml-2">×</button>
      </div>
      <div className="space-y-3">
        <button className="w-full flex items-center justify-between bg-[#232323] text-white font-semibold py-3 rounded-lg px-4 hover:bg-[#13db7a] hover:text-darkmode transition">
          Pay with Card
          <span className="ml-2 bg-white text-[#232323] px-2 py-1 rounded text-xs font-bold">VISA</span>
        </button>
        <button className="w-full flex items-center justify-between bg-[#ffb347] text-white font-semibold py-3 rounded-lg px-4 hover:bg-[#13db7a] hover:text-darkmode transition">
          Pay with Crypto
          <span className="ml-2 flex gap-1">
            <span className="bg-white text-[#232323] px-2 py-1 rounded text-xs font-bold">₿</span>
            <span className="bg-white text-[#232323] px-2 py-1 rounded text-xs font-bold">Ξ</span>
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default PaymentPopup;
