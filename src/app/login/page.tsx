
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

export default function Page() {
  const [email, setEmail] = useState('vishwak21@gmail.com');
  const [password, setPassword] = useState('vishwak@151370');
  const [error, setError] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleLogin = () => {
    setError('');
    if (email === 'vishwak21@gmail.com' && password === 'vishwak@151370') {
      toast({
        title: 'Login Successful',
        description: 'Redirecting to the admin dashboard.',
      });
      router.push('/admin');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };
  
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
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
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-3xl font-headline">
              Admin Login
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the management dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={handleKeyPress}
                />
              </div>
              {error && <p className="text-sm text-destructive text-center">{error}</p>}
            </div>
          </CardContent>
          <CardFooter className="p-8 pt-0 flex-col gap-4">
            <Button className="w-full" size="lg" onClick={handleLogin}>
              Sign In
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
