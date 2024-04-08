import './globals.css'
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	return (
      <html lang="en">
         <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
               href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
               rel="stylesheet"
            ></link>
         </head>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   );
}
