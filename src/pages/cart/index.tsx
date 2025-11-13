export default function CartPage() {
  // Sepet öğeleri (örnek veri)
  const cartItems = [
    {
      id: 1,
      name: "Akıllı Saat",
      price: 899.90,
      quantity: 1,
      image: "/images/smart-watch.jpg",
      brand: "TechBrand"
    },
    {
      id: 2,
      name: "Kablosuz Kulaklık",
      price: 1299.90,
      quantity: 2,
      image: "/images/headphones.jpg",
      brand: "AudioPro"
    },
    {
      id: 3,
      name: "Laptop",
      price: 12499.90,
      quantity: 1,
      image: "/images/laptop.jpg",
      brand: "TechMaster"
    }
  ];

  // Toplam fiyat hesaplama
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Sepetim</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} ürün</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sepet Öğeleri */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            {/* Boş Sepet */}
            {cartItems.length === 0 && (
              <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                <div className="text-6xl mb-4">🛒</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">Sepetiniz boş</h3>
                <p className="text-gray-500 mb-4">Alışverişe devam edin!</p>
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium">
                  Alışverişe Devam Et
                </button>
              </div>
            )}
          </div>

          {/* Sepet Özeti */}
          {cartItems.length > 0 && (
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Sipariş Özeti</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ara Toplam</span>
                    <span className="font-medium">₺{totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kargo</span>
                    <span className="text-green-600 font-medium">Ücretsiz</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vergiler</span>
                    <span className="font-medium">₺{(totalPrice * 0.18).toFixed(2)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Toplam</span>
                    <span className="text-purple-600">
                      ₺{(totalPrice * 1.18).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors">
                  Güvenli Ödeme Yap
                </button>

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-500">
                    3D Secure ile güvenli alışveriş
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Sepet Öğesi Componenti
function CartItem({ item }) {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden max-h-[250px]">
      <div className="flex h-full">
        {/* Ürün Görseli */}
        <div className="w-1/4 bg-gray-200 flex items-center justify-center">
          <div className="text-gray-400 text-center p-4">
            <div className="text-3xl mb-2">📱</div>
            <span className="text-sm">Ürün Görseli</span>
          </div>
        </div>

        {/* Ürün Bilgileri */}
        <div className="w-3/4 p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.brand}</p>
              </div>
              <button className="text-gray-400 hover:text-red-500 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              {/* Miktar Kontrolleri */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                  -
                </button>
                <span className="px-4 py-1 border-x border-gray-300">{item.quantity}</span>
                <button className="px-3 py-1 text-gray-600 hover:bg-gray-100 transition-colors">
                  +
                </button>
              </div>

              {/* Fiyat */}
              <div className="text-right">
                <div className="text-lg font-bold text-purple-600">
                  ₺{(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="text-sm text-gray-500">
                  ₺{item.price.toFixed(2)} / adet
                </div>
              </div>
            </div>
          </div>

          {/* Hızlı Aksiyonlar */}
          <div className="flex gap-4 mt-4 pt-4 border-t border-gray-100">
            <button className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
              ❤️ Favorilere Ekle
            </button>
            <button className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
              💾 Daha Sonra Al
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}