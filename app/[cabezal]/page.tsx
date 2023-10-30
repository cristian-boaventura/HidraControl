export default function Cabezal({ params }: { params: { cabezal: string } }) {
  return <div className="text-2xl font-bold m-4">{params.cabezal}</div>
}
