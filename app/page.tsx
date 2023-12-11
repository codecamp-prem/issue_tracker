import prisma from "@/prisma/client";
import { Flex, Grid } from "@radix-ui/themes";
import IssueChart from "./IssueChart";
import IssueSummery from "./IssueSummery";
import LatestIssue from "./LatestIssue";

export default async function Home() {
  // get open, in-progress, closed issues count from 'issue' table
  const open = await prisma.issue.count({ where: { status: 1 } });
  const inProgress = await prisma.issue.count({ where: { status: 2 } });
  const closed = await prisma.issue.count({ where: { status: 3 } });
  return (
    <>
      <Grid columns={{ initial: "1", md: "2" }} gap="5">
        <Flex direction="column" gap="5">
          <IssueSummery open={open} inProgress={inProgress} closed={closed} />
          <IssueChart open={open} inProgress={inProgress} closed={closed} />
        </Flex>
        <LatestIssue />
      </Grid>
    </>
  );
}
