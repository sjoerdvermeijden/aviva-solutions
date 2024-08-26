import "@/styles/globals.css";
import type { AppProps } from "next/app";

import ToggleComponent from '@/context/NavigationContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ToggleComponent>
      <Component {...pageProps} />
    </ToggleComponent>
  );
}
