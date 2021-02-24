import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
// import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Component key={router.route} {...pageProps} />
    </AnimatePresence>
  )
}

export default MyApp
