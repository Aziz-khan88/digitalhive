import FooterLp from "../layout/footerlp"
import HeaderLp from "../layout/headerlp"

//===== Meta Data =====
export const metadata = {
  //===== Meta Tags =====
  title: "",
  description: "",
  //===== OG Tags =====
  openGraph: {
    title: "",
    description: "",
    url: '/landing/smm',
    siteName: "Inifniti Digital",
    locale: 'en_US',
    type: 'website',
    images: "",
  },
  //===== Canonical =====
  alternates: { canonical: '/book-writing' },
}


export default function RootLayout({ children }) {
  return (
    <>
      <HeaderLp />
      {children}
      <FooterLp />
    </>
  )
}
