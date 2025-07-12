import CopyRight from "@/components/Footer/CopyRight";
import Footer from "@/components/Footer/Footer";
import TopFooter from "@/components/Footer/TopFooter";
import Nav from "@/components/header/Nav/Nav";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <Nav />
      {children}
      <TopFooter />
      <Footer />
      <CopyRight />
    </div>
  );
}
