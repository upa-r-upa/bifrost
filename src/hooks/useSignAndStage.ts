import { useState } from "react";
import { useStageTransactionMutation } from "../../graphql-headless/generated/graphql";
import { getChronoSdk } from "@planetarium/chrono-sdk";
import { Address } from "@planetarium/account";
import { PolymorphicAction } from "@planetarium/lib9c";

type SigningProgress = "None" | "Signing" | "Staging" | "Done";

interface SigningResult {
  progress: SigningProgress;
  txId: string | null;
  startSigning: () => void;
  error: unknown | null;
}

export function useSignAndStage(
  signer: Address,
  action: PolymorphicAction
): SigningResult {
  const [progress, setProgress] = useState<SigningProgress>("None");
  const [txId, setTxId] = useState<string | null>(null);
  const [error, setError] = useState<unknown | null>(null);

  const [stage] = useStageTransactionMutation();

  const startSigning = () => {
    setProgress("Signing");
    const chronoWallet = getChronoSdk();
    if (!chronoWallet) {
      setError(new Error("Chrono SDK is not available"));
      setProgress("None");
      return;
    }

    chronoWallet
      .sign(signer, action)
      .then((tx) => {
        setProgress("Staging");
        return stage({
          variables: {
            tx: tx.toString("hex"),
          },
        });
      })
      .then(({ data, errors }) => {
        if (errors && errors.length > 0) {
          setError(errors);
          setProgress("None");
        } else {
          setTxId(data?.stageTransaction || null);
          setProgress("Done");
        }
      })
      .catch((e: unknown) => {
        setError(e);
        setProgress("None");
      });
  };

  return {
    progress,
    txId,
    startSigning,
    error,
  };
}
