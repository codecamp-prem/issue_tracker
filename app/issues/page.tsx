import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const IssuesPages = () => {
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPages;
