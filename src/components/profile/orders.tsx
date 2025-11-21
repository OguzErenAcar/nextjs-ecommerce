import React from 'react';
import { Button, IconButton, Card, CardContent, Typography, Box, Chip } from '@mui/material';
import { Edit, Delete, Visibility } from '@mui/icons-material';

interface Order {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Cancelled';
  total: number;
  items: number;
  trackingNumber?: string;
}

function Orders() {
  const orders: Order[] = [
    {
      id: 'ORD-7832',
      date: '2024-01-15',
      status: 'Delivered',
      total: 249.99,
      items: 3,
      trackingNumber: 'TRK78324561'
    },
    {
      id: 'ORD-7831',
      date: '2024-01-12',
      status: 'Processing',
      total: 149.50,
      items: 2
    },
    {
      id: 'ORD-7829',
      date: '2024-01-08',
      status: 'Cancelled',
      total: 89.99,
      items: 1
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'success';
      case 'Processing': return 'warning';
      case 'Cancelled': return 'error';
      default: return 'default';
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold">
          My Orders
        </Typography>
        <Button variant="outlined" color="primary">
          Order History
        </Button>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="w-full hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Order Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                    <Typography variant="h6" className="font-semibold">
                      {order.id}
                    </Typography>
                    <Chip 
                      label={order.status} 
                      color={getStatusColor(order.status) as any}
                      size="small"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                    <div>
                      <Typography color="textSecondary" className="text-xs">
                        Order Date
                      </Typography>
                      <Typography className="font-medium">
                        {new Date(order.date).toLocaleDateString()}
                      </Typography>
                    </div>
                    <div>
                      <Typography color="textSecondary" className="text-xs">
                        Items
                      </Typography>
                      <Typography className="font-medium">
                        {order.items} item{order.items > 1 ? 's' : ''}
                      </Typography>
                    </div>
                    <div>
                      <Typography color="textSecondary" className="text-xs">
                        Total Amount
                      </Typography>
                      <Typography className="font-medium">
                        ${order.total.toFixed(2)}
                      </Typography>
                    </div>
                  </div>

                  {order.trackingNumber && (
                    <div className="mt-3">
                      <Typography color="textSecondary" className="text-xs">
                        Tracking Number
                      </Typography>
                      <Typography className="font-medium text-sm">
                        {order.trackingNumber}
                      </Typography>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 lg:flex-col lg:gap-1">
                  <Button
                    startIcon={<Visibility />}
                    variant="outlined"
                    size="small"
                    className="whitespace-nowrap"
                  >
                    View Details
                  </Button>
                  {order.status === 'Processing' && (
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      className="whitespace-nowrap"
                    >
                      Cancel Order
                    </Button>
                  )}
                  {order.status === 'Delivered' && (
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      className="whitespace-nowrap"
                    >
                      Buy Again
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {orders.length === 0 && (
        <Card className="w-full text-center py-8">
          <CardContent>
            <Typography variant="h6" color="textSecondary">
              No orders found
            </Typography>
            <Typography color="textSecondary" className="mt-2">
              You haven t placed any orders yet.
            </Typography>
            <Button variant="contained" className="mt-4">
              Start Shopping
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Orders;