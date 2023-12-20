import { ReactElement, ReactNode, useState } from "react";

export function useFunnel(initStep: string) {
  const [step, setStep] = useState<string>(initStep);

  const Step = ({ children }: { children: ReactNode }) => {
    return <>{children}</>;
  };

  const Funnel: React.FC<{ children: ReactElement[] }> = ({ children }) => {
    const targetStep = children.find(
      (childStep) => childStep.props.name === step
    );
    return <>{targetStep}</>;
  };

  Funnel.Step = Step;

  return [Funnel, setStep];
}
