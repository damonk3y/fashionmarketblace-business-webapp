import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Modules() {
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-6">
        All available modules
      </h1>
      <section className="flex flex-wrap gap-4 justify-center">
        <Link to="/modules/stocks">
          <Card className="p-4 text-center">
            <h1 className="text-2xl font-bold">Stocks</h1>
            <p className="text-sm text-gray-500">Manage your stock</p>
          </Card>
        </Link>
      </section>
    </section>
  );
}
