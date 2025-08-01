
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  announcements as initialAnnouncements, 
  teamMembers as initialTeamMembers,
  milestones as initialMilestones,
  faqs as initialFaqs
} from '@/lib/mock-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Announcement = {
  title: string;
  date: string;
  content: string;
};

type TeamMember = {
  name: string;
  role: string;
  imageUrl: string;
  dataAiHint: string;
};

type Milestone = {
  year: string;
  event: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};


export default function Page() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialTeamMembers);
  const [milestones, setMilestones] = useState<Milestone[]>(initialMilestones);
  const [faqs, setFaqs] = useState<Faq[]>(initialFaqs);

  // Dialog state for all types
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'create' | 'edit'>('create');
  const [dialogType, setDialogType] = useState<'announcement' | 'member' | 'milestone' | 'faq' | null>(null);

  // State for the item being edited/created
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [originalIdentifier, setOriginalIdentifier] = useState<string | null>(null);

  const handleCreate = (type: 'announcement' | 'member' | 'milestone' | 'faq') => {
    setDialogMode('create');
    setDialogType(type);
    if (type === 'announcement') setCurrentItem({ title: '', date: '', content: '' });
    if (type === 'member') setCurrentItem({ name: '', role: '', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'person portrait' });
    if (type === 'milestone') setCurrentItem({ year: '', event: '', description: '' });
    if (type === 'faq') setCurrentItem({ question: '', answer: '' });
    setIsDialogOpen(true);
  };

  const handleEdit = (item: any, type: 'announcement' | 'member' | 'milestone' | 'faq') => {
    setDialogMode('edit');
    setDialogType(type);
    setCurrentItem({ ...item });
    if (type === 'announcement') setOriginalIdentifier(item.title);
    if (type === 'member') setOriginalIdentifier(item.name);
    if (type === 'milestone') setOriginalIdentifier(item.event);
    if (type === 'faq') setOriginalIdentifier(item.question);
    setIsDialogOpen(true);
  };

  const handleDelete = (identifier: string, type: 'announcement' | 'member' | 'milestone' | 'faq') => {
    if (type === 'announcement') setAnnouncements(announcements.filter(a => a.title !== identifier));
    if (type === 'member') setTeamMembers(teamMembers.filter(m => m.name !== identifier));
    if (type === 'milestone') setMilestones(milestones.filter(m => m.event !== identifier));
    if (type === 'faq') setFaqs(faqs.filter(f => f.question !== identifier));
  };
  
  const handleSave = () => {
    if (!currentItem || !dialogType) return;

    if (dialogMode === 'create') {
        switch(dialogType) {
            case 'announcement':
                setAnnouncements([{ ...currentItem, date: new Date().toISOString().split('T')[0] }, ...announcements]);
                break;
            case 'member':
                setTeamMembers([...teamMembers, currentItem]);
                break;
            case 'milestone':
                setMilestones([...milestones, currentItem]);
                break;
            case 'faq':
                setFaqs([...faqs, currentItem]);
                break;
        }
    } else { // edit mode
        switch(dialogType) {
            case 'announcement':
                setAnnouncements(announcements.map(a => a.title === originalIdentifier ? currentItem : a));
                break;
            case 'member':
                setTeamMembers(teamMembers.map(m => m.name === originalIdentifier ? currentItem : m));
                break;
            case 'milestone':
                setMilestones(milestones.map(m => m.event === originalIdentifier ? currentItem : m));
                break;
            case 'faq':
                setFaqs(faqs.map(f => f.question === originalIdentifier ? currentItem : f));
                break;
        }
    }
    handleCloseDialog();
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentItem(null);
    setOriginalIdentifier(null);
    setDialogType(null);
  };

  const renderDialogContent = () => {
    if (!dialogType || !currentItem) return null;

    switch(dialogType) {
      case 'announcement':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Create' : 'Edit'} Announcement</DialogTitle>
              <DialogDescription>Fill in the details for the announcement.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={currentItem.title} onChange={(e) => setCurrentItem({ ...currentItem, title: e.target.value })} />
              <Label htmlFor="content">Content</Label>
              <Textarea id="content" value={currentItem.content} onChange={(e) => setCurrentItem({ ...currentItem, content: e.target.value })} rows={5} />
            </div>
          </>
        );
      case 'member':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Create' : 'Edit'} Team Member</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" value={currentItem.name} onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })} />
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={currentItem.role} onChange={(e) => setCurrentItem({ ...currentItem, role: e.target.value })} />
            </div>
          </>
        );
      case 'milestone':
         return (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Create' : 'Edit'} Milestone</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Label htmlFor="year">Year</Label>
              <Input id="year" value={currentItem.year} onChange={(e) => setCurrentItem({ ...currentItem, year: e.target.value })} />
              <Label htmlFor="event">Event</Label>
              <Input id="event" value={currentItem.event} onChange={(e) => setCurrentItem({ ...currentItem, event: e.target.value })} />
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" value={currentItem.description} onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })} rows={3} />
            </div>
          </>
        );
      case 'faq':
        return (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Create' : 'Edit'} FAQ</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="question">Question</Label>
                <Input id="question" value={currentItem.question} onChange={(e) => setCurrentItem({ ...currentItem, question: e.target.value })} />
                <Label htmlFor="answer">Answer</Label>
                <Textarea id="answer" value={currentItem.answer} onChange={(e) => setCurrentItem({ ...currentItem, answer: e.target.value })} rows={5} />
              </div>
            </>
          );
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tighter font-headline text-primary">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">Manage site content.</p>
        </div>
      </motion.div>

      <Tabs defaultValue="announcements">
        <TabsList className="mb-4">
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
          <TabsTrigger value="team">Team Members</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="announcements">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-row justify-between items-center">
                    <div>
                        <CardTitle>Announcements</CardTitle>
                        <CardDescription>Create, edit, or delete site announcements.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('announcement')}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Create New
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead className="hidden md:table-cell">Date</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {announcements.map((announcement) => (
                                <TableRow key={announcement.title}>
                                    <TableCell className="font-medium">{announcement.title}</TableCell>
                                    <TableCell className="hidden md:table-cell">{new Date(announcement.date).toLocaleDateString('en-CA')}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(announcement, 'announcement')}><Edit className="h-4 w-4" /></Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(announcement.title, 'announcement')}><Trash2 className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="team">
           <Card className="shadow-lg">
                <CardHeader className="flex flex-row justify-between items-center">
                    <div>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription>Manage team member profiles.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('member')}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Member
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Name</TableHead><TableHead>Role</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {teamMembers.map((member) => (
                                <TableRow key={member.name}>
                                    <TableCell className="font-medium">{member.name}</TableCell>
                                    <TableCell>{member.role}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(member, 'member')}><Edit className="h-4 w-4" /></Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(member.name, 'member')}><Trash2 className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="milestones">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-row justify-between items-center">
                    <div>
                        <CardTitle>Timeline Milestones</CardTitle>
                        <CardDescription>Manage the "Our Journey" timeline.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('milestone')}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Milestone
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Year</TableHead><TableHead>Event</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {milestones.map((milestone) => (
                                <TableRow key={milestone.event}>
                                    <TableCell className="font-medium">{milestone.year}</TableCell>
                                    <TableCell>{milestone.event}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(milestone, 'milestone')}><Edit className="h-4 w-4" /></Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(milestone.event, 'milestone')}><Trash2 className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="faqs">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-row justify-between items-center">
                    <div>
                        <CardTitle>FAQs</CardTitle>
                        <CardDescription>Manage the Frequently Asked Questions.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('faq')}>
                        <PlusCircle className="mr-2 h-4 w-4" /> Add FAQ
                    </Button>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader><TableRow><TableHead>Question</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {faqs.map((faq) => (
                                <TableRow key={faq.question}>
                                    <TableCell className="font-medium">{faq.question}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(faq, 'faq')}><Edit className="h-4 w-4" /></Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(faq.question, 'faq')}><Trash2 className="h-4 w-4" /></Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>


      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]" onEscapeKeyDown={handleCloseDialog}>
            {renderDialogContent()}
            <DialogFooter>
                <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleSave}>Save Changes</Button>
            </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
