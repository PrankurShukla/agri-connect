import { 
  users, type User, type InsertUser, 
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter
} from "@shared/schema";

// Interface for all storage methods
export interface IStorage {
  // User methods (keeping original)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter methods
  addToNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private newsletters: Map<number, Newsletter>;
  
  // Track IDs for each collection
  private userIdCounter: number;
  private contactIdCounter: number;
  private newsletterIdCounter: number;

  constructor() {
    // Initialize storage maps
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    
    // Initialize ID counters
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.newsletterIdCounter = 1;
  }

  // User methods (keeping original)
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.contactIdCounter++;
    const now = new Date().toISOString();
    
    // Create a properly typed Contact object
    const contact: Contact = { 
      id,
      name: insertContact.name,
      email: insertContact.email,
      phone: insertContact.phone || null,
      involvement: insertContact.involvement,
      message: insertContact.message,
      newsletter: insertContact.newsletter ?? true,
      createdAt: now 
    };
    
    this.contacts.set(id, contact);
    return contact;
  }
  
  // Newsletter methods
  async addToNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists to maintain uniqueness
    const existingNewsletter = Array.from(this.newsletters.values()).find(
      newsletter => newsletter.email === insertNewsletter.email
    );
    
    if (existingNewsletter) {
      return existingNewsletter;
    }
    
    const id = this.newsletterIdCounter++;
    const now = new Date().toISOString();
    const newsletter: Newsletter = { 
      ...insertNewsletter, 
      id, 
      createdAt: now 
    };
    
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
