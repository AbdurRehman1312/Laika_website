import React, { useState } from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function Faqs() {
    // State to manage the open/close state of accordion items
    const [openItem, setOpenItem] = useState(null);

    // Function to toggle the open/close state of an accordion item
    const handleToggleItem = (value) => {
        setOpenItem(openItem === value ? null : value);
    };

    return (
        <div className="md:w-[70%] mx-auto w-full my-20">
            <h2 className="text-white font-semibold text-lg p-6">FAQs</h2>
            <Accordion
                type="single"
                collapsible
                className="w-full text-white p-6 flex flex-col gap-6"
                openItem={openItem}
                onOpenChange={setOpenItem} // Function to update the openItem state
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger isOpen={openItem === 'item-1'} onClick={() => handleToggleItem('item-1')}>
                        What is the Laïka Bridge?
                    </AccordionTrigger>
                    <AccordionContent>
                        The Laïka Bridge is a decentralized protocol that facilitates seamless asset transfers between different blockchain networks. It acts as a bridge between the Laïka network and other compatible blockchains (DOGE, ETH, SOL, etc), enabling users to move their assets across chains efficiently and securely.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger isOpen={openItem === 'item-2'} onClick={() => handleToggleItem('item-2')}>
                        How does the Laïka Bridge work?
                    </AccordionTrigger>
                    <AccordionContent>
                        The Laïka Bridge employs a trustless and decentralized mechanism to facilitate cross-chain transfers. When users initiate a transfer, their assets are locked in the originating blockchain's smart contract. Then, corresponding assets are minted on the destination blockchain, ensuring a one-to-one pegged representation. Once the transfer is completed, the locked assets are released, ensuring a smooth and secure transition.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger isOpen={openItem === 'item-3'} onClick={() => handleToggleItem('item-3')}>
                        What assets can be transferred using the Laika Bridge?
                    </AccordionTrigger>
                    <AccordionContent>
                        Initially, the Laïka Bridge supports the transfer of assets between the Dogecoin blockchain and other compatible blockchains. Users can transfer a variety of tokens and assets, including but not limited to DOGE, wrapped tokens, and native assets on supported chains.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger isOpen={openItem === 'item-4'} onClick={() => handleToggleItem('item-4')}>
                        How long does it take to complete a transfer with the Laika Bridge?
                    </AccordionTrigger>
                    <AccordionContent>
                        The time required to complete a transfer using the Laïka Bridge may vary depending on network congestion and other factors. Generally, transfers are processed within a reasonable timeframe, but users should consider network conditions when planning their transactions.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger isOpen={openItem === 'item-5'} onClick={() => handleToggleItem('item-5')}>
                        Are there any fees associated with using the Laïka Bridge?
                    </AccordionTrigger>
                    <AccordionContent>
                        By using Laïka Bridge, you will only need to pay network fees.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
