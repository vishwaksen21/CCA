
'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockSignOut } from '@/lib/mock-auth';
import AdminLogin from '@/components/admin/AdminLogin';
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
import { PlusCircle, Edit, Trash2, Eye, Users, Calendar, Megaphone, Inbox, Info, UserCheck, Loader2, LogOut, User as UserIcon, Upload, Image as ImageIcon, CheckCircle, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { 
  availableBadges,
  type BadgeInfo,
  type ContactSubmission,
} from '@/lib/mock-data';
import { 
  dataStore,
  type Announcement,
  type TeamMember,
  type Milestone,
  type Faq,
  type LeaderboardMember,
  type Event
} from '@/lib/data-store';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Page() {
  const { user, loading: authLoading, isAdmin } = useAuth();
  
  // Initialize state from data store
  const [announcements, setAnnouncementsState] = useState<Announcement[]>([]);
  const [teamMembers, setTeamMembersState] = useState<TeamMember[]>([]);
  const [milestones, setMilestonesState] = useState<Milestone[]>([]);
  const [faqs, setFaqsState] = useState<Faq[]>([]);
  const [leaderboard, setLeaderboardState] = useState<LeaderboardMember[]>([]);
  const [events, setEventsState] = useState<Event[]>([]);
  const [submissions, setSubmissionsState] = useState<ContactSubmission[]>([]);

  // Image upload state
  const [uploadedImages, setUploadedImages] = useState<Array<{url: string, filename: string, timestamp: number}>>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState<string | null>(null);

  // Load data from store on mount
  useEffect(() => {
    setAnnouncementsState(dataStore.getAnnouncements());
    setTeamMembersState(dataStore.getTeamMembers());
    setMilestonesState(dataStore.getMilestones());
    setFaqsState(dataStore.getFaqs());
    setLeaderboardState(dataStore.getLeaderboard());
    setEventsState(dataStore.getEvents());
    setSubmissionsState(dataStore.getSubmissions());
  }, []);

  // Wrapper functions to update both state and store
  const setAnnouncements = (data: Announcement[]) => {
    setAnnouncementsState(data);
    dataStore.setAnnouncements(data);
  };

  const setTeamMembers = (data: TeamMember[]) => {
    setTeamMembersState(data);
    dataStore.setTeamMembers(data);
  };

  const setMilestones = (data: Milestone[]) => {
    setMilestonesState(data);
    dataStore.setMilestones(data);
  };

  const setFaqs = (data: Faq[]) => {
    setFaqsState(data);
    dataStore.setFaqs(data);
  };

  const setLeaderboard = (data: LeaderboardMember[]) => {
    setLeaderboardState(data);
    dataStore.setLeaderboard(data);
  };

  const setEvents = (data: Event[]) => {
    setEventsState(data);
    dataStore.setEvents(data);
  };

  const setSubmissions = (data: ContactSubmission[]) => {
    setSubmissionsState(data);
    dataStore.setSubmissions(data);
  };


  // Dialog state for all types
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState<'create' | 'edit' | 'view'>('create');
  const [dialogType, setDialogType] = useState<'announcement' | 'member' | 'milestone' | 'faq' | 'leaderboard' | 'event' | 'submission' | 'registrations' | null>(null);

  // State for the item being edited/created
  const [currentItem, setCurrentItem] = useState<any>(null);
  const [originalIdentifier, setOriginalIdentifier] = useState<string | number | null>(null);

  const handleCreate = (type: 'announcement' | 'member' | 'milestone' | 'faq' | 'event' | 'leaderboard') => {
    setDialogMode('create');
    setDialogType(type);
    if (type === 'announcement') setCurrentItem({ title: '', date: '', content: '' });
    if (type === 'member') setCurrentItem({ name: '', role: '', imageUrl: 'https://placehold.co/400x400.png', dataAiHint: 'person portrait' });
    if (type === 'milestone') setCurrentItem({ year: '', event: '', description: '' });
    if (type === 'faq') setCurrentItem({ question: '', answer: '' });
    if (type === 'event') setCurrentItem({ id: `evt${Date.now()}`, title: '', date: '', time: '', location: '', description: '', registrations: [] });
    if (type === 'leaderboard') setCurrentItem({ name: '', points: 0, badges: []});
    setIsDialogOpen(true);
  };

  const handleEdit = (item: any, type: 'announcement' | 'member' | 'milestone' | 'faq' | 'leaderboard' | 'event') => {
    setDialogMode('edit');
    setDialogType(type);
    setCurrentItem({ ...item });
    if (type === 'announcement') setOriginalIdentifier(item.title);
    if (type === 'member') setOriginalIdentifier(item.name);
    if (type === 'milestone') setOriginalIdentifier(item.event);
    if (type === 'faq') setOriginalIdentifier(item.question);
    if (type === 'leaderboard') setOriginalIdentifier(item.rank);
    if (type === 'event') setOriginalIdentifier(item.id);
    setIsDialogOpen(true);
  };
  
  const handleView = (item: any, type: 'submission' | 'registrations') => {
    setDialogMode('view');
    setDialogType(type);
    setCurrentItem(item);
    setIsDialogOpen(true);
  }

  const handleDelete = (identifier: string | number, type: 'announcement' | 'member' | 'milestone' | 'faq' | 'event' | 'submission' | 'leaderboard') => {
    if (type === 'announcement') setAnnouncements(announcements.filter(a => a.title !== identifier));
    if (type === 'member') setTeamMembers(teamMembers.filter(m => m.name !== identifier));
    if (type === 'milestone') setMilestones(milestones.filter(m => m.event !== identifier));
    if (type === 'faq') setFaqs(faqs.filter(f => f.question !== identifier));
    if (type === 'event') setEvents(events.filter(e => e.id !== identifier));
    if (type === 'submission') setSubmissions(submissions.filter(s => s.id !== identifier));
    if (type === 'leaderboard') {
        const updated = leaderboard.filter(m => m.rank !== identifier)
            .sort((a, b) => b.points - a.points)
            .map((member, index) => ({ ...member, rank: index + 1 }));
        setLeaderboard(updated);
    }
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
            case 'event':
                setEvents([...events, currentItem]);
                break;
            case 'leaderboard':
                 const newMember = { ...currentItem, points: Number(currentItem.points) };
                 const updatedLeaderboard = [...leaderboard, newMember]
                    .sort((a, b) => b.points - a.points)
                    .map((member, index) => ({ ...member, rank: index + 1 }));
                 setLeaderboard(updatedLeaderboard);
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
            case 'leaderboard':
                const updatedLeaderboard = leaderboard.map(m => m.rank === originalIdentifier ? { ...m, ...currentItem, points: Number(currentItem.points) } : m);
                const sortedLeaderboard = updatedLeaderboard
                    .sort((a, b) => b.points - a.points)
                    .map((member, index) => ({ ...member, rank: index + 1 }));
                setLeaderboard(sortedLeaderboard);
                break;
            case 'event':
                setEvents(events.map(e => e.id === originalIdentifier ? currentItem : e));
                break;
        }
    }
    handleCloseDialog();
  };

  const handleBadgeChange = (badge: BadgeInfo, isChecked: boolean) => {
    if (!currentItem) return;

    const currentBadges: BadgeInfo[] = currentItem.badges || [];
    let updatedBadges: BadgeInfo[];

    if (isChecked) {
        // Add badge if it's not already there
        if (!currentBadges.some(b => b.name === badge.name)) {
            updatedBadges = [...currentBadges, badge];
        } else {
            updatedBadges = currentBadges;
        }
    } else {
        // Remove badge
        updatedBadges = currentBadges.filter(b => b.name !== badge.name);
    }
    setCurrentItem({ ...currentItem, badges: updatedBadges });
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
            <ScrollArea className="max-h-[60vh] pr-4">
              <div className="grid gap-4 py-4">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={currentItem.name} onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })} />
                
                <Label htmlFor="role">Role</Label>
                <Input id="role" value={currentItem.role} onChange={(e) => setCurrentItem({ ...currentItem, role: e.target.value })} />
                
                <div className="space-y-2">
                  <Label htmlFor="imageUrl">Profile Image</Label>
                  <Input 
                    id="imageUrl" 
                    type="text"
                    placeholder="Enter image URL (e.g., /vishwak1.png)" 
                    value={currentItem.imageUrl || ''} 
                    onChange={(e) => setCurrentItem({ ...currentItem, imageUrl: e.target.value })} 
                  />
                  <p className="text-xs text-muted-foreground">
                    Enter the path to the profile image (upload images in the Images tab first)
                  </p>
                  {currentItem.imageUrl && (
                    <div className="mt-2 border rounded-md p-2">
                      <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                      <img 
                        src={currentItem.imageUrl} 
                        alt="Profile preview" 
                        className="w-32 h-32 object-cover rounded-full mx-auto"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://placehold.co/400x400/png?text=Profile';
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </ScrollArea>
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
       case 'leaderboard':
        return (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Add New Member' : `Edit ${currentItem.name}`}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Label htmlFor="name">Member Name</Label>
                <Input 
                  id="name" 
                  value={currentItem.name} 
                  onChange={(e) => setCurrentItem({ ...currentItem, name: e.target.value })} 
                  placeholder="Enter student name"
                />
                <Label htmlFor="points">CAP Points</Label>
                <Input 
                  id="points" 
                  type="number" 
                  value={currentItem.points} 
                  onChange={(e) => setCurrentItem({ ...currentItem, points: e.target.value })} 
                />
                <div>
                  <Label>Badges</Label>
                  <div className="space-y-2 mt-2">
                    {availableBadges.map(badge => (
                      <div key={badge.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={`badge-${badge.name}`}
                          checked={currentItem.badges.some((b: BadgeInfo) => b.name === badge.name)}
                          onCheckedChange={(checked) => handleBadgeChange(badge, !!checked)}
                        />
                         <Label htmlFor={`badge-${badge.name}`} className="flex items-center gap-2 font-normal">
                          <badge.icon className={`h-4 w-4 ${badge.color}`} />
                          {badge.name}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
        );
      case 'event':
        return (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline">{dialogMode === 'create' ? 'Create' : 'Edit'} Event</DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[60vh] pr-4">
                <div className="grid gap-4 py-4">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" value={currentItem.title} onChange={(e) => setCurrentItem({ ...currentItem, title: e.target.value })} />
                  
                  <Label htmlFor="date">Date (YYYY-MM-DD)</Label>
                  <Input id="date" value={currentItem.date} onChange={(e) => setCurrentItem({ ...currentItem, date: e.target.value })} />
                  
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" value={currentItem.time} onChange={(e) => setCurrentItem({ ...currentItem, time: e.target.value })} />
                  
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" value={currentItem.location} onChange={(e) => setCurrentItem({ ...currentItem, location: e.target.value })} />
                  
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" value={currentItem.description} onChange={(e) => setCurrentItem({ ...currentItem, description: e.target.value })} rows={3} />
                  
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">Event Image</Label>
                    <Input 
                      id="imageUrl" 
                      type="text"
                      placeholder="Enter image URL (e.g., /event1.png)" 
                      value={currentItem.imageUrl || ''} 
                      onChange={(e) => setCurrentItem({ ...currentItem, imageUrl: e.target.value })} 
                    />
                    <p className="text-xs text-muted-foreground">
                      Enter the path to the event image (e.g., /event1.png, /eventx.png)
                    </p>
                    {currentItem.imageUrl && (
                      <div className="mt-2 border rounded-md p-2">
                        <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                        <img 
                          src={currentItem.imageUrl} 
                          alt="Event preview" 
                          className="w-full h-48 object-cover rounded-md"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/png?text=Image+Not+Found';
                          }}
                        />
                      </div>
                    )}
                  </div>

                  <Label htmlFor="registrationUrl">Registration URL (Optional)</Label>
                  <Input 
                    id="registrationUrl" 
                    type="url"
                    placeholder="https://forms.gle/..." 
                    value={currentItem.registrationUrl || ''} 
                    onChange={(e) => setCurrentItem({ ...currentItem, registrationUrl: e.target.value })} 
                  />
                </div>
              </ScrollArea>
            </>
          );
      case 'submission':
        return (
            <>
              <DialogHeader>
                <DialogTitle className="font-headline">Contact Form Submission</DialogTitle>
                <DialogDescription>
                  From: {currentItem.name} &lt;{currentItem.email}&gt;
                  <br />
                  Received: {new Date(currentItem.date).toLocaleDateString('en-CA')}
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 whitespace-pre-wrap text-sm">
                {currentItem.message}
              </div>
            </>
        );
      case 'registrations':
        return (
          <>
            <DialogHeader>
              <DialogTitle className="font-headline">Event Registrations</DialogTitle>
              <DialogDescription>
                Attendees for "{currentItem.title}"
                <br />
                Total: {currentItem.registrations.length}
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-64 mt-4 border rounded-md">
                <div className="p-4">
                {currentItem.registrations.length > 0 ? (
                    <ul className="space-y-2">
                        {currentItem.registrations.map((attendee: string, index: number) => (
                            <li key={index} className="text-sm flex items-center gap-2">
                                <UserCheck className="h-4 w-4 text-primary" />
                                {attendee}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-muted-foreground text-center py-8">No registrations yet.</p>
                )}
                </div>
            </ScrollArea>
          </>
        );
    }
  }
  
  const renderDialogFooter = () => {
    if (dialogMode === 'view') {
        return (
            <DialogFooter>
                <Button variant="outline" onClick={handleCloseDialog}>Close</Button>
            </DialogFooter>
        )
    }

    return (
        <DialogFooter>
            <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
    )
  }

  const EmptyState = ({ message, colSpan }: { message: string, colSpan: number }) => (
    <TableRow>
        <TableCell colSpan={colSpan} className="h-24 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
                <Info className="h-8 w-8 text-muted-foreground" />
                <p className="text-muted-foreground">{message}</p>
            </div>
        </TableCell>
    </TableRow>
  );

  const handleLogout = async () => {
    try {
      await mockSignOut();
      // Trigger a session change
      window.dispatchEvent(new Event('session-change'));
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed');
      }

      // Add to uploaded images list
      const newImage = {
        url: data.url,
        filename: data.filename,
        timestamp: Date.now()
      };
      setUploadedImages([newImage, ...uploadedImages]);
      setUploadSuccess(`Image uploaded successfully: ${data.filename}`);
      
      // Clear success message after 3 seconds
      setTimeout(() => setUploadSuccess(null), 3000);

      // Reset file input
      event.target.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error instanceof Error ? error.message : 'Failed to upload image');
    } finally {
      setIsUploading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setUploadSuccess(`Copied to clipboard: ${text}`);
    setTimeout(() => setUploadSuccess(null), 2000);
  };

  // Show loading state
  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // Show login if not authenticated or not admin
  if (!user || !isAdmin) {
    return <AdminLogin />;
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
          <p className="text-muted-foreground">Manage your site's content and view analytics.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
            <UserIcon className="h-4 w-4" />
            <span>{user.email}</span>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </motion.div>

      <Tabs defaultValue="overview">
        <TabsList className="mb-4 w-full overflow-x-auto flex-nowrap justify-start">
          <TabsTrigger value="overview" className="whitespace-nowrap">Overview</TabsTrigger>
          <TabsTrigger value="team" className="whitespace-nowrap">Team</TabsTrigger>
          <TabsTrigger value="milestones" className="whitespace-nowrap">Milestones</TabsTrigger>
          <TabsTrigger value="faqs" className="whitespace-nowrap">FAQs</TabsTrigger>
          <TabsTrigger value="leaderboard" className="whitespace-nowrap">Leaderboard</TabsTrigger>
          <TabsTrigger value="events" className="whitespace-nowrap">Events</TabsTrigger>
          <TabsTrigger value="submissions" className="whitespace-nowrap">Submissions</TabsTrigger>
          <TabsTrigger value="images" className="whitespace-nowrap">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Team Members
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{teamMembers.length}</div>
                  <p className="text-xs text-muted-foreground">
                    Currently active members
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Upcoming Events
                  </CardTitle>
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{events.length}</div>
                   <p className="text-xs text-muted-foreground">
                    Scheduled future events
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Submissions</CardTitle>
                  <Inbox className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{submissions.length}</div>
                   <p className="text-xs text-muted-foreground">
                    Contact form inquiries
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Images</CardTitle>
                  <ImageIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{uploadedImages.length}</div>
                   <p className="text-xs text-muted-foreground">
                    Total images uploaded
                  </p>
                </CardContent>
              </Card>
            </div>
        </TabsContent>

        <TabsContent value="team">
           <Card className="shadow-lg">
                <CardHeader className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                    <div>
                        <CardTitle>Team Members</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Manage team member profiles.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('member')} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Member
                    </Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Name</TableHead><TableHead className="hidden sm:table-cell">Role</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {teamMembers.length > 0 ? (
                                teamMembers.map((member) => (
                                    <TableRow key={member.name}>
                                        <TableCell className="font-medium">
                                          <div>{member.name}</div>
                                          <div className="text-xs text-muted-foreground sm:hidden">{member.role}</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">{member.role}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleEdit(member, 'member')}><Edit className="h-4 w-4" /></Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(member.name, 'member')}><Trash2 className="h-4 w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <EmptyState message="No team members found. Click 'Add Member' to get started." colSpan={3} />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="milestones">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                    <div>
                        <CardTitle>Timeline Milestones</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Manage the "Our Journey" timeline.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('milestone')} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Milestone
                    </Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Year</TableHead><TableHead className="hidden sm:table-cell">Event</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {milestones.length > 0 ? (
                                milestones.map((milestone) => (
                                    <TableRow key={milestone.event}>
                                        <TableCell className="font-medium">
                                          <div>{milestone.year}</div>
                                          <div className="text-xs text-muted-foreground sm:hidden truncate max-w-[150px]">{milestone.event}</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">{milestone.event}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleEdit(milestone, 'milestone')}><Edit className="h-4 w-4" /></Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(milestone.event, 'milestone')}><Trash2 className="h-4 w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <EmptyState message="No milestones found. Click 'Add Milestone' to build your timeline." colSpan={3} />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="faqs">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                    <div>
                        <CardTitle>FAQs</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Manage the Frequently Asked Questions.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('faq')} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add FAQ
                    </Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Question</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                           {faqs.length > 0 ? (
                                faqs.map((faq) => (
                                    <TableRow key={faq.question}>
                                        <TableCell className="font-medium max-w-[200px] sm:max-w-none truncate">{faq.question}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleEdit(faq, 'faq')}><Edit className="h-4 w-4" /></Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(faq.question, 'faq')}><Trash2 className="h-4 w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                           ) : (
                               <EmptyState message="No FAQs found. Click 'Add FAQ' to create one." colSpan={2} />
                           )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>
        
        <TabsContent value="leaderboard">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                     <div>
                        <CardTitle>Leaderboard Management</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Add members, assign points, and manage badges.</CardDescription>
                    </div>
                     <Button onClick={() => handleCreate('leaderboard')} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Member
                    </Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Rank</TableHead><TableHead>Name</TableHead><TableHead className="hidden sm:table-cell">Points</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {leaderboard.length > 0 ? (
                                leaderboard.map((member) => (
                                    <TableRow key={member.rank}>
                                        <TableCell className="font-medium">{member.rank}</TableCell>
                                        <TableCell>
                                          <div>{member.name}</div>
                                          <div className="text-xs text-muted-foreground sm:hidden">{member.points.toLocaleString()} pts</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">{member.points.toLocaleString()}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleEdit(member, 'leaderboard')}><Edit className="h-4 w-4" /></Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(member.rank, 'leaderboard')}><Trash2 className="h-4 w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <EmptyState message="No members on the leaderboard. Click 'Add Member' to start." colSpan={4} />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

         <TabsContent value="events">
            <Card className="shadow-lg">
                <CardHeader className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center space-y-2 sm:space-y-0">
                    <div>
                        <CardTitle>Events</CardTitle>
                        <CardDescription className="text-xs sm:text-sm">Manage upcoming events and view registrations.</CardDescription>
                    </div>
                    <Button onClick={() => handleCreate('event')} className="w-full sm:w-auto">
                        <PlusCircle className="mr-2 h-4 w-4" /> Create Event
                    </Button>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>Title</TableHead><TableHead className="hidden md:table-cell">Date</TableHead><TableHead className="hidden sm:table-cell">Registrations</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {events.length > 0 ? (
                                events.map((event) => (
                                    <TableRow key={event.id}>
                                        <TableCell className="font-medium">
                                          <div className="max-w-[120px] sm:max-w-none truncate">{event.title}</div>
                                          <div className="text-xs text-muted-foreground md:hidden">{new Date(event.date).toLocaleDateString('en-CA')}</div>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">{new Date(event.date).toLocaleDateString('en-CA')}</TableCell>
                                        <TableCell className="hidden sm:table-cell">{event.registrations.length}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-1 sm:gap-2">
                                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleView(event, 'registrations')}><Users className="h-3 w-3 sm:h-4 sm:w-4" /></Button>
                                            <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => handleEdit(event, 'event')}><Edit className="h-3 w-3 sm:h-4 sm:w-4" /></Button>
                                            <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => handleDelete(event.id, 'event')}><Trash2 className="h-3 w-3 sm:h-4 sm:w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <EmptyState message="No upcoming events found. Click 'Create Event' to add one." colSpan={4} />
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="submissions">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Contact Form Submissions</CardTitle>
                    <CardDescription className="text-xs sm:text-sm">View messages sent through the contact form.</CardDescription>
                </CardHeader>
                <CardContent className="overflow-x-auto">
                    <Table>
                        <TableHeader><TableRow><TableHead>From</TableHead><TableHead className="hidden sm:table-cell">Email</TableHead><TableHead className="hidden md:table-cell">Date</TableHead><TableHead className="text-right">Actions</TableHead></TableRow></TableHeader>
                        <TableBody>
                           {submissions.length > 0 ? (
                                submissions.map((submission) => (
                                    <TableRow key={submission.id}>
                                        <TableCell className="font-medium">
                                          <div className="max-w-[100px] sm:max-w-none truncate">{submission.name}</div>
                                          <div className="text-xs text-muted-foreground sm:hidden truncate max-w-[100px]">{submission.email}</div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">{submission.email}</TableCell>
                                        <TableCell className="hidden md:table-cell">{new Date(submission.date).toLocaleDateString('en-CA')}</TableCell>
                                        <TableCell className="text-right">
                                          <div className="flex justify-end gap-2">
                                            <Button variant="outline" size="icon" onClick={() => handleView(submission, 'submission')}><Eye className="h-4 w-4" /></Button>
                                            <Button variant="destructive" size="icon" onClick={() => handleDelete(submission.id, 'submission')}><Trash2 className="h-4 w-4" /></Button>
                                          </div>
                                        </TableCell>
                                    </TableRow>
                                ))
                           ) : (
                               <EmptyState message="No submissions yet." colSpan={4} />
                           )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </TabsContent>

        <TabsContent value="images">
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <ImageIcon className="h-5 w-5" />
                        Image Upload
                    </CardTitle>
                    <CardDescription>Upload images to the public folder for use in events and other content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Upload Section */}
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-4">
                                {isUploading ? (
                                    <Loader2 className="h-8 w-8 text-primary animate-spin" />
                                ) : (
                                    <Upload className="h-8 w-8 text-primary" />
                                )}
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Upload an image</h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    PNG, JPG, GIF or WebP (max 5MB)
                                </p>
                            </div>
                            <Input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                disabled={isUploading}
                                className="max-w-xs cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Success Message */}
                    {uploadSuccess && (
                        <div className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                            <CheckCircle className="h-5 w-5" />
                            <p className="text-sm font-medium">{uploadSuccess}</p>
                        </div>
                    )}

                    {/* Error Message */}
                    {uploadError && (
                        <div className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                            <X className="h-5 w-5" />
                            <p className="text-sm font-medium">{uploadError}</p>
                        </div>
                    )}

                    {/* Uploaded Images Gallery */}
                    {uploadedImages.length > 0 && (
                        <div>
                            <h3 className="font-semibold mb-4">Recently Uploaded Images</h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                {uploadedImages.map((image, index) => (
                                    <div key={index} className="group relative border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                                        <img
                                            src={image.url}
                                            alt={image.filename}
                                            className="w-full h-32 object-cover"
                                        />
                                        <div className="p-2 bg-background/95 backdrop-blur">
                                            <p className="text-xs font-mono truncate" title={image.filename}>
                                                {image.filename}
                                            </p>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="w-full mt-2 text-xs"
                                                onClick={() => copyToClipboard(image.url)}
                                            >
                                                Copy Path
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Instructions */}
                    <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            How to use uploaded images
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                            <li>After uploading, click "Copy Path" to copy the image URL</li>
                            <li>Paste the copied path into the "Event Image" field when creating/editing events</li>
                            <li>The path will look like: <code className="bg-background px-1 rounded">/image.png</code></li>
                            <li>Images are saved to the public folder with their original filename</li>
                            <li>Uploading a file with the same name will overwrite the previous file</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>

      </Tabs>


      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto" onEscapeKeyDown={handleCloseDialog}>
            {renderDialogContent()}
            {renderDialogFooter()}
        </DialogContent>
      </Dialog>
    </div>
  );
}

    
