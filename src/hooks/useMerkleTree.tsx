import whitelist from "@/src/configs/whitelist.json";
import keccak256 from "keccak256";
import { MerkleTree } from "merkletreejs";

export interface IuseMerkleTreeProps {}

export default function useMerkleTree() {
  const getMerkleHexProof = async (walletAddress: string) => {
    const leaves = whitelist.map((address) => keccak256(address));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });

    const leaf = keccak256(walletAddress);
    return merkleTree.getHexProof(leaf);
  };

  const getMerkleRoot = () => {
    const leaves = whitelist.map((address) => keccak256(address));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const merkleRoot = merkleTree.getHexRoot();
    return merkleRoot;
  };

  const checkWhiteListUser = async (walletAddress: string) => {
    const leaves = whitelist.map((address) => keccak256(address));
    const merkleTree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    const merkleRoot = merkleTree.getHexRoot();

    const leaf = keccak256(walletAddress);
    const hexProof = merkleTree.getHexProof(leaf);
    return merkleTree.verify(hexProof, leaf, merkleRoot);
  };

  return {
    getMerkleHexProof,
    checkWhiteListUser,
    getMerkleRoot,
  };
}
