"use client";
import { Select } from "@radix-ui/themes";

// See schema.prisma Issue model , since sqlite doesn't support enum
const all_status: { label: string; value: 1 | 2 | 3 | 0 }[] = [
  { label: "All", value: 0 },
  { label: "OPEN", value: 1 },
  { label: "IN PROGRESS", value: 2 },
  { label: "CLOSED", value: 3 },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Filter by Status.." />
      <Select.Content>
        {all_status.map((status) => (
          <Select.Item key={status.value} value={status.value?.toString()}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
