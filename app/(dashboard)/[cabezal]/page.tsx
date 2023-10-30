export async function generateStaticParams() {
  return [
    { cabezal: 'cabezal1' },
    { cabezal: 'cabezal2' },
    { cabezal: 'cabezal3' },
    { cabezal: 'cabezal4' },
    { cabezal: 'cabezal5' },
  ]
}

export const dynamicParams = false

export default function Page({ params }: { params: { cabezal: string } }) {
  const { cabezal } = params
  return <div className="text-4xl font-bold">{cabezal}</div>
}
