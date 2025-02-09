import "./globals.css";

export const metadata = {
  title: "Survivegeh RTS Game Portfolio",
  description: "Iqvalgeh portfolio of published games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
