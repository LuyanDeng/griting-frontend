'use client'

import { useState } from 'react'
import { Speaker } from '@/types/newevent'
import Button from '@/components/Button'

interface SpeakerSectionProps {
  speakers: Speaker[]
  onSpeakersChange: (speakers: Speaker[]) => void
}

const SpeakerSection: React.FC<SpeakerSectionProps> = ({ speakers, onSpeakersChange }) => {
  const updateSpeaker = (index: number, field: keyof Speaker, value: any) => {
    const updated = [...speakers]
    updated[index] = {
      ...updated[index],
      [field]: value,
    }
    onSpeakersChange(updated)
  }

  const addSpeaker = () => {
    onSpeakersChange([
      ...speakers,
      {
        id: '',
        name: '',
        title: '',
        bio: '',
        photo: ''
      }
    ])
  }

  const removeSpeaker = (index: number) => {
    const updated = speakers.filter((_, i) => i !== index)
    onSpeakersChange(updated)
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-2">Speakers</h3>
      {speakers?.map((speaker, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded">
          <label>Name</label>
          <input value={speaker.name} onChange={e => updateSpeaker(i, 'name', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Speaker Name" />

          <label>Title</label>
          <input value={speaker.title} onChange={e => updateSpeaker(i, 'title', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Job Title" />

          <label>Photo URL</label>
          <input value={speaker.photo} onChange={e => updateSpeaker(i, 'photo', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Photo URL" />

          <label className="col-span-2">Bio</label>
          <textarea value={speaker.bio} onChange={e => updateSpeaker(i, 'bio', e.target.value)} className="input col-span-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" rows={2} placeholder="Short bio" />

          <Button type="button" color="black" onClick={() => removeSpeaker(i)} className="bg-red-600 hover:bg-red-700 text-white">Remove Speaker</Button>
        </div>
      ))}
      <Button type="button" color="linear" onClick={addSpeaker} className="mt-2">Add Speaker</Button>
    </div>
  )
}

export default SpeakerSection
