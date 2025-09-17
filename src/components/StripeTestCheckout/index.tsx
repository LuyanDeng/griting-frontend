'use client';

import { useState } from 'react';

interface TestCheckoutProps {
    eventId: string;
    eventName: string;
    eventDescription: string;
    eventImage?: string;
    amount: number; 
    userId: string;
}

export default function StripeTestCheckout({
    eventId,
    eventName,
    eventDescription,
    eventImage,
    amount,
    userId
}: TestCheckoutProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventId,
                    eventName,
                    eventDescription,
                    eventImage,
                    amount,
                    userId,
                    customerEmail: 'test@example.com', 
                    quantity: 1,
                    ticketType: 'standard',
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create checkout session');
            }

            if (data.url) {
                window.location.href = data.url;
            }

        } catch (err: any) {
            console.error('Checkout error:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Checkout</h3>
            
            <div className="mb-4 p-4 bg-gray-50 rounded">
                <h4 className="font-medium">{eventName}</h4>
                <p className="text-sm text-gray-600">{eventDescription}</p>
                <p className="text-lg font-bold text-blue-600 mt-2">
                    ${(amount / 100).toFixed(2)}
                </p>
            </div>

            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                </div>
            )}

            <button
                onClick={handleCheckout}
                disabled={loading}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? '创建支付会话...' : '立即购买'}
            </button>

          
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                    <strong>test mode </strong> 
                </p>
            </div>
        </div>
    );
}
