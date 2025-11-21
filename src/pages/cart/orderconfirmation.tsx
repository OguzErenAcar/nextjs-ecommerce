import { useRouter } from "next/router";

export default function OrderConfirmationPage() {
  const router = useRouter();

  const order = {
    id: "TRD-2024-854216",
    date: "15 Kasım 2024",
    status: "Sipariş Alındı",
    estimatedDelivery: "18 Kasım 2024",
    items: [
      {
        id: 1,
        name: "Akıllı Saat Pro Series 5",
        price: 899.9,
        quantity: 1,
        image: "/images/watch.jpg",
        brand: "TechBrand",
      },
      {
        id: 2,
        name: "Kablosuz Kulaklık",
        price: 1299.9,
        quantity: 2,
        image: "/images/headphones.jpg",
        brand: "AudioPro",
      },
    ],
    shippingAddress: {
      name: "Ahmet Yılmaz",
      address: "Atatürk Cad. No:123 D:4",
      district: "Kadıköy",
      city: "İstanbul",
      postalCode: "34758",
      phone: "+90 555 123 45 67",
    },
    paymentMethod: {
      type: "Kredi Kartı",
      lastFour: "3456",
      brand: "VISA",
    },
    summary: {
      subtotal: 3499.7,
      shipping: 0,
      tax: 629.95,
      total: 4129.65,
    },
  };

  const trackOrder = () => {
    router.push("trackorder");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Başarı Mesajı */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl text-green-600">✓</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Siparişiniz Alındı!
          </h1>
          <p className="text-gray-600 text-lg">
            Sipariş numaranız:{" "}
            <span className="font-bold text-purple-600">{order.id}</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Taraf - Sipariş Detayları */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sipariş Durumu */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Sipariş Durumu
              </h2>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-purple-600">
                    {order.status}
                  </div>
                  <p className="text-gray-600">Sipariş tarihi: {order.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Tahmini Teslimat</div>
                  <div className="text-lg font-bold text-green-600">
                    {order.estimatedDelivery}
                  </div>
                </div>
              </div>

              {/* İlerleme Çubuğu */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-purple-600">
                    Sipariş Alındı
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Hazırlanıyor
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Kargoda
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Teslim Edildi
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-1/4"></div>
                </div>
              </div>
            </div>

            {/* Sipariş Edilen Ürünler */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Sipariş Edilen Ürünler
              </h2>
              <div className="space-y-4">
                {order.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg"
                  >
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400 text-2xl">📱</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">{item.name}</h3>
                      <p className="text-gray-500 text-sm">{item.brand}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-sm text-gray-600">
                          Adet: {item.quantity}
                        </span>
                        <span className="text-sm text-gray-600">
                          Renk: Siyah
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-purple-600">
                        ₺{(item.price * item.quantity).toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        ₺{item.price.toFixed(2)} / adet
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Teslimat Adresi */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Teslimat Adresi
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Alıcı:</span>
                  <span className="font-medium">
                    {order.shippingAddress.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Adres:</span>
                  <span className="font-medium text-right">
                    {order.shippingAddress.address}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">İlçe/İl:</span>
                  <span className="font-medium">
                    {order.shippingAddress.district},{" "}
                    {order.shippingAddress.city}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posta Kodu:</span>
                  <span className="font-medium">
                    {order.shippingAddress.postalCode}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Telefon:</span>
                  <span className="font-medium">
                    {order.shippingAddress.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Sağ Taraf - Özet ve Aksiyonlar */}
          <div className="space-y-6">
            {/* Sipariş Özeti */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Sipariş Özeti
              </h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sipariş No:</span>
                  <span className="font-medium">{order.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ödeme Yöntemi:</span>
                  <span className="font-medium">
                    {order.paymentMethod.type} ••••{" "}
                    {order.paymentMethod.lastFour}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sipariş Tarihi:</span>
                  <span className="font-medium">{order.date}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam:</span>
                  <span className="font-medium">
                    ₺{order.summary.subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo:</span>
                  <span className="text-green-600 font-medium">Ücretsiz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">KDV (%18):</span>
                  <span className="font-medium">
                    ₺{order.summary.tax.toFixed(2)}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-bold">
                  <span>Toplam:</span>
                  <span className="text-purple-600">
                    ₺{order.summary.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Hızlı Aksiyonlar */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Sonraki Adımlar
              </h2>

              <div className="space-y-3">
                <button 
                onClick={trackOrder}
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                  Siparişi Takip Et
                </button>
                <button className="w-full bg-white border border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
                  Fatura Bilgileri
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Alışverişe Devam Et
                </button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-bold text-blue-800 mb-2">
                  📧 E-posta Onayı
                </h3>
                <p className="text-blue-700 text-sm">
                  Sipariş detayları e-posta adresinize gönderildi. Spam
                  klasörünüzü kontrol etmeyi unutmayın.
                </p>
              </div>
            </div>

            {/* Müşteri Hizmetleri */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Yardıma mı İhtiyacınız Var?
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">📞</span>
                  <div>
                    <div className="font-medium">0850 850 85 85</div>
                    <div className="text-sm text-gray-600">
                      7/24 Müşteri Hizmetleri
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">💬</span>
                  <div>
                    <div className="font-medium">Canlı Destek</div>
                    <div className="text-sm text-gray-600">
                      Online chat desteği
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
