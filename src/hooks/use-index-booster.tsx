import { useEffect } from "react";
import { getContext } from "@/api/user";
import { useUserStore } from "@/stores/user";

export const useIndexBooster = () => {
  const { setUser } = useUserStore();
  useEffect(() => {
    (async () => {
      try {
        const response = await getContext();
        setUser(response);
      } catch {}
    })();
  }, [setUser]);
};
