import { faker } from "@faker-js/faker";
import { createId } from "@paralleldrive/cuid2";
import cuid from "cuid";

export const generateUUID = () => crypto.randomUUID();

export const generate10UUIDs = () =>
  Array.from({ length: 10 }, generateUUID).join("\n");

export const generateCUID = () => cuid();

export const generate10CUIDs = () =>
  Array.from({ length: 10 }, generateCUID).join("\n");

export const generateCUID2 = () => createId();

export const generate10CUID2s = () =>
  Array.from({ length: 10 }, generateCUID2).join("\n");

export const generateEmail = () => faker.internet.exampleEmail().toLowerCase();

export const generate10Emails = () =>
  Array.from({ length: 10 }, generateEmail).join("\n");

export const generateGmail = () =>
  faker.internet.email({ provider: "gmail.com" }).toLowerCase();

export const generate10Gmails = () =>
  Array.from({ length: 10 }, generateGmail).join("\n");

export const generatePassword = () => faker.internet.password();

export const generate10Passwords = () =>
  Array.from({ length: 10 }, generatePassword).join("\n");
