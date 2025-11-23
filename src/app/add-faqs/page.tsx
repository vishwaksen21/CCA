'use client';

import { useEffect, useState } from 'react';
import { addFaq } from '@/lib/firestore-service';

const faqsData = [
  {
    question: 'What is the Centre for Cognitive Activities (CCA)?',
    answer:
      'CCA is a student club at CMRIT dedicated to enhancing students\' aptitude, mental ability, personality, and critical thinking, ultimately supporting placement and career preparation.',
  },
  {
    question: 'Who can join the CCA?',
    answer:
      'Any student from any branch or year at CMRIT is welcome to join and participate in CCA activities.',
  },
  {
    question: 'What activities does CCA organize?',
    answer:
      'CCA conducts workshops, aptitude competitions, personality development sessions, and placement training events to help students prepare for placements and exams.',
  },
  {
    question: 'How do I join?',
    answer:
      'Watch for CCA membership drives at the start of the academic year. Apply through announcements posted on the club website and social media.',
  },
  {
    question: 'Is there a rewards system in CCA?',
    answer:
      'Students will earn CAP points by actively participating in events, volunteering activities, and winning competitions. The leaderboard is updated every week based on the total CAP points earned.',
  },
  {
    question: 'Are students from all backgrounds and years welcome?',
    answer:
      'Absolutely! CCA encourages diversity and welcomes students from all academic disciplines and years.',
  },
  {
    question: 'What are the benefits of being a CCA member?',
    answer:
      'Members develop important skills, boost their placement chances, receive certificates, and connect with a supportive student community.',
  },
  {
    question: 'Where can I find updates about CCA events?',
    answer:
      'All updates and announcements are regularly shared through the club\'s official website and social media platforms, including LinkedIn, WhatsApp, and Instagram.',
  },
];

export default function AddFaqsPage() {
  const [status, setStatus] = useState<string>('Ready to add FAQs');
  const [progress, setProgress] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);

  const addAllFaqs = async () => {
    setStatus('Adding FAQs to Firestore...');
    const logs: string[] = [];

    try {
      for (let i = 0; i < faqsData.length; i++) {
        const faq = faqsData[i];
        await addFaq(faq);
        const log = `✅ Added FAQ ${i + 1}/${faqsData.length}: "${faq.question}"`;
        logs.push(log);
        setProgress([...logs]);
      }

      setStatus('✅ All FAQs added successfully!');
      setIsComplete(true);
    } catch (error) {
      const errorLog = `❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`;
      logs.push(errorLog);
      setProgress([...logs]);
      setStatus('❌ Failed to add FAQs');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-card border rounded-lg p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Add FAQs to Firestore</h1>
        
        <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            <strong>Note:</strong> This page will add all {faqsData.length} FAQs to your Firestore database.
            Run this once only.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Status:</h2>
          <p className="text-lg font-mono p-3 bg-muted rounded">{status}</p>
        </div>

        {progress.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Progress:</h2>
            <div className="bg-muted p-4 rounded max-h-96 overflow-y-auto">
              {progress.map((log, index) => (
                <p key={index} className="font-mono text-sm mb-1">
                  {log}
                </p>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-4">
          <button
            onClick={addAllFaqs}
            disabled={isComplete}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:text-muted-foreground px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {isComplete ? '✅ FAQs Added' : 'Add All FAQs'}
          </button>
          
          {isComplete && (
            <a
              href="/faq"
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors"
            >
              View FAQ Page
            </a>
          )}
        </div>

        {isComplete && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded">
            <p className="text-green-800 dark:text-green-200">
              ✅ All FAQs have been added to Firestore! You can now view them on the FAQ page.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
