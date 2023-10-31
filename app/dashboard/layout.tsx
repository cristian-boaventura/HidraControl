import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'Demo Dashboard Control Hidrualico',
  description: 'Demo Dashboard Control Hidrualico',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  )
}
