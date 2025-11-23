// Sepet Öğesi Componenti
export default function CartItem({ item }:{item:any}) {
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