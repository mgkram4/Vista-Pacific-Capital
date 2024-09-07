// File: src/app/layout.tsx
import AppNavBar from './components/navbar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
      <div className="min-h-screen flex flex-col">
          <AppNavBar />
          <main className="flex-grow container mx-auto px-4 py-8 mt-10">
            {children}
          </main>
          <footer className="bg-secondary text-white py-4">
            <div className="container mx-auto px-4 text-center">
              © 2023 Vista Pacific Capital. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}