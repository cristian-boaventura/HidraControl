import { SignedIn, UserButton } from '@clerk/nextjs'

const Sidebar = () => {
  return (
    <header className="bg-white h-screen p-3 flex flex-col justify-between sticky top-0">
      <nav>Navegación Lateral</nav>
      <div className="">
        <SignedIn>
          <UserButton
            showName={true}
            appearance={{
              elements: {
                userButtonBox: 'flex-row-reverse',
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}

export default Sidebar
