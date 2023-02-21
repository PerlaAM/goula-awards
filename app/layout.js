import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html class="h-full" lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */
      }
      <head />
      <body class="h-full">{children}</body>
    </html>
  );
}
