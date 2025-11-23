import { useAuth } from "@/contexts/authContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Başlık */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Siparişi Tamamla</h1>
          <p className="text-gray-600 mt-2">
            Son adımda siparişinizi onaylayın
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sol Taraf - Formlar */}
          <div className="lg:w-2/3">
            {/* Teslimat Adresi */}
            <DeliveryAddress />
            <PayMethods />
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

function OrderSummary(): React.ReactNode {
  const router = useRouter();

  const orderConfirm = () => {
    router.push("orderconfirmation");
  };

  return (
    <div className="lg:w-1/3">
      <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Sipariş Özeti</h2>

        {/* Ürünler */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">⌚</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Akıllı Saat Pro</h3>
              <p className="text-sm text-gray-500">1 adet</p>
            </div>
            <span className="font-bold text-purple-600">₺899,90</span>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">🎧</span>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Kablosuz Kulaklık</h3>
              <p className="text-sm text-gray-500">2 adet</p>
            </div>
            <span className="font-bold text-purple-600">₺2.599,80</span>
          </div>
        </div>

        {/* Fiyat Özeti */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Ara Toplam</span>
            <span className="font-medium">₺3.499,70</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Kargo</span>
            <span className="text-green-600 font-medium">Ücretsiz</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">KDV (%18)</span>
            <span className="font-medium">₺629,95</span>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>Toplam</span>
            <span className="text-purple-600">₺4.129,65</span>
          </div>
        </div>

        {/* Kupon */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kupon Kodu
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="Kupon kodunuz"
            />
            <button className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors">
              Uygula
            </button>
          </div>
        </div>

        {/* Sözleşme */}
        <div className="mb-6">
          <div className="flex items-start">
            <input
              type="checkbox"
              id="agreement"
              className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 mt-1"
            />
            <label htmlFor="agreement" className="ml-2 text-sm text-gray-700">
              <a href="#" className="text-purple-600 hover:underline">
                Mesafeli satış sözleşmesini
              </a>{" "}
              okudum ve kabul ediyorum
            </label>
          </div>
        </div>

        {/* Ödeme Butonu */}
        <button
          onClick={orderConfirm}
          className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>🔒</span>
          <span>Güvenli Ödeme Yap</span>
        </button>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            SSL sertifikası ile güvenli alışveriş
          </p>
        </div>
      </div>
    </div>
  );
}

function DeliveryAddress(): React.ReactNode {
  const auth = useAuth();
  const [enabled, setEnabled] = useState<boolean>(auth?.User ? false : true);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Teslimat Adresi</h2>

      {auth?.User && (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kayıtlı Addreslerim:
            </label>
            <select
              disabled={enabled}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option>Ev</option>
              <option>Ev3</option>
              <option>Ev2</option>
            </select>
          </div>
          <div className="flex gap-4 my-5">
            <input
              type="checkbox"
              id="chck"
              name="chck"
              onChange={(e) => setEnabled(e.target.checked)}
              className="block text-sm font-medium text-gray-700 mb-2"
            />
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kayıtlı Adresim yok
            </label>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ad
          </label>
          <input
            disabled={!enabled}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Adınız"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Soyad
          </label>
          <input
            disabled={!enabled}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Soyadınız"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Adres
        </label>
        <input
          disabled={!enabled}
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Cadde, sokak, apartman no"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            İl
          </label>
          <select
            disabled={!enabled}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option>İstanbul</option>
            <option>Ankara</option>
            <option>İzmir</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            İlçe
          </label>
          <select
            disabled={!enabled}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          >
            <option>Kadıköy</option>
            <option>Beşiktaş</option>
            <option>Şişli</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Posta Kodu
          </label>
          <input
            disabled={!enabled}
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="34758"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Telefon
        </label>
        <input
          disabled={!enabled}
          type="tel"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="5XX XXX XX XX"
        />
      </div>

      {useAuth()?.User && (
        <div className="flex items-center">
          <input
            disabled={!enabled}
            type="checkbox"
            id="saveAddress"
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="saveAddress" className="ml-2 text-sm text-gray-700">
            Bu adresi varsayılan adresim olarak kaydet
          </label>
        </div>
      )}
    </div>
  );
}

function PayMethods(): React.ReactNode {
  const auth = useAuth();
  const [enabled, setEnabled] = useState<boolean>(auth?.User ? false : true);

  const setMethodType = (el: string) => {
    const container = document.getElementById("CardOptions") as HTMLDivElement;
    const inputs = container.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      if (inputs[index].name != el) inputs[index].checked = false;
    }
  };

  const setInputsDisabled = (id: string, state: boolean) => {
    const container = document.getElementById(id) as HTMLDivElement;
    const inputs = container.getElementsByTagName("input");
    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index] as HTMLInputElement;
      input.disabled = state;
    }
  };

  useEffect(() => {
    if (auth?.User) {
      setInputsDisabled("CardOptions", true);
      setInputsDisabled("CardInfo", true);
    }
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Ödeme Yöntemi</h2>

      {auth?.User && (
        <div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kayıtlı Kartlarım:
            </label>
            <select
              disabled={!enabled}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            >
              <option>Kart1</option>
              <option>Kart2</option>
              <option>Kart3</option>
            </select>
          </div>
          <div className="flex gap-4 my-5">
            <input
              type="checkbox"
              id="chck"
              name="chck"
              onChange={(e) => {
                setEnabled(!e.target.checked);
                setInputsDisabled("CardOptions", !e.target.checked);
                setInputsDisabled("CardInfo", !e.target.checked);
              }}
              className="block text-sm font-medium text-gray-700 mb-2"
            />
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kayıtlı Kartım Yok.
            </label>
          </div>
        </div>
      )}

      {/* Kart Seçenekleri */}
      <div id="CardOptions" className="space-y-3 mb-6">
        <div className="flex items-center p-4 border-2 border-purple-600 rounded-lg bg-purple-50">
          <input
            type="radio"
            name="CrediCard"
            checked
            onChange={(e) => {
              setMethodType(e.target.name);
              setInputsDisabled("CardInfo", !e.target.checked);
            }}
            className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
          />
          <div className="ml-3 flex-1">
            <span className="font-medium text-gray-800">Kredi/Banka Kartı</span>
          </div>
          <div className="flex space-x-2">
            <div className="bg-gray-200 px-2 py-1 rounded text-xs">VISA</div>
            <div className="bg-gray-200 px-2 py-1 rounded text-xs">MASTER</div>
          </div>
        </div>

        <div className="flex items-center p-4 border-2 border-gray-300 rounded-lg hover:border-purple-400 transition-colors">
          <input
            type="radio"
            name="AtTheDoor"
            onChange={(e) => {
              setMethodType(e.target.name);
              setInputsDisabled("CardInfo", e.target.checked);
            }}
            className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
          />
          <div className="ml-3 flex-1">
            <span className="font-medium text-gray-800">Kapıda Ödeme</span>
          </div>
        </div>
      </div>

      {/* Kart Bilgileri */}
      <div id="CardInfo" className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            placeholder="Ad Soyad"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Kart Numarası
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent pl-12"
              placeholder="1234 5678 9012 3456"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <div className="bg-gray-200 px-2 py-1 rounded text-xs">VISA</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Son Kullanma
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="AA/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              CVV
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              placeholder="123"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="saveCard"
            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          />
          <label htmlFor="saveCard" className="ml-2 text-sm text-gray-700">
            Kart bilgilerimi kaydet
          </label>
        </div>
      </div>
    </div>
  );
}
