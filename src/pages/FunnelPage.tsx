import Address from "../components/Funnel/Address";
import Phone from "../components/Funnel/Phone";
import Success from "../components/Funnel/Success";
import { useFunnel } from "../hooks/useFunnel";

const FunnelPage = () => {
  const [Funnel, setState] = useFunnel("핸드폰");
  return (
    <div>
      <Funnel>
        <Funnel.Step name="핸드폰">
          <Phone onNext={() => setState("집주소")} />
        </Funnel.Step>
        <Funnel.Step name="집주소">
          <Address onNext={() => setState("성공")} />
        </Funnel.Step>
        <Funnel.Step name="성공">
          <Success />
        </Funnel.Step>
      </Funnel>
    </div>
  );
};

export default FunnelPage;
