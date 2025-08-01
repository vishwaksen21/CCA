
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
import { Shield, Mail, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { signInWithGoogle } from '@/lib/firebase';
import { Separator } from '@/components/ui/separator';

// Helper component for Google icon
const GoogleIcon = () => (
    <svg className="mr-2 h-4 w-4" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.978,36.218,44,30.606,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);


export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { toast } = useToast();

  const handleManualLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // In a real app with Firebase email/password auth, you'd use:
    // try {
    //   const userCredential = await signInWithEmailAndPassword(auth, email, password);
    //   if (userCredential.user.email === 'vishwak21@gmail.com') { ... }
    // } catch (err) { ... }
    
    // For this prototype, we'll use a simple check.
    setTimeout(() => {
        if (email === 'vishwak21@gmail.com' && password === 'vishwak@151370') {
             toast({
                title: 'Login Successful',
                description: 'Redirecting to the admin dashboard.',
             });
             router.push('/admin');
        } else {
            setError('Invalid credentials or unauthorized account.');
        }
        setIsLoading(false);
    }, 500);
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setError('');
    try {
      const user = await signInWithGoogle();
      if (user && user.email === 'vishwak21@gmail.com') {
        toast({
          title: 'Login Successful',
          description: 'Redirecting to the admin dashboard.',
        });
        router.push('/admin');
      } else {
        setError('You are not authorized to access this page.');
        // Optionally, sign the user out if they are not authorized
        // await auth.signOut(); 
      }
    } catch (err: any) {
      console.error("Google Sign-In Error:", err);
      setError(err.message || 'Failed to sign in with Google. Please try again.');
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] -my-12">
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
              Sign in to manage the CCA website.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <form onSubmit={handleManualLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading || isGoogleLoading}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                   value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading || isGoogleLoading}
                />
              </div>
               {error && <p className="text-sm text-destructive text-center">{error}</p>}
               <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
                  {isLoading ? 'Signing in...' : 'Sign In'}
                </Button>
            </form>

             <div className="my-6 flex items-center">
                <Separator className="flex-1" />
                <span className="mx-4 text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
            </div>

             <Button 
                variant="outline"
                className="w-full" 
                size="lg" 
                onClick={handleGoogleLogin}
                disabled={isLoading || isGoogleLoading}
             >
              {isGoogleLoading ? 'Signing in...' : (
                <>
                  <GoogleIcon /> Sign in with Google
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
