import { useState } from "react";
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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as images from "../assets";
import { TableDemo } from "./TableDemo";
export function TabsDemo() {
  const [coins, setCoins] = useState([
    { id: 'doge', name: 'Doge', image: images.dogecoin },
    { id: 'laika', name: 'Laika', image: images.logo },
    { id: 'eth', name: 'Ethereum', image: images.eth },
    { id: 'pepe', name: 'Pepe', image: images.pepe },
    { id: 'sol', name: 'Solana', image: images.sol },
    
  ]);
  const [activeTab, setActiveTab] = useState('bridge');
  const [selectedOption1, setSelectedOption1] = useState(coins[0].id);
  const [selectedOption2, setSelectedOption2] = useState(coins[1].id);

  const getCoinDetails = (id) => coins.find(coin => coin.id === id);

  const swapCoins = () => {
    let temp = selectedOption1;
    setSelectedOption1(selectedOption2);
    setSelectedOption2(temp);
  };

  const coin1Details = getCoinDetails(selectedOption1);
  const coin2Details = getCoinDetails(selectedOption2);

  return (
    <>
      <div className="flex justify-center items-center md:w-[80%] w-[95%]">
        <Tabs defaultValue="bridge" className="w-full" onValueChange={(value) => setActiveTab(value)}>
          <TabsList className="flex items-center gap-3 lg:w-[19%] md:w-[35%] w-[70%] mx-auto py-7 bg-[#0c151f] rounded-full">
            <TabsTrigger
              value="bridge"
              isActive={activeTab === 'bridge'}
              className="rounded-full flex items-center gap-3"
            >
              <img src={images.tabbridge} alt="" className="w-4 h-4" />
             
              <span>Bridge</span>
            </TabsTrigger>
            <TabsTrigger
              value="history"
              isActive={activeTab === 'history'}
              className="rounded-full flex items-center gap-3"
            >
              <img src={images.historytab} alt="" className="w-4 h-4" />
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
                  <img src={images.shiftvector} alt="" className="lg:w-[30%] w-[20%]" />
                  <div className="md:h-[100px] md:w-[100px] h-[70px] w-[70px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={coin2Details.image} alt={coin2Details.name} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 my-4">
                <div className="flex justify-between w-full my-10">

                  <Select value={selectedOption1} onValueChange={(value) => setSelectedOption1(value)}>
                    <SelectTrigger>
                      <SelectValue  />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="doge">
                          <div className="flex items-center gap-2">
                            <img src={coins[0].image} alt={coins[0].name} className="w-4 h-4" />
                            <span>{coins[0].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="laika">
                          <div className="flex items-center gap-2">
                            <img src={coins[1].image} alt={coins[1].name} className="w-4 h-4" />
                            <span>{coins[1].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="eth">
                          <div className="flex items-center gap-2">
                            <img src={coins[2].image} alt={coins[2].name} className="w-4 h-4" />
                            <span>{coins[2].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="pepe">
                          <div className="flex items-center gap-2">
                            <img src={coins[3].image} alt={coins[3].name} className="w-4 h-4" />
                            <span>{coins[3].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="sol">
                          <div className="flex items-center gap-2">
                            <img src={coins[4].image} alt={coins[4].name} className="w-4 h-4" />
                            <span>{coins[4].name}</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>

                  <button className="bg-[#060b10] py-3 px-3 rounded-[5px]" onClick={swapCoins}>
                    <img src={images.swap} alt="" className="w-5 h-5" />
                  </button>

                  <Select value={selectedOption2} onValueChange={(value) => setSelectedOption2(value)}
                  >
                    <SelectTrigger >
                      <SelectValue  />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="doge" >
                          <div className="flex items-center gap-2">
                            <img src={coins[0].image} alt={coins[0].name} className="w-4 h-4" />
                            <span>{coins[0].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="laika" >
                          <div className="flex items-center gap-2">
                            <img src={coins[1].image} alt={coins[1].name} className="w-4 h-4" />
                            <span>{coins[1].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="eth">
                          <div className="flex items-center gap-2">
                            <img src={coins[2].image} alt={coins[2].name} className="w-4 h-4" />
                            <span>{coins[2].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="pepe">
                          <div className="flex items-center gap-2">
                            <img src={coins[3].image} alt={coins[3].name} className="w-4 h-4" />
                            <span>{coins[3].name}</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="sol">
                          <div className="flex items-center gap-2">
                            <img src={coins[4].image} alt={coins[4].name} className="w-4 h-4" />
                            <span>{coins[4].name}</span>
                          </div>
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex justify-between my-20">
                  <Label className="text-dimGrey">You Send</Label>
                  <Label className="text-dimGrey">Balance: 5,000</Label>
                </div>
                <div className="relative my-20">
                  <input type="number" className="w-full bg-[#060b10] appearance-none border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]" placeholder="0.00" />
                  <div className="absolute top-[20%] right-2 flex items-center gap-8">
                    <span className="text-gradient text-sm">MAX</span>
                    <div className="flex items-center gap-2">
                      <img src={coin1Details.image} alt={coin1Details.name} className="w-4 h-4" />
                      <span>{coin1Details.name}</span>
                    </div>
                  </div>
                </div>
                <div className="my-20">
                  <Label className="text-dimGrey">You Receive</Label>
                </div>
                <div className="relative">
                  <input type="number" disabled className="w-full appearance-none bg-[#060b10] border-0 text-sm focus:outline-none py-3 px-3 rounded-[5px]" placeholder="0.00" />
                  <div className="flex items-center gap-3 absolute top-3 right-2">
                    <img src={coin2Details.image} alt={coin2Details.name} className="w-4 h-4" />
                  </div>
                </div>
                <div className="pt-6">
                  <div className="bg-[#0a121b] flex flex-col gap-3 text-white text-sm py-5 px-3 rounded-[5px]">
                    <p>Fees:  0.8%</p>
                    <p>Estimated Received:  15,000 Doge</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <button className="w-full relative bg-[#0064e2] py-3 px-3 text-center rounded-[5px] text-sm">
                  Connect Your Wallet
                  <img src={images.walletbtn} className="w-12 h-8 absolute bottom-10 right-2" alt="" />
                </button>
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
    </>
  );
}
