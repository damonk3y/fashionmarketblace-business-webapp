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

export const createStockProduct = async (storeId: string, productData: {
  weight_in_kgs?: number;
  cost_price?: number;
  selling_price?: number;
  internal_reference_id: string;
  quantity: number;
}) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/modules/stocks/stores/${storeId}/products`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    }
  );

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
  }

  return response.json();
};
