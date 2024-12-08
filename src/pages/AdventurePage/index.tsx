import PreviousPageButton from "@/components/PreviousPageButton";
import RadioButton from "@/components/RadioButton";
import RadioGroup from "@/components/RadioGroup";
import TerminalContainer from "@/components/TerminalContainer";
import { useGetWorldInformationQuery } from "@/graphql-mimir/generated/graphql";
import { useState, useEffect, useMemo } from "react";

type Stage = {
  id: number;
  isCleared: boolean;
};

const AdventurePage: React.FC = () => {
  const [selectedWorld, setSelectedWorld] = useState<number | null>(null);

  const { data, loading, error } = useGetWorldInformationQuery({
    variables: { avatarAddress: "4AB43b2d1d0e41DdF99449086dC70dC79513B0F1" },
  });

  const worldStages = useMemo(() => {
    return (
      data?.worldInformation.worldDictionary
        .filter((d) => d.key !== 10001)
        .sort((a, b) => b.key - a.key) || []
    );
  }, [data]);

  useEffect(() => {
    if (!selectedWorld) {
      const firstUnclearedWorld = worldStages.find((stage) => {
        const { stageClearedId, stageEnd } = stage.value;
        return (stageClearedId || 0) < stageEnd;
      });
      if (firstUnclearedWorld) setSelectedWorld(firstUnclearedWorld.key);
    }
  }, [worldStages, selectedWorld]);

  const selectedWorldData = useMemo(() => {
    return worldStages.find((stage) => stage.key === selectedWorld) || null;
  }, [worldStages, selectedWorld]);

  const stageList: Stage[] = useMemo(() => {
    if (!selectedWorldData) return [];

    const { stageBegin, stageEnd, stageClearedId } = selectedWorldData.value;

    return Array.from({ length: stageEnd - stageBegin + 1 }).map((_, index) => {
      const stageId = stageBegin + index;
      const isCleared = stageId <= (stageClearedId || 0);

      return {
        id: stageId,
        isCleared,
      };
    });
  }, [selectedWorldData]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading world information</div>;

  return (
    <>
      <TerminalContainer title="Adventure" type="highlight" className="flex">
        <RadioGroup title="Select World" className="mr-2">
          {worldStages.map((stage) => (
            <RadioButton
              label={`${stage.value.name} (${stage.key} World)`}
              onChange={() => setSelectedWorld(stage.key)}
              key={stage.key}
              value={stage.key}
              checked={selectedWorld === stage.key}
            />
          ))}
        </RadioGroup>

        {selectedWorld && (
          <RadioGroup title="Select Stage">
            <div className="grid grid-cols-7 gap-4">
              {stageList.map((stage) => (
                <button
                  key={stage.id}
                  className={`btn ${
                    stage.isCleared ? "text-bright-black" : ""
                  }`}
                >
                  {stage.id}
                </button>
              ))}
            </div>
          </RadioGroup>
        )}
      </TerminalContainer>

      <PreviousPageButton className="mt-3" />
    </>
  );
};

export default AdventurePage;
