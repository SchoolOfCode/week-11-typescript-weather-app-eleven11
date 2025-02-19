import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team 11 Weather",
  description: "Check the weather in your city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full">
      <body className={` antialiased flex flex-col min-h-full `}>
        <div className="flex flex-col min-h-screen">
          <header className="header">Test </header>
          <main className="flex-grow flex justify-center pt-11">
            {children}
          </main>
          <footer className="footer">Test footer</footer>
        </div>
      </body>
    </html>
  );
}
