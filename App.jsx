export default function App() {
  return (
    <main className="bg-purple-900 text-white min-h-screen font-sans">
      <header className="text-center p-6 bg-yellow-500 text-purple-900 font-bold text-3xl">
        SQUEEZE – Fresh Juice
      </header>

      <section className="p-6 text-center">
        <h2 className="text-2xl mb-2">About Us</h2>
        <p className="max-w-xl mx-auto">
          We are a family business making your day better with our fresh juice! Delivery only – order now on WhatsApp or social media.
        </p>
      </section>

      <section className="p-6">
        <h2 className="text-2xl text-center mb-4">Fresh Juices</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-sm bg-white text-purple-900 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-yellow-400">
                <th className="p-2">Juice</th>
                <th className="p-2">250 ml</th>
                <th className="p-2">330 ml</th>
                <th className="p-2">1 Liter</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'مانجو', prices: [25, 30, 70] },
                { name: 'فراولة', prices: [25, 30, 70] },
                { name: 'كيوي', prices: [40, 50, 120] },
                { name: 'أفوكادو', prices: [40, 50, 120] },
                { name: 'برتقال جزر', prices: [20, 25, 65] },
                { name: 'بطيخ', prices: [20, 25, 65] },
                { name: 'جوافة', prices: [20, 25, 65] },
                { name: 'يوسفي', prices: [15, 20, 60] },
                { name: 'مانجو كيوي', prices: [40, 50, 95] },
                { name: 'جوافة رمان', prices: [25, 30, 70] },
                { name: 'بلح لبن', prices: [25, 30, 65] },
              ].map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2 font-bold">{item.name}</td>
                  {item.prices.map((price, i) => (
                    <td key={i} className="p-2">{price} EGP</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-6">
        <h2 className="text-2xl text-center mb-4">Borscht (By Weight)</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left text-sm bg-white text-purple-900 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-yellow-400">
                <th className="p-2">Type</th>
                <th className="p-2">1/4 KG</th>
                <th className="p-2">1 KG</th>
              </tr>
            </thead>
            <tbody>
              {[
                'بطيخ',
                'رمان',
                'جوافة',
                'فراولة',
                'بلح'
              ].map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2 font-bold">{item}</td>
                  <td className="p-2">20 EGP</td>
                  <td className="p-2">70 EGP</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="p-6 text-center">
        <h2 className="text-2xl mb-4">Order Now</h2>
        <p className="mb-2">WhatsApp: <a href="https://wa.me/201108613263" className="text-yellow-300 underline">01108613263</a></p>
        <p className="mb-2">Instagram: <a href="https://www.instagram.com/squeeze_27" className="text-yellow-300 underline">@squeeze_27</a></p>
        <p>Facebook: <a href="https://www.facebook.com/share/1CovBfisGW/" className="text-yellow-300 underline">Squeeze Page</a></p>
      </section>

      <footer className="text-center p-4 bg-purple-800 text-white text-sm">
        &copy; 2025 SQUEEZE. All rights reserved.
      </footer>
    </main>
  );
}