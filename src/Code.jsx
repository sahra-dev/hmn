
import { QRCodeCanvas } from "qrcode.react";

const MyQRCode = () => {
  const siteURL = "https://valentine-sh.netlify.app/"; // لینک سایتت توی Netlify

  return (
    <div>
      <h2>QR Code برای سایت من</h2>
      <QRCodeCanvas value={siteURL} size={200} />
    </div>
  );
};

export default MyQRCode;
