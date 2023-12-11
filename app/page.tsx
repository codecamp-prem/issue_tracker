import prisma from "@/prisma/client";
import IssueSummery from "./IssueSummery";

export default async function Home() {
  // get open, in-progress, closed issues count from 'issue' table
  const open = await prisma.issue.count({ where: { status: 1 } });
  const inProgress = await prisma.issue.count({ where: { status: 2 } });
  const closed = await prisma.issue.count({ where: { status: 3 } });
  return (
    <>
      <IssueSummery open={open} inProgress={inProgress} closed={closed} />
    </>
  );
}
