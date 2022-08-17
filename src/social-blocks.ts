import {
  AccountCreated as AccountCreatedEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  InfoChanged as InfoChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PostCreated as PostCreatedEvent,
  PostDetailsChanged as PostDetailsChangedEvent,
  PostRewardClaimed as PostRewardClaimedEvent,
  Transfer as TransferEvent,
} from "../generated/SocialBlocks/SocialBlocks";
import {
  Approval,
  ApprovalForAll,
  OwnershipTransferred,
  User,
  Post,
} from "../generated/schema";
import { BigInt, JSONValue } from "@graphprotocol/graph-ts";
import { json } from "@graphprotocol/graph-ts";

export function handleAccountCreated(event: AccountCreatedEvent): void {
  let user = new User(event.params.user.toHexString());
  user.address = event.params.user;
  user.userName = event.params.userName;
  user.displayName = event.params.displayName;
  user.bio = event.params.bio;
  user.image = event.params.image;
  user.createdAt = event.block.timestamp;
  user.rewardClaimed = BigInt.zero();
  user.save();
}

export function handlePostCreated(event: PostCreatedEvent): void {
  let post = new Post(event.params.id.toString());
  post.creator = event.params.sender.toHexString();
  post.owner = event.params.sender.toHexString();
  post.uri = event.params.uri;
  post.metaData = event.params.metadata;
  post.buyStatus = event.params.buyStatus;
  post.sellValue = event.params.sellValue;
  post.createdAt = event.block.timestamp;

  post.transferHistory = [event.params.sender.toHexString()];
  post.save();
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.approved = event.params.approved;
  entity.tokenId = event.params.tokenId;
  entity.save();
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.owner = event.params.owner;
  entity.operator = event.params.operator;
  entity.approved = event.params.approved;
  entity.save();
}

export function handleInfoChanged(event: InfoChangedEvent): void {
  let user = User.load(event.transaction.from.toHexString());
  if (user) {
    user.displayName = event.params.displayName;
    user.bio = event.params.bio;
    user.image = event.params.image;
    user.save();
  }
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;
  entity.save();
}

export function handlePostDetailsChanged(event: PostDetailsChangedEvent): void {
  let post = Post.load(event.params.postId.toString());
  if (post) {
    post.buyStatus = event.params.status;
    post.sellValue = event.params.price;
    post.save();
  }
}

export function handlePostRewardClaimed(event: PostRewardClaimedEvent): void {
  let user = User.load(event.params.user.toHexString());
  if (user) {
    user.rewardClaimed = event.params.reward;
    user.save();
  }
}

export function handleTransfer(event: TransferEvent): void {
  let post = Post.load(event.params.tokenId.toString());
  if (post) {
    post.owner = event.params.to.toHexString();
    post.transferHistory.push(post.owner);
    post.buyStatus = 2;
    post.sellValue = BigInt.fromI32(0);
    let history = post.transferHistory;
    history.push(event.params.to.toHexString());
    post.transferHistory = history;
    post.save();
  }
}

export function handlePostSold(event: TransferEvent): void {}
