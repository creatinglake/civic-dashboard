import React, { useState } from 'react';
import { MessageIcon, UserIcon } from './Icons';
import { myRepresentatives } from '../data/mockData';

export function ContactRepsPage() {
  const [selectedReps, setSelectedReps] = useState([]);
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const toggleRep = (repId) => {
    setSelectedReps(prev =>
      prev.includes(repId) ? prev.filter(id => id !== repId) : [...prev, repId]
    );
  };

  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto bg-civic-cream">
      <div className="max-w-3xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="card px-8 py-8 mb-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-civic-teal/10 flex items-center justify-center mx-auto mb-4">
            <MessageIcon size={32} className="text-civic-teal" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-gray-900">Contact Your Representatives</h1>
          <p className="text-gray-500 mt-2">Send a message to your elected officials</p>
          <p className="text-xs text-gray-400 mt-3 bg-gray-50 rounded-lg px-4 py-2 inline-block">
            Demo mockup &ndash; messages are not actually sent
          </p>
        </div>

        {/* Select Recipients */}
        <div className="card px-6 py-6 mb-6">
          <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Select Recipients</h2>
          <div className="space-y-2">
            {myRepresentatives.map((rep) => (
              <button
                key={rep.id}
                onClick={() => toggleRep(rep.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center gap-3 border ${
                  selectedReps.includes(rep.id)
                    ? 'border-civic-teal bg-civic-teal/5'
                    : 'border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                  selectedReps.includes(rep.id) ? 'border-civic-teal bg-civic-teal' : 'border-gray-300'
                }`}>
                  {selectedReps.includes(rep.id) && (
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </div>
                <div className="w-8 h-8 rounded-full bg-civic-teal/8 flex items-center justify-center">
                  <UserIcon size={14} className="text-civic-teal" />
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-900">{rep.name}</span>
                  <span className="text-xs text-gray-400 ml-2">{rep.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Message Form */}
        <div className="card px-6 py-6">
          <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Your Message</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Topic</label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-civic-teal"
            >
              <option value="">Select a topic...</option>
              <option value="education">Education</option>
              <option value="environment">Environment</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="healthcare">Healthcare</option>
              <option value="economy">Economy & Jobs</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message to your representatives..."
              rows={6}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-civic-teal resize-none"
            />
          </div>

          <button
            className={`btn-primary w-full text-sm ${
              selectedReps.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={selectedReps.length === 0}
          >
            Send Message {selectedReps.length > 0 && `to ${selectedReps.length} Representative${selectedReps.length > 1 ? 's' : ''}`}
          </button>
        </div>
      </div>
    </div>
  );
}
