'use client'

import { Host } from '@/types/newevent'
import Button from '@/components/Button'

interface HostSectionProps {
  hosts: Host[]
  onHostsChange: (hosts: Host[]) => void
}

const HostSection: React.FC<HostSectionProps> = ({ hosts, onHostsChange }) => {
  const updateHost = (index: number, field: keyof Host, value: any) => {
    const updated = [...hosts]
    updated[index] = { ...updated[index], [field]: value }
    onHostsChange(updated)
  }

  const addHost = () => {
    onHostsChange([
      ...hosts,
      {
        type: 'custom',
        name: '',
        uid: '',
        avatar: '',
        link: '',
      }
    ])
  }

  const removeHost = (index: number) => {
    onHostsChange(hosts.filter((_, i) => i !== index))
  }

  return (
    <div className="mt-6">
      <h3 className="font-semibold text-lg mb-2">Hosts</h3>
      {hosts?.map((host, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded">
          <label>Type</label>
          <select value={host.type} onChange={e => updateHost(i, 'type', e.target.value as 'user' | 'custom')} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
            <option value="user">User</option>
            <option value="custom">Custom</option>
          </select>

          <label>Name</label>
          <input value={host.name} onChange={e => updateHost(i, 'name', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Host Name" />

          <label>UID</label>
          <input value={host.uid || ''} onChange={e => updateHost(i, 'uid', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="User UID (if type is 'user')" />

          <label>Avatar URL</label>
          <input value={host.avatar || ''} onChange={e => updateHost(i, 'avatar', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Avatar URL" />

          <label>Link</label>
          <input value={host.link || ''} onChange={e => updateHost(i, 'link', e.target.value)} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Personal or social link" />

          <Button type="button" color="black" onClick={() => removeHost(i)} className="bg-red-600 hover:bg-red-700 text-white">Remove Host</Button>
        </div>
      ))}
      <Button type="button" color="linear" onClick={addHost} className="mt-2">Add Host</Button>
    </div>
  )
}

export default HostSection
