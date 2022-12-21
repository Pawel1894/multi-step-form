export type TPersonalInfoProperty = "name" | "email" | "phone";

export type TPlan = {
  category: "arcade" | "advanced" | "pro";
  isMonthly: boolean;
};

export type TAddon = "online" | "storage" | "profile";

export type TCost = "monthly" | "yearly";
