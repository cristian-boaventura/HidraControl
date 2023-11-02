import AdminPage from '@/components/AdminPage'
import CabezalesTable from '@/components/CabezalesTable'
import { auth } from '@clerk/nextjs'

export default async function Home() {
  const { userId } = auth()

  return (
    <main className="m-auto mt-10">
      {userId === 'user_2XakmjfMHpUZE79uCjujp8X3OuP' ? (
        <AdminPage />
      ) : (
        <CabezalesTable />
      )}
    </main>
  )
}
