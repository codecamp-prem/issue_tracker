import AuthOptions from "@/app/auth/AuthOptions";
import prisma from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import { cache } from "react";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

// async/await not needed when there is nothing to do after  async/await task.
const findIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);
interface Props {
  params: { id: string };
}
const IssueDetailPage = async ({ params }: Props) => {
  const session = await getServerSession(AuthOptions);
  const issueId = parseInt(params.id);

  // const issue = await prisma.issue.findUnique({
  //   where: { id: issueId },
  // });
  const issue = await findIssue(issueId);

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

// for SEO
// Dynamic Metadata
// You can use generateMetadata function to fetch metadata that requires dynamic values.
// minimum title, description
export async function generateMetadata({ params }: Props) {
  // const issue = await prisma.issue.findUnique({
  //   where: { id: parseInt(params.id) },
  // });
  const issue = await findIssue(parseInt(params.id));
  return {
    title: issue?.title,
    description: issue?.description,
  };
}

export default IssueDetailPage;
