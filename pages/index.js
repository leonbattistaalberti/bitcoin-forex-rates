import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";
import Time from "../components/Time";
import BitCoinPrices from "../components/BitCoinPrices";
import Forex from "../components/Forex";

export default function Home(props) {
  console.log(props.forexDate.date);
  return (
    <Layout>
      <h1>Forex and Bitcoin Rates</h1>
      <BitCoinPrices prices={props.bpi} />
      <Forex prices={props.forex} date={props.forexDate.date} />
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const res = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  const forex = await axios.get("https://api.exchangeratesapi.io/latest");

  console.log(forex);

  return { bpi: res.data, forex: forex.data.rates, forexDate: forex.data };
};
