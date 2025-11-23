import CartItem from "@/components/cart/cartItem";
import { useRouter } from "next/router";



export default function CartPage() {


  const router=useRouter();

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
  
  
  const  PayButton=()=> {
    router.push("cart/infosdelivery")
  }


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

                <button 
                onClick={PayButton}
                className="w-full cursor-pointer  bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors">
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

