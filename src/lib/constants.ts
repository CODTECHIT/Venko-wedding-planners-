// Venko Wedding Planners - Constants Configuration
export const CONTACT_NUMBERS = ["7382525028"];
export const PRIMARY_PHONE = CONTACT_NUMBERS[0];

export const getWhatsAppLink = (phone: string) => 
  `https://wa.me/91${phone}?text=Hi%20Venko%20Wedding%20Planners%2C%20I%20am%20interested%20in%20your%20services.`;

export const PRIMARY_WA_LINK = getWhatsAppLink(PRIMARY_PHONE);

