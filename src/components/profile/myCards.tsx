import React, { useState } from 'react';
import { Button, Card, CardContent, Typography, Box, Chip, IconButton, Dialog } from '@mui/material';
import { Edit, Delete, CreditCard, Star, StarBorder } from '@mui/icons-material';

interface CreditCard {
  id: string;
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cardType: 'Visa' | 'Mastercard' | 'American Express';
  isDefault: boolean;
}

function MyCards() {
  const [cards, setCards] = useState<CreditCard[]>([
    {
      id: '1',
      cardNumber: '**** **** **** 1234',
      cardHolder: 'John Doe',
      expiryDate: '12/25',
      cardType: 'Visa',
      isDefault: true
    },
    {
      id: '2',
      cardNumber: '**** **** **** 5678',
      cardHolder: 'John Doe',
      expiryDate: '08/24',
      cardType: 'Mastercard',
      isDefault: false
    }
  ]);

  const setDefaultCard = (id: string) => {
    setCards(cards.map(card => ({
      ...card,
      isDefault: card.id === id
    })));
  };

  const deleteCard = (id: string) => {
    setCards(cards.filter(card => card.id !== id));
  };

  const getCardColor = (cardType: string) => {
    switch (cardType) {
      case 'Visa': return '#1a1f71';
      case 'Mastercard': return '#eb001b';
      case 'American Express': return '#2e77bc';
      default: return '#666';
    }
  };

  const getCardLogo = (cardType: string) => {
    switch (cardType) {
      case 'Visa': return 'VISA';
      case 'Mastercard': return 'MC';
      case 'American Express': return 'AMEX';
      default: return 'CARD';
    }
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h4" className="font-bold">
          My Cards
        </Typography>
        <Button variant="contained" color="primary">
          Add New Card
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {cards.map((card) => (
          <Card 
            key={card.id} 
            className="w-full hover:shadow-lg transition-shadow relative overflow-hidden"
            sx={{
              background: `linear-gradient(135deg, ${getCardColor(card.cardType)} 0%, ${getCardColor(card.cardType)}99 100%)`,
              color: 'white'
            }}
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <CreditCard sx={{ fontSize: 32 }} />
                <div className="flex gap-1">
                  <IconButton 
                    size="small" 
                    onClick={() => setDefaultCard(card.id)}
                    sx={{ color: 'white' }}
                  >
                    {card.isDefault ? <Star /> : <StarBorder />}
                  </IconButton>
                  <IconButton size="small" sx={{ color: 'white' }}>
                    <Edit />
                  </IconButton>
                  <IconButton 
                    size="small" 
                    sx={{ color: 'white' }}
                    onClick={() => deleteCard(card.id)}
                  >
                    <Delete />
                  </IconButton>
                </div>
              </div>

              <Typography variant="h5" className="font-mono mb-6 tracking-wider">
                {card.cardNumber}
              </Typography>

              <div className="flex justify-between items-end">
                <div className="space-y-1">
                  <Typography variant="caption" className="opacity-80">
                    Card Holder
                  </Typography>
                  <Typography className="font-medium">
                    {card.cardHolder}
                  </Typography>
                </div>
                
                <div className="space-y-1 text-right">
                  <Typography variant="caption" className="opacity-80">
                    Expires
                  </Typography>
                  <Typography className="font-medium">
                    {card.expiryDate}
                  </Typography>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <Chip 
                  label={getCardLogo(card.cardType)}
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.2)', 
                    color: 'white',
                    fontWeight: 'bold'
                  }}
                />
                {card.isDefault && (
                  <Chip 
                    label="Default" 
                    sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.3)', 
                      color: 'white' 
                    }}
                    size="small"
                  />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {cards.length === 0 && (
        <Card className="w-full text-center py-8">
          <CardContent>
            <CreditCard sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
            <Typography variant="h6" color="textSecondary">
              No credit cards saved
            </Typography>
            <Typography color="textSecondary" className="mt-2">
              Add your first credit card for faster checkout.
            </Typography>
            <Button variant="contained" className="mt-4">
              Add Credit Card
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default MyCards;