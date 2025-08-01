
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
import { Lock } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] bg-gray-50 -my-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center space-y-4 p-8">
           <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-headline">
            Admin Panel
          </CardTitle>
          <CardDescription>
            This area is restricted. Please enter your credentials to proceed.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-0">
          <form>
            <div className="grid w-full items-center gap-6">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="admin@example.com" />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="p-8 pt-0">
          <Button className="w-full" size="lg">Sign In</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
