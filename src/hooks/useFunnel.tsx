import { ReactElement, ReactNode, useState } from "react";

export function useFunnel(initStep: string) {
  const [step, setStep] = useState(initStep);

  const Step = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  };

  const Funnel = ({ children }: { children: ReactElement[] }) => {
    // name이 현재 step 상태와 동일한 Step만 렌더링
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );
    return <>{targetStep}</>;
  };

  Funnel.Step = Step;

  return [Funnel, setStep];
}
