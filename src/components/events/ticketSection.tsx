
'use client'
import Button from '@/components/Button'
import { Ticket } from '@/types/newevent'
import { timestampToInputValue } from '@/utils/time'
import { Timestamp } from 'firebase/firestore';


interface TicketSectionProps {
  tickets: Ticket[]
  onTicketsChange: (tickets: Ticket[]) => void
}


const TicketSection: React.FC<TicketSectionProps> = ({ tickets, onTicketsChange }) => {
  // const updateTicket = (index: number, field: TicketField, value: any) => {
  //   const updated = [...tickets]
  //   updated[index][field] = value
  //   onTicketsChange(updated)
  // }

  
  const updateTicket = <K extends keyof Ticket>(
    index: number,
    field: K,
    value: Ticket[K]
  ) => {
    const updated = [...tickets]
    updated[index][field] = value

    if (field === 'quantity') {
      const currentQuantity = updated[index].quantity
      const newQuantity = value as number
      
      // 如果是增加数量，相应增加剩余数量
      if (newQuantity > currentQuantity) {
        const increase = newQuantity - currentQuantity
        updated[index].quantityRemaining = updated[index].quantityRemaining + increase
      }
      // 如果是减少数量，确保剩余数量不超过新的总数量
      else if (newQuantity < currentQuantity) {
        updated[index].quantityRemaining = Math.min(updated[index].quantityRemaining, newQuantity)
      }
    }
    if (field === 'quantity') {
      const soldQuantity = updated[index].quantity - updated[index].quantityRemaining
      updated[index].quantityRemaining = Math.max(0, (value as number) - soldQuantity)
    }

    if (field === 'price' && (value as number) > 0) {
      updated[index].type = 'paid'
    }
  
    if (field === 'type' && value === 'free') {
      updated[index].price = 0
    }
    onTicketsChange(updated)
  }
  const addTicket = () => {
    const newQuantity = 100
    onTicketsChange([
      ...tickets,
      {
        id: '',
        name: '',
        price: 0,
        type: 'free',
        currency: 'USD',
        quantity: newQuantity,
        quantityRemaining: newQuantity,
        description: '',
        saleStart: '',
        saleEnd: ''
      }
    ])
  }

  const removeTicket = (index: number) => {
    const updated = tickets.filter((_, i) => i !== index)
    onTicketsChange(updated)
  }



  return (
    <div className="mt-6">
      
      <h3 className="font-semibold text-lg mb-2">Tickets  <span className="text-red-500">*</span></h3>      

      {tickets.map((ticket, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 border p-4 rounded">

                
          <label>Ticket Name<span className="text-red-500">*</span></label>
          <input value={ticket.name} onChange={e => updateTicket(i, 'name', e.target.value)} 
          className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="Ticket Name" />

          
          
          <label>Price</label>
          <input type="number" value={ticket.price} onChange={e => updateTicket(i, 'price', parseFloat(e.target.value))} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
          
          <label>Type</label>
          <select value={ticket.type} onChange={e => updateTicket(i, 'type', e.target.value as 'free' | 'paid')} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black">
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
          
          <label>Currency</label>
          <input value={ticket.currency} onChange={e => updateTicket(i, 'currency', e.target.value)} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" placeholder="USD" />
          
          <label>Total Quantity<span className="text-red-500">*</span></label>
          <input type="number" value={ticket.quantity} onChange={e => updateTicket(i, 'quantity', parseInt(e.target.value))} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
          
          {/* <label>Remaining Quantity<span className="text-red-500">*</span></label>
          <input type="number" value={ticket.quantityRemaining} onChange={e => updateTicket(i, 'quantityRemaining', parseInt(e.target.value))} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" /> */}
          <label>Available Quantity</label>
          <div className="flex items-center gap-2">
            <input 
              type="number"
              value={ticket.quantityRemaining || 0}
              readOnly
              className="input flex-grow border border-gray-300 rounded bg-gray-100 text-gray-600 cursor-not-allowed"
            />
            <span className="text-xs text-gray-500 whitespace-nowrap">
              (System managed)
            </span>
          </div>
          
          <label>Sale Start</label>
          <input type="datetime-local" value={ticket.saleStart} onChange={e => updateTicket(i, 'saleStart', e.target.value)} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
          
          <label>Sale End</label>
          <input type="datetime-local" value={ticket.saleEnd} onChange={e => updateTicket(i, 'saleEnd', e.target.value)} className="input flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" />
          
          <label className="col-span-2">Ticket Description</label>
          <textarea value={ticket.description} onChange={e => updateTicket(i, 'description', e.target.value)} className="input col-span-2 flex-grow border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" rows={2} placeholder="Ticket description..." />

          <Button type="button" color="black" onClick={() => removeTicket(i)} className="bg-red-600 hover:bg-red-700 text-white">Remove Ticket</Button>
        </div>
      ))}
      <Button type="button" color="linear" onClick={addTicket} className="mt-2">Add Ticket</Button>
    </div>
  )
}

export default TicketSection
