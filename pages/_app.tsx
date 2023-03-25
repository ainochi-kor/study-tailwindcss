import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Nunito } from "next/font/google";

const inter = Nunito({
  weight: ["200", "300", "400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
