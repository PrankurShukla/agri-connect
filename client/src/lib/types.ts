export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  involvement: string;
  message: string;
  newsletter: boolean;
}

export interface NewsletterSubscription {
  email: string;
}
