import './global.css';
import { Inter } from 'next/font/google'
import { Navbar } from '@goku/ui'
import { FiltersProvider } from './goku/contexts/FiltersContext';
import ScrollRestoration from './scroll-restoration';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to goku',
  description: 'Generated by create-nx-workspace',
};

interface MenuItem {
  name: string;
  href: string;
}
const menuItems: MenuItem[] = [
  { name: "Todolist", href: "/" },
  { name: "DBZ", href: "/goku" },
  { name: "Comunities", href: "/communities" },
  { name: "Employees", href: "/employees" },
  { name: "Vacaciones", href: "/comunidades" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar menuItems={menuItems} />
        <FiltersProvider>
          <main className="mx-auto max-w-[1400px] pt-16 px-6">
            {children}
            <ScrollRestoration />
          </main>
        </FiltersProvider>
      </body>
        
    </html>
  );
}
