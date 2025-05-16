import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (keeping from original)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Contact form schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  involvement: text("involvement").notNull(),
  message: text("message").notNull(),
  newsletter: boolean("newsletter").notNull().default(true),
  createdAt: text("created_at").notNull().default("NOW()"),
});

export const contactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  phone: true,
  involvement: true,
  message: true,
  newsletter: true,
});

// Newsletter schema
export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: text("created_at").notNull().default("NOW()"),
});

export const newsletterSchema = createInsertSchema(newsletters).pick({
  email: true,
});

// Export types for use in the application
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof contactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertNewsletter = z.infer<typeof newsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;
