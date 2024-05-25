import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as images from "../assets";
import { TableDemo } from "./TableDemo";

export function TabsDemo() {
  const [coins, setCoins] = useState([
    { id: "doge", name: "Doge", image: images.dogecoin },
    { id: "laika", name: "Laika", image: images.logo },
    { id: "eth", name: "Ethereum", image: images.eth },
    { id: "sol", name: "Solana", image: images.sol },
    { id: "dogechain", name: "Dogechain", image: images.dogechain },
    { id: "base", name: "Base", image: images.base },
    { id: "Shibarium", name: "Shibarium", image: images.shib },
    { id: "wen", name: "WEN", image: images.wen },
    { id: "fiwb", name: "FIWB", image: images.fiwb },
    { id: "dbit", name: "DBIT", image: images.dbit },
    { id: "dnld", name: "DNLD", image: images.dnld },
    { id: "wufi", name: "WUFI", image: images.wufi },
    { id: "dogi", name: "DOGI", image: images.dogi },
    { id: "$hub", name: "$HUB", image: images.$hub },
    { id: "dfat", name: "DFAT", image: images.dfat },
    { id: "bonk", name: "BONK", image: images.bonk },
    { id: "slerf", name: "SLERF", image: images.slerf },
    { id: "wif", name: "WIF", image: images.wif },
    { id: "usdt", name: "USDT", image: images.usdt },
    { id: "usdc", name: "USDC", image: images.usdc },
    { id: "pepe", name: "PEPE", image: images.pepe },
    { id: "shib", name: "SHIB", image: images.shib },
    { id: "bonetoken", name: "Bone", image: images.bonetoken },
    { id: "toshi", name: "Toshi", image: images.toshi },
    { id: "brett", name: "Brett", image: images.brett },
    { id: "degen", name: "Degen", image: images.degen },
  ]);

  const [activeTab, setActiveTab] = useState("bridge");
  const [selectedOption1, setSelectedOption1] = useState(coins[0].id);
  const [selectedOption2, setSelectedOption2] = useState(coins[1].id);
  const [tokenSelectOptions, setTokenSelectOptions] = useState([
    { id: "doge", name: "Doge", image: images.dogecoin },
    { id: "wen", name: "WEN", image: images.wen },
    { id: "fiwb", name: "FIWB", image: images.fiwb },
    { id: "dbit", name: "DBIT", image: images.dbit },
    { id: "dnld", name: "DNLD", image: images.dnld },
    { id: "wufi", name: "WUFI", image: images.wufi },
    { id: "dogi", name: "DOGI", image: images.dogi },
    { id: "$hub", name: "$HUB", image: images.$hub },
    { id: "dfat", name: "DFAT", image: images.dfat },
    { id: "bonk", name: "BONK", image: images.bonk },
    { id: "slerf", name: "SLERF", image: images.slerf },
    { id: "wif", name: "WIF", image: images.wif },
    { id: "usdt", name: "USDT", image: images.usdt },
    { id: "usdc", name: "USDC", image: images.usdc },
    { id: "pepe", name: "PEPE", image: images.pepe },
    { id: "shib", name: "SHIB", image: images.shib },
    { id: "bonetoken", name: "Bone", image: images.bonetoken },
    { id: "toshi", name: "Toshi", image: images.toshi },
    { id: "brett", name: "Brett", image: images.brett },
    { id: "degen", name: "Degen", image: images.degen },
  ]);
  const [selectedOption3, setSelectedOption3] = useState(tokenSelectOptions[0].id);
  const [secondSelectOptions, setSecondSelectOptions] = useState(coins);
  const [secondFirstOptions, setFirstSelectOptions] = useState(coins);

  const [showPopup, setShowPopup] = useState(false);

  const getCoinDetails = (id) => coins.find((coin) => coin.id === id);

  useEffect(() => {
    if (selectedOption1 !== "laika") {
      // Set the second select to only show 'Laïka'
      setSecondSelectOptions(coins.filter((coin) => coin.id === "laika"));
      setFirstSelectOptions(
        coins.filter(
          (coin) =>
            coin.id !== "laika" &&
            coin.id !== "wen" &&
            coin.id !== "fiwb" &&
            coin.id !== "dbit" &&
            coin.id !== "dnld" &&
            coin.id !== "wufi" &&
            coin.id !== "dogi" &&
            coin.id !== "$hub" &&
            coin.id !== "dfat" &&
            coin.id !== "bonk" &&
            coin.id !== "slerf" &&
            coin.id !== "wif" &&
            coin.id !== "usdt" &&
            coin.id !== "usdc" &&
            coin.id !== "pepe" &&
            coin.id !== "shib" &&
            coin.id !== "bonetoken" &&
            coin.id !== "toshi" &&
            coin.id !== "brett" &&
            coin.id !== "degen"
        )
      );
    } else {
      // Otherwise, show all options
      setSecondSelectOptions(
        coins.filter(
          (coin) =>
            coin.id !== "laika" &&
            coin.id !== "wen" &&
            coin.id !== "fiwb" &&
            coin.id !== "dbit" &&
            coin.id !== "dnld" &&
            coin.id !== "wufi" &&
            coin.id !== "dogi" &&
            coin.id !== "$hub" &&
            coin.id !== "dfat" &&
            coin.id !== "bonk" &&
            coin.id !== "slerf" &&
            coin.id !== "wif" &&
            coin.id !== "usdt" &&
            coin.id !== "usdc" &&
            coin.id !== "pepe" &&
            coin.id !== "shib" &&
            coin.id !== "bonetoken" &&
            coin.id !== "toshi" &&
            coin.id !== "brett" &&
            coin.id !== "degen"
        )
      );
      setFirstSelectOptions(coins.filter((coin) => coin.id === "laika"));
    }

    let filteredTokens = [];
    if (selectedOption1 === "doge" || selectedOption2 === "doge") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "bonk" &&
          coin.id !== "slerf" &&
          coin.id !== "wif" &&
          coin.id !== "usdt" &&
          coin.id !== "usdc" &&
          coin.id !== "pepe" &&
          coin.id !== "shib" &&
          coin.id !== "bonetoken" &&
          coin.id !== "toshi" &&
          coin.id !== "brett" &&
          coin.id !== "degen"
      );
    } else if (selectedOption1 === "eth" || selectedOption2 === "eth") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "wen" &&
          coin.id !== "fiwb" &&
          coin.id !== "dbit" &&
          coin.id !== "dnld" &&
          coin.id !== "wufi" &&
          coin.id !== "dogi" &&
          coin.id !== "$hub" &&
          coin.id !== "dfat" &&
          coin.id !== "bonk" &&
          coin.id !== "slerf" &&
          coin.id !== "wif" &&
          coin.id !== "doge" &&
          coin.id !== "toshi" &&
          coin.id !== "brett" &&
          coin.id !== "degen"
      );
    } else if (selectedOption1 === "sol" || selectedOption2 === "sol") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "wen" &&
          coin.id !== "fiwb" &&
          coin.id !== "dbit" &&
          coin.id !== "dnld" &&
          coin.id !== "wufi" &&
          coin.id !== "dogi" &&
          coin.id !== "$hub" &&
          coin.id !== "dfat" &&
          coin.id !== "doge" &&
          coin.id !== "toshi" &&
          coin.id !== "brett" &&
          coin.id !== "degen" &&
          coin.id !== "pepe" &&
          coin.id !== "shib" &&
          coin.id !== "bonetoken"
      );
    } else if (selectedOption1 === "dogechain" || selectedOption2 === "dogechain") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "bonk" &&
          coin.id !== "slerf" &&
          coin.id !== "wif" &&
          coin.id !== "usdt" &&
          coin.id !== "usdc" &&
          coin.id !== "wen" &&
          coin.id !== "fiwb" &&
          coin.id !== "dbit" &&
          coin.id !== "dnld" &&
          coin.id !== "wufi" &&
          coin.id !== "dogi" &&
          coin.id !== "$hub" &&
          coin.id !== "dfat" &&
          coin.id !== "toshi" &&
          coin.id !== "brett" &&
          coin.id !== "degen" &&
          coin.id !== "pepe" &&
          coin.id !== "shib" &&
          coin.id !== "bonetoken"
      );
    } else if (selectedOption1 === "base" || selectedOption2 === "base") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "bonk" &&
          coin.id !== "slerf" &&
          coin.id !== "wif" &&
          coin.id !== "usdt" &&
          coin.id !== "usdc" &&
          coin.id !== "wen" &&
          coin.id !== "fiwb" &&
          coin.id !== "dbit" &&
          coin.id !== "dnld" &&
          coin.id !== "wufi" &&
          coin.id !== "dogi" &&
          coin.id !== "$hub" &&
          coin.id !== "dfat" &&
          coin.id !== "doge" &&
          coin.id !== "pepe" &&
          coin.id !== "shib" &&
          coin.id !== "bonetoken"
      );
    } else if (selectedOption1 === "Shibarium" || selectedOption2 === "Shibarium") {
      filteredTokens = coins.filter(
        (coin) =>
          coin.id !== "laika" &&
          coin.id !== "eth" &&
          coin.id !== "sol" &&
          coin.id !== "dogechain" &&
          coin.id !== "base" &&
          coin.id !== "Shibarium" &&
          coin.id !== "bonk" &&
          coin.id !== "slerf" &&
          coin.id !== "wif" &&
          coin.id !== "usdt" &&
          coin.id !== "usdc" &&
          coin.id !== "wen" &&
          coin.id !== "fiwb" &&
          coin.id !== "dbit" &&
          coin.id !== "dnld" &&
          coin.id !== "wufi" &&
          coin.id !== "dogi" &&
          coin.id !== "$hub" &&
          coin.id !== "dfat" &&
          coin.id !== "doge" &&
          coin.id !== "toshi" &&
          coin.id !== "brett" &&
          coin.id !== "degen" &&
          coin.id !== "pepe" &&
          coin.id !== "shib"
      );
    }

    setTokenSelectOptions(filteredTokens);

    if (filteredTokens.length > 0) {
      setSelectedOption3(filteredTokens[0].id);
    }
  }, [selectedOption1, selectedOption2, coins]);

  const [selectedOption4, setSelectedOption4] = useState(
    coins.find((coin) => coin.id === "laika").id
  );

  const swapCoins = () => {
    setSelectedOption1(selectedOption2);
    setSelectedOption2(selectedOption1);
    setSelectedOption3(selectedOption4);
    setSelectedOption4(selectedOption3);
  };

  const renderPopup = () => {
    setShowPopup(true);
  };

  const coin1Details = getCoinDetails(selectedOption1);
  const coin2Details = getCoinDetails(selectedOption2);
  const coin3Details = getCoinDetails(selectedOption4);
  const tokenDetails = getCoinDetails(selectedOption3);

  function closePopup() {
    setShowPopup(false);
    document.body.classList.remove("popup-open");
  }

  return (
    <>
      <div className="flex justify-center items-center md:w-[80%] w-[95%]">
        <Tabs
          defaultValue="bridge"
          className="w-full"
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className="flex items-center gap-3 lg:w-[19%] md:w-[35%] w-[70%] mx-auto py-7 bg-[#0c151f] rounded-full">
            <TabsTrigger
              value="bridge"
              isActive={activeTab === "bridge"}
              className="rounded-full flex items-center gap-3"
            >
              <img
                src={images.tabbridge}
                alt=""
                className={`w-4 h-4 ${
                  activeTab === "bridge" ? `opacity-100` : `opacity-[40%]`
                } `}
              />
              <span>Bridge</span>
            </TabsTrigger>
            <TabsTrigger
              value="history"
              isActive={activeTab === "history"}
              className="rounded-full flex items-center gap-3"
            >
              <img
                src={images.historytab}
                alt=""
                className={`w-4 h-4 ${
                  activeTab === "history" ? `opacity-100` : `opacity-[40%]`
                } `}
              />
              <span>History</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bridge" className="w-[100%]">
            <Card className="lg:w-[45%] w-[100%] mx-auto">
              <CardHeader>
                <CardTitle className="my-10">Bridge</CardTitle>
                <div className="flex justify-center items-center w-full gap-8">
                  <div className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={coin1Details.image} alt={coin1Details.name} />
                  </div>
                  <img
                    src={images.shiftvector}
                    alt=""
                    className="lg:w-[30%] w-[20%]"
                  />
                  <div className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={coin2Details.image} alt={coin2Details.name} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className=" my-4">
                <div className="flex justify-between items-end w-full my-10">
                  <div className="flex flex-col gap-4 w-[40%]">
                    <Label className="text-dimGrey">Selected Network</Label>
                    <Select
                      value={selectedOption1}
                      onValueChange={(value) => setSelectedOption1(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {secondFirstOptions.map((coin) => (
                            <SelectItem key={coin.id} value={coin.id}>
                              <div className="flex items-center gap-2">
                                <img
                                  src={coin.image}
                                  alt={coin.name}
                                  className="w-4 h-4"
                                />
                                <span>{coin.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <button
                    className="bg-[#060b10] py-3 px-3 rounded-[5px]"
                    onClick={swapCoins}
                  >
                    <img src={images.swap} alt="" className="w-5 h-5" />
                  </button>
                  <div className="flex flex-col gap-4 w-[40%]">
                    <Label className="text-dimGrey">Bridge to</Label>
                    <Select
                      value={selectedOption2}
                      onValueChange={(value) => setSelectedOption2(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {secondSelectOptions.map((coin) => (
                            <SelectItem key={coin.id} value={coin.id}>
                              <div className="flex items-center gap-2">
                                <img
                                  src={coin.image}
                                  alt={coin.name}
                                  className="w-4 h-4"
                                />
                                <span>{coin.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Label className="text-dimGrey">Choose your Token</Label>
                  <Select
                    value={selectedOption3}
                    onValueChange={(value) => setSelectedOption3(value)}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {tokenSelectOptions.map((tokens) => (
                          <SelectItem key={tokens.id} value={tokens.id}>
                            <div className="flex items-center gap-2">
                              <img
                                src={tokens.image}
                                alt={tokens.name}
                                className="w-4 h-4"
                              />
                              <span>{tokens.name}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between mt-8">
                  <Label className="text-dimGrey">You Send</Label>
                  <Label className="text-dimGrey">Balance: 5,000</Label>
                </div>
                <div className="relative mt-5">
                  <input
                    type="number"
                    className="w-full bg-[#060b10] appearance-none border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]"
                    placeholder="0.00"
                  />
                  <div className="absolute top-[20%] right-2 flex items-center gap-8">
                    <span className="text-gradient text-sm">MAX</span>
                    <div className="flex items-center gap-2">
                      <img
                        src={tokenDetails.image}
                        alt={tokenDetails.name}
                        className="w-4 h-4"
                      />
                      <span>{tokenDetails.name}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <Label className="text-dimGrey">You Receive</Label>
                </div>
                <div className="relative mt-3">
                  <input
                    type="number"
                    disabled
                    className="w-full appearance-none bg-[#060b10] border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]"
                    placeholder="0.00"
                  />
                  <div className="flex items-center gap-3 absolute top-3 right-2">
                    <img
                      src={coin3Details.image}
                      alt={coin3Details.name}
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col w-full">
                  <p className={`text-gradient text-center text-[100%]`}>
                    coming soon
                  </p>
                  <button
                    className="w-full relative bg-[#0064e2] py-3 px-3 mt-3 text-center rounded-[5px] text-sm opacity-50"
                    onClick={renderPopup}
                    disabled
                  >
                    Connect Your Wallet
                    <img
                      src={images.walletbtn}
                      className="w-12 h-8 absolute bottom-10 right-2"
                      alt=""
                    />
                  </button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="mt-10">
            <div className="bg-[#0f1a27] rounded-[15px] p-5">
              <CardTitle className="my-10">History</CardTitle>
              <TableDemo />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[100]">
          <div className="bg-[#191919] py-6 px-7 z-[300] rounded-[20px]">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-white font-bold text-xl">Wallet Not Found</h2>
              <p className="text-dimGrey text-lg text-center">
                Please install the latest version of WIWW by{" "}
                <a href="" className="text-[#0064e2]">
                  clicking here
                </a>{" "}
                !
              </p>
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span class="sr-only">Loading...</span>
              </div>
              <button
                className="rounded-[30px] bg-white text-black font-extrabold py-2 px-6"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
