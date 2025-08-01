
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
import { announcements as initialAnnouncements } from '@/lib/mock-data';

type Announcement = {
  title: string;
  date: string;
  content: string;
};

export default function Page() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentAnnouncement, setCurrentAnnouncement] = useState<Announcement | null>(null);
  const [dialogMode, setDialogMode] = useState<'create' | 'edit'>('create');
  const [originalTitle, setOriginalTitle] = useState<string | null>(null);

  const handleCreate = () => {
    setCurrentAnnouncement({ title: '', date: '', content: '' });
    setDialogMode('create');
    setIsDialogOpen(true);
  };

  const handleEdit = (announcement: Announcement) => {
    setCurrentAnnouncement({ ...announcement });
    setOriginalTitle(announcement.title);
    setDialogMode('edit');
    setIsDialogOpen(true);
  };
  
  const handleDelete = (announcementTitle: string) => {
    setAnnouncements(announcements.filter(a => a.title !== announcementTitle));
  };

  const handleSave = () => {
    if (!currentAnnouncement) return;

    if (dialogMode === 'create') {
      const newAnnouncement = { ...currentAnnouncement, date: new Date().toISOString().split('T')[0] };
      setAnnouncements([newAnnouncement, ...announcements]);
    } else {
      setAnnouncements(
        announcements.map(a =>
          a.title === originalTitle ? currentAnnouncement : a
        )
      );
    }
    setIsDialogOpen(false);
    setCurrentAnnouncement(null);
    setOriginalTitle(null);
  };
  
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setCurrentAnnouncement(null);
    setOriginalTitle(null);
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
          <p className="text-muted-foreground">Manage site announcements.</p>
        </div>
        <Button onClick={handleCreate}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Create Announcement
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Announcements List</CardTitle>
            <CardDescription>
              View, edit, or delete existing announcements.
            </CardDescription>
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
                {announcements.map((announcement, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{announcement.title}</TableCell>
                    <TableCell className="hidden md:table-cell">{new Date(announcement.date).toLocaleDateString()}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button variant="outline" size="icon" onClick={() => handleEdit(announcement)}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDelete(announcement.title)}>
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]" onEscapeKeyDown={handleCloseDialog}>
          <DialogHeader>
            <DialogTitle className="font-headline">
              {dialogMode === 'create' ? 'Create New Announcement' : 'Edit Announcement'}
            </DialogTitle>
            <DialogDescription>
              {dialogMode === 'create' ? "Fill in the details for the new announcement." : "Update the details for the announcement."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                value={currentAnnouncement?.title || ''}
                onChange={(e) => setCurrentAnnouncement({ ...currentAnnouncement!, title: e.target.value })}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Textarea
                id="content"
                value={currentAnnouncement?.content || ''}
                onChange={(e) => setCurrentAnnouncement({ ...currentAnnouncement!, content: e.target.value })}
                className="col-span-3"
                rows={5}
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
