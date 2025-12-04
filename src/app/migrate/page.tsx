'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { migrateLocalStorageToFirestore, seedFirestoreFromMockData } from '@/lib/firestore-service';
import { Database, Upload, CheckCircle, AlertCircle, Loader2, Sprout } from 'lucide-react';

export default function MigrationPage() {
  const [migrating, setMigrating] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [success, setSuccess] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const handleMigration = async () => {
    setMigrating(true);
    setSuccess(false);
    setError(null);
    setLogs([]);

    // Intercept console.log to show progress
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prev) => [...prev, args.join(' ')]);
      originalLog(...args);
    };

    try {
      await migrateLocalStorageToFirestore();
      setSuccess(true);
      setLogs((prev) => [...prev, '✅ Migration completed! You can now use Firestore.']);
    } catch (err: any) {
      setError(err.message || 'Migration failed');
      setLogs((prev) => [...prev, `❌ Error: ${err.message}`]);
    } finally {
      setMigrating(false);
      console.log = originalLog; // Restore original console.log
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    setSeedSuccess(false);
    setError(null);
    setLogs([]);

    // Intercept console.log to show progress
    const originalLog = console.log;
    console.log = (...args) => {
      setLogs((prev) => [...prev, args.join(' ')]);
      originalLog(...args);
    };

    try {
      await seedFirestoreFromMockData();
      setSeedSuccess(true);
      setLogs((prev) => [...prev, '✅ Seeding completed! Firestore is populated with mock data.']);
    } catch (err: any) {
      setError(err.message || 'Seeding failed');
      setLogs((prev) => [...prev, `❌ Error: ${err.message}`]);
    } finally {
      setSeeding(false);
      console.log = originalLog; // Restore original console.log
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Database className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Data Migration</h1>
          </div>
          <p className="text-muted-foreground">
            Migrate your data from localStorage to Firebase Firestore or seed with mock data
          </p>
        </div>

        {/* Seed from Mock Data Card */}
        <Card className="p-8 space-y-6 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Sprout className="h-6 w-6 text-green-600" />
              Seed from Mock Data
            </h2>
            <p className="text-muted-foreground">
              Populate your Firestore database with all the data from mock-data.ts including the newly added 2022-2024 events!
            </p>
          </div>

          {/* What will be seeded */}
          <div className="space-y-2">
            <h3 className="font-semibold">What will be seeded:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                31 Events (2022-2025)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Announcements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Team Members
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Milestones
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                FAQs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Leaderboard
              </li>
            </ul>
          </div>

          {/* Seed Button */}
          <Button
            onClick={handleSeed}
            disabled={seeding || seedSuccess}
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            {seeding ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Seeding...
              </>
            ) : seedSuccess ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Seeding Complete!
              </>
            ) : (
              <>
                <Sprout className="mr-2 h-5 w-5" />
                Seed Firestore Now
              </>
            )}
          </Button>

          {/* Seed Success Message */}
          {seedSuccess && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">
                    Seeding Successful!
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Your Firestore database has been populated with all events including 2022-2024 historical data!
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Migration Card */}
        <Card className="p-8 space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Upload className="h-6 w-6" />
              Migration Status
            </h2>
            <p className="text-muted-foreground">
              This will copy all your existing data from browser localStorage to Firebase Firestore.
              Your data will then sync across all devices in real-time!
            </p>
          </div>

          {/* What will be migrated */}
          <div className="space-y-2">
            <h3 className="font-semibold">What will be migrated:</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Announcements
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Events
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Team Members
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Milestones
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                FAQs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Leaderboard
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Contact Submissions
              </li>
            </ul>
          </div>

          {/* Migration Button */}
          <Button
            onClick={handleMigration}
            disabled={migrating || success}
            size="lg"
            className="w-full"
          >
            {migrating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Migrating...
              </>
            ) : success ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                Migration Complete!
              </>
            ) : (
              <>
                <Upload className="mr-2 h-5 w-5" />
                Start Migration
              </>
            )}
          </Button>

          {/* Success Message */}
          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-green-700 dark:text-green-400">
                    Migration Successful!
                  </h4>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Your data has been migrated to Firestore. All changes will now sync across devices automatically!
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-red-700 dark:text-red-400">
                    Migration Failed
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-300">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Migration Logs */}
          {logs.length > 0 && (
            <div className="space-y-2">
              <h3 className="font-semibold">Migration Log:</h3>
              <div className="bg-black/5 dark:bg-white/5 rounded-lg p-4 font-mono text-xs max-h-60 overflow-y-auto space-y-1">
                {logs.map((log, index) => (
                  <div key={index} className="text-muted-foreground">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* Instructions */}
        <Card className="p-6 bg-blue-500/5 border-blue-500/20">
          <div className="space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-500" />
              Important Notes
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>This migration only needs to be run ONCE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Your localStorage data will remain intact (backup)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>After migration, all future changes will save to Firestore automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-0.5">•</span>
                <span>Changes will sync across ALL devices in real-time!</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Next Steps */}
        {(success || seedSuccess) && (
          <Card className="p-6 bg-green-500/5 border-green-500/20">
            <div className="space-y-3">
              <h3 className="font-semibold text-green-700 dark:text-green-400">
                🎉 Next Steps
              </h3>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>Go to the Events page to see all historical events (2022-2025)</li>
                <li>Use the year filter to browse events by year</li>
                <li>Go to Admin Dashboard to add/edit content</li>
                <li>Open the site on another device to see real-time sync! 🚀</li>
              </ol>
              <div className="pt-4 flex gap-3">
                <Button asChild>
                  <a href="/events">View Events</a>
                </Button>
                <Button asChild variant="outline">
                  <a href="/admin">Admin Dashboard</a>
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
