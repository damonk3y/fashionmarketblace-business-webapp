export const login = async (email: string, password: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/sign-in`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify({ email, password })
    }
  );
  
  if (!response.ok) {
    throw new Error(`Login failed: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

export type UserContext = {
  id: string;
  email: string;
  password: string;
  created_at: string;
  updated_at: string;
  is_email_verified: boolean;
  email_otp_code: string;
  email_otp_code_updated_at: string;
  is_banned: boolean;
  is_active: boolean;
  ip: string;
  password_reset_code: string | null;
  password_reset_code_updated_at: string | null;
  refresh_token: string | null;
  stores: Array<{
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
    founder_id: string;
    logo_url: string | null;
  }>;
  manages: Array<any>;
};

export const getContext = async (): Promise<UserContext> => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/users/context`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    }
  );
  
  if (!response.ok) {
    throw new Error(`Failed to get user context: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};
