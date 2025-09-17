'use client'

import React from 'react'
import Button from '@/components/Button'

interface OrganizerSectionProps {
  organizers: string[]
  onOrganizersChange: (orgs: string[]) => void
}

const OrganizerSection: React.FC<OrganizerSectionProps> = ({ organizers, onOrganizersChange }) => {
  const handleChange = (index: number, value: string) => {
    const updated = [...organizers]
    updated[index] = value
    onOrganizersChange(updated)
  }

  const addOrganizer = () => {
    onOrganizersChange([...organizers, ''])
  }

  const removeOrganizer = (index: number) => {
    const updated = organizers.filter((_, i) => i !== index)
    onOrganizersChange(updated)
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-2">Organizers</h3>
      {organizers?.map((org, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
        <label>Organizer</label>
          <input
            type="text"
            value={org}
            onChange={(e) => handleChange(i, e.target.value)}
            className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Organizer Name"
          />
          <Button
            color='black'
            type="button"
            onClick={() => removeOrganizer(i)}
            className="bg-red-600 text-white px-2 py-1 rounded"
          >
            Remove Organizer
          </Button>
        </div>
      ))}
      <Button
        color='linear'
        type="button"
        onClick={addOrganizer}
        className="bg-black text-white px-4 py-1 rounded mt-2"
      >
        Add Organizer
      </Button>
    </div>
  )
}

export default OrganizerSection