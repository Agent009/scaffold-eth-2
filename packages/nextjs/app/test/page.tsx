import type { NextPage } from "next";
import { WalletInfo } from "~~/app/test/_components/WalletInfo";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center mb-8">
            <span className="block text-2xl mb-2">We are officially...</span>
            <span className="block text-4xl font-bold">Testing!</span>
          </h1>
          <PageBody />
        </div>
      </div>
    </>
  );
};

function PageBody() {
  return (
    <>
      <WalletInfo />
      {/*<RandomWord />*/}
      {/*<HelloWorldContractRead />*/}
    </>
  );
}

export default Home;
