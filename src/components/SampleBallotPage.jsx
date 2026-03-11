import React from 'react';
import { BallotIcon } from './Icons';
import { sampleBallot } from '../data/mockData';

export function SampleBallotPage() {
  return (
    <div className="flex-1 min-w-0 h-screen overflow-y-auto bg-civic-cream">
      <div className="max-w-4xl mx-auto px-8 py-8">
        {/* Header */}
        <div className="card px-8 py-8 mb-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-civic-rust/10 flex items-center justify-center mx-auto mb-4">
            <BallotIcon size={32} className="text-civic-rust" />
          </div>
          <h1 className="text-2xl font-heading font-bold text-gray-900">{sampleBallot.electionName}</h1>
          <p className="text-gray-500 mt-2">{sampleBallot.electionDate} &middot; {sampleBallot.location}</p>
          <p className="text-xs text-gray-400 mt-3 bg-gray-50 rounded-lg px-4 py-2 inline-block">
            This is a sample ballot preview for demonstration purposes
          </p>
        </div>

        {/* Races */}
        <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Races</h2>
        <div className="space-y-4 mb-8">
          {sampleBallot.races.map((race, i) => (
            <div key={i} className="card px-6 py-5">
              <h3 className="font-heading font-semibold text-gray-900 mb-3">{race.office}</h3>
              <div className="space-y-2">
                {race.candidates.map((candidate, j) => (
                  <div key={j} className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-xs font-semibold text-gray-400">
                        {candidate.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-900">{candidate.name}</span>
                        {candidate.incumbent && (
                          <span className="text-xs text-civic-green ml-2">(Incumbent)</span>
                        )}
                      </div>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      candidate.party === 'Democrat' ? 'bg-blue-50 text-blue-600' :
                      candidate.party === 'Republican' ? 'bg-red-50 text-red-600' :
                      candidate.party === 'Libertarian' ? 'bg-yellow-50 text-yellow-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {candidate.party}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ballot Measures */}
        <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">Ballot Measures</h2>
        <div className="space-y-4">
          {sampleBallot.measures.map((measure, i) => (
            <div key={i} className="card px-6 py-5">
              <h3 className="font-heading font-semibold text-gray-900 mb-2">{measure.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{measure.description}</p>
              <div className="flex gap-3 mt-4">
                <div className="flex-1 px-4 py-3 bg-green-50 rounded-xl text-center">
                  <span className="text-sm font-medium text-green-700">FOR</span>
                </div>
                <div className="flex-1 px-4 py-3 bg-red-50 rounded-xl text-center">
                  <span className="text-sm font-medium text-red-700">AGAINST</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
