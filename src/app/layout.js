import { Poppins } from "next/font/google";
import "@/styles/index.scss";
import Navbar from "@/components/Navbar/Navbar";
// import BootstrapClient from "@/clients/BootstrapClient";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Stampd - Modern Loyalty Cards",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>

      {/* <BootstrapClient /> */}
    </html>
  );
}
