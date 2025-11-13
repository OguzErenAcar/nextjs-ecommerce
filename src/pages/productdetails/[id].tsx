import React from "react";
import { useRouter } from "next/router";
import { GetServerSidePropsContext } from "next";
import { Product } from "@/models/productModel";
import Image from "next/image";
import Button from "@mui/material/Button";
export default function ProductDetailPage() {
  // Ürün verisi
  const product = {
    id: 1,
    name: "Akıllı Saat Pro Series 5",
    brand: "TechBrand",
    price: 899.90,
    originalPrice: 1199.90,
    discount: 25,
    rating: 4.5,
    reviewCount: 1247,
    description: "Gelişmiş sağlık takibi, GPS, su geçirmez tasarım ve 7 gün pil ömrü ile mükemmel bir akıllı saat deneyimi.",
    features: [
      "Kalp atışı ve SpO2 takibi",
      "GPS ve navigasyon",
      "Suya dayanıklı (50m)",
      "7 gün pil ömrü",
      "iOS ve Android uyumlu"
    ],
    colors: ["Siyah", "Gümüş", "Mavi", "Pembe"],
    sizes: ["38mm", "42mm", "46mm"],
    images: [
      "/images/watch-1.jpg",
      "/images/watch-2.jpg",
      "/images/watch-3.jpg",
      "/images/watch-4.jpg"
    ],
    stock: 15,
    freeShipping: true,
    fastDelivery: true
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Kablosuz Kulaklık",
      price: 1299.90,
      image: "/images/headphones.jpg",
      rating: 4.3
    },
    {
      id: 3,
      name: "Fitness Bilekliği",
      price: 499.90,
      image: "/images/fitness-band.jpg",
      rating: 4.1
    },
    {
      id: 4,
      name: "Phone Case",
      price: 199.90,
      image: "/images/phone-case.jpg",
      rating: 4.4
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <span>Ana Sayfa</span>
          <span>›</span>
          <span>Elektronik</span>
          <span>›</span>
          <span>Akıllı Saatler</span>
          <span>›</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Ürün Görselleri */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-4">⌚</div>
                  <span>Ana Ürün Görseli</span>
                </div>
              </div>
            </div>
            
            {/* Küçük Görseller */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-sm p-2 cursor-pointer hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Görsel {item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ürün Bilgileri */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {/* Marka ve İndirim */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-purple-600">{product.brand}</span>
                <div className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                  %{product.discount} İNDİRİM
                </div>
              </div>

              {/* Ürün Adı */}
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">
                      {star <= Math.floor(product.rating) ? '★' : '☆'}
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">({product.reviewCount} değerlendirme)</span>
              </div>

              {/* Fiyat */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-purple-600">₺{product.price.toFixed(2)}</span>
                <span className="text-lg text-gray-500 line-through">₺{product.originalPrice.toFixed(2)}</span>
                <span className="text-green-600 font-medium">₺{product.originalPrice - product.price} kazanç</span>
              </div>

              {/* Renk Seçimi */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Renk:</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-purple-600 transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Boyut Seçimi */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-800 mb-3">Boyut:</h3>
                <div className="flex space-x-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-purple-600 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stok ve Teslimat */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-2 text-green-600">
                  <span>✓</span>
                  <span>Stokta {product.stock} adet</span>
                </div>
                {product.freeShipping && (
                  <div className="flex items-center space-x-2 text-blue-600">
                    <span>🚚</span>
                    <span>Ücretsiz Kargo</span>
                  </div>
                )}
                {product.fastDelivery && (
                  <div className="flex items-center space-x-2 text-orange-600">
                    <span>⚡</span>
                    <span>Yarın Kargoda</span>
                  </div>
                )}
              </div>

              {/* Aksiyon Butonları */}
              <div className="flex space-x-4 mb-6">
                <button className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                  Sepete Ekle
                </button>
                <button className="flex-1 bg-white border border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-50 transition-colors">
                  Hemen Al
                </button>
              </div>

              {/* Favori Butonu */}
              <button className="w-full bg-gray-100 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                <span>❤️</span>
                <span>Favorilere Ekle</span>
              </button>
            </div>
          </div>
        </div>

        {/* Ürün Açıklama ve Özellikler */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Açıklama */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Ürün Açıklaması</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
            
            <h3 className="text-lg font-bold text-gray-800 mb-3">Özellikler</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-600">
                  <span className="text-green-500">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Teknik Özellikler */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Teknik Özellikler</h2>
            <div className="space-y-3">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Ekran</span>
                <span className="font-medium">1.3 inç AMOLED</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Pil Ömrü</span>
                <span className="font-medium">7 gün</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Su Dayanıklılık</span>
                <span className="font-medium">50 metre</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Bağlantı</span>
                <span className="font-medium">Bluetooth 5.0</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-600">Ağırlık</span>
                <span className="font-medium">38g</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benzer Ürünler */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Benzer Ürünler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <div className="text-4xl mb-2">📱</div>
                    <span className="text-sm">Ürün Görseli</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{relatedProduct.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold">₺{relatedProduct.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-600 text-sm">{relatedProduct.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
 
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };
  const response = await fetch(
    "https://api.escuelajs.co/api/v1/products/" + id
  );
  const result = await response.json();

  return { props: { result } };
}
