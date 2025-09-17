'use client'
import { useState } from 'react'
import Button from '@/components/Button'
import { NotificationPriority, NotificationTargetType, NotificationType } from '@/types/notifications'

interface NotificationFormProps {
  initialValues: {
    title: string
    body: string
    type: NotificationType
    priority: NotificationPriority
    targetType: NotificationTargetType
    imageUrl?: string
    clickAction?: string
  }
  mode: 'create' | 'edit'
  onSubmit: (data: {
    title: string
    body: string
    type: NotificationType
    priority: NotificationPriority
    targetType: NotificationTargetType
    imageUrl?: string
    clickAction?: string
  }) => Promise<void>
}

const NotificationForm: React.FC<NotificationFormProps> = ({ initialValues, mode, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title)
  const [body, setBody] = useState(initialValues.body)
  const [type, setType] = useState<NotificationType>(initialValues.type)
  const [priority, setPriority] = useState<NotificationPriority>(initialValues.priority)
  const [targetType, setTargetType] = useState<NotificationTargetType>(initialValues.targetType)
  const [imageUrl, setImageUrl] = useState(initialValues.imageUrl || '')
  const [clickAction, setClickAction] = useState(initialValues.clickAction || '')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    setLoading(true)
    setError(null)

    try {
      await onSubmit({
        title,
        body,
        type,
        priority,
        targetType,
        imageUrl,
        clickAction,
      })
    } catch (err: any) {
      console.error(err)
      setError('Failed to submit notification')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 max-w-lg w-full">
      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Body</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} className="border p-2 w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value as NotificationType)} className="border p-2 w-full">
          <option value="system">System</option>
          <option value="info">Info</option>
          <option value="warning">Warning</option>
          <option value="error">Error</option>
          <option value="success">Success</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value as NotificationPriority)} className="border p-2 w-full">
          <option value="low">Low</option>
          <option value="normal">Normal</option>
          <option value="high">High</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Target Type</label>
        <select
          value={targetType}
          onChange={(e) => setTargetType(e.target.value as NotificationTargetType)}
          className="border p-2 w-full"
        >
          <option value="all_users">All Users</option>
          <option value="specific_users">Specific Users</option>
          <option value="user_group">User Group</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Image URL (optional)</label>
        <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2 w-full" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Click Action (optional)</label>
        <input value={clickAction} onChange={(e) => setClickAction(e.target.value)} className="border p-2 w-full" />
      </div>

      {error && <div className="text-red-500">{error}</div>}

      <Button onClick={handleSubmit} disabled={loading} color="linear" className="mt-6 w-full">
        {loading ? 'Submitting...' : mode === 'create' ? 'Send Notification' : 'Update Notification'}
      </Button>
    </div>
  )
}

export default NotificationForm
