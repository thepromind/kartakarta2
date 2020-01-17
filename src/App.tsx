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

import { YMInitializer } from "react-yandex-metrika";
import SnackBarBottom from "./components/SnackBar";
import * as Scroll from "react-scroll";

function App() {
  const orderRef: any = React.useRef(null);

  const scrollToOrderRef = (flag: boolean) =>
    Scroll.animateScroll.scrollTo(
      flag ? orderRef.current.offsetTop - 140 : orderRef.current.offsetTop - 80
    );

  const [isSend, setSend] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>("default");
  const snackUp = (message: string) => {
    setMessage(message);
    setSend(true);
  };

  return (
    <div>
      <YMInitializer
        accounts={[56824144]}
        options={{
          clickmap: true,
          trackLinks: true,
          accurateTrackBounce: true,
          webvisor: true,
          trackHash: true
        }}
      />
      <Header scrollToOrder={scrollToOrderRef} />
      <FixedHeader scrollToOrder={scrollToOrderRef} />
      <BestCard />
      <GoodAnyTimeWhere scrollToOrder={scrollToOrderRef} />
      <CalculatorCashback scrollToOrder={scrollToOrderRef} />
      <HowToGetCard />
      <CardOrder
        refProp={orderRef}
        snackUp={(message: string) => snackUp(message)}
      />
      <MobileBanking />
      <AdditionalInfo />
      <HelpYou />
      <Footer />
      <SnackBarBottom
        open={isSend}
        message={message}
        close={() => setSend(false)}
      />
    </div>
  );
}

export default App;
