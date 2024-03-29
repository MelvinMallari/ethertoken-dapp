export const ETHERTOKEN_ADDRESS = '0xeCb7033B97340DfA54D740846C6D24b9f83B6766';

export const ETHERTOKEN_ABI = [
  {
    "name": "Approval",
    "inputs": [
      {
        "type": "address",
        "name": "owner",
        "indexed": true
      },
      {
        "type": "address",
        "name": "spender",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "unit": "wei"
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "Deposited",
    "inputs": [
      {
        "type": "address",
        "name": "source",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "unit": "wei"
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "Transfer",
    "inputs": [
      {
        "type": "address",
        "name": "source",
        "indexed": true
      },
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "unit": "wei"
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "name": "Withdrawn",
    "inputs": [
      {
        "type": "address",
        "name": "to",
        "indexed": true
      },
      {
        "type": "uint256",
        "name": "amount",
        "indexed": false,
        "unit": "wei"
      }
    ],
    "anonymous": false,
    "type": "event"
  },
  {
    "outputs": [],
    "inputs": [
      {
        "type": "address",
        "name": "initial_account"
      },
      {
        "type": "uint256",
        "name": "initial_balance",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "constructor"
  },
  {
    "name": "allowance",
    "outputs": [
      {
        "type": "uint256",
        "name": "out",
        "unit": "wei"
      }
    ],
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      },
      {
        "type": "address",
        "name": "spender"
      }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 815
  },
  {
    "name": "approve",
    "outputs": [
      {
        "type": "bool",
        "name": "out"
      }
    ],
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 37719
  },
  {
    "name": "balanceOf",
    "outputs": [
      {
        "type": "uint256",
        "name": "out",
        "unit": "wei"
      }
    ],
    "inputs": [
      {
        "type": "address",
        "name": "owner"
      }
    ],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 715
  },
  {
    "name": "decreaseApproval",
    "outputs": [],
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 38742
  },
  {
    "name": "deposit",
    "outputs": [],
    "inputs": [],
    "constant": false,
    "payable": true,
    "type": "function",
    "gas": 73656
  },
  {
    "name": "increaseApproval",
    "outputs": [],
    "inputs": [
      {
        "type": "address",
        "name": "spender"
      },
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 39008
  },
  {
    "name": "totalSupply",
    "outputs": [
      {
        "type": "uint256",
        "name": "out",
        "unit": "wei"
      }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 663
  },
  {
    "name": "transfer",
    "outputs": [
      {
        "type": "bool",
        "name": "out"
      }
    ],
    "inputs": [
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 74321
  },
  {
    "name": "transferFrom",
    "outputs": [
      {
        "type": "bool",
        "name": "out"
      }
    ],
    "inputs": [
      {
        "type": "address",
        "name": "source"
      },
      {
        "type": "address",
        "name": "to"
      },
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 110291
  },
  {
    "name": "withdraw",
    "outputs": [],
    "inputs": [
      {
        "type": "uint256",
        "name": "amount",
        "unit": "wei"
      }
    ],
    "constant": false,
    "payable": false,
    "type": "function",
    "gas": 108330
  },
  {
    "name": "decimals",
    "outputs": [
      {
        "type": "uint256",
        "name": "out"
      }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 783
  },
  {
    "name": "symbol",
    "outputs": [
      {
        "type": "string",
        "name": "out"
      }
    ],
    "inputs": [],
    "constant": true,
    "payable": false,
    "type": "function",
    "gas": 2291
  }
]

export const ETHERTOKEN_BYTECODE = "0x740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a05260406109596101403934156100a157600080fd5b602061095960c03960c05160205181106100ba57600080fd5b506101605160016101405160e05260c052604060c0205560126002556003610180527f43455400000000000000000000000000000000000000000000000000000000006101a05261018080600360c052602060c020602082510161012060006002818352015b8261012051602002111561013357610155565b61012051602002850151610120518501555b8151600101808352811415610120575b5050505050506101605160045561094156600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a05263dd62ed3e600051141561010357604060046101403734156100b457600080fd5b60043560205181106100c557600080fd5b5060243560205181106100d757600080fd5b5060006101405160e05260c052604060c0206101605160e05260c052604060c0205460005260206000f3005b63095ea7b36000511415610198576040600461014037341561012457600080fd5b600435602051811061013557600080fd5b506101605160003360e05260c052604060c0206101405160e05260c052604060c02055610160516101805261014051337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610180a3600160005260206000f3005b6370a0823160005114156101e757602060046101403734156101b957600080fd5b60043560205181106101ca57600080fd5b5060016101405160e05260c052604060c0205460005260206000f3005b636618846360005114156102a2576040600461014037341561020857600080fd5b600435602051811061021957600080fd5b5060003360e05260c052604060c0206101405160e05260c052604060c020610160518154101561024857600080fd5b6101605181540381555060003360e05260c052604060c0206101405160e05260c052604060c020546101805261014051337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610180a3005b63d0e30db0600051141561031f5760013360e05260c052604060c02080543482540110156102cf57600080fd5b34815401815550600480543482540110156102e957600080fd5b348154018155503461014052337f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c46020610140a2005b63d73dd62360005114156103dd576040600461014037341561034057600080fd5b600435602051811061035157600080fd5b5060003360e05260c052604060c0206101405160e05260c052604060c020805461016051825401101561038357600080fd5b6101605181540181555060003360e05260c052604060c0206101405160e05260c052604060c020546101805261014051337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9256020610180a3005b6318160ddd60005114156104035734156103f657600080fd5b60045460005260206000f3005b63a9059cbb60005114156104de576040600461014037341561042457600080fd5b600435602051811061043557600080fd5b506000610140511861044657600080fd5b60013360e05260c052604060c020610160518154101561046557600080fd5b6101605181540381555060016101405160e05260c052604060c020805461016051825401101561049457600080fd5b61016051815401815550610160516101805261014051337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef6020610180a3600160005260206000f3005b6323b872dd600051141561061957606060046101403734156104ff57600080fd5b600435602051811061051057600080fd5b50602435602051811061052257600080fd5b506000610140511861053357600080fd5b6000610160511861054357600080fd5b60016101405160e05260c052604060c020610180518154101561056557600080fd5b6101805181540381555060016101605160e05260c052604060c020805461018051825401101561059457600080fd5b6101805181540181555060006101405160e05260c052604060c0203360e05260c052604060c02061018051815410156105cc57600080fd5b61018051815403815550610180516101a05261016051610140517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60206101a0a3600160005260206000f3005b632e1a7d4d60005114156106cb576020600461014037341561063a57600080fd5b60013360e05260c052604060c020610140518154101561065957600080fd5b610140518154038155506004610140518154101561067657600080fd5b61014051815403815550600060006000600061014051336000f161069957600080fd5b6101405161016052337f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d56020610160a2005b63313ce56760005114156106f15734156106e457600080fd5b60025460005260206000f3005b6395d89b4160005114156107d457341561070a57600080fd5b60038060c052602060c020610180602082540161012060006002818352015b8261012051602002111561073c5761075e565b61012051850154610120516020028501525b8151600101808352811415610729575b5050505050506101805160206001820306601f82010390506101e0610180516003818352015b826101e0511115610794576107b0565b60006101e0516101a001535b8151600101808352811415610784575b5050506020610160526040610180510160206001820306601f8201039050610160f3005b60006000fd5b61016761094103610167600039610167610941036000f3"
