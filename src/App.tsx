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
  Footer,
  FixedHeader
} from "./components";

import SnackBarBottom from "./components/SnackBar";
import * as Scroll from "react-scroll";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = (flag: boolean) =>
    Scroll.animateScroll.scrollTo(
      flag ? orderRef.current.offsetTop - 140 : orderRef.current.offsetTop - 80
    );

  const [isSend, setSend] = React.useState<boolean>(false);

  return (
    <div>
      <Header scrollToOrder={scrollToOrderRef} />
      <FixedHeader scrollToOrder={scrollToOrderRef} />
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
