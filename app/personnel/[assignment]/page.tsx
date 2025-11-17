import { BackButton } from "@/app/ui/back-button";
import { CategoryButton } from "@/app/ui/category-button";
import { OFFICERS } from "@/app/ui/constants";
import { redirect } from "next/navigation";

interface AssignmentProps {
  params: Promise<{
    assignment: string;
  }>;
}

export default async function Assignment(props: AssignmentProps) {
  const { assignment } = await props.params;

  return (
    <>
      <h1>Personnel: {assignment}</h1>
      <h2 className="font-golden-orange">Select an officer below to view details.</h2>
      <div className="buttons flex">
        {Object.entries(OFFICERS).map(([slug, officer]) => (
          <CategoryButton key={slug} assignment={assignment} slug={slug}>
            {officer.title.replaceAll("_", " ")}
          </CategoryButton>
        ))}
      </div>
      <BackButton />
    </>
  );
}