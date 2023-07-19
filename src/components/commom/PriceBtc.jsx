import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from 'react';

const PriceBtc = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7&interval=daily");
      const json = await response.json();
      const prices = json.prices.reduce((acc, curr) => {
        const date = new Date(curr[0]).toLocaleDateString("en-US", { month: "short", day: "numeric" });
        if (!acc[date]) {
          acc[date] = {
            name: date,
            y: curr[1],
            count: 1
          };
        } else {
          acc[date].y += curr[1];
          acc[date].count += 1;
        }
        return acc;
      }, {});

      const formattedPrices = Object.values(prices).map(price => {
        return {
          name: price.name,
          y: price.y / price.count,
        };
      });

      setData(formattedPrices);
    };
    fetchData();
  }, []);

  const minY = Math.min(...data.map(price => price.y));
  const maxY = Math.ceil(Math.max(...data.map(price => price.y))) - 500;

  return (
    <ResponsiveContainer width={500} height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
        <XAxis dataKey="name" stroke="#fff" tickLine={false} tick={{ fill: "#fff", fontSize: 11 }} />
        <YAxis domain={[minY, maxY]} stroke="#fff" tick={false} tickLine={false} axisLine={false} />
        <Tooltip formatter={(value) => parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) + " USD"} labelStyle={{ visibility: "hidden" }} />
        <Line type="monotone" dataKey="y" stroke="#f7931a" strokeWidth={3} dot={{ stroke: "#f7931a", strokeWidth: 2, r: 4 }} activeDot={{ r: 4 }} animationDuration={1000} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceBtc;