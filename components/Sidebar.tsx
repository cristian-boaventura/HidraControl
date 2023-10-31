import { SignedIn, UserButton } from '@clerk/nextjs'

const Sidebar = () => {
  return (
    <header className="bg-white dark:bg-[#111827] dark:text-white h-[100svh] p-3 flex flex-col justify-between fixed top-0 bottom-0 w-min">
      <nav>Navegación Lateral</nav>
      <div className="">
        <SignedIn>
          <UserButton
            showName={true}
            appearance={{
              elements: {
                userButtonBox: 'flex-row-reverse',
                userButtonOuterIdentifier: 'dark:text-white',
              },
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}

export default Sidebar
