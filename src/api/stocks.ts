export const getStock = async (storeId: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/modules/stocks/stores/${storeId}/products`,
    {
      method: "GET",
      credentials: "include"
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
