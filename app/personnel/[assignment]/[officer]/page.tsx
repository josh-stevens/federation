import { fetchPersonnel } from "@/app/lib/actions";
import { BackButton } from "@/app/ui/back-button";
import { OFFICERS } from "@/app/ui/constants";

interface OfficerProps {
  params: Promise<{
    officer: string;
  }>;
}

export default async function Officer(props: OfficerProps) {
  const { officer } = await props.params;
  const { title, rank } = OFFICERS[officer];
  const data = await fetchPersonnel(title);

  return (
    <>
      <h1>{rank} {title.replaceAll('_', ' ')}</h1>
      <div className="pics-right">
        <img src={data.personnelImages[0]} width="250" />
      </div>
      <p>{data.extract}</p>
      <BackButton />
    </>
  );
}
