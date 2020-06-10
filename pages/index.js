import Link from "next/link";
import Layout from "../components/Layout";
import axios from "axios";
import Time from "../components/Time";
import Prices from "../components/Prices";

export default function Home(props) {
  return (
    <Layout>
      <h1>Bitcoin Prices</h1>
      <Time timeUpdated={props.bpi.time.updated} />
      <Prices prices={props.bpi} />
    </Layout>
  );
}

Home.getInitialProps = async function () {
  const res = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  return { bpi: res.data };
};
