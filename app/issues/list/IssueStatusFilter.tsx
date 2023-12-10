"use client";
import { Select } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";

// See schema.prisma Issue model , since sqlite doesn't support enum
const all_status: { label: string; value: 1 | 2 | 3 | 0 }[] = [
  { label: "All", value: 0 },
  { label: "OPEN", value: 1 },
  { label: "IN PROGRESS", value: 2 },
  { label: "CLOSED", value: 3 },
];
const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // hook to get current query parameters

  return (
    <Select.Root
      defaultValue={searchParams.get("status") || ""}
      onValueChange={(status) => {
        const params = new URLSearchParams();

        if (status == "1" || status == "2" || status == "3")
          params.append("status", status);

        if (searchParams.get("orderBy"))
          params.append("orderBy", searchParams.get("orderBy")!);
        const queryParam = params.size ? "?" + params.toString() : "";

        router.push("/issues/list" + queryParam);
      }}
    >
      <Select.Trigger placeholder="Filter by Status.." />
      <Select.Content>
        {all_status.map((status) => (
          <Select.Item key={status.value} value={status.value.toString()}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
