import type { Icons } from "@/components/Common/AppIcon.vue";

enum CabinCodeValues {
  m = "Economy class",
  f = "First class",
  c = "Business class",
  p = "Premium economy",
}

interface Flight {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  seatAvailability: number;
  price: {
    amount: number;
    currency: string;
  };
  cabinCode: keyof typeof CabinCodeValues;
  offerType: string;
  uuid: string;
}

enum NotificationType {
  info = "info",
  success = "success",
  warning = "warning",
  error = "error",
}

interface Notification {
  show: boolean;
  type: keyof typeof NotificationType;
  title: string;
  description: string;
}

export { CabinCodeValues, NotificationType };
export type { Flight, Notification, Icons };
