import { Inter } from "next/font/google";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false

import "./globals.css";
import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eric Bartsch | Software Engineer",
  description: "Welcome to my personal site. I am a professional software engineer and full stack developer. I enjoy learning and building cool things. I value personal growth, integrity and open communication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} mobile:max-w-full tablet:max-w-full desktop:max-w-[1200px] mobile:px-none tablet:px-none desktop:px-8 mx-auto`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}

library.add(fab, fas, far);