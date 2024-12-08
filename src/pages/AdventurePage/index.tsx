import TerminalContainer from "@/components/TerminalContainer";
import { useGetWorldInformationQuery } from "@/graphql-mimir/generated/graphql";

const AdventurePage: React.FC = () => {
  const { data, loading, error } = useGetWorldInformationQuery({
    variables: { avatarAddress: "4AB43b2d1d0e41DdF99449086dC70dC79513B0F1" },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading world information</div>;

  const worldStages =
    data?.worldInformation.worldDictionary
      .filter((d) => d.key != 10001)
      .sort()
      .reverse() || [];

  return (
    <TerminalContainer title="Adventure" type="highlight">
      <ul>
        {worldStages.map((stage) => (
          <li key={stage.key} className="flex items-center mb-2">
            <button className="btn">
              {stage.value.name} ({stage.key} World)
            </button>
          </li>
        ))}
      </ul>
    </TerminalContainer>
  );
};

export default AdventurePage;
