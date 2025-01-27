import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@/src/app/globals.scss";
import Scripts from "@/src/app/Scripts";
import ConditionalLayout from "@/src/app/conditionallayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});


export const metadata = {
  title: "1# Full-Service Digital Marketing Agency - Infiniti Digital",
  description: "Attract, Impress, and make more revenue with full-service digital marketing agency. We provide SEO, PPC, Social Media, Web Development and more! ",
  //===== Google Varification =====
  verification: {
    other: {
      "google-site-verification": ['btqt1QyuPBr3EkUgOcgoKk46tz6ZrUfJ53kiCjQj7fA'],
    },
  },
  //===== No-Index =====
  robots: {
    index: false,
    follow: false,
  }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Scripts />
        <ConditionalLayout >
          {children}
        </ConditionalLayout >
      </body>
    </html>
  );
}
