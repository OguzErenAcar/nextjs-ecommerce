export default function HomePage() {
  return (
    <div className="bg-gray-50">
 

      {/* Ana İçerik */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Bölümü */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <h1 className="text-4xl font-bold mb-4">Yaz Kampanyaları</h1>
            <p className="text-xl mb-6">En iyi fırsatlar burada! ye varan indirimler</p>
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold">Hemen Keşfet</button>
          </div>
        </section>

        {/* Kategoriler */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Kategoriler</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg">Elektronik</h3>
            </div>
            <div className="bg-green-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg">Moda</h3>
            </div>
            <div className="bg-yellow-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg">Ev & Yaşam</h3>
            </div>
            <div className="bg-red-100 p-6 rounded-xl text-center">
              <h3 className="font-bold text-lg">Kozmetik</h3>
            </div>
          </div>
        </section>

        {/* Kampanyalar - Zigzag Desen */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Özel Kampanyalar</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 bg-orange-200 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Flash Sale</h3>
                <p className="mb-4">Sadece 24 saat! Fırsatları kaçırma</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Katıl</button>
              </div>
              <div className="md:w-1/2 bg-blue-200 p-8 rounded-2xl md:mt-8">
                <h3 className="text-xl font-bold mb-4">İlk Alışverişe Özel</h3>
                <p className="mb-4">Yeni müşterilere %20 indirim</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Hemen Al</button>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="md:w-1/2 bg-green-200 p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Ücretsiz Kargo</h3>
                <p className="mb-4">150 TL ve üzeri alışverişlerde</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">Detaylar</button>
              </div>
              <div className="md:w-1/2 bg-purple-200 p-8 rounded-2xl md:mt-8">
                <h3 className="text-xl font-bold mb-4">Ödeme Kolaylığı</h3>
                <p className="mb-4">Taksit seçenekleri</p>
                <button className="bg-purple-500 text-white px-4 py-2 rounded-lg">İncele</button>
              </div>
            </div>
          </div>
        </section>

        {/* Popüler Ürünler - Asimetrik Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popüler Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Akıllı Saat</h3>
              <p className="text-gray-600 mb-2">Spor ve sağlık takibi</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">₺899,90</span>
                <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded">Sepete Ekle</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Laptop</h3>
              <p className="text-gray-600 mb-2">Yüksek performanslı iş bilgisayarı</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">₺12.499,90</span>
                <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded">Sepete Ekle</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Kulaklık</h3>
              <p className="text-gray-600 mb-2">Wireless noise cancelling</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">₺1.299,90</span>
                <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded">Sepete Ekle</button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Tablet</h3>
              <p className="text-gray-600 mb-2">10 inç ekran, 128 GB</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-600 font-bold">₺4.599,90</span>
                <button className="bg-purple-100 text-purple-600 px-3 py-1 rounded">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </section>

        {/* Markalar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popüler Markalar</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm text-center">
                <div className="font-bold text-gray-700">MARKA {i+1}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
 
    </div>
  );
}