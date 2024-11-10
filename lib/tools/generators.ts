import { faker } from "@faker-js/faker";
import { createId } from "@paralleldrive/cuid2";
import cuid from "cuid";

export const generateUUID = () => crypto.randomUUID();

export const generateCUID = () => cuid();

export const generateCUID2 = () => createId();

export const generateEmail = () => faker.internet.exampleEmail().toLowerCase();

export const generateGmail = () =>
  faker.internet.email({ provider: "gmail.com" }).toLowerCase();

export const generatePassword = () => faker.internet.password();
