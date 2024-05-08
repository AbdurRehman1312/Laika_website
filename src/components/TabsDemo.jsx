import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import * as images from "../assets";
export function TabsDemo() {
  return (
    <>
      <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="w-[100%]">
          <TabsList className="flex items-center gap-3 w-[20%] mx-auto py-3 bg-[#0c151f] rounded-2xl">
            <TabsTrigger
              value="account"
              className="rounded-full flex items-center text-white gap-3"
            >
              <img src={images.tabbridge} alt="" className="w-4 h-4" />
              <span>Bridge</span>
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="rounded-full flex items-center text-white gap-3"
            >
              <img src={images.historytab} alt="" className="w-4 h-4" />
              <span>History</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-[100%]">
            <Card className="w-[35%] mx-auto">
              <CardHeader>
                <CardTitle className="mb-10">Bridge</CardTitle>
                <div className="flex justify-evenly items-center w-full gap-4">
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.dogecoin} alt="" />
                  </div>
                  <img src={images.shiftvector} alt="" className="w-[30%]" />
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.logo} alt="" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password" className="w-[100%]">
          <Card className="w-[35%] mx-auto">
              <CardHeader>
                <CardTitle className="mb-10">Bridge</CardTitle>
                <div className="flex justify-evenly items-center w-full gap-4">
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.dogecoin} alt="" />
                  </div>
                  <img src={images.shiftvector} alt="" className="w-[30%]" />
                  <div className="h-[100px] w-[100px] p-5 bg-[#060b10] rounded-2xl flex justify-center items-center shadow_coin">
                    <img src={images.logo} alt="" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" defaultValue="Pedro Duarte" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" defaultValue="@peduarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
