import React from "react";
import {
  Header,
  BestCard,
  CardOrder,
  CalculatorCashback,
  HowToGetCard,
  HelpYou,
  MobileBanking,
  AdditionalInfo,
  GoodAnyTimeWhere,
  Footer
} from "./components";

import { YMInitializer } from "react-yandex-metrika";
import SnackBarBottom from "./components/SnackBar";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = () => window.scrollTo(0, orderRef.current.offsetTop);

  const [isSend, setSend] = React.useState<boolean>(false);

  return (
    <div>
      <YMInitializer
        accounts={[Number.parseInt(process.env.REACT_APP_Y_ANALYTICS || "")]}
      />
      <Header scrollToOrder={scrollToOrderRef} />
      <BestCard />
      <GoodAnyTimeWhere scrollToOrder={scrollToOrderRef} />
      <CalculatorCashback scrollToOrder={scrollToOrderRef} />
      <HowToGetCard />
      <CardOrder refProp={orderRef} send={() => setSend(true)} />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
      <SnackBarBottom open={isSend} close={() => setSend(false)} />
    </div>
  );
}

export default App;
