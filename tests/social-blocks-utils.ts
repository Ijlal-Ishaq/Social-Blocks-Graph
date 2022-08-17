import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AccountCreated,
  Approval,
  ApprovalForAll,
  BidPlaced,
  BiddableTokenPurchased,
  InfoChanged,
  OwnershipTransferred,
  PostCreated,
  PostDetailsChanged,
  PostRewardClaimed,
  PostSold,
  Transfer
} from "../generated/SocialBlocks/SocialBlocks"

export function createAccountCreatedEvent(
  user: Address,
  userName: string,
  displayName: string,
  bio: string,
  image: string
): AccountCreated {
  let accountCreatedEvent = changetype<AccountCreated>(newMockEvent())

  accountCreatedEvent.parameters = new Array()

  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("userName", ethereum.Value.fromString(userName))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  accountCreatedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return accountCreatedEvent
}

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBidPlacedEvent(
  bidder: Address,
  postId: BigInt,
  bidAmount: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAmount",
      ethereum.Value.fromUnsignedBigInt(bidAmount)
    )
  )

  return bidPlacedEvent
}

export function createBiddableTokenPurchasedEvent(
  oldOwner: Address,
  newOwner: Address,
  amount: BigInt,
  id: BigInt
): BiddableTokenPurchased {
  let biddableTokenPurchasedEvent = changetype<BiddableTokenPurchased>(
    newMockEvent()
  )

  biddableTokenPurchasedEvent.parameters = new Array()

  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("oldOwner", ethereum.Value.fromAddress(oldOwner))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  biddableTokenPurchasedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return biddableTokenPurchasedEvent
}

export function createInfoChangedEvent(
  displayName: string,
  bio: string,
  image: string
): InfoChanged {
  let infoChangedEvent = changetype<InfoChanged>(newMockEvent())

  infoChangedEvent.parameters = new Array()

  infoChangedEvent.parameters.push(
    new ethereum.EventParam(
      "displayName",
      ethereum.Value.fromString(displayName)
    )
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("bio", ethereum.Value.fromString(bio))
  )
  infoChangedEvent.parameters.push(
    new ethereum.EventParam("image", ethereum.Value.fromString(image))
  )

  return infoChangedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPostCreatedEvent(
  id: BigInt,
  sender: Address,
  uri: string,
  buyStatus: i32,
  sellValue: BigInt,
  metadata: string
): PostCreated {
  let postCreatedEvent = changetype<PostCreated>(newMockEvent())

  postCreatedEvent.parameters = new Array()

  postCreatedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("uri", ethereum.Value.fromString(uri))
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "buyStatus",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(buyStatus))
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "sellValue",
      ethereum.Value.fromUnsignedBigInt(sellValue)
    )
  )
  postCreatedEvent.parameters.push(
    new ethereum.EventParam("metadata", ethereum.Value.fromString(metadata))
  )

  return postCreatedEvent
}

export function createPostDetailsChangedEvent(
  postId: BigInt,
  status: i32,
  price: BigInt,
  bidDuration: BigInt
): PostDetailsChanged {
  let postDetailsChangedEvent = changetype<PostDetailsChanged>(newMockEvent())

  postDetailsChangedEvent.parameters = new Array()

  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )
  postDetailsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "bidDuration",
      ethereum.Value.fromUnsignedBigInt(bidDuration)
    )
  )

  return postDetailsChangedEvent
}

export function createPostRewardClaimedEvent(
  user: Address,
  postId: BigInt,
  reward: BigInt
): PostRewardClaimed {
  let postRewardClaimedEvent = changetype<PostRewardClaimed>(newMockEvent())

  postRewardClaimedEvent.parameters = new Array()

  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("postId", ethereum.Value.fromUnsignedBigInt(postId))
  )
  postRewardClaimedEvent.parameters.push(
    new ethereum.EventParam("reward", ethereum.Value.fromUnsignedBigInt(reward))
  )

  return postRewardClaimedEvent
}

export function createPostSoldEvent(
  from: Address,
  to: Address,
  amount: BigInt,
  id: BigInt
): PostSold {
  let postSoldEvent = changetype<PostSold>(newMockEvent())

  postSoldEvent.parameters = new Array()

  postSoldEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  postSoldEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return postSoldEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}
