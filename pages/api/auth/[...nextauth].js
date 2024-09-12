import NextAuth from 'next-auth';
import { authOptions } from '../../../auth.config';

// Add this line if it's not already present:
authOptions.secret = process.env.NEXTAUTH_SECRET;

export default NextAuth(authOptions);