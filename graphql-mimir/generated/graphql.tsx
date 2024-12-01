import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Address: { input: any; output: any; }
  BigInteger: { input: any; output: any; }
  Byte: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  HashDigestSHA256: { input: any; output: any; }
  Long: { input: number; output: number; }
  SheetNameType: { input: any; output: any; }
  Short: { input: any; output: any; }
  UUID: { input: any; output: any; }
};

export type AgentState = {
  __typename?: 'AgentState';
  address: Scalars['Address']['output'];
  avatarAddresses: Array<KeyValuePairOfInt32AndAddress>;
  monsterCollectionRound: Scalars['Int']['output'];
  version: Scalars['Int']['output'];
};

export type ArenaInformation = {
  __typename?: 'ArenaInformation';
  address: Scalars['Address']['output'];
  lose: Scalars['Int']['output'];
  purchasedTicketCount: Scalars['Int']['output'];
  ticket: Scalars['Int']['output'];
  ticketResetCount: Scalars['Int']['output'];
  win: Scalars['Int']['output'];
};

export type ArenaObject = {
  __typename?: 'ArenaObject';
  /** The leaderboard of the arena. */
  leaderboard?: Maybe<Array<Maybe<ArenaRankingDocument>>>;
  /** The leaderboard of the arena filtered by the avatar's address. */
  leaderboardByAvatarAddress?: Maybe<Array<Maybe<ArenaRankingDocument>>>;
  /** The avatar's ranking of the arena. */
  ranking?: Maybe<Scalars['Long']['output']>;
  /** The round of the arena. */
  round?: Maybe<RoundData>;
};


export type ArenaObjectLeaderboardArgs = {
  length?: Scalars['Int']['input'];
  ranking?: Scalars['Long']['input'];
};


export type ArenaObjectLeaderboardByAvatarAddressArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type ArenaObjectRankingArgs = {
  avatarAddress: Scalars['Address']['input'];
};

export type ArenaRankingDocument = {
  __typename?: 'ArenaRankingDocument';
  address: Scalars['Address']['output'];
  arenaInformation: ArenaInformation;
  arenaScore: ArenaScore;
  championshipId: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  round: Scalars['Int']['output'];
  simpleAvatar: SimplifiedAvatarState;
};

export type ArenaScore = {
  __typename?: 'ArenaScore';
  address: Scalars['Address']['output'];
  score: Scalars['Int']['output'];
};

export enum ArenaType {
  Championship = 'CHAMPIONSHIP',
  OffSeason = 'OFF_SEASON',
  Season = 'SEASON'
}

export type Armor = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Armor';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type AttachmentActionResult = AttachmentActionResultInterface & {
  __typename?: 'AttachmentActionResult';
  costume?: Maybe<Costume>;
  itemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type AttachmentActionResultInterface = {
  costume?: Maybe<Costume>;
  itemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type Aura = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Aura';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type AvatarState = {
  __typename?: 'AvatarState';
  address: Scalars['Address']['output'];
  agentAddress: Scalars['Address']['output'];
  blockIndex: Scalars['Long']['output'];
  characterId: Scalars['Int']['output'];
  combinationSlotAddresses: Array<Scalars['Address']['output']>;
  ear: Scalars['Int']['output'];
  eventMap: Array<KeyValuePairOfInt32AndInt32>;
  exp: Scalars['Long']['output'];
  hair: Scalars['Int']['output'];
  itemMap: Array<KeyValuePairOfInt32AndInt32>;
  lens: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  mailBox: MailBox;
  monsterMap: Array<KeyValuePairOfInt32AndInt32>;
  name: Scalars['String']['output'];
  rankingMapAddress: Scalars['Address']['output'];
  stageMap: Array<KeyValuePairOfInt32AndInt32>;
  tail: Scalars['Int']['output'];
  updatedAt: Scalars['Long']['output'];
  version: Scalars['Int']['output'];
};

export type Belt = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Belt';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type Buy7BuyerResult = AttachmentActionResultInterface & {
  __typename?: 'Buy7BuyerResult';
  costume?: Maybe<Costume>;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  shopItem: ShopItem;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type Buy7SellerResult = AttachmentActionResultInterface & {
  __typename?: 'Buy7SellerResult';
  costume?: Maybe<Costume>;
  gold: FungibleAssetValue;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  shopItem: ShopItem;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

/** Information about the offset pagination. */
export type CollectionSegmentInfo = {
  __typename?: 'CollectionSegmentInfo';
  /** Indicates whether more items exist following the set defined by the clients arguments. */
  hasNextPage: Scalars['Boolean']['output'];
  /** Indicates whether more items exist prior the set defined by the clients arguments. */
  hasPreviousPage: Scalars['Boolean']['output'];
};

export type CombinationConsumable5Result = AttachmentActionResultInterface & {
  __typename?: 'CombinationConsumable5Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materials: Array<KeyValuePairOfMaterialAndInt32>;
  recipeId: Scalars['Int']['output'];
  subRecipeId?: Maybe<Scalars['Int']['output']>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type CombinationSlotState = {
  __typename?: 'CombinationSlotState';
  address: Scalars['Address']['output'];
  index: Scalars['Int']['output'];
  isUnlocked: Scalars['Boolean']['output'];
  petId?: Maybe<Scalars['Int']['output']>;
  result?: Maybe<AttachmentActionResultInterface>;
  startBlockIndex: Scalars['Long']['output'];
  unlockBlockIndex: Scalars['Long']['output'];
};

export type Consumable = ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Consumable';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  requiredBlockIndex: Scalars['Long']['output'];
  skills: Array<Skill>;
  stats: Array<DecimalStat>;
  statsMap: StatMap;
};

export type Contract = {
  __typename?: 'Contract';
  lockupInterval: Scalars['Long']['output'];
  rewardInterval: Scalars['Long']['output'];
  stakeRegularFixedRewardSheetTableName: Scalars['String']['output'];
  stakeRegularRewardSheetTableName: Scalars['String']['output'];
};

export type Costume = ItemBaseInterface & {
  __typename?: 'Costume';
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  requiredBlockIndex: Scalars['Long']['output'];
  spineResourcePath: Scalars['String']['output'];
};

export type Currency = {
  __typename?: 'Currency';
  decimalPlaces: Scalars['Byte']['output'];
  minters?: Maybe<Array<Maybe<Scalars['Address']['output']>>>;
  ticker: Scalars['String']['output'];
  totalSupplyTrackable: Scalars['Boolean']['output'];
};

export type CurrencyInput = {
  currencyMethodType: CurrencyMethodType;
  decimalPlaces: Scalars['Byte']['input'];
  maximumSupplyMajor?: InputMaybe<Scalars['Long']['input']>;
  maximumSupplyMinor?: InputMaybe<Scalars['Long']['input']>;
  minters?: InputMaybe<Array<InputMaybe<Scalars['Address']['input']>>>;
  ticker: Scalars['String']['input'];
  totalSupplyTrackable?: Scalars['Boolean']['input'];
};

export enum CurrencyMethodType {
  Capped = 'CAPPED',
  Legacy = 'LEGACY',
  Uncapped = 'UNCAPPED'
}

export type DailyReward2Result = AttachmentActionResultInterface & {
  __typename?: 'DailyReward2Result';
  costume?: Maybe<Costume>;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materials: Array<KeyValuePairOfMaterialAndInt32>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type DecimalStat = {
  __typename?: 'DecimalStat';
  additionalValue: Scalars['Decimal']['output'];
  baseValue: Scalars['Decimal']['output'];
  statType: StatType;
};

export enum ElementalType {
  Fire = 'FIRE',
  Land = 'LAND',
  Normal = 'NORMAL',
  Water = 'WATER',
  Wind = 'WIND'
}

export enum EnhancementResult {
  Fail = 'FAIL',
  GreatSuccess = 'GREAT_SUCCESS',
  Success = 'SUCCESS'
}

export type Equipment = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Equipment';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type EquipmentInterface = {
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type FavProduct = ProductInterface & {
  __typename?: 'FavProduct';
  asset: FungibleAssetValue;
  price: FungibleAssetValue;
  productId: Scalars['UUID']['output'];
  productType: ProductType;
  registeredBlockIndex: Scalars['Long']['output'];
  sellerAgentAddress: Scalars['Address']['output'];
  sellerAvatarAddress: Scalars['Address']['output'];
};

export type FungibleAssetValue = {
  __typename?: 'FungibleAssetValue';
  decimalPlaces: Scalars['Byte']['output'];
  quantity: Scalars['String']['output'];
  rawValue: Scalars['String']['output'];
  ticker: Scalars['String']['output'];
};

export type Grimoire = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Grimoire';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type IFungibleItem = {
  /** The fungible ID of the item. */
  fungibleId: Scalars['HashDigestSHA256']['output'];
};

export type INonFungibleItem = {
  /** The non-fungible ID of the item. */
  nonFungibleId: Scalars['UUID']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
};

export type ITradableItem = {
  requiredBlockIndex: Scalars['Long']['output'];
  tradableId: Scalars['UUID']['output'];
};

export type IValue = {
  __typename?: 'IValue';
  encodingLength: Scalars['Long']['output'];
  inspect: Scalars['String']['output'];
  kind: ValueKind;
};

export type ItemBase = ItemBaseInterface & {
  __typename?: 'ItemBase';
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
};

export type ItemBaseInterface = {
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
};

export type ItemEnhancement7Result = AttachmentActionResultInterface & {
  __typename?: 'ItemEnhancement7Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materialItemIdList: Array<Scalars['UUID']['output']>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type ItemEnhancement9Result = AttachmentActionResultInterface & {
  __typename?: 'ItemEnhancement9Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  enhancementResult: EnhancementResult;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materialItemIdList: Array<Scalars['UUID']['output']>;
  preItemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type ItemEnhancement11Result = AttachmentActionResultInterface & {
  __typename?: 'ItemEnhancement11Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  crystal: FungibleAssetValue;
  enhancementResult: EnhancementResult;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materialItemIdList: Array<Scalars['UUID']['output']>;
  preItemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type ItemEnhancement12Result = AttachmentActionResultInterface & {
  __typename?: 'ItemEnhancement12Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  crystal: FungibleAssetValue;
  enhancementResult: EnhancementResult;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materialItemIdList: Array<Scalars['UUID']['output']>;
  preItemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type ItemEnhancement13Result = AttachmentActionResultInterface & {
  __typename?: 'ItemEnhancement13Result';
  actionPoint: Scalars['Int']['output'];
  costume?: Maybe<Costume>;
  crystal: FungibleAssetValue;
  enhancementResult: EnhancementResult;
  gold: Scalars['BigInteger']['output'];
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  materialItemIdList: Array<Scalars['UUID']['output']>;
  preItemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type ItemProduct = ProductInterface & {
  __typename?: 'ItemProduct';
  itemCount: Scalars['Int']['output'];
  price: FungibleAssetValue;
  productId: Scalars['UUID']['output'];
  productType: ProductType;
  registeredBlockIndex: Scalars['Long']['output'];
  sellerAgentAddress: Scalars['Address']['output'];
  sellerAvatarAddress: Scalars['Address']['output'];
  tradableItem?: Maybe<ItemBaseInterface>;
};

export enum ItemSubType {
  ApStone = 'AP_STONE',
  Armor = 'ARMOR',
  Aura = 'AURA',
  Belt = 'BELT',
  /** @deprecated ItemSubType.Chest has never been used outside the MaterialItemSheet. And we won't use it in the future until we have a specific reason. */
  Chest = 'CHEST',
  Circle = 'CIRCLE',
  EarCostume = 'EAR_COSTUME',
  EquipmentMaterial = 'EQUIPMENT_MATERIAL',
  EyeCostume = 'EYE_COSTUME',
  Food = 'FOOD',
  FoodMaterial = 'FOOD_MATERIAL',
  FullCostume = 'FULL_COSTUME',
  Grimoire = 'GRIMOIRE',
  HairCostume = 'HAIR_COSTUME',
  Hourglass = 'HOURGLASS',
  MonsterPart = 'MONSTER_PART',
  Necklace = 'NECKLACE',
  NormalMaterial = 'NORMAL_MATERIAL',
  Ring = 'RING',
  Scroll = 'SCROLL',
  TailCostume = 'TAIL_COSTUME',
  Title = 'TITLE',
  Weapon = 'WEAPON'
}

export enum ItemType {
  Consumable = 'CONSUMABLE',
  Costume = 'COSTUME',
  Equipment = 'EQUIPMENT',
  Material = 'MATERIAL'
}

export type ItemUsable = ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'ItemUsable';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  requiredBlockIndex: Scalars['Long']['output'];
  skills: Array<Skill>;
  statsMap: StatMap;
};

export type ItemUsableInterface = {
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  requiredBlockIndex: Scalars['Long']['output'];
  skills: Array<Skill>;
  statsMap: StatMap;
};

export type KeyValuePairOfInt32AndAddress = {
  __typename?: 'KeyValuePairOfInt32AndAddress';
  key: Scalars['Int']['output'];
  value: Scalars['Address']['output'];
};

export type KeyValuePairOfInt32AndBoolean = {
  __typename?: 'KeyValuePairOfInt32AndBoolean';
  key: Scalars['Int']['output'];
  value: Scalars['Boolean']['output'];
};

export type KeyValuePairOfInt32AndCombinationSlotState = {
  __typename?: 'KeyValuePairOfInt32AndCombinationSlotState';
  key: Scalars['Int']['output'];
  value: CombinationSlotState;
};

export type KeyValuePairOfInt32AndInt32 = {
  __typename?: 'KeyValuePairOfInt32AndInt32';
  key: Scalars['Int']['output'];
  value: Scalars['Int']['output'];
};

export type KeyValuePairOfInt32AndWorld = {
  __typename?: 'KeyValuePairOfInt32AndWorld';
  key: Scalars['Int']['output'];
  value: World;
};

export type KeyValuePairOfMaterialAndInt32 = {
  __typename?: 'KeyValuePairOfMaterialAndInt32';
  key: MaterialInterface;
  value: Scalars['Int']['output'];
};

export type KeyValuePairOfStatTypeAndDecimalStat = {
  __typename?: 'KeyValuePairOfStatTypeAndDecimalStat';
  key: StatType;
  value: DecimalStat;
};

export type Mail = {
  __typename?: 'Mail';
  blockIndex: Scalars['Long']['output'];
  id: Scalars['UUID']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  typeId: Scalars['String']['output'];
};

export type MailBox = {
  __typename?: 'MailBox';
  mails: Array<Mail>;
};

export type Material = ItemBaseInterface & MaterialInterface & {
  __typename?: 'Material';
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['HashDigestSHA256']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
};

export type MaterialInterface = {
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['HashDigestSHA256']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
};

export type MetadataDocument = {
  __typename?: 'MetadataDocument';
  collectionName: Scalars['String']['output'];
  id: ObjectId;
  latestBlockIndex: Scalars['Long']['output'];
  pollerType: Scalars['String']['output'];
};

export type MonsterCollectionResult = AttachmentActionResultInterface & {
  __typename?: 'MonsterCollectionResult';
  avatarAddress: Scalars['Address']['output'];
  costume?: Maybe<Costume>;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  rewards: Array<RewardInfo>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type Necklace = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Necklace';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type ObjectId = {
  __typename?: 'ObjectId';
  creationTime: Scalars['DateTime']['output'];
  /** @deprecated This property will be removed in a later release. */
  increment: Scalars['Int']['output'];
  /** @deprecated This property will be removed in a later release. */
  machine: Scalars['Int']['output'];
  /** @deprecated This property will be removed in a later release. */
  pid: Scalars['Short']['output'];
  timestamp: Scalars['Int']['output'];
  toByteArray?: Maybe<Array<Scalars['Byte']['output']>>;
};

export type PetState = {
  __typename?: 'PetState';
  level: Scalars['Int']['output'];
  petId: Scalars['Int']['output'];
  unlockedBlockIndex: Scalars['Long']['output'];
};

export type PledgeDocument = {
  __typename?: 'PledgeDocument';
  address: Scalars['Address']['output'];
  contractAddress: Scalars['Address']['output'];
  contracted: Scalars['Boolean']['output'];
  refillMead: Scalars['Int']['output'];
};

export type Product = ProductInterface & {
  __typename?: 'Product';
  price: FungibleAssetValue;
  productId: Scalars['UUID']['output'];
  productType: ProductType;
  registeredBlockIndex: Scalars['Long']['output'];
  sellerAgentAddress: Scalars['Address']['output'];
  sellerAvatarAddress: Scalars['Address']['output'];
};

export type ProductDocument = {
  __typename?: 'ProductDocument';
  address: Scalars['Address']['output'];
  avatarAddress: Scalars['Address']['output'];
  combatPoint?: Maybe<Scalars['Int']['output']>;
  crystal?: Maybe<Scalars['Int']['output']>;
  crystalPerPrice?: Maybe<Scalars['Int']['output']>;
  object: ProductInterface;
  productsStateAddress: Scalars['Address']['output'];
  unitPrice?: Maybe<Scalars['Decimal']['output']>;
};

export type ProductInterface = {
  price: FungibleAssetValue;
  productId: Scalars['UUID']['output'];
  productType: ProductType;
  registeredBlockIndex: Scalars['Long']['output'];
  sellerAgentAddress: Scalars['Address']['output'];
  sellerAvatarAddress: Scalars['Address']['output'];
};

export enum ProductType {
  Fungible = 'FUNGIBLE',
  FungibleAssetValue = 'FUNGIBLE_ASSET_VALUE',
  NonFungible = 'NON_FUNGIBLE'
}

/** A segment of a collection. */
export type ProductsCollectionSegment = {
  __typename?: 'ProductsCollectionSegment';
  /** A flattened list of the items. */
  items?: Maybe<Array<Maybe<ProductDocument>>>;
  /** Information to aid in pagination. */
  pageInfo: CollectionSegmentInfo;
};

export type Query = {
  __typename?: 'Query';
  /**
   * Get an action point by address.
   *
   *
   * **Returns:**
   * The action point.
   */
  actionPoint: Scalars['Int']['output'];
  /**
   * Get an agent state by address.
   *
   *
   * **Returns:**
   * The agent state
   */
  agent: AgentState;
  /** Get arena sub-fields. */
  arena: ArenaObject;
  /**
   * Get an avatar state by address.
   *
   *
   * **Returns:**
   * The avatar state
   */
  avatar: AvatarState;
  /**
   * Get the balance of a specific currency for a given address.
   * Choose one of the following parameters to specify the currency: currency, currencyTicker
   */
  balance: Scalars['String']['output'];
  /**
   * Get combination slot states for a specific avatar address.
   *
   *
   * **Returns:**
   * Combination slot states for the specified avatar address.
   */
  combinationSlots: Array<KeyValuePairOfInt32AndCombinationSlotState>;
  /**
   * Get the daily reward received block index by address.
   *
   *
   * **Returns:**
   * The daily reward received block index.
   */
  dailyRewardReceivedBlockIndex: Scalars['Long']['output'];
  /**
   * Get metadata by collection name.
   *
   *
   * **Returns:**
   * The metadata
   */
  metadata: MetadataDocument;
  /**
   * Get an pet state by avatar address.
   *
   *
   * **Returns:**
   * The agent state
   */
  pet: PetState;
  /** Get the pledge state for a given agent address. */
  pledge: PledgeDocument;
  /**
   * Get the product by product ID.
   *
   *
   * **Returns:**
   * The product.
   */
  product: ProductInterface;
  /**
   * Get the product ids that are contained in the products state for a specific avatar address.
   *
   *
   * **Returns:**
   * The product ids that contained in the products state for the specified avatar address.
   */
  productIds: Array<Scalars['UUID']['output']>;
  /** Retrieves a list of market products. */
  products?: Maybe<ProductsCollectionSegment>;
  runes: Array<RuneState>;
  /** Get the sheet by name. */
  sheet: SheetObject;
  /** Get the names of all sheets. */
  sheetNames: Array<Scalars['String']['output']>;
  /**
   * Get a stake state by agent address.
   *
   *
   * **Returns:**
   * The stake state.
   */
  stake?: Maybe<StakeState>;
  /** Get the world boss. */
  worldBoss: WorldBossState;
  /** Get the kill reward record of world boss. */
  worldBossKillRewardRecord: WorldBossKillRewardRecord;
  /** Get the raider of world boss. */
  worldBossRaider: RaiderState;
  /**
   * Get a world information state by avatar address.
   *
   *
   * **Returns:**
   * The world information state.
   */
  worldInformation: WorldInformationState;
};


export type QueryActionPointArgs = {
  address: Scalars['Address']['input'];
};


export type QueryAgentArgs = {
  address: Scalars['Address']['input'];
};


export type QueryAvatarArgs = {
  address: Scalars['Address']['input'];
};


export type QueryBalanceArgs = {
  address: Scalars['Address']['input'];
  currency?: InputMaybe<CurrencyInput>;
  currencyTicker?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCombinationSlotsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QueryDailyRewardReceivedBlockIndexArgs = {
  address: Scalars['Address']['input'];
};


export type QueryMetadataArgs = {
  collectionName: Scalars['String']['input'];
};


export type QueryPetArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QueryPledgeArgs = {
  agentAddress: Scalars['Address']['input'];
};


export type QueryProductArgs = {
  productId: Scalars['UUID']['input'];
};


export type QueryProductIdsArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QueryProductsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRunesArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QuerySheetArgs = {
  encodeAsBase64?: InputMaybe<Scalars['Boolean']['input']>;
  sheetName: Scalars['SheetNameType']['input'];
};


export type QueryStakeArgs = {
  address: Scalars['Address']['input'];
};


export type QueryWorldBossKillRewardRecordArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QueryWorldBossRaiderArgs = {
  avatarAddress: Scalars['Address']['input'];
};


export type QueryWorldInformationArgs = {
  address: Scalars['Address']['input'];
};

export type RaiderState = {
  __typename?: 'RaiderState';
  avatarAddress: Scalars['Address']['output'];
  avatarName: Scalars['String']['output'];
  claimedBlockIndex: Scalars['Long']['output'];
  cp: Scalars['Int']['output'];
  highScore: Scalars['Long']['output'];
  iconId: Scalars['Int']['output'];
  latestBossLevel: Scalars['Int']['output'];
  latestRewardRank: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  purchaseCount: Scalars['Int']['output'];
  refillBlockIndex: Scalars['Long']['output'];
  remainChallengeCount: Scalars['Int']['output'];
  totalChallengeCount: Scalars['Int']['output'];
  totalScore: Scalars['Long']['output'];
  updatedBlockIndex: Scalars['Long']['output'];
};

export type RapidCombination0Result = AttachmentActionResultInterface & {
  __typename?: 'RapidCombination0Result';
  cost: Array<KeyValuePairOfMaterialAndInt32>;
  costume?: Maybe<Costume>;
  itemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type RapidCombination5Result = AttachmentActionResultInterface & {
  __typename?: 'RapidCombination5Result';
  cost: Array<KeyValuePairOfMaterialAndInt32>;
  costume?: Maybe<Costume>;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type RewardInfo = {
  __typename?: 'RewardInfo';
  serialize?: Maybe<IValue>;
};

export type Ring = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Ring';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type RoundData = {
  __typename?: 'RoundData';
  additionalTicketPrice: Scalars['Long']['output'];
  arenaType: ArenaType;
  championshipId: Scalars['Int']['output'];
  endBlockIndex: Scalars['Long']['output'];
  entranceFee: Scalars['Long']['output'];
  maxPurchaseCount: Scalars['Int']['output'];
  maxPurchaseCountWithInterval: Scalars['Int']['output'];
  requiredMedalCount: Scalars['Int']['output'];
  round: Scalars['Int']['output'];
  startBlockIndex: Scalars['Long']['output'];
  ticketPrice: Scalars['Long']['output'];
};

export type Row = {
  __typename?: 'Row';
  combo: Scalars['Boolean']['output'];
  cooldown: Scalars['Int']['output'];
  elementalType: ElementalType;
  hitCount: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  skillCategory: SkillCategory;
  skillTargetType: SkillTargetType;
  skillType: SkillType;
};

export type RuneState = {
  __typename?: 'RuneState';
  level: Scalars['Int']['output'];
  runeId: Scalars['Int']['output'];
};

export type SellCancellationResult = AttachmentActionResultInterface & {
  __typename?: 'SellCancellationResult';
  costume?: Maybe<Costume>;
  id: Scalars['UUID']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  shopItem: ShopItem;
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
  typeId: Scalars['String']['output'];
};

export type SheetObject = {
  __typename?: 'SheetObject';
  /** The CSV content of the sheet. */
  csv?: Maybe<Scalars['String']['output']>;
  /** The name of the sheet. */
  name: Scalars['SheetNameType']['output'];
};

export type ShopItem = {
  __typename?: 'ShopItem';
  costume?: Maybe<Costume>;
  expiredBlockIndex: Scalars['Long']['output'];
  itemUsable?: Maybe<ItemUsableInterface>;
  price: FungibleAssetValue;
  productId: Scalars['UUID']['output'];
  sellerAgentAddress: Scalars['Address']['output'];
  sellerAvatarAddress: Scalars['Address']['output'];
  tradableFungibleItem?: Maybe<TradableMaterial>;
  tradableFungibleItemCount: Scalars['Int']['output'];
};

export type SimplifiedAvatarState = {
  __typename?: 'SimplifiedAvatarState';
  address: Scalars['Address']['output'];
  agentAddress: Scalars['Address']['output'];
  blockIndex: Scalars['Long']['output'];
  characterId: Scalars['Int']['output'];
  combinationSlotAddresses: Array<Scalars['Address']['output']>;
  ear: Scalars['Int']['output'];
  exp: Scalars['Long']['output'];
  hair: Scalars['Int']['output'];
  lens: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  rankingMapAddress: Scalars['Address']['output'];
  tail: Scalars['Int']['output'];
  updatedAt: Scalars['Long']['output'];
  version: Scalars['Int']['output'];
};

export type Skill = {
  __typename?: 'Skill';
  chance: Scalars['Int']['output'];
  power: Scalars['Long']['output'];
  referencedStatType: StatType;
  skillRow: Row;
  statPowerRatio: Scalars['Int']['output'];
};

export enum SkillCategory {
  AreaAttack = 'AREA_ATTACK',
  AttackBuff = 'ATTACK_BUFF',
  BlowAttack = 'BLOW_ATTACK',
  Buff = 'BUFF',
  BuffRemovalAttack = 'BUFF_REMOVAL_ATTACK',
  CriticalBuff = 'CRITICAL_BUFF',
  CriticalDamageBuff = 'CRITICAL_DAMAGE_BUFF',
  DamageReductionBuff = 'DAMAGE_REDUCTION_BUFF',
  Debuff = 'DEBUFF',
  DefenseBuff = 'DEFENSE_BUFF',
  Dispel = 'DISPEL',
  DoubleAttack = 'DOUBLE_ATTACK',
  Focus = 'FOCUS',
  Heal = 'HEAL',
  HitBuff = 'HIT_BUFF',
  HpBuff = 'HP_BUFF',
  NormalAttack = 'NORMAL_ATTACK',
  ShatterStrike = 'SHATTER_STRIKE',
  SpeedBuff = 'SPEED_BUFF',
  TickDamage = 'TICK_DAMAGE'
}

export enum SkillTargetType {
  Ally = 'ALLY',
  Enemies = 'ENEMIES',
  Enemy = 'ENEMY',
  Self = 'SELF'
}

export enum SkillType {
  Attack = 'ATTACK',
  Buff = 'BUFF',
  Debuff = 'DEBUFF',
  Heal = 'HEAL'
}

export type StakeState = {
  __typename?: 'StakeState';
  contract: Contract;
  receivedBlockIndex: Scalars['Long']['output'];
  startedBlockIndex: Scalars['Long']['output'];
};

export type StatMap = {
  __typename?: 'StatMap';
  value: Array<KeyValuePairOfStatTypeAndDecimalStat>;
};

export enum StatType {
  ArmorPenetration = 'ARMOR_PENETRATION',
  Atk = 'ATK',
  Cdmg = 'CDMG',
  Cri = 'CRI',
  Def = 'DEF',
  Drr = 'DRR',
  Drv = 'DRV',
  Hit = 'HIT',
  Hp = 'HP',
  None = 'NONE',
  Spd = 'SPD',
  Thorn = 'THORN'
}

export type TradableMaterial = ItemBaseInterface & MaterialInterface & {
  __typename?: 'TradableMaterial';
  elementalType: ElementalType;
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['HashDigestSHA256']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  requiredBlockIndex: Scalars['Long']['output'];
};

export enum ValueKind {
  Binary = 'BINARY',
  Boolean = 'BOOLEAN',
  Dictionary = 'DICTIONARY',
  Integer = 'INTEGER',
  List = 'LIST',
  Null = 'NULL',
  Text = 'TEXT'
}

export type Weapon = EquipmentInterface & ItemBaseInterface & ItemUsableInterface & {
  __typename?: 'Weapon';
  buffSkills: Array<Skill>;
  elementalType: ElementalType;
  equipped: Scalars['Boolean']['output'];
  exp: Scalars['Long']['output'];
  grade: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  itemId: Scalars['UUID']['output'];
  itemSubType: ItemSubType;
  itemType: ItemType;
  level: Scalars['Int']['output'];
  madeWithMimisbrunnrRecipe: Scalars['Boolean']['output'];
  optionCountFromCombination: Scalars['Int']['output'];
  requiredBlockIndex: Scalars['Long']['output'];
  setId: Scalars['Int']['output'];
  skills: Array<Skill>;
  spineResourcePath: Scalars['String']['output'];
  stat: DecimalStat;
  statsMap: StatMap;
};

export type World = {
  __typename?: 'World';
  id: Scalars['Int']['output'];
  isStageCleared: Scalars['Boolean']['output'];
  isUnlocked: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  stageBegin: Scalars['Int']['output'];
  stageClearedBlockIndex: Scalars['Long']['output'];
  stageClearedId: Scalars['Int']['output'];
  stageEnd: Scalars['Int']['output'];
  unlockedBlockIndex: Scalars['Long']['output'];
};

export type WorldBossKillRewardRecord = {
  __typename?: 'WorldBossKillRewardRecord';
  rewardRecordDictionary: Array<KeyValuePairOfInt32AndBoolean>;
};

export type WorldBossState = {
  __typename?: 'WorldBossState';
  currentHp: Scalars['BigInteger']['output'];
  endedBlockIndex: Scalars['Long']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  startedBlockIndex: Scalars['Long']['output'];
};

export type WorldInformationState = {
  __typename?: 'WorldInformationState';
  worldDictionary: Array<KeyValuePairOfInt32AndWorld>;
};

export type GetWorldInformationQueryVariables = Exact<{
  avatarAddress: Scalars['Address']['input'];
}>;


export type GetWorldInformationQuery = { __typename?: 'Query', worldInformation: { __typename?: 'WorldInformationState', worldDictionary: Array<{ __typename?: 'KeyValuePairOfInt32AndWorld', key: number, value: { __typename?: 'World', isStageCleared: boolean, isUnlocked: boolean, name: string, stageBegin: number, stageClearedBlockIndex: number, stageClearedId: number, stageEnd: number, unlockedBlockIndex: number } }> } };



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping of interface types */
export type ResolversInterfaceTypes<_RefType extends Record<string, unknown>> = {
  AttachmentActionResultInterface: ( Omit<AttachmentActionResult, 'itemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<Buy7BuyerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, shopItem: _RefType['ShopItem'] } ) | ( Omit<Buy7SellerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, shopItem: _RefType['ShopItem'] } ) | ( Omit<CombinationConsumable5Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, materials: Array<_RefType['KeyValuePairOfMaterialAndInt32']> } ) | ( Omit<DailyReward2Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, materials: Array<_RefType['KeyValuePairOfMaterialAndInt32']> } ) | ( Omit<ItemEnhancement7Result, 'itemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<ItemEnhancement9Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, preItemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<ItemEnhancement11Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, preItemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<ItemEnhancement12Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, preItemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<ItemEnhancement13Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, preItemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<MonsterCollectionResult, 'itemUsable'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<RapidCombination0Result, 'cost' | 'itemUsable'> & { cost: Array<_RefType['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<RapidCombination5Result, 'cost' | 'itemUsable'> & { cost: Array<_RefType['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<_RefType['ItemUsableInterface']> } ) | ( Omit<SellCancellationResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<_RefType['ItemUsableInterface']>, shopItem: _RefType['ShopItem'] } );
  EquipmentInterface: ( Armor ) | ( Aura ) | ( Belt ) | ( Equipment ) | ( Grimoire ) | ( Necklace ) | ( Ring ) | ( Weapon );
  IFungibleItem: never;
  INonFungibleItem: never;
  ITradableItem: never;
  ItemBaseInterface: ( Armor ) | ( Aura ) | ( Belt ) | ( Consumable ) | ( Costume ) | ( Equipment ) | ( Grimoire ) | ( ItemBase ) | ( ItemUsable ) | ( Material ) | ( Necklace ) | ( Ring ) | ( TradableMaterial ) | ( Weapon );
  ItemUsableInterface: ( Armor ) | ( Aura ) | ( Belt ) | ( Consumable ) | ( Equipment ) | ( Grimoire ) | ( ItemUsable ) | ( Necklace ) | ( Ring ) | ( Weapon );
  MaterialInterface: ( Material ) | ( TradableMaterial );
  ProductInterface: ( FavProduct ) | ( Omit<ItemProduct, 'tradableItem'> & { tradableItem?: Maybe<_RefType['ItemBaseInterface']> } ) | ( Product );
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Address: ResolverTypeWrapper<Scalars['Address']['output']>;
  AgentState: ResolverTypeWrapper<AgentState>;
  ArenaInformation: ResolverTypeWrapper<ArenaInformation>;
  ArenaObject: ResolverTypeWrapper<ArenaObject>;
  ArenaRankingDocument: ResolverTypeWrapper<ArenaRankingDocument>;
  ArenaScore: ResolverTypeWrapper<ArenaScore>;
  ArenaType: ArenaType;
  Armor: ResolverTypeWrapper<Armor>;
  AttachmentActionResult: ResolverTypeWrapper<Omit<AttachmentActionResult, 'itemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  AttachmentActionResultInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['AttachmentActionResultInterface']>;
  Aura: ResolverTypeWrapper<Aura>;
  AvatarState: ResolverTypeWrapper<AvatarState>;
  Belt: ResolverTypeWrapper<Belt>;
  BigInteger: ResolverTypeWrapper<Scalars['BigInteger']['output']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Buy7BuyerResult: ResolverTypeWrapper<Omit<Buy7BuyerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, shopItem: ResolversTypes['ShopItem'] }>;
  Buy7SellerResult: ResolverTypeWrapper<Omit<Buy7SellerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, shopItem: ResolversTypes['ShopItem'] }>;
  Byte: ResolverTypeWrapper<Scalars['Byte']['output']>;
  CollectionSegmentInfo: ResolverTypeWrapper<CollectionSegmentInfo>;
  CombinationConsumable5Result: ResolverTypeWrapper<Omit<CombinationConsumable5Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, materials: Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']> }>;
  CombinationSlotState: ResolverTypeWrapper<Omit<CombinationSlotState, 'result'> & { result?: Maybe<ResolversTypes['AttachmentActionResultInterface']> }>;
  Consumable: ResolverTypeWrapper<Consumable>;
  Contract: ResolverTypeWrapper<Contract>;
  Costume: ResolverTypeWrapper<Costume>;
  Currency: ResolverTypeWrapper<Currency>;
  CurrencyInput: CurrencyInput;
  CurrencyMethodType: CurrencyMethodType;
  DailyReward2Result: ResolverTypeWrapper<Omit<DailyReward2Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, materials: Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']> }>;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']['output']>;
  Decimal: ResolverTypeWrapper<Scalars['Decimal']['output']>;
  DecimalStat: ResolverTypeWrapper<DecimalStat>;
  ElementalType: ElementalType;
  EnhancementResult: EnhancementResult;
  Equipment: ResolverTypeWrapper<Equipment>;
  EquipmentInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['EquipmentInterface']>;
  FavProduct: ResolverTypeWrapper<FavProduct>;
  FungibleAssetValue: ResolverTypeWrapper<FungibleAssetValue>;
  Grimoire: ResolverTypeWrapper<Grimoire>;
  HashDigestSHA256: ResolverTypeWrapper<Scalars['HashDigestSHA256']['output']>;
  IFungibleItem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['IFungibleItem']>;
  INonFungibleItem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['INonFungibleItem']>;
  ITradableItem: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ITradableItem']>;
  IValue: ResolverTypeWrapper<IValue>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ItemBase: ResolverTypeWrapper<ItemBase>;
  ItemBaseInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ItemBaseInterface']>;
  ItemEnhancement7Result: ResolverTypeWrapper<Omit<ItemEnhancement7Result, 'itemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  ItemEnhancement9Result: ResolverTypeWrapper<Omit<ItemEnhancement9Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  ItemEnhancement11Result: ResolverTypeWrapper<Omit<ItemEnhancement11Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  ItemEnhancement12Result: ResolverTypeWrapper<Omit<ItemEnhancement12Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  ItemEnhancement13Result: ResolverTypeWrapper<Omit<ItemEnhancement13Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  ItemProduct: ResolverTypeWrapper<Omit<ItemProduct, 'tradableItem'> & { tradableItem?: Maybe<ResolversTypes['ItemBaseInterface']> }>;
  ItemSubType: ItemSubType;
  ItemType: ItemType;
  ItemUsable: ResolverTypeWrapper<ItemUsable>;
  ItemUsableInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ItemUsableInterface']>;
  KeyValuePairOfInt32AndAddress: ResolverTypeWrapper<KeyValuePairOfInt32AndAddress>;
  KeyValuePairOfInt32AndBoolean: ResolverTypeWrapper<KeyValuePairOfInt32AndBoolean>;
  KeyValuePairOfInt32AndCombinationSlotState: ResolverTypeWrapper<Omit<KeyValuePairOfInt32AndCombinationSlotState, 'value'> & { value: ResolversTypes['CombinationSlotState'] }>;
  KeyValuePairOfInt32AndInt32: ResolverTypeWrapper<KeyValuePairOfInt32AndInt32>;
  KeyValuePairOfInt32AndWorld: ResolverTypeWrapper<KeyValuePairOfInt32AndWorld>;
  KeyValuePairOfMaterialAndInt32: ResolverTypeWrapper<Omit<KeyValuePairOfMaterialAndInt32, 'key'> & { key: ResolversTypes['MaterialInterface'] }>;
  KeyValuePairOfStatTypeAndDecimalStat: ResolverTypeWrapper<KeyValuePairOfStatTypeAndDecimalStat>;
  Long: ResolverTypeWrapper<Scalars['Long']['output']>;
  Mail: ResolverTypeWrapper<Mail>;
  MailBox: ResolverTypeWrapper<MailBox>;
  Material: ResolverTypeWrapper<Material>;
  MaterialInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['MaterialInterface']>;
  MetadataDocument: ResolverTypeWrapper<MetadataDocument>;
  MonsterCollectionResult: ResolverTypeWrapper<Omit<MonsterCollectionResult, 'itemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  Necklace: ResolverTypeWrapper<Necklace>;
  ObjectId: ResolverTypeWrapper<ObjectId>;
  PetState: ResolverTypeWrapper<PetState>;
  PledgeDocument: ResolverTypeWrapper<PledgeDocument>;
  Product: ResolverTypeWrapper<Product>;
  ProductDocument: ResolverTypeWrapper<Omit<ProductDocument, 'object'> & { object: ResolversTypes['ProductInterface'] }>;
  ProductInterface: ResolverTypeWrapper<ResolversInterfaceTypes<ResolversTypes>['ProductInterface']>;
  ProductType: ProductType;
  ProductsCollectionSegment: ResolverTypeWrapper<Omit<ProductsCollectionSegment, 'items'> & { items?: Maybe<Array<Maybe<ResolversTypes['ProductDocument']>>> }>;
  Query: ResolverTypeWrapper<{}>;
  RaiderState: ResolverTypeWrapper<RaiderState>;
  RapidCombination0Result: ResolverTypeWrapper<Omit<RapidCombination0Result, 'cost' | 'itemUsable'> & { cost: Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  RapidCombination5Result: ResolverTypeWrapper<Omit<RapidCombination5Result, 'cost' | 'itemUsable'> & { cost: Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  RewardInfo: ResolverTypeWrapper<RewardInfo>;
  Ring: ResolverTypeWrapper<Ring>;
  RoundData: ResolverTypeWrapper<RoundData>;
  Row: ResolverTypeWrapper<Row>;
  RuneState: ResolverTypeWrapper<RuneState>;
  SellCancellationResult: ResolverTypeWrapper<Omit<SellCancellationResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']>, shopItem: ResolversTypes['ShopItem'] }>;
  SheetNameType: ResolverTypeWrapper<Scalars['SheetNameType']['output']>;
  SheetObject: ResolverTypeWrapper<SheetObject>;
  ShopItem: ResolverTypeWrapper<Omit<ShopItem, 'itemUsable'> & { itemUsable?: Maybe<ResolversTypes['ItemUsableInterface']> }>;
  Short: ResolverTypeWrapper<Scalars['Short']['output']>;
  SimplifiedAvatarState: ResolverTypeWrapper<SimplifiedAvatarState>;
  Skill: ResolverTypeWrapper<Skill>;
  SkillCategory: SkillCategory;
  SkillTargetType: SkillTargetType;
  SkillType: SkillType;
  StakeState: ResolverTypeWrapper<StakeState>;
  StatMap: ResolverTypeWrapper<StatMap>;
  StatType: StatType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  TradableMaterial: ResolverTypeWrapper<TradableMaterial>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  ValueKind: ValueKind;
  Weapon: ResolverTypeWrapper<Weapon>;
  World: ResolverTypeWrapper<World>;
  WorldBossKillRewardRecord: ResolverTypeWrapper<WorldBossKillRewardRecord>;
  WorldBossState: ResolverTypeWrapper<WorldBossState>;
  WorldInformationState: ResolverTypeWrapper<WorldInformationState>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Address: Scalars['Address']['output'];
  AgentState: AgentState;
  ArenaInformation: ArenaInformation;
  ArenaObject: ArenaObject;
  ArenaRankingDocument: ArenaRankingDocument;
  ArenaScore: ArenaScore;
  Armor: Armor;
  AttachmentActionResult: Omit<AttachmentActionResult, 'itemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  AttachmentActionResultInterface: ResolversInterfaceTypes<ResolversParentTypes>['AttachmentActionResultInterface'];
  Aura: Aura;
  AvatarState: AvatarState;
  Belt: Belt;
  BigInteger: Scalars['BigInteger']['output'];
  Boolean: Scalars['Boolean']['output'];
  Buy7BuyerResult: Omit<Buy7BuyerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, shopItem: ResolversParentTypes['ShopItem'] };
  Buy7SellerResult: Omit<Buy7SellerResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, shopItem: ResolversParentTypes['ShopItem'] };
  Byte: Scalars['Byte']['output'];
  CollectionSegmentInfo: CollectionSegmentInfo;
  CombinationConsumable5Result: Omit<CombinationConsumable5Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, materials: Array<ResolversParentTypes['KeyValuePairOfMaterialAndInt32']> };
  CombinationSlotState: Omit<CombinationSlotState, 'result'> & { result?: Maybe<ResolversParentTypes['AttachmentActionResultInterface']> };
  Consumable: Consumable;
  Contract: Contract;
  Costume: Costume;
  Currency: Currency;
  CurrencyInput: CurrencyInput;
  DailyReward2Result: Omit<DailyReward2Result, 'itemUsable' | 'materials'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, materials: Array<ResolversParentTypes['KeyValuePairOfMaterialAndInt32']> };
  DateTime: Scalars['DateTime']['output'];
  Decimal: Scalars['Decimal']['output'];
  DecimalStat: DecimalStat;
  Equipment: Equipment;
  EquipmentInterface: ResolversInterfaceTypes<ResolversParentTypes>['EquipmentInterface'];
  FavProduct: FavProduct;
  FungibleAssetValue: FungibleAssetValue;
  Grimoire: Grimoire;
  HashDigestSHA256: Scalars['HashDigestSHA256']['output'];
  IFungibleItem: ResolversInterfaceTypes<ResolversParentTypes>['IFungibleItem'];
  INonFungibleItem: ResolversInterfaceTypes<ResolversParentTypes>['INonFungibleItem'];
  ITradableItem: ResolversInterfaceTypes<ResolversParentTypes>['ITradableItem'];
  IValue: IValue;
  Int: Scalars['Int']['output'];
  ItemBase: ItemBase;
  ItemBaseInterface: ResolversInterfaceTypes<ResolversParentTypes>['ItemBaseInterface'];
  ItemEnhancement7Result: Omit<ItemEnhancement7Result, 'itemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  ItemEnhancement9Result: Omit<ItemEnhancement9Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  ItemEnhancement11Result: Omit<ItemEnhancement11Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  ItemEnhancement12Result: Omit<ItemEnhancement12Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  ItemEnhancement13Result: Omit<ItemEnhancement13Result, 'itemUsable' | 'preItemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, preItemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  ItemProduct: Omit<ItemProduct, 'tradableItem'> & { tradableItem?: Maybe<ResolversParentTypes['ItemBaseInterface']> };
  ItemUsable: ItemUsable;
  ItemUsableInterface: ResolversInterfaceTypes<ResolversParentTypes>['ItemUsableInterface'];
  KeyValuePairOfInt32AndAddress: KeyValuePairOfInt32AndAddress;
  KeyValuePairOfInt32AndBoolean: KeyValuePairOfInt32AndBoolean;
  KeyValuePairOfInt32AndCombinationSlotState: Omit<KeyValuePairOfInt32AndCombinationSlotState, 'value'> & { value: ResolversParentTypes['CombinationSlotState'] };
  KeyValuePairOfInt32AndInt32: KeyValuePairOfInt32AndInt32;
  KeyValuePairOfInt32AndWorld: KeyValuePairOfInt32AndWorld;
  KeyValuePairOfMaterialAndInt32: Omit<KeyValuePairOfMaterialAndInt32, 'key'> & { key: ResolversParentTypes['MaterialInterface'] };
  KeyValuePairOfStatTypeAndDecimalStat: KeyValuePairOfStatTypeAndDecimalStat;
  Long: Scalars['Long']['output'];
  Mail: Mail;
  MailBox: MailBox;
  Material: Material;
  MaterialInterface: ResolversInterfaceTypes<ResolversParentTypes>['MaterialInterface'];
  MetadataDocument: MetadataDocument;
  MonsterCollectionResult: Omit<MonsterCollectionResult, 'itemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  Necklace: Necklace;
  ObjectId: ObjectId;
  PetState: PetState;
  PledgeDocument: PledgeDocument;
  Product: Product;
  ProductDocument: Omit<ProductDocument, 'object'> & { object: ResolversParentTypes['ProductInterface'] };
  ProductInterface: ResolversInterfaceTypes<ResolversParentTypes>['ProductInterface'];
  ProductsCollectionSegment: Omit<ProductsCollectionSegment, 'items'> & { items?: Maybe<Array<Maybe<ResolversParentTypes['ProductDocument']>>> };
  Query: {};
  RaiderState: RaiderState;
  RapidCombination0Result: Omit<RapidCombination0Result, 'cost' | 'itemUsable'> & { cost: Array<ResolversParentTypes['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  RapidCombination5Result: Omit<RapidCombination5Result, 'cost' | 'itemUsable'> & { cost: Array<ResolversParentTypes['KeyValuePairOfMaterialAndInt32']>, itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  RewardInfo: RewardInfo;
  Ring: Ring;
  RoundData: RoundData;
  Row: Row;
  RuneState: RuneState;
  SellCancellationResult: Omit<SellCancellationResult, 'itemUsable' | 'shopItem'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']>, shopItem: ResolversParentTypes['ShopItem'] };
  SheetNameType: Scalars['SheetNameType']['output'];
  SheetObject: SheetObject;
  ShopItem: Omit<ShopItem, 'itemUsable'> & { itemUsable?: Maybe<ResolversParentTypes['ItemUsableInterface']> };
  Short: Scalars['Short']['output'];
  SimplifiedAvatarState: SimplifiedAvatarState;
  Skill: Skill;
  StakeState: StakeState;
  StatMap: StatMap;
  String: Scalars['String']['output'];
  TradableMaterial: TradableMaterial;
  UUID: Scalars['UUID']['output'];
  Weapon: Weapon;
  World: World;
  WorldBossKillRewardRecord: WorldBossKillRewardRecord;
  WorldBossState: WorldBossState;
  WorldInformationState: WorldInformationState;
};

export interface AddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Address'], any> {
  name: 'Address';
}

export type AgentStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AgentState'] = ResolversParentTypes['AgentState']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarAddresses?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndAddress']>, ParentType, ContextType>;
  monsterCollectionRound?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaInformationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaInformation'] = ResolversParentTypes['ArenaInformation']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  lose?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchasedTicketCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticket?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ticketResetCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  win?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaObject'] = ResolversParentTypes['ArenaObject']> = {
  leaderboard?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArenaRankingDocument']>>>, ParentType, ContextType, RequireFields<ArenaObjectLeaderboardArgs, 'length' | 'ranking'>>;
  leaderboardByAvatarAddress?: Resolver<Maybe<Array<Maybe<ResolversTypes['ArenaRankingDocument']>>>, ParentType, ContextType, RequireFields<ArenaObjectLeaderboardByAvatarAddressArgs, 'avatarAddress'>>;
  ranking?: Resolver<Maybe<ResolversTypes['Long']>, ParentType, ContextType, RequireFields<ArenaObjectRankingArgs, 'avatarAddress'>>;
  round?: Resolver<Maybe<ResolversTypes['RoundData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaRankingDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaRankingDocument'] = ResolversParentTypes['ArenaRankingDocument']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  arenaInformation?: Resolver<ResolversTypes['ArenaInformation'], ParentType, ContextType>;
  arenaScore?: Resolver<ResolversTypes['ArenaScore'], ParentType, ContextType>;
  championshipId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  simpleAvatar?: Resolver<ResolversTypes['SimplifiedAvatarState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArenaScoreResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArenaScore'] = ResolversParentTypes['ArenaScore']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ArmorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Armor'] = ResolversParentTypes['Armor']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachmentActionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentActionResult'] = ResolversParentTypes['AttachmentActionResult']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttachmentActionResultInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['AttachmentActionResultInterface'] = ResolversParentTypes['AttachmentActionResultInterface']> = {
  __resolveType: TypeResolveFn<'AttachmentActionResult' | 'Buy7BuyerResult' | 'Buy7SellerResult' | 'CombinationConsumable5Result' | 'DailyReward2Result' | 'ItemEnhancement7Result' | 'ItemEnhancement9Result' | 'ItemEnhancement11Result' | 'ItemEnhancement12Result' | 'ItemEnhancement13Result' | 'MonsterCollectionResult' | 'RapidCombination0Result' | 'RapidCombination5Result' | 'SellCancellationResult', ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
};

export type AuraResolvers<ContextType = any, ParentType extends ResolversParentTypes['Aura'] = ResolversParentTypes['Aura']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AvatarStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['AvatarState'] = ResolversParentTypes['AvatarState']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  agentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  blockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  characterId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  combinationSlotAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  ear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  eventMap?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndInt32']>, ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  hair?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemMap?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndInt32']>, ParentType, ContextType>;
  lens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mailBox?: Resolver<ResolversTypes['MailBox'], ParentType, ContextType>;
  monsterMap?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndInt32']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rankingMapAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  stageMap?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndInt32']>, ParentType, ContextType>;
  tail?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BeltResolvers<ContextType = any, ParentType extends ResolversParentTypes['Belt'] = ResolversParentTypes['Belt']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntegerScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['BigInteger'], any> {
  name: 'BigInteger';
}

export type Buy7BuyerResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Buy7BuyerResult'] = ResolversParentTypes['Buy7BuyerResult']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  shopItem?: Resolver<ResolversTypes['ShopItem'], ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Buy7SellerResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Buy7SellerResult'] = ResolversParentTypes['Buy7SellerResult']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  shopItem?: Resolver<ResolversTypes['ShopItem'], ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ByteScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Byte'], any> {
  name: 'Byte';
}

export type CollectionSegmentInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['CollectionSegmentInfo'] = ResolversParentTypes['CollectionSegmentInfo']> = {
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CombinationConsumable5ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['CombinationConsumable5Result'] = ResolversParentTypes['CombinationConsumable5Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materials?: Resolver<Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, ParentType, ContextType>;
  recipeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  subRecipeId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CombinationSlotStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CombinationSlotState'] = ResolversParentTypes['CombinationSlotState']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isUnlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  petId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['AttachmentActionResultInterface']>, ParentType, ContextType>;
  startBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  unlockBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ConsumableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Consumable'] = ResolversParentTypes['Consumable']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  stats?: Resolver<Array<ResolversTypes['DecimalStat']>, ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<ContextType = any, ParentType extends ResolversParentTypes['Contract'] = ResolversParentTypes['Contract']> = {
  lockupInterval?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  rewardInterval?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  stakeRegularFixedRewardSheetTableName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stakeRegularRewardSheetTableName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CostumeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Costume'] = ResolversParentTypes['Costume']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CurrencyResolvers<ContextType = any, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  decimalPlaces?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  minters?: Resolver<Maybe<Array<Maybe<ResolversTypes['Address']>>>, ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  totalSupplyTrackable?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DailyReward2ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['DailyReward2Result'] = ResolversParentTypes['DailyReward2Result']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materials?: Resolver<Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface DecimalScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Decimal'], any> {
  name: 'Decimal';
}

export type DecimalStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['DecimalStat'] = ResolversParentTypes['DecimalStat']> = {
  additionalValue?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  baseValue?: Resolver<ResolversTypes['Decimal'], ParentType, ContextType>;
  statType?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EquipmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Equipment'] = ResolversParentTypes['Equipment']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EquipmentInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['EquipmentInterface'] = ResolversParentTypes['EquipmentInterface']> = {
  __resolveType: TypeResolveFn<'Armor' | 'Aura' | 'Belt' | 'Equipment' | 'Grimoire' | 'Necklace' | 'Ring' | 'Weapon', ParentType, ContextType>;
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
};

export type FavProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['FavProduct'] = ResolversParentTypes['FavProduct']> = {
  asset?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  registeredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FungibleAssetValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['FungibleAssetValue'] = ResolversParentTypes['FungibleAssetValue']> = {
  decimalPlaces?: Resolver<ResolversTypes['Byte'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rawValue?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GrimoireResolvers<ContextType = any, ParentType extends ResolversParentTypes['Grimoire'] = ResolversParentTypes['Grimoire']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface HashDigestSha256ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['HashDigestSHA256'], any> {
  name: 'HashDigestSHA256';
}

export type IFungibleItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['IFungibleItem'] = ResolversParentTypes['IFungibleItem']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  fungibleId?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
};

export type INonFungibleItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['INonFungibleItem'] = ResolversParentTypes['INonFungibleItem']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  nonFungibleId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
};

export type ITradableItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ITradableItem'] = ResolversParentTypes['ITradableItem']> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  tradableId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
};

export type IValueResolvers<ContextType = any, ParentType extends ResolversParentTypes['IValue'] = ResolversParentTypes['IValue']> = {
  encodingLength?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  inspect?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['ValueKind'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemBase'] = ResolversParentTypes['ItemBase']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemBaseInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemBaseInterface'] = ResolversParentTypes['ItemBaseInterface']> = {
  __resolveType: TypeResolveFn<'Armor' | 'Aura' | 'Belt' | 'Consumable' | 'Costume' | 'Equipment' | 'Grimoire' | 'ItemBase' | 'ItemUsable' | 'Material' | 'Necklace' | 'Ring' | 'TradableMaterial' | 'Weapon', ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
};

export type ItemEnhancement7ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEnhancement7Result'] = ResolversParentTypes['ItemEnhancement7Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materialItemIdList?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEnhancement9ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEnhancement9Result'] = ResolversParentTypes['ItemEnhancement9Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  enhancementResult?: Resolver<ResolversTypes['EnhancementResult'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materialItemIdList?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType>;
  preItemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEnhancement11ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEnhancement11Result'] = ResolversParentTypes['ItemEnhancement11Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  enhancementResult?: Resolver<ResolversTypes['EnhancementResult'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materialItemIdList?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType>;
  preItemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEnhancement12ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEnhancement12Result'] = ResolversParentTypes['ItemEnhancement12Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  enhancementResult?: Resolver<ResolversTypes['EnhancementResult'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materialItemIdList?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType>;
  preItemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemEnhancement13ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemEnhancement13Result'] = ResolversParentTypes['ItemEnhancement13Result']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  crystal?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  enhancementResult?: Resolver<ResolversTypes['EnhancementResult'], ParentType, ContextType>;
  gold?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  materialItemIdList?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType>;
  preItemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemProduct'] = ResolversParentTypes['ItemProduct']> = {
  itemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  registeredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  tradableItem?: Resolver<Maybe<ResolversTypes['ItemBaseInterface']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUsableResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemUsable'] = ResolversParentTypes['ItemUsable']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemUsableInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ItemUsableInterface'] = ResolversParentTypes['ItemUsableInterface']> = {
  __resolveType: TypeResolveFn<'Armor' | 'Aura' | 'Belt' | 'Consumable' | 'Equipment' | 'Grimoire' | 'ItemUsable' | 'Necklace' | 'Ring' | 'Weapon', ParentType, ContextType>;
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
};

export type KeyValuePairOfInt32AndAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfInt32AndAddress'] = ResolversParentTypes['KeyValuePairOfInt32AndAddress']> = {
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfInt32AndBooleanResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfInt32AndBoolean'] = ResolversParentTypes['KeyValuePairOfInt32AndBoolean']> = {
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfInt32AndCombinationSlotStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfInt32AndCombinationSlotState'] = ResolversParentTypes['KeyValuePairOfInt32AndCombinationSlotState']> = {
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['CombinationSlotState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfInt32AndInt32Resolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfInt32AndInt32'] = ResolversParentTypes['KeyValuePairOfInt32AndInt32']> = {
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfInt32AndWorldResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfInt32AndWorld'] = ResolversParentTypes['KeyValuePairOfInt32AndWorld']> = {
  key?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['World'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfMaterialAndInt32Resolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfMaterialAndInt32'] = ResolversParentTypes['KeyValuePairOfMaterialAndInt32']> = {
  key?: Resolver<ResolversTypes['MaterialInterface'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type KeyValuePairOfStatTypeAndDecimalStatResolvers<ContextType = any, ParentType extends ResolversParentTypes['KeyValuePairOfStatTypeAndDecimalStat'] = ResolversParentTypes['KeyValuePairOfStatTypeAndDecimalStat']> = {
  key?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface LongScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Long'], any> {
  name: 'Long';
}

export type MailResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mail'] = ResolversParentTypes['Mail']> = {
  blockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MailBoxResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailBox'] = ResolversParentTypes['MailBox']> = {
  mails?: Resolver<Array<ResolversTypes['Mail']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaterialResolvers<ContextType = any, ParentType extends ResolversParentTypes['Material'] = ResolversParentTypes['Material']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MaterialInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['MaterialInterface'] = ResolversParentTypes['MaterialInterface']> = {
  __resolveType: TypeResolveFn<'Material' | 'TradableMaterial', ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
};

export type MetadataDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['MetadataDocument'] = ResolversParentTypes['MetadataDocument']> = {
  collectionName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ObjectId'], ParentType, ContextType>;
  latestBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  pollerType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MonsterCollectionResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['MonsterCollectionResult'] = ResolversParentTypes['MonsterCollectionResult']> = {
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  rewards?: Resolver<Array<ResolversTypes['RewardInfo']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type NecklaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Necklace'] = ResolversParentTypes['Necklace']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ObjectIdResolvers<ContextType = any, ParentType extends ResolversParentTypes['ObjectId'] = ResolversParentTypes['ObjectId']> = {
  creationTime?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  increment?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  machine?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  pid?: Resolver<ResolversTypes['Short'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  toByteArray?: Resolver<Maybe<Array<ResolversTypes['Byte']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PetStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['PetState'] = ResolversParentTypes['PetState']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  petId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unlockedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PledgeDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['PledgeDocument'] = ResolversParentTypes['PledgeDocument']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contractAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  contracted?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refillMead?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  price?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  registeredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductDocument'] = ResolversParentTypes['ProductDocument']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  combatPoint?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  crystal?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  crystalPerPrice?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  object?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType>;
  productsStateAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  unitPrice?: Resolver<Maybe<ResolversTypes['Decimal']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductInterfaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductInterface'] = ResolversParentTypes['ProductInterface']> = {
  __resolveType: TypeResolveFn<'FavProduct' | 'ItemProduct' | 'Product', ParentType, ContextType>;
  price?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  productType?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  registeredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
};

export type ProductsCollectionSegmentResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductsCollectionSegment'] = ResolversParentTypes['ProductsCollectionSegment']> = {
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductDocument']>>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['CollectionSegmentInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  actionPoint?: Resolver<ResolversTypes['Int'], ParentType, ContextType, RequireFields<QueryActionPointArgs, 'address'>>;
  agent?: Resolver<ResolversTypes['AgentState'], ParentType, ContextType, RequireFields<QueryAgentArgs, 'address'>>;
  arena?: Resolver<ResolversTypes['ArenaObject'], ParentType, ContextType>;
  avatar?: Resolver<ResolversTypes['AvatarState'], ParentType, ContextType, RequireFields<QueryAvatarArgs, 'address'>>;
  balance?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryBalanceArgs, 'address'>>;
  combinationSlots?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndCombinationSlotState']>, ParentType, ContextType, RequireFields<QueryCombinationSlotsArgs, 'avatarAddress'>>;
  dailyRewardReceivedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType, RequireFields<QueryDailyRewardReceivedBlockIndexArgs, 'address'>>;
  metadata?: Resolver<ResolversTypes['MetadataDocument'], ParentType, ContextType, RequireFields<QueryMetadataArgs, 'collectionName'>>;
  pet?: Resolver<ResolversTypes['PetState'], ParentType, ContextType, RequireFields<QueryPetArgs, 'avatarAddress'>>;
  pledge?: Resolver<ResolversTypes['PledgeDocument'], ParentType, ContextType, RequireFields<QueryPledgeArgs, 'agentAddress'>>;
  product?: Resolver<ResolversTypes['ProductInterface'], ParentType, ContextType, RequireFields<QueryProductArgs, 'productId'>>;
  productIds?: Resolver<Array<ResolversTypes['UUID']>, ParentType, ContextType, RequireFields<QueryProductIdsArgs, 'avatarAddress'>>;
  products?: Resolver<Maybe<ResolversTypes['ProductsCollectionSegment']>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  runes?: Resolver<Array<ResolversTypes['RuneState']>, ParentType, ContextType, RequireFields<QueryRunesArgs, 'avatarAddress'>>;
  sheet?: Resolver<ResolversTypes['SheetObject'], ParentType, ContextType, RequireFields<QuerySheetArgs, 'encodeAsBase64' | 'sheetName'>>;
  sheetNames?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  stake?: Resolver<Maybe<ResolversTypes['StakeState']>, ParentType, ContextType, RequireFields<QueryStakeArgs, 'address'>>;
  worldBoss?: Resolver<ResolversTypes['WorldBossState'], ParentType, ContextType>;
  worldBossKillRewardRecord?: Resolver<ResolversTypes['WorldBossKillRewardRecord'], ParentType, ContextType, RequireFields<QueryWorldBossKillRewardRecordArgs, 'avatarAddress'>>;
  worldBossRaider?: Resolver<ResolversTypes['RaiderState'], ParentType, ContextType, RequireFields<QueryWorldBossRaiderArgs, 'avatarAddress'>>;
  worldInformation?: Resolver<ResolversTypes['WorldInformationState'], ParentType, ContextType, RequireFields<QueryWorldInformationArgs, 'address'>>;
};

export type RaiderStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RaiderState'] = ResolversParentTypes['RaiderState']> = {
  avatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  avatarName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  claimedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  cp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  highScore?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  iconId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latestBossLevel?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  latestRewardRank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  purchaseCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  refillBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  remainChallengeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalChallengeCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalScore?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  updatedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RapidCombination0ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RapidCombination0Result'] = ResolversParentTypes['RapidCombination0Result']> = {
  cost?: Resolver<Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RapidCombination5ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['RapidCombination5Result'] = ResolversParentTypes['RapidCombination5Result']> = {
  cost?: Resolver<Array<ResolversTypes['KeyValuePairOfMaterialAndInt32']>, ParentType, ContextType>;
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RewardInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['RewardInfo'] = ResolversParentTypes['RewardInfo']> = {
  serialize?: Resolver<Maybe<ResolversTypes['IValue']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ring'] = ResolversParentTypes['Ring']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoundDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['RoundData'] = ResolversParentTypes['RoundData']> = {
  additionalTicketPrice?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  arenaType?: Resolver<ResolversTypes['ArenaType'], ParentType, ContextType>;
  championshipId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  endBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  entranceFee?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  maxPurchaseCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  maxPurchaseCountWithInterval?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredMedalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  round?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  ticketPrice?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RowResolvers<ContextType = any, ParentType extends ResolversParentTypes['Row'] = ResolversParentTypes['Row']> = {
  combo?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cooldown?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  hitCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skillCategory?: Resolver<ResolversTypes['SkillCategory'], ParentType, ContextType>;
  skillTargetType?: Resolver<ResolversTypes['SkillTargetType'], ParentType, ContextType>;
  skillType?: Resolver<ResolversTypes['SkillType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RuneStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['RuneState'] = ResolversParentTypes['RuneState']> = {
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  runeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SellCancellationResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['SellCancellationResult'] = ResolversParentTypes['SellCancellationResult']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  shopItem?: Resolver<ResolversTypes['ShopItem'], ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  typeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface SheetNameTypeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['SheetNameType'], any> {
  name: 'SheetNameType';
}

export type SheetObjectResolvers<ContextType = any, ParentType extends ResolversParentTypes['SheetObject'] = ResolversParentTypes['SheetObject']> = {
  csv?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['SheetNameType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ShopItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['ShopItem'] = ResolversParentTypes['ShopItem']> = {
  costume?: Resolver<Maybe<ResolversTypes['Costume']>, ParentType, ContextType>;
  expiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  itemUsable?: Resolver<Maybe<ResolversTypes['ItemUsableInterface']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['FungibleAssetValue'], ParentType, ContextType>;
  productId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  sellerAgentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  sellerAvatarAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  tradableFungibleItem?: Resolver<Maybe<ResolversTypes['TradableMaterial']>, ParentType, ContextType>;
  tradableFungibleItemCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface ShortScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Short'], any> {
  name: 'Short';
}

export type SimplifiedAvatarStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['SimplifiedAvatarState'] = ResolversParentTypes['SimplifiedAvatarState']> = {
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  agentAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  blockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  characterId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  combinationSlotAddresses?: Resolver<Array<ResolversTypes['Address']>, ParentType, ContextType>;
  ear?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  hair?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  lens?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  rankingMapAddress?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  tail?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  version?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SkillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Skill'] = ResolversParentTypes['Skill']> = {
  chance?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  power?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  referencedStatType?: Resolver<ResolversTypes['StatType'], ParentType, ContextType>;
  skillRow?: Resolver<ResolversTypes['Row'], ParentType, ContextType>;
  statPowerRatio?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StakeStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['StakeState'] = ResolversParentTypes['StakeState']> = {
  contract?: Resolver<ResolversTypes['Contract'], ParentType, ContextType>;
  receivedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StatMapResolvers<ContextType = any, ParentType extends ResolversParentTypes['StatMap'] = ResolversParentTypes['StatMap']> = {
  value?: Resolver<Array<ResolversTypes['KeyValuePairOfStatTypeAndDecimalStat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TradableMaterialResolvers<ContextType = any, ParentType extends ResolversParentTypes['TradableMaterial'] = ResolversParentTypes['TradableMaterial']> = {
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['HashDigestSHA256'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type WeaponResolvers<ContextType = any, ParentType extends ResolversParentTypes['Weapon'] = ResolversParentTypes['Weapon']> = {
  buffSkills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  elementalType?: Resolver<ResolversTypes['ElementalType'], ParentType, ContextType>;
  equipped?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  grade?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  itemId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  itemSubType?: Resolver<ResolversTypes['ItemSubType'], ParentType, ContextType>;
  itemType?: Resolver<ResolversTypes['ItemType'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  madeWithMimisbrunnrRecipe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  optionCountFromCombination?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  requiredBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  setId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['Skill']>, ParentType, ContextType>;
  spineResourcePath?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stat?: Resolver<ResolversTypes['DecimalStat'], ParentType, ContextType>;
  statsMap?: Resolver<ResolversTypes['StatMap'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldResolvers<ContextType = any, ParentType extends ResolversParentTypes['World'] = ResolversParentTypes['World']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isStageCleared?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  isUnlocked?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  stageBegin?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageClearedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  stageClearedId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  stageEnd?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  unlockedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossKillRewardRecordResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldBossKillRewardRecord'] = ResolversParentTypes['WorldBossKillRewardRecord']> = {
  rewardRecordDictionary?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndBoolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldBossStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldBossState'] = ResolversParentTypes['WorldBossState']> = {
  currentHp?: Resolver<ResolversTypes['BigInteger'], ParentType, ContextType>;
  endedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  startedBlockIndex?: Resolver<ResolversTypes['Long'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type WorldInformationStateResolvers<ContextType = any, ParentType extends ResolversParentTypes['WorldInformationState'] = ResolversParentTypes['WorldInformationState']> = {
  worldDictionary?: Resolver<Array<ResolversTypes['KeyValuePairOfInt32AndWorld']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Address?: GraphQLScalarType;
  AgentState?: AgentStateResolvers<ContextType>;
  ArenaInformation?: ArenaInformationResolvers<ContextType>;
  ArenaObject?: ArenaObjectResolvers<ContextType>;
  ArenaRankingDocument?: ArenaRankingDocumentResolvers<ContextType>;
  ArenaScore?: ArenaScoreResolvers<ContextType>;
  Armor?: ArmorResolvers<ContextType>;
  AttachmentActionResult?: AttachmentActionResultResolvers<ContextType>;
  AttachmentActionResultInterface?: AttachmentActionResultInterfaceResolvers<ContextType>;
  Aura?: AuraResolvers<ContextType>;
  AvatarState?: AvatarStateResolvers<ContextType>;
  Belt?: BeltResolvers<ContextType>;
  BigInteger?: GraphQLScalarType;
  Buy7BuyerResult?: Buy7BuyerResultResolvers<ContextType>;
  Buy7SellerResult?: Buy7SellerResultResolvers<ContextType>;
  Byte?: GraphQLScalarType;
  CollectionSegmentInfo?: CollectionSegmentInfoResolvers<ContextType>;
  CombinationConsumable5Result?: CombinationConsumable5ResultResolvers<ContextType>;
  CombinationSlotState?: CombinationSlotStateResolvers<ContextType>;
  Consumable?: ConsumableResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Costume?: CostumeResolvers<ContextType>;
  Currency?: CurrencyResolvers<ContextType>;
  DailyReward2Result?: DailyReward2ResultResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  Decimal?: GraphQLScalarType;
  DecimalStat?: DecimalStatResolvers<ContextType>;
  Equipment?: EquipmentResolvers<ContextType>;
  EquipmentInterface?: EquipmentInterfaceResolvers<ContextType>;
  FavProduct?: FavProductResolvers<ContextType>;
  FungibleAssetValue?: FungibleAssetValueResolvers<ContextType>;
  Grimoire?: GrimoireResolvers<ContextType>;
  HashDigestSHA256?: GraphQLScalarType;
  IFungibleItem?: IFungibleItemResolvers<ContextType>;
  INonFungibleItem?: INonFungibleItemResolvers<ContextType>;
  ITradableItem?: ITradableItemResolvers<ContextType>;
  IValue?: IValueResolvers<ContextType>;
  ItemBase?: ItemBaseResolvers<ContextType>;
  ItemBaseInterface?: ItemBaseInterfaceResolvers<ContextType>;
  ItemEnhancement7Result?: ItemEnhancement7ResultResolvers<ContextType>;
  ItemEnhancement9Result?: ItemEnhancement9ResultResolvers<ContextType>;
  ItemEnhancement11Result?: ItemEnhancement11ResultResolvers<ContextType>;
  ItemEnhancement12Result?: ItemEnhancement12ResultResolvers<ContextType>;
  ItemEnhancement13Result?: ItemEnhancement13ResultResolvers<ContextType>;
  ItemProduct?: ItemProductResolvers<ContextType>;
  ItemUsable?: ItemUsableResolvers<ContextType>;
  ItemUsableInterface?: ItemUsableInterfaceResolvers<ContextType>;
  KeyValuePairOfInt32AndAddress?: KeyValuePairOfInt32AndAddressResolvers<ContextType>;
  KeyValuePairOfInt32AndBoolean?: KeyValuePairOfInt32AndBooleanResolvers<ContextType>;
  KeyValuePairOfInt32AndCombinationSlotState?: KeyValuePairOfInt32AndCombinationSlotStateResolvers<ContextType>;
  KeyValuePairOfInt32AndInt32?: KeyValuePairOfInt32AndInt32Resolvers<ContextType>;
  KeyValuePairOfInt32AndWorld?: KeyValuePairOfInt32AndWorldResolvers<ContextType>;
  KeyValuePairOfMaterialAndInt32?: KeyValuePairOfMaterialAndInt32Resolvers<ContextType>;
  KeyValuePairOfStatTypeAndDecimalStat?: KeyValuePairOfStatTypeAndDecimalStatResolvers<ContextType>;
  Long?: GraphQLScalarType;
  Mail?: MailResolvers<ContextType>;
  MailBox?: MailBoxResolvers<ContextType>;
  Material?: MaterialResolvers<ContextType>;
  MaterialInterface?: MaterialInterfaceResolvers<ContextType>;
  MetadataDocument?: MetadataDocumentResolvers<ContextType>;
  MonsterCollectionResult?: MonsterCollectionResultResolvers<ContextType>;
  Necklace?: NecklaceResolvers<ContextType>;
  ObjectId?: ObjectIdResolvers<ContextType>;
  PetState?: PetStateResolvers<ContextType>;
  PledgeDocument?: PledgeDocumentResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductDocument?: ProductDocumentResolvers<ContextType>;
  ProductInterface?: ProductInterfaceResolvers<ContextType>;
  ProductsCollectionSegment?: ProductsCollectionSegmentResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RaiderState?: RaiderStateResolvers<ContextType>;
  RapidCombination0Result?: RapidCombination0ResultResolvers<ContextType>;
  RapidCombination5Result?: RapidCombination5ResultResolvers<ContextType>;
  RewardInfo?: RewardInfoResolvers<ContextType>;
  Ring?: RingResolvers<ContextType>;
  RoundData?: RoundDataResolvers<ContextType>;
  Row?: RowResolvers<ContextType>;
  RuneState?: RuneStateResolvers<ContextType>;
  SellCancellationResult?: SellCancellationResultResolvers<ContextType>;
  SheetNameType?: GraphQLScalarType;
  SheetObject?: SheetObjectResolvers<ContextType>;
  ShopItem?: ShopItemResolvers<ContextType>;
  Short?: GraphQLScalarType;
  SimplifiedAvatarState?: SimplifiedAvatarStateResolvers<ContextType>;
  Skill?: SkillResolvers<ContextType>;
  StakeState?: StakeStateResolvers<ContextType>;
  StatMap?: StatMapResolvers<ContextType>;
  TradableMaterial?: TradableMaterialResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  Weapon?: WeaponResolvers<ContextType>;
  World?: WorldResolvers<ContextType>;
  WorldBossKillRewardRecord?: WorldBossKillRewardRecordResolvers<ContextType>;
  WorldBossState?: WorldBossStateResolvers<ContextType>;
  WorldInformationState?: WorldInformationStateResolvers<ContextType>;
};



export const GetWorldInformationDocument = gql`
    query GetWorldInformation($avatarAddress: Address!) {
  worldInformation(address: $avatarAddress) {
    worldDictionary {
      key
      value {
        isStageCleared
        isUnlocked
        name
        stageBegin
        stageClearedBlockIndex
        stageClearedId
        stageEnd
        unlockedBlockIndex
      }
    }
  }
}
    `;

/**
 * __useGetWorldInformationQuery__
 *
 * To run a query within a React component, call `useGetWorldInformationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorldInformationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorldInformationQuery({
 *   variables: {
 *      avatarAddress: // value for 'avatarAddress'
 *   },
 * });
 */
export function useGetWorldInformationQuery(baseOptions: Apollo.QueryHookOptions<GetWorldInformationQuery, GetWorldInformationQueryVariables> & ({ variables: GetWorldInformationQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorldInformationQuery, GetWorldInformationQueryVariables>(GetWorldInformationDocument, options);
      }
export function useGetWorldInformationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorldInformationQuery, GetWorldInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorldInformationQuery, GetWorldInformationQueryVariables>(GetWorldInformationDocument, options);
        }
export function useGetWorldInformationSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetWorldInformationQuery, GetWorldInformationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorldInformationQuery, GetWorldInformationQueryVariables>(GetWorldInformationDocument, options);
        }
export type GetWorldInformationQueryHookResult = ReturnType<typeof useGetWorldInformationQuery>;
export type GetWorldInformationLazyQueryHookResult = ReturnType<typeof useGetWorldInformationLazyQuery>;
export type GetWorldInformationSuspenseQueryHookResult = ReturnType<typeof useGetWorldInformationSuspenseQuery>;
export type GetWorldInformationQueryResult = Apollo.QueryResult<GetWorldInformationQuery, GetWorldInformationQueryVariables>;