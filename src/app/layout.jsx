import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";

import ConditionalLayout from "@/src/app/conditionallayout";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});

export const metadata = {
  title: "Inifniti Digital",
  description: "",
  robots: {
    index: false,
    follow: false,
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ConditionalLayout >
          {children}
        </ConditionalLayout >
      </body>
    </html>
  );
}
