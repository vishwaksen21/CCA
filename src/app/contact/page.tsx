
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
          Contact Us
        </h1>
        <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl mt-4">
          Have a question or want to get in touch? Send us a message below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form className="grid gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto sm:ml-auto">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
