import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box, Chip, IconButton, Dialog } from '@mui/material';
import { Edit, Delete, LocationOn, Star, StarBorder } from '@mui/icons-material';

interface Address {
  id: string;
  title: string;
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
}

function Address() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: '1',
      title: 'Home',
      fullName: 'John Doe',
      address: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      isDefault: true
    },
    {
      id: '2',
      title: 'Work',
      fullName: 'John Doe',
      address: '456 Business Ave, Suite 300',
      city: 'New York',
      state: 'NY',
      zipCode: '10002',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      isDefault: false
    }
  ]);

  const setDefaultAddress = (id: string) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
  };

  const deleteAddress = (id: string) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold">
          My Addresses
        </Typography>
        <Button variant="contained" color="primary">
          Add New Address
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {addresses.map((address) => (
          <Card key={address.id} className="w-full hover:shadow-lg transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <LocationOn color="primary" />
                  <Typography variant="h6" className="font-semibold">
                    {address.title}
                  </Typography>
                  {address.isDefault && (
                    <Chip 
                      label="Default" 
                      color="primary" 
                      size="small"
                    />
                  )}
                </div>
                <div className="flex gap-1">
                  <IconButton 
                    size="small" 
                    onClick={() => setDefaultAddress(address.id)}
                    color={address.isDefault ? "primary" : "default"}
                  >
                    {address.isDefault ? <Star /> : <StarBorder />}
                  </IconButton>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    color="error"
                    onClick={() => deleteAddress(address.id)}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <Typography className="font-medium">
                  {address.fullName}
                </Typography>
                <Typography color="textSecondary">
                  {address.address}
                </Typography>
                <Typography color="textSecondary">
                  {address.city}, {address.state} {address.zipCode}
                </Typography>
                <Typography color="textSecondary">
                  {address.country}
                </Typography>
                <Typography color="textSecondary" className="mt-2">
                  Phone: {address.phone}
                </Typography>
              </div>

              <div className="flex gap-2 mt-4">
                {!address.isDefault && (
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => setDefaultAddress(address.id)}
                  >
                    Set as Default
                  </Button>
                )}
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                >
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {addresses.length === 0 && (
        <Card className="w-full text-center py-8">
          <CardContent>
            <LocationOn sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="textSecondary">
              No addresses saved
            </Typography>
            <Typography color="textSecondary" className="mt-2">
              Add your first address to get started.
            </Typography>
            <Button variant="contained" className="mt-4">
              Add Address
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Address;