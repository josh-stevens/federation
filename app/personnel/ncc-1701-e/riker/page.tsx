import { fetchRiker } from "@/app/lib/actions";

export default async function Riker() {
  const data = await fetchRiker();
  return (
    <>
      <h1>First Officer William T. Riker</h1>
      <div className="pics-right">
        <img src={data.personnelImages[0]} width="250" />
      </div>
      <p>{data.extract}</p>
    </>
  );
}