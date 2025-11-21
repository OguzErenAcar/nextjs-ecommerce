export default function OrderTrackingPage() {
  // Sipariş bilgileri
  const order = {
    id: "TRD-2024-854216",
    date: "15 Kasım 2024",
    status: "Kargoda",
    estimatedDelivery: "18 Kasım 2024",
    carrier: "Aras Kargo",
    trackingNumber: "AK123456789TR",
    items: [
      {
        id: 1,
        name: "Akıllı Saat Pro Series 5",
        price: 899.90,
        quantity: 1,
        image: "/images/watch.jpg"
      },
      {
        id: 2,
        name: "Kablosuz Kulaklık",
        price: 1299.90,
        quantity: 2,
        image: "/images/headphones.jpg"
      }
    ],
    shippingAddress: {
      name: "Ahmet Yılmaz",
      address: "Atatürk Cad. No:123 D:4",
      district: "Kadıköy",
      city: "İstanbul"
    },
    timeline: [
      {
        status: "Sipariş Alındı",
        date: "15 Kas 2024",
        time: "14:30",
        completed: true,
        description: "Siparişiniz başarıyla oluşturuldu"
      },
      {
        status: "Hazırlanıyor",
        date: "15 Kas 2024",
        time: "16:45",
        completed: true,
        description: "Siparişiniz hazırlanmaya başlandı"
      },
      {
        status: "Kargoya Verildi",
        date: "16 Kas 2024",
        time: "09:15",
        completed: true,
        description: "Siparişiniz kargoya verildi"
      },
      {
        status: "Dağıtım Merkezinde",
        date: "17 Kas 2024",
        time: "07:30",
        completed: true,
        description: "Siparişiniz İstanbul dağıtım merkezinde"
      },
      {
        status: "Dağıtıma Çıktı",
        date: "18 Kas 2024",
        time: "08:00",
        completed: false,
        description: "Siparişiniz dağıtım aracına yüklendi"
      },
      {
        status: "Teslim Edildi",
        date: "",
        time: "",
        completed: false,
        description: "Siparişiniz teslim edilecek"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Başlık */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Sipariş Takibi</h1>
          <p className="text-gray-600">Siparişinizin güncel durumunu takip edin</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf - Sipariş Detayları */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sipariş Özeti */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">Sipariş #{order.id}</h2>
                  <p className="text-gray-600">Sipariş Tarihi: {order.date}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {order.status}
                  </div>
                </div>
              </div>

              {/* Kargo Bilgileri */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">Kargo Firması</h3>
                  <p className="text-blue-700">{order.carrier}</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-800 mb-1">Takip Numarası</h3>
                  <p className="text-blue-700">{order.trackingNumber}</p>
                </div>
              </div>
            </div>

            {/* Sipariş Zaman Çizelgesi */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Sipariş Durumu</h2>
              
              <div className="space-y-8">
                {order.timeline.map((step, index) => (
                  <div key={index} className="flex">
                    {/* Zaman Çizelgesi Çizgisi ve Noktalar */}
                    <div className="flex flex-col items-center mr-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}>
                        {step.completed ? (
                          <span className="text-white text-sm">✓</span>
                        ) : (
                          <span className="text-white text-sm">{index + 1}</span>
                        )}
                      </div>
                      {index < order.timeline.length - 1 && (
                        <div className={`w-0.5 h-16 ${
                          step.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}></div>
                      )}
                    </div>

                    {/* Step İçeriği */}
                    <div className="flex-1 pb-8">
                      <div className={`p-4 rounded-lg ${
                        step.completed ? 'bg-green-50 border border-green-200' : 'bg-gray-50'
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className={`font-bold ${
                            step.completed ? 'text-green-800' : 'text-gray-800'
                          }`}>
                            {step.status}
                          </h3>
                          {step.date && (
                            <span className="text-sm text-gray-500">
                              {step.date} {step.time}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm ${
                          step.completed ? 'text-green-700' : 'text-gray-600'
                        }`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teslimat Adresi */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Teslimat Adresi</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Alıcı:</span>
                  <span className="font-medium">{order.shippingAddress.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Adres:</span>
                  <span className="font-medium text-right">{order.shippingAddress.address}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">İlçe/İl:</span>
                  <span className="font-medium">{order.shippingAddress.district}, {order.shippingAddress.city}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Bilgiler ve Aksiyonlar */}
          <div className="space-y-6">
            {/* Tahmini Teslimat */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Tahmini Teslimat</h2>
              <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                <div className="text-2xl font-bold text-orange-600 mb-2">{order.estimatedDelivery}</div>
                <p className="text-orange-700 text-sm">Tahmini teslimat tarihi</p>
              </div>
            </div>

            {/* Sipariş Edilen Ürünler */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Sipariş Edilen Ürünler</h2>
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">📱</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                      <p className="text-gray-500 text-xs">Adet: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hızlı Aksiyonlar */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Hızlı İşlemler</h2>
              
              <div className="space-y-3">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
                  <span>📦</span>
                  <span>Kargo Detayları</span>
                </button>
                <button className="w-full bg-white border border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors flex items-center justify-center space-x-2">
                  <span>🧾</span>
                  <span>Faturayı Görüntüle</span>
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <span>🔄</span>
                  <span>Siparişi Tekrarla</span>
                </button>
              </div>
            </div>

            {/* Yardım */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Yardım</h2>
              
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-1">Siparişim Gecikti</h3>
                  <p className="text-blue-700 text-sm">Teslimat tarihi geçtiyse iletişime geçin</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-800 mb-1">İade & Değişim</h3>
                  <p className="text-green-700 text-sm">30 gün içinde iade edebilirsiniz</p>
                </div>

                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Müşteri Hizmetleri
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}