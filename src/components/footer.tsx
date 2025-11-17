import React from 'react'

function footer() {
  return (
         <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Hakkımızda</h3>
              <ul className="space-y-2">
                <li>Biz Kimiz</li>
                <li>Kariyer</li>
                <li>İletişim</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Yardım</h3>
              <ul className="space-y-2">
                <li>Sıkça Sorulan Sorular</li>
                <li>İade Koşulları</li>
                <li>Gizlilik Politikası</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Müşteri Hizmetleri</h3>
              <ul className="space-y-2">
                <li>0850 850 85 85</li>
                <li>7/24 Destek</li>
                <li>Canlı Yardım</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Bizi Takip Edin</h3>
              <ul className="space-y-2">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default footer
