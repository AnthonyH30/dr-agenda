import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Link href={"/authentication"}>
        <Button>Bootcamp</Button>
      </Link>
    </div>
  );
}
