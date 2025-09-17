'use client'

import { useState, useEffect } from 'react'
import { Ticket, EventLocation, EventDetail as EventData } from '@/types/newevent'
import Button from '@/components/Button'
import TicketSection from './ticketSection'
import LocationSection from './locationSection'
import HostSection from './hostSection'
import SpeakerSection from './speakerSection'
import OrganizerSection from './organizerSection'

import { timestampToInputValue, inputValueToTimestamp} from '@/utils/time'

interface Props {
  initialValues: EventData
  initialTickets?: Ticket[]
  onSubmit: (data: EventData, tickets: Ticket[]) => Promise<void>
  mode: 'create' | 'edit'
}

const EventForm: React.FC<Props> = ({
  initialValues,
  initialTickets = [],
  onSubmit,
  mode,
}) => {
    const [form, setForm] = useState<EventData>({
    ...initialValues,
    hosts: initialValues.hosts ?? [],
    speakers: initialValues.speakers ?? [],
    organizers: initialValues.organizers ?? [],
  })
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets)
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)

  // console.log("cdef", initialValues)
  // console.log("cdef", initialTickets)
  // console.log("abcd", tickets)

  useEffect(() => {
    // console.log("eventform useEffect get called.")
    // console.log(initialTickets)
    // console.log(initialValues)
    // console.log(mode)
    if (mode === 'edit') {
      setForm({
        ...initialValues,
        startTime: timestampToInputValue(initialValues.startTime),
        endTime: timestampToInputValue(initialValues.endTime),
        hosts: initialValues.hosts ?? [],
        speakers: initialValues.speakers ?? [],
        organizers: initialValues.organizers ?? [],
      })
      setTickets(initialTickets)
    }
  }, [mode, initialValues, initialTickets]) //TODO there's some bug here.

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'
    const checked = isCheckbox && 'checked' in e.target
      ? (e.target as HTMLInputElement).checked
      : undefined
      // Convert datetime-local to Firestore timestamp
    if (name === 'startTime' || name === 'endTime') {
      const timestamp = inputValueToTimestamp(value)
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }))
      return
    }

    if (name.startsWith('location.')) {
      const locField = name.split('.')[1]
      setForm((prev) => ({
        ...prev,
        location: {
          ...prev.location,
          [locField]: value,
        },
      }))
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: isCheckbox ? checked : value,
      }))
    }
  }
  // console.log('Submit payload:', form.startTime, form.endTime);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccess(false)

    try {
      // const dataToSubmit = {
      //   ...form,
      //   startTime: form.startTime, // string
      //   endTime: form.endTime,
      // }

      // const ticketsToSubmit = tickets.map(ticket => ({
      //   ...ticket,
      //   saleStart: ticket.saleStart || undefined,
      //   saleEnd: ticket.saleEnd || undefined,
      // }))
      const startTimeISO = new Date(form.startTime).toISOString();
      const endTimeISO = new Date(form.endTime).toISOString();
  
      const dataToSubmit = {
        ...form,
        startTime: startTimeISO,
        endTime: endTimeISO,
      };

      if (tickets.length === 0) {
            throw new Error('At least one ticket is required to create an event');
      }
  
      const ticketsToSubmit = tickets.map(ticket => ({
        ...ticket,
        // You should do the same for ticket sale dates if they exist!
        saleStart: ticket.saleStart ? new Date(ticket.saleStart).toISOString() : undefined,
        saleEnd: ticket.saleEnd ? new Date(ticket.saleEnd).toISOString() : undefined,
      }));

      await onSubmit(dataToSubmit, ticketsToSubmit); 
      setSuccess(true)
    } catch (err) {
      console.error(err)
      setErrorMsg(err instanceof Error ? err.message : 'Unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  // console.log(form)

  return (
    <form onSubmit={handleSubmit} className="p-6 border rounded-lg bg-white shadow-md max-w-4xl w-full mx-auto">
      <h2 className="text-2xl font-semibold mb-4">
        {mode === 'edit' ? 'Edit Event' : 'Create New Event'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label htmlFor="title">Event Title<span className="text-red-500">*</span></label>
        <input id="title" name="title" placeholder="Event Title" value={form.title} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />

        <label htmlFor="imageUrl">Image URL</label>
        <input id="imageUrl" name="imageUrl" placeholder="imageUrl" value={form.imageUrl} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />

        <label htmlFor="category">Category <span className="text-red-500">*</span></label>
        <select id="category" name="category" value={form.category} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="conference">Conference</option>
          <option value="workshop">Workshop</option>
          <option value="seminar">Seminar</option>
          <option value="networking">Networking</option>
          <option value="social">Social</option>
          <option value="other">Other</option>
        </select>

        <label htmlFor="startTime">Start Time <span className="text-red-500">*</span></label>
        <input id="startTime" name="startTime" type="datetime-local" value={form.startTime} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />

        <label htmlFor="endTime">End Time <span className="text-red-500">*</span></label>
        <input id="endTime" name="endTime" type="datetime-local" value={form.endTime} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />

        <label htmlFor="status">Status <span className="text-red-500">*</span></label>
        <select id="status" name="status" value={form.status} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="upcoming">Upcoming</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>

        <label htmlFor="createdBy">Created By <span className="text-red-500">*</span> </label>
        <input id="createdBy" name="createdBy" placeholder="Created By" value={form.createdBy} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
      </div>

      <label htmlFor="fullDescription" className="block mt-4">Event Description <span className="text-red-500">*</span></label>
      <textarea id="fullDescription" name="fullDescription" placeholder="Description" value={form.fullDescription} onChange={handleChange} className="input border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black w-full" rows={4} required />


      <div className="flex items-center gap-4 mt-4">
        <label><input type="checkbox" name="isPublic" checked={form.isPublic} onChange={handleChange} /> Public</label>
        <label><input type="checkbox" name="requiresApproval" checked={form.requiresApproval} onChange={handleChange} /> Requires Approval</label>
        <label><input type="checkbox" name="allowWaitlist" checked={form.allowWaitlist} onChange={handleChange} /> Allow Waitlist</label>
      </div>

      <LocationSection location={form.location} onLocationChange={(loc) => setForm(prev => ({ ...prev, location: loc }))} />

      <HostSection hosts={form.hosts} onHostsChange={(hosts) => setForm(prev => ({ ...prev, hosts }))} />
      <SpeakerSection speakers={form.speakers} onSpeakersChange={(speakers) => setForm(prev => ({ ...prev, speakers }))} />
      <OrganizerSection
          organizers={form.organizers}
          onOrganizersChange={(orgs) => setForm(prev => ({ ...prev, organizers: orgs }))}
          />
      <TicketSection tickets={tickets} onTicketsChange={setTickets} />
       {tickets.length === 0 && (
        <p className="text-red-500 text-sm mt-1">Please add at least one type of tickets.</p>
        )}

      <Button type="submit" color="linear" className="mt-6 w-full">
        {loading ? (mode === 'edit' ? 'Updating...' : 'Submitting...') : mode === 'edit' ? 'Update Event' : 'Create Event'}
      </Button>

      {success && <p className="text-green-600 mt-2">{mode === 'edit' ? 'Event updated successfully!' : 'Event created successfully!'}</p>}
      {errorMsg && <p className="text-red-600 mt-2">{errorMsg}</p>}
    </form>
  )
}

export default EventForm
