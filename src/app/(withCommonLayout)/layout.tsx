import CopyRight from "@/components/Footer/CopyRight";
import DownFooter from "@/components/Footer/DownFooter";
import Footer from "@/components/Footer/Footer";
import TopFooter from "@/components/Footer/TopFooter";
import Nav from "@/components/header/Nav/Nav";
import MessengerBtn from "@/shared/MessengerBtn";
import { Toaster } from "react-hot-toast";
export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <MessengerBtn />
      <Nav />
      {children}
      <TopFooter />
      <Footer />
      <CopyRight />
      <DownFooter />
      <Toaster />
    </div>
  );
}
