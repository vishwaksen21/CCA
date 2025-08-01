
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
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  const handleCreateAccount = () => {
    // In a real app, you'd have registration logic here.
    // For the prototype, we just redirect.
    router.push('/profile');
  };

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
              <UserPlus className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">
              Create an Account
            </CardTitle>
            <CardDescription>
              Join the club and start earning CAP points today!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="member@example.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex-col gap-4">
            <Button className="w-full" size="lg" onClick={handleCreateAccount}>
              Create Account
            </Button>
            <div className="text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/member-login" className="font-semibold text-primary hover:underline">
                Sign In
              </Link>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
