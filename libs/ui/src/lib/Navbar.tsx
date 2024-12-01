import Link from 'next/link'

export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link href="/employees" className="hover:text-gray-300">Employees</Link></li>
        <li><Link href="/messages" className="hover:text-gray-300">Messages</Link></li>
        <li><Link href="/communities" className="hover:text-gray-300">Communities</Link></li>
        <li><Link href="/employee-schedule" className="hover:text-gray-300">Employee Schedule</Link></li>
      </ul>
    </nav>
  )
}

