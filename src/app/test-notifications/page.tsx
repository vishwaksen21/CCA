'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestNotificationsPage() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [testing, setTesting] = useState(false);

  const addLog = (message: string) => {
    setTestResults(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    console.log('[Test]', message);
  };

  const testAPIKey = async () => {
    setTesting(true);
    setTestResults([]);
    addLog('Starting diagnostic tests...');

    try {
      // Test 1: Check if API endpoint exists
      addLog('Test 1: Checking API endpoint...');
      const response = await fetch('/api/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Test Notification',
          message: 'This is a diagnostic test from the test page.',
        }),
      });

      const data = await response.json();
      
      addLog(`API Response Status: ${response.status}`);
      addLog(`API Response: ${JSON.stringify(data, null, 2)}`);

      if (response.ok) {
        addLog('✅ SUCCESS! Notification sent successfully!');
        addLog(`Recipients: ${data.recipients || 'unknown'}`);
      } else {
        addLog(`❌ ERROR: ${data.error || 'Unknown error'}`);
        if (data.details) {
          addLog(`Details: ${JSON.stringify(data.details, null, 2)}`);
        }
      }
    } catch (error) {
      addLog(`❌ EXCEPTION: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setTesting(false);
    }
  };

  const testOneSignalDirect = () => {
    addLog('Checking OneSignal client status...');
    
    if (typeof window !== 'undefined' && window.OneSignal) {
      addLog('✅ OneSignal SDK loaded');
      
      window.OneSignal.isPushNotificationsEnabled((isEnabled: boolean) => {
        addLog(`Notifications enabled: ${isEnabled}`);
      });
      
      window.OneSignal.getUserId((userId: string | null) => {
        addLog(`User ID: ${userId || 'Not subscribed'}`);
      });
      
      if (Notification.permission) {
        addLog(`Browser permission: ${Notification.permission}`);
      }
    } else {
      addLog('❌ OneSignal SDK not loaded yet');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>🔍 Notification Diagnostics</CardTitle>
          <CardDescription>
            Test your OneSignal notification setup
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold">Quick Tests:</h3>
            <div className="flex gap-2">
              <Button onClick={testAPIKey} disabled={testing}>
                {testing ? 'Testing...' : 'Test Send Notification API'}
              </Button>
              <Button onClick={testOneSignalDirect} variant="outline">
                Check OneSignal Status
              </Button>
            </div>
          </div>

          {testResults.length > 0 && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Test Results:</h4>
              <div className="space-y-1 font-mono text-xs max-h-96 overflow-y-auto">
                {testResults.map((result, i) => (
                  <div key={i} className={
                    result.includes('✅') ? 'text-green-600' :
                    result.includes('❌') ? 'text-red-600' :
                    'text-foreground'
                  }>
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold mb-2">Checklist:</h4>
            <ul className="space-y-1 text-sm">
              <li>✓ Go to Vercel → Settings → Environment Variables</li>
              <li>✓ Verify ONESIGNAL_REST_API_KEY exists</li>
              <li>✓ All environments checked (Production, Preview, Development)</li>
              <li>✓ Redeploy after adding environment variable</li>
              <li>✓ At least 1 user subscribed (check OneSignal dashboard)</li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h4 className="font-semibold mb-2">Your API Key:</h4>
            <code className="text-xs break-all">
              os_v2_app_i5l3vwc7jnfvtmxp7xj542kdphnzbz5kzjauc2f6m6eglrcrmovtw4etpwfqgrmhxs6eqzolsowkrxychltcrlfwphmchs3zf5g23by
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

declare global {
  interface Window {
    OneSignal: any;
  }
}
