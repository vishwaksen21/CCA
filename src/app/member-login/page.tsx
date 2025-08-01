
'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-50 -my-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center space-y-4 p-8">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
              <LogIn className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">
              Member Login
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your profile and CAP points.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form>
              <div className="grid w-full items-center gap-6">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="member@example.com" />
                </div>
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="••••••••" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex-col gap-4">
            <Link href="/profile" className="w-full">
              <Button className="w-full" size="lg">Sign In</Button>
            </Link>
            <div className="text-sm text-muted-foreground">
              Don't have an account?{' '}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Register
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
