import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { contactSchema, newsletterSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // If they opted for newsletter, also add to newsletter list
      if (validatedData.newsletter) {
        await storage.addToNewsletter({ email: validatedData.email });
      }
      
      res.status(201).json({ message: "Contact request submitted successfully", id: contact.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = newsletterSchema.parse(req.body);
      await storage.addToNewsletter(validatedData);
      res.status(201).json({ message: "Subscribed to newsletter successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid email", errors: error.errors });
      } else {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
