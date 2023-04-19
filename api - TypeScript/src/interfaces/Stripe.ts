import { Request } from "express";

export interface StripeWebhookRequest extends Request {
    headers: {
      'stripe-signature': string;
    };
  }