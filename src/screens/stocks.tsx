import { StocksTable } from "@/components/stocks-table";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Stocks() {
  return (
    <>
      <Link
        className={cn(
          buttonVariants({ variant: "default" }),
          "rounded-full fixed z-10 bottom-4 right-4 size-10"
        )}
        to="/modules/stocks/create"
      >
        <PlusCircle className="min-w-5 min-h-5" />
      </Link>
      <StocksTable />
    </>
  );
}
