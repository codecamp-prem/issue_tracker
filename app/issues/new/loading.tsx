import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingCreateNewIssuePage = async () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
      <Skeleton width="5rem" />
    </Box>
  );
};

export default LoadingCreateNewIssuePage;
