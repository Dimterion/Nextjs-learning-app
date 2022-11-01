import styles from "../styles/Crypto.module.css";

export default function BitcoinPrice({ data }) {
  return (
    <section className={styles.section}>
      <h2>Current prices for Bitcoin and Ethereum in USD and EUR</h2>
      <div>
        Current Bitcoin price:{" "}
        {JSON.stringify(data[0].market_data.current_price.usd)} USD
      </div>
      <div>
        Current Bitcoin price:{" "}
        {JSON.stringify(data[0].market_data.current_price.eur)} EUR
      </div>
      <div>
        Current Ethereum price:{" "}
        {JSON.stringify(data[1].market_data.current_price.usd)} USD
      </div>
      <div>
        Current Ethereum price:{" "}
        {JSON.stringify(data[1].market_data.current_price.eur)} EUR
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://api.coingecko.com/api/v3/coins`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
