import * as dotenv from 'dotenv';
dotenv.config();
export const server = process.env.API_URI||"http://localhost:3001";