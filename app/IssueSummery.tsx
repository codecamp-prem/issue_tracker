import { Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}
const IssueSummery = ({ open, inProgress, closed }: Props) => {
  const allStatuses: { label: string; value: number; statusInDb: number }[] = [
    { label: "Open Issues", value: open, statusInDb: 1 },
    { label: "In Progess Issues", value: inProgress, statusInDb: 2 },
    { label: "Closed Issues", value: closed, statusInDb: 3 },
  ];
  return (
    <>
      <Flex gap="4">
        {allStatuses.map((status) => (
          <Card key={status.label}>
            <Flex direction="column" gap="1">
              <Link
                href={`/issues/list?status=${status.statusInDb}`}
                className="text-sm font-medium"
              >
                {status.label}
              </Link>
              <Text size="5" className="font-bold">
                {status.value}
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default IssueSummery;
