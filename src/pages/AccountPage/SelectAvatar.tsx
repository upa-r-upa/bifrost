import ErrorAlert from "@/components/ErrorAlert";
import RadioButton from "@/components/RadioButton";
import RadioGroup from "@/components/RadioGroup";
import {
  GetAvatarsInformationQuery,
  useGetAvatarAddressesQuery,
  useGetAvatarsInformationQuery,
} from "@/graphql-mimir/generated/graphql";

import { ChronoStatus, useAuthStore, useStatusStore } from "@/store/auth";
import { formatAddress } from "@/utils/format";
import { useMemo } from "react";

type Avatar = GetAvatarsInformationQuery["avatar1"];

export default function SelectAvatar() {
  const { status } = useStatusStore();
  const { currentAccount, avatarAddress, updateAvatarAddress } = useAuthStore();

  const {
    loading,
    data: avatarAddressesData,
    error: avatarAddressesError,
  } = useGetAvatarAddressesQuery({
    variables: { address: currentAccount },
    skip: !currentAccount,
    onCompleted: (data) => {
      if (avatarAddress) return;

      if (data.agent.avatarAddresses[0]?.value) {
        updateAvatarAddress(data.agent.avatarAddresses[0].value);
      }
    },
  });

  const avatarAddressList = useMemo(() => {
    const result: Array<string> = [];

    avatarAddressesData?.agent.avatarAddresses.forEach((element) => {
      if (!element.value) return;
      result.push(element.value);
    });
    return result;
  }, [avatarAddressesData]);

  const {
    loading: avatarsLoading,
    data: avatarsData,
    error: avatarsError,
  } = useGetAvatarsInformationQuery({
    variables: {
      avatarAddress1: avatarAddressList[0],
      avatarAddress2:
        avatarAddressList[1] || avatarAddressList[avatarAddressList.length - 1],
      avatarAddress3:
        avatarAddressList[2] || avatarAddressList[avatarAddressList.length - 1],
    },
    skip: avatarAddressList.length === 0,
  });

  if (status !== ChronoStatus.CONNECTED) {
    return <></>;
  }

  const getUniqueAvatarList = (...avatars: Array<Avatar>) => {
    const seen = new Set<string>();

    return avatars.filter((avatar) => {
      if (seen.has(avatar.address)) return false;

      seen.add(avatar.address);
      return true;
    });
  };

  const renderAvatarList = (avatarList: Array<Avatar>) => {
    if (!avatarList) {
      return (
        <div>
          <button>Generate avatar</button>
        </div>
      );
    }

    return (
      <RadioGroup title="Select game avatar" className="flex-row">
        {avatarList.map((avatar) => (
          <RadioButton
            key={avatar.address}
            label={`${avatar.name}`}
            checked={avatarAddress === avatar.address}
            value={avatar.address}
            onChange={() => updateAvatarAddress(avatar.address)}
          >
            <span>&#91;Level&#93;</span> {avatar.level}
            <p>
              <span>&#91;Address&#93;</span> {formatAddress(avatar.address)}
            </p>
          </RadioButton>
        ))}
      </RadioGroup>
    );
  };

  const renderSelectAvatarStatus = () => {
    if (avatarsError) {
      return (
        <ErrorAlert
          title="Failed to load the avatar data."
          errorMessage={avatarsError.message}
        />
      );
    }

    if (loading || avatarsLoading) {
      return <div>Avatar data is loading...</div>;
    }

    if (!avatarsData || avatarAddressesError) {
      return <div>There is currently no avatar data.</div>;
    }

    const { avatar1, avatar2, avatar3 } = avatarsData;
    const avatarList = getUniqueAvatarList(avatar1, avatar2, avatar3);

    return renderAvatarList(avatarList);
  };

  return <>{renderSelectAvatarStatus()}</>;
}