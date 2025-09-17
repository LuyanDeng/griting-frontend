'use client'
import React from 'react'
import Button from '@/components/Button'
import { EventLocation } from '@/types/newevent'


interface LocationSectionProps {
  location: EventLocation
  onLocationChange: (loc: EventLocation) => void
}

const LocationSection: React.FC<LocationSectionProps> = ({ location, onLocationChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    onLocationChange({
      ...location,
      [name]: value
    })
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-2">Location</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded">
        <label>Building</label>
        <input name="building" placeholder="Building" value={location.building || ''} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>Address</label>
        <input name="address" placeholder="Address" value={location.address} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>City</label>
        <input name="city" placeholder="City" value={location.city} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>State</label>
        <input name="state" placeholder="State" value={location.state || ''} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>Country</label>
        <input name="country" placeholder="Country" value={location.country || ''} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>Postal Code</label>
        <input name="postal_code" placeholder="Postal Code" value={location.postal_code || ''} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label>Address Visibility</label>
        <select name="addressVisibility" value={location.addressVisibility || 'public'} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="public">Public</option>
          <option value="registered">Registered</option>
          <option value="paid">Paid</option>
        </select>
      </div>
    </div>
  )
}

export default LocationSection
