import "@/styles/globals.css";
import { Footer, Navbar, WorkbookPopup } from "@/components";
import { AnimatePresence } from "framer-motion";
import Head from "next/head";

export default function App({
	Component,
	pageProps,
	router,
}: {
	Component: any;
	pageProps: any;
	router: any;
}) {
	return (
		<>
		<Head>
			<title>Unusual Teajay | Life Coach - Transform Your Life Today</title>
			<meta name="description" content="Unusual Teajay is your dedicated life coach helping you unlock your true potential and create the life you've always envisioned through personalized coaching." />
			<meta name="keywords" content="life coach, personal development, transformation, life coaching, wellness, motivation, Unusual Teajay, self-improvement" />
			<meta name="author" content="Unusual Teajay" />
			<meta name="robots" content="index, follow" />

			{/* Favicon */}

			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			<link rel="manifest" href="/site.webmanifest" />

			{/* Open Graph Meta Tags */}
			<meta property="og:type" content="website" />
			<meta property="og:title" content="Unusual Teajay | Life Coach - Transform Your Life Today" />
			<meta property="og:description" content="Empower yourself to live your best life through personalized coaching and guidance with Unusual Teajay." />
			
			{/* Twitter Card Meta Tags */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Unusual Teajay | Life Coach - Transform Your Life Today" />
			<meta name="twitter:description" content="Empower yourself to live your best life through personalized coaching and guidance with Unusual Teajay." />
		
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		</Head>

			<Navbar />
			<AnimatePresence mode="wait">
				<Component key={router.route} {...pageProps} />
			</AnimatePresence>
			<Footer />
			<WorkbookPopup />
		</>
	);
}
