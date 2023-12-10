import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";
import { Flex } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";

type Props = {
  searchParams: IssueQuery;
};
const IssuesPages = async ({ searchParams }: Props) => {
  let status = undefined; // undefined: prisma will not pass it as a part of filtering
  if (searchParams.hasOwnProperty("status")) {
    // sqlite doesn't support enum, See schema.prisma Issue model for status column
    if (searchParams.status == "1") status = 1;
    if (searchParams.status == "2") status = 2;
    if (searchParams.status == "3") status = 3;
  }

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issuesFromDb = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const totalIssueCount = await prisma.issue.count({ where: { status } });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issuesFromDb} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={totalIssueCount}
      />
    </Flex>
  );
};

export default IssuesPages;
