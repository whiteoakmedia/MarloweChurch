import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // No <html>/<body> here — each route group provides its own.
  // (frontend)/layout.tsx renders the church site shell.
  // (payload)/layout.tsx uses Payload's RootLayout which renders its own <html>.
  return <>{children}</>;
}
