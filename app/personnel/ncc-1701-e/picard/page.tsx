import { fetchPicard } from "@/app/lib/actions";

export default async function Picard() {
  const data = await fetchPicard();
  return (
    <>
      <h1>Captain Jean-Luc Picard</h1>
      <div className="pics-right">
        <img src={data.personnelImages[0]} width="250" />
      </div>
      <p>{data.extract}</p>
    </>
  );
}