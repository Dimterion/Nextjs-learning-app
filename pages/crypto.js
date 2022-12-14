import styles from "../styles/Crypto.module.css";

export default function BitcoinPrice({ data }) {
  return (
    <section className={styles.section}>
      <h2>Bitcoin & Ethereum prices in USD & EUR</h2>
      <div className={styles.currencyContainer}>
        <div>
          Bitcoin: <p>{data[0].market_data.current_price.usd}</p>
          <b>
            <i>USD</i>
          </b>
        </div>
        <div>
          Bitcoin: <p>{data[0].market_data.current_price.eur}</p>
          <b>
            <i>EUR</i>
          </b>
        </div>
        <div>
          Ethereum: <p>{data[1].market_data.current_price.usd}</p>
          <b>
            <i>USD</i>
          </b>
        </div>
        <div>
          Ethereum: <p>{data[1].market_data.current_price.eur}</p>
          <b>
            <i>EUR</i>
          </b>
        </div>
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
    revalidate: 5,
  };
}
