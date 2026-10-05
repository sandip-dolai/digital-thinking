import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import ClientLayout from './components/ClientLayout';

export const metadata: Metadata = {
  title: "Digital Thinking",
  description: "Learn. Build. Think like an engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ClientLayout>
            {children}
          </ClientLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
