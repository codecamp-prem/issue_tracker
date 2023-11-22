import { Badge } from "@radix-ui/themes";
import React from "react";

// status { from schema.prisma
//   1-OPEN
//   2-IN_PROGRESS
//   3-CLOSED
// }
const statusMap: Record<
  number,
  { label: string; color: "red" | "violet" | "green" }
> = {
  1: { label: "Open", color: "red" },
  2: { label: "In Progress", color: "violet" },
  3: { label: "Closed", color: "green" },
};
interface Props {
  status: number;
}
const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};

export default IssueStatusBadge;
