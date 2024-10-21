import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useUserStore } from "@/stores/user";
import { Navigate, useNavigate } from "react-router-dom";

export default function Stores() {
  const navigate = useNavigate();
  const { currentUser, setSelectedStoreId } = useUserStore();
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }
  console.log(currentUser);
  const stores = [...currentUser.stores, ...currentUser.manages];
  return (
    <section className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-6">Your stores</h1>
      <section className="flex flex-wrap gap-4 justify-center">
        {stores.map(store => (
          <Card className="p-4 text-center" key={store.id}>
            <Button
              variant="link"
              onClick={() => {
                setSelectedStoreId(store.id);
                navigate("/modules");
              }}
            >
              <h1 className="text-2xl font-bold">{store.name}</h1>
            </Button>
          </Card>
        ))}
      </section>
    </section>
  );
}
