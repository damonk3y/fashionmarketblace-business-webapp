export const getStock = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/modules/stocks/stores/b4b52528-d9a7-473d-b3c9-e91d54884414/products`,
    {
      method: "GET",
      credentials: "include"
    }
  );
  return response.json();
};
