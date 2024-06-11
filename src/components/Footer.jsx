import React from "react";
import * as images from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLink = [
    {
      id: "/",
      title: "Home",
    },
    {
      id: "/sputnik", // Directly specifying the URL of the Sputnik page
      title: "Sputnik 1",
    },
    // Disabled Docs and Bridge links
    {
      id: "https://litepaper.laikachain.dog/",
      title: "Litepaper",
      comingSoon: false, // Add a flag to indicate "coming soon"
    },
    {
      id: "/bridge",
      title: "Bridge",
      comingSoon: false, // Add a flag to indicate "coming soon"
    },
  ];

  const community = [
    {
      href: "http://twitter.com/Laika_Layer2/",
      title: "Twitter",
    },
    {
      href: "https://discord.gg/laika-layer2",
      title: "Discord",
    },
    {
      href: "https://medium.com/@laika-layer2",
      title: "Medium",
    },
  ];
  const testnet = [
    {
      href: "http://laikachain.dog/faucets",
      title: "Faucet",
    },
    {
      href: "https://testnet.laikachain.dog/",
      title: "Explorer",
    },
  ];

  // Function to scroll the page to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const addmeta = async () => {
    console.log('addmeta');
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
      const ethereum = window.ethereum;

      // Request permission to connect MetaMask
      ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          // Add your custom network details
          const customNetwork = {
            chainId: '0x10ad', // Chain ID of your custom network
            chainName: 'Laika Testnet', // Name of your custom network
            nativeCurrency: {
              name: 'Doge',
              symbol: 'DOGE',
              decimals: 18,
            },
            rpcUrls: ['https://testnetrpc1.laikachain.dog'], // RPC endpoint of your custom network
            blockExplorerUrls: ['https://testnet.laikachain.dog'], // Block explorer URL of your custom network
          };

          // Add the custom network to MetaMask
          ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [customNetwork],
          })
            .then(() => {
              console.log('Custom network added to MetaMask');
            })
            .catch((error) => {
              console.error('Error adding custom network to MetaMask:', error);
            });
        })
        .catch((error) => {
          console.error('Error requesting MetaMask access:', error);
        });
    } else {
      console.error('MetaMask is not installed');
    }

  }

  return (
    <footer className="my-10">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row ">
        <div className="flex flex-col gap-2 ">
          <div className="w-[53%] md:w-[31%] lg:w-[23%] xl:w-[19%]">
            <img src={images.footerLogo} alt="logo" className="w-full" />
          </div>
          <p className="text-dimGrey text-[1rem] w-full md:w-72 md:ml-3 lg:ml-4">
            Pioneering the Infrastructure that elevates memecoins to new
            height.
          </p>
        </div>
        <div className="lg:mx-20">
          <button onClick={addmeta} className="font-normal flex justify-center gap-2 items-center cursor-pointer border-2 border-blue-500 rounded-[5px] px-7 py-1 text-[0.8rem] text-white text-nowrap " type="button">
            <img src={images.metamask} alt="" className="w-6" />
            Add to Metamask</button>
        </div>
        <div className="grid grid-cols-3 gap-18 lg:gap-20 xl:gap-20">
          <div className="flex flex-col md:items-end">
            <h1 className="text-[1rem] text-white font-medium text-nowrap">
              Testnet
            </h1>
            <div className="mt-4 md:mt-9">
              <ul className="list-none md:text-right">
                {testnet.map((nav) => (
                  <li
                    key={nav.href}
                    className="font-normal cursor-pointer text-[0.8rem]  mb-4 text-dimGrey text-nowrap"
                  >
                    {nav.href ? (
                      <Link to={nav.href} onClick={scrollToTop}>
                        {nav.title}
                      </Link>
                    ) : (
                      <span>
                        {nav.comingSoon && (
                          <p className="text-gradient text-[100%]">Coming soon</p>
                        )}
                        {nav.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <h1 className="text-[1rem] text-white font-medium text-nowrap">
              Quick Links
            </h1>
            <div className="mt-4 md:mt-9">
              <ul className="list-none md:text-right">
                {quickLink.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[0.8rem]  mb-4 text-dimGrey text-nowrap"
                  >
                    {/* Render link only if id is provided */}
                    {nav.id ? (
                      <Link to={nav.id} onClick={scrollToTop}>
                        {nav.title}
                      </Link>
                    ) : (
                      <span>
                        {nav.comingSoon && (
                          <p className="text-gradient text-[100%]">Coming soon</p>
                        )}
                        {nav.title}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:items-end">
            <h1 className="text-[1rem] text-white font-medium">Community</h1>
            <div className="mt-4 md:mt-9">
              <ul className="list-none md:text-right">
                {community.map((nav) => (
                  <li
                    key={nav.title}
                    className="font-normal cursor-pointer text-[0.8rem]  mb-4 text-dimGrey text-nowrap"
                  >
                    <a href={nav.href} target="_blank">
                      {nav.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
